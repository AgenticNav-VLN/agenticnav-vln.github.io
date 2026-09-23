"""Check both generated sites, original-to-web timing, anonymity, and media decode."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, subprocess, hashlib, re, base64
from PIL import Image

SITE=Path(__file__).resolve().parents[1]
ANON=SITE.parent/'agenticnav-anonymous-site/docs'
REPORT=SITE.parent/'local_data/website-redesign/validation.json'

class Document(HTMLParser):
    def __init__(self): super().__init__(); self.refs=[]; self.ids=[]
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        for key in ('src','href','poster','data-src'):
            if a.get(key):self.refs.append(a[key])

def check():
    report={'sites':{},'media':[]}
    demos=json.loads((SITE/'static/js/demos.json').read_text())
    assert [d['id'] for d in demos]==['long-range','building-22','kitchen','trash-bin','table-tennis']
    for root in (SITE,ANON):
        page=(root/'index.html').read_text(encoding='utf-8-sig'); doc=Document(); doc.feed(page)
        assert len(doc.ids)==len(set(doc.ids)), 'Duplicate HTML id'
        refs=doc.refs+[d[k] for d in demos for k in ('src','poster')]
        for ref in refs:
            parsed=urlsplit(ref)
            if parsed.scheme: continue
            if parsed.path: assert (root/unquote(parsed.path)).is_file(), f'Missing {root.name}/{ref}'
            if parsed.fragment and not parsed.path: assert parsed.fragment in doc.ids, f'Missing anchor {ref}'
        embedded=json.loads(page.split('<script type="application/json" id="demo-data">')[1].split('</script>')[0])
        assert embedded==demos
        if root==ANON:
            for p in [root/'index.html',root/'static/js/index.js',root/'static/js/demos.json',root/'static/css/index.css']:
                content=p.read_text(encoding='utf-8-sig')
                assert not re.search(r'Eas1L|liyij|Yijian|Changze|Hantian|Jiaying|Jiyuan|Tong Qin|Ming Yang|Shanghai|Jiao Tong|Yinwang|arxiv|agenticnav-vln\.github|C:\\',content,re.I),p
            assert not any(urlsplit(ref).scheme in ('http','https') for ref in refs), 'External anonymous reference'
        subprocess.run(['node','--check',str(root/'static/js/index.js')],check=True)
        for p in (root/'static/images/web').glob('*'):
            with Image.open(p) as im: assert not im.getexif(),p
        report['sites']['anonymous' if root==ANON else 'public']={'references':len(refs),'uniqueIds':len(doc.ids),'ok':True}
    for d in demos:
        assert abs(d['originalDuration']/10-d['duration'])<1e-8
        for phrase in d['phrases']:assert 0<=phrase['seek']<d['duration']
        for event in d['events']:assert 0<=event['start']<event['end']<=d['duration']+1e-5
        for r in d['regions']:
            assert abs(r['keyframes'][0]['time']-r['start'])<1e-7
            assert abs(r['keyframes'][-1]['time']-r['end'])<1e-7
        script=(SITE/d['src']).with_suffix('.media.js')
        body=script.read_text(encoding='utf-8')
        transport=json.loads(body.split('{detail:',1)[1].rsplit('}));',1)[0])
        assert transport['id']==d['id']
        assert base64.b64decode(transport['data'])==(SITE/d['src']).read_bytes()
        assert not re.search(r'Eas1L|liyij|AgenticNav-VLN|arxiv.org',body)
        assert script.read_bytes()==(ANON/script.relative_to(SITE)).read_bytes()
    for p in (SITE/'static/videos/web').glob('*.mp4'):
        metadata=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(p)],text=True))
        streams=metadata['streams']; assert len(streams)==1 and streams[0]['codec_type']=='video'
        stream=streams[0]; assert stream['codec_name']=='h264' and stream['pix_fmt']=='yuv420p'
        assert (stream['width'],stream['height'])==(1280,720)
        expected=25 if p.stem=='hero' else next(d['duration'] for d in demos if d['id']==p.stem)
        actual=float(metadata['format']['duration']); assert abs(actual-expected)<.05,(p,actual,expected)
        assert not any(k in metadata['format'].get('tags',{}) for k in ['artist','author','comment','location','title'])
        digest=hashlib.sha256(p.read_bytes()).hexdigest(); mirror=ANON/p.relative_to(SITE)
        assert digest==hashlib.sha256(mirror.read_bytes()).hexdigest()
        decoded=subprocess.run(['ffmpeg','-v','error','-i',str(p),'-f','null','-'],capture_output=True,text=True)
        assert decoded.returncode==0 and not decoded.stderr.strip(),(p,decoded.stderr)
        report['media'].append({'file':p.name,'seconds':actual,'bytes':p.stat().st_size,'sha256':digest,'fullDecode':'passed','mirrorMatches':True})
    REPORT.write_text(json.dumps(report,indent=2),encoding='utf-8')
    print(json.dumps(report,indent=2))

if __name__=='__main__':check()
