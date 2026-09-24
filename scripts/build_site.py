"""Refresh the public page from research data and mirror it anonymously."""
from pathlib import Path
import shutil, fitz
SITE=Path(__file__).resolve().parents[1]
ANON=SITE.parent/'agenticnav-anonymous-site/docs'
IMAGES=SITE/'static/images/web'
IMAGES.mkdir(parents=True,exist_ok=True)
for document, picks in [('intro',[(19,'action-scene'),(31,'depth-scene'),(38,'memory-map'),(37,'memory-view')]),('method',[(32,'observation'),(37,'depth-observation'),(38,'depth-map')])]:
    pdf=fitz.open(SITE.parent/f'icra_paper_agenticnav/paper/figs/{document}_crop.pdf')
    from PIL import Image
    import io
    for xref,name in picks:
        Image.open(io.BytesIO(pdf.extract_image(xref)['image'])).convert('RGB').save(IMAGES/f'{name}.jpg',quality=94)
    pdf[0].get_pixmap(matrix=fitz.Matrix(2,2)).save(str(IMAGES/f'paper-{document}.png'))

def replace_between(page, start, end, replacement):
    before, found_start, remaining = page.partition(start)
    if not found_start:
        raise ValueError(f'Missing page marker: {start}')
    _, found_end, after = remaining.partition(end)
    if not found_end:
        raise ValueError(f'Missing page marker: {end}')
    return before + start + replacement + end + after


def build():
    import base64, json
    source=(SITE.parent/'icra_paper_agenticnav/paper/root.tex').read_text(encoding='utf-8')
    abstract=source.split('\\begin{abstract}')[1].split('\\end{abstract}')[0].split('Project website:')[0].strip().replace('\\textbf{AgenticNav}','AgenticNav').replace('\\%','%')
    data=(SITE/'static/js/demos.json').read_text(encoding='utf-8')
    # Anonymous GitHub's opaque-origin sandbox blocks fetch and byte-range seeks.
    # A classic script is an allowed transport for a user-requested local MP4.
    for demo in json.loads(data):
        media=SITE/demo['src']
        raw=media.read_bytes(); size=1572864
        chunks=[raw[i:i+size] for i in range(0,len(raw),size)]
        def write_transport(path,payload):
            path.write_text('window.dispatchEvent(new CustomEvent("agenticnav-media",{detail:'+json.dumps(payload,separators=(',',':'))+'}));\n',encoding='utf-8')
        write_transport(media.with_suffix('.media.js'),{'id':demo['id'],'chunks':len(chunks)})
        for i,chunk in enumerate(chunks):
            write_transport(media.with_suffix(f'.media-{i}.js'),{'id':demo['id'],'index':i,'data':base64.b64encode(chunk).decode('ascii')})
    public_page=(SITE/'index.html').read_text(encoding='utf-8')
    public_page=replace_between(public_page,'<details><summary>Read the abstract</summary><p>','</p></details>',abstract)
    public_page=replace_between(public_page,'<script type="application/json" id="demo-data">','</script>',data)
    if 'class="authors"' in public_page or 'class="affiliations"' in public_page or 'class="citation' in public_page:
        raise ValueError('Remove author and affiliation blocks before building')
    anonymous_page=public_page
    replacements=(
        ('<link rel="canonical" href="https://agenticnav-vln.github.io/">','<meta name="robots" content="noindex,nofollow,noarchive"><meta name="referrer" content="no-referrer">'),
        ('<a class="button button-glass" href="https://arxiv.org/abs/2606.10577" target="_blank" rel="noopener">Read the paper ↗</a>',''),
        ('<a class="text-button" href="https://arxiv.org/abs/2606.10577" target="_blank" rel="noopener">Read the paper ↗</a>',''),
        ('Vision-and-language navigation · 2026','Anonymous research project · 2026'),
    )
    for old,new in replacements:
        if old not in anonymous_page:
            raise ValueError(f'Missing anonymous replacement: {old}')
        anonymous_page=anonymous_page.replace(old,new)
    (SITE/'index.html').write_text(public_page,encoding='utf-8')
    (ANON/'index.html').write_text(anonymous_page,encoding='utf-8')
    for rel in ['static/css/index.css','static/js/index.js','static/js/demos.json','static/js/tool-scene.js','static/css/tool-scene.css','static/js/THREE-LICENSE.txt']:
        (ANON/rel).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(SITE/rel,ANON/rel)
    for rel in ['static/images/web','static/videos/web']: shutil.copytree(SITE/rel,ANON/rel,dirs_exist_ok=True)
    print('Built public and anonymous sites with matching research content.')

if __name__=='__main__':build()
