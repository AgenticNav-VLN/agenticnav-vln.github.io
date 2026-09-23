"""Build matching public and anonymous pages from one research-content template."""
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

TEMPLATE='''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AgenticNav — Navigation through action, depth &amp; memory</title>
<meta name="description" content="Zero-shot vision-and-language navigation as a tool-calling harness. Explore five real-world demonstrations and an interactive explanation of AgenticNav.">
<meta name="theme-color" content="#14345b">__META__
<link rel="stylesheet" href="static/css/index.css?v=20260923-tools-1"><link rel="stylesheet" href="static/css/tool-scene.css?v=20260923-tools-1"><script defer src="static/js/index.js?v=20260923-tools-1"></script><script defer src="static/js/tool-scene.js?v=20260923-tools-1"></script></head>
<body><a class="skip-link" href="#demos">Skip to demonstrations</a>
<header class="site-header"><a class="wordmark" href="#top">AgenticNav<span>.</span></a><nav aria-label="Main navigation"><a href="#demos">Demos</a><a href="#idea">The idea</a><a href="#method">How it works</a><a href="#paper">Research</a></nav><a class="nav-cta" href="#demos">Explore <span aria-hidden="true">↗</span></a></header>
<main><section class="hero" id="top"><video id="hero-video" muted loop playsinline preload="none" poster="static/images/web/hero.jpg" aria-label="Fast-forwarded real-world navigation highlights"><source data-src="static/videos/web/hero.mp4" type="video/mp4"></video><div class="hero-shade"></div>
<div class="hero-content"><p class="eyebrow hero-eyebrow">Vision. Language. Action.</p><h1>AgenticNav<span>.</span></h1><p class="hero-subtitle">Zero-Shot Vision-and-Language Navigation<br>as a Tool-Calling Harness</p>__AUTHORS__
<div class="hero-actions"><a class="button button-white" href="#demos">See it navigate <span aria-hidden="true">↘</span></a>__PAPERLINK__<a class="button button-glass" href="#method">Explore the method</a></div></div>
<div class="hero-bottom"><p><span class="status-dot"></span>Real-world navigation <span class="hero-speed">10× playback</span></p><button id="hero-toggle" type="button" aria-label="Play background video">Play background <span aria-hidden="true">▶</span></button></div></section>
<section class="lead container"><p>Follow the instruction.<br><span>Choose the tools.</span></p><div>AgenticNav connects a vision-language model to the world through three callable tools: act on a visible pixel, query a distance, or revisit a past observation. No navigation-policy training required.</div></section>
<section class="demos-section container" id="demos"><div class="section-heading"><div><p class="eyebrow">On the robot</p><h2>From words to wayfinding.</h2></div><p>Five real-world runs. Click an instruction phrase to jump to that moment in the journey.</p></div>
<div class="demo-layout"><div class="demo-picker" role="group" aria-label="Choose a demonstration"></div><article class="demo-stage" aria-labelledby="demo-title"><div class="demo-meta"><span id="demo-category"></span><span>Full experiment · 10× speed</span></div><h3 id="demo-title"></h3><div class="instruction-label"><span>Instruction</span><span>Click a phrase to seek <span aria-hidden="true">↗</span></span></div><div id="instruction" class="instruction" aria-label="Interactive navigation instruction"></div>
<div class="player" id="player"><video id="demo-video" playsinline preload="none" aria-label="Selected navigation demonstration"></video><svg class="tracking-overlay" viewBox="0 0 1920 1080" aria-hidden="true"><rect id="tracking-box" hidden rx="12" fill="none" stroke="#3975e9" stroke-width="8"/></svg><div class="recall-overlay" hidden><p id="recall-title"></p><img src="static/images/web/remembered-sign.jpg" alt="Previously observed sign recalled by the navigation model"></div><button class="big-play" id="big-play" aria-label="Play demonstration"><span aria-hidden="true">▶</span></button><span class="video-badge">10×</span><div class="player-controls"><button id="play-toggle" aria-label="Play demonstration"><span aria-hidden="true">▶</span></button><span id="elapsed">0:00</span><input id="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Video progress"><span id="duration">0:00</span><button id="fullscreen" aria-label="Enter fullscreen"><span aria-hidden="true">⛶</span></button></div></div>
<div class="demo-footer"><p id="demo-status" role="status">Select a phrase or press play.</p><a id="video-download" href="static/videos/web/long-range.mp4" download>Open video <span aria-hidden="true">↗</span></a></div><p class="media-error" id="media-error" hidden>Video could not load. <button id="retry-video">Try again</button> or open the video directly.</p></article></div><noscript><p>Enable JavaScript to use the interactive player, or open the demonstrations directly:</p><p><a href="static/videos/web/long-range.mp4">Long-range navigation</a> · <a href="static/videos/web/building-22.mp4">Building 22</a> · <a href="static/videos/web/kitchen.mp4">Kitchen</a> · <a href="static/videos/web/trash-bin.mp4">Trash bin</a> · <a href="static/videos/web/table-tennis.mp4">Table tennis</a></p></noscript></section>
<section class="idea-section" id="idea"><div class="container"><div class="section-heading"><div><p class="eyebrow">The idea</p><h2>Give the model<br>the right tools.</h2></div><p>More freedom to act. Precise spatial evidence. The right memory at the right time.</p></div>
<div class="idea-tabs" role="tablist" aria-label="Explore the three tools"><button role="tab" id="tab-action" aria-selected="true" aria-controls="idea-panel" data-idea="action">Action <span>Choose a pixel</span></button><button role="tab" id="tab-depth" aria-selected="false" tabindex="-1" aria-controls="idea-panel" data-idea="depth">Depth <span>Ask for a distance</span></button><button role="tab" id="tab-recall" aria-selected="false" tabindex="-1" aria-controls="idea-panel" data-idea="recall">Memory <span>Recall what matters</span></button></div>
<div id="idea-panel" class="idea-panel" role="tabpanel" aria-labelledby="tab-action"><div class="idea-visual" id="idea-visual"></div><div class="idea-explanation"><p class="eyebrow" id="idea-kicker"></p><h3 id="idea-title"></h3><p id="idea-description"></p><button class="text-button" id="idea-action">Show the action <span aria-hidden="true">→</span></button><p class="idea-result" id="idea-result" aria-live="polite"></p></div></div><a class="figure-link" href="static/images/web/paper-intro.png" target="_blank" rel="noopener">View the original introduction figure <span aria-hidden="true">↗</span></a></div></section>
<section class="method-section container" id="method"><div class="section-heading"><div><p class="eyebrow">Inside AgenticNav</p><h2>Reason. Call. Observe.</h2></div><p>The model chooses which tool it needs. Follow one illustrative cycle, or select any stage to explore it.</p></div>
<div class="method-controls" role="group" aria-label="Method walkthrough stages"><button data-step="0" aria-pressed="true">Observe</button><button data-step="1" aria-pressed="false">Query depth</button><button data-step="2" aria-pressed="false">Recall</button><button data-step="3" aria-pressed="false">Act</button><button data-step="4" aria-pressed="false">Update</button><button id="method-play" class="method-play">Play walkthrough <span aria-hidden="true">▶</span></button></div>
<div class="method-diagram" data-step="0"><svg class="connections" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="currentColor"/></marker></defs><path data-connection="0" d="M220 260 H382"/><path data-connection="1" d="M540 195 V105 H720"/><path data-connection="2" d="M540 330 V420 H720"/><path data-connection="3" d="M615 260 H720"/><path data-connection="4" d="M840 310 V480 H130 V340"/></svg>
<div class="diagram-node observation-node"><span class="node-label">Current observation</span><img src="static/images/web/observation.jpg" alt="Robot's current RGB camera observation" loading="lazy"><span class="node-caption">Instruction + RGB + map</span></div>
<div class="diagram-node core-node"><span class="core-symbol" aria-hidden="true">✳</span><h3>Vision-language<br>model</h3><p>Reason over the task.<br>Choose the next tool.</p></div>
<button class="diagram-node tool-node depth-node" data-node="1"><span class="node-label">Depth tool</span><strong>Query selected pixels</strong><span class="depth-points" aria-hidden="true"><i></i><i></i><i></i></span><span class="node-caption">Pixel coordinates → metric distance</span></button>
<button class="diagram-node tool-node action-node" data-node="3"><span class="node-label">Action tool</span><strong>Select a target pixel</strong><span class="action-process">Safety check <span aria-hidden="true">→</span> Execute</span><span class="node-caption">Reselect if the motion is unsafe</span></button>
<button class="diagram-node tool-node recall-node" data-node="2"><span class="node-label">Recall tool</span><strong>Revisit a past view</strong><span class="memory-strip"><img src="static/images/web/memory-map.jpg" alt="Compact trajectory map" loading="lazy"><span aria-hidden="true">→</span><img src="static/images/web/memory-view.jpg" alt="Retrieved past observation" loading="lazy"></span><span class="node-caption">Retrieve only the visual evidence needed</span></button></div>
<div class="method-caption"><span id="method-count">01 / 05</span><div><h3 id="method-title">Start with the current observation.</h3><p id="method-description">The model receives the instruction, RGB views, a compact map, and recent reasoning and action history.</p></div><button id="method-next" class="text-button">Next step <span aria-hidden="true">→</span></button></div><a class="figure-link" href="static/images/web/paper-method.png" target="_blank" rel="noopener">View the original architecture figure <span aria-hidden="true">↗</span></a></section>
<section class="research-section" id="paper"><div class="container research-grid"><div><p class="eyebrow">The research</p><h2>A navigation harness.<br>Zero-shot by design.</h2><p>AgenticNav exposes action, depth, and memory as callable tools for navigation in continuous environments. It lets the model request evidence where it matters, select visible targets directly, and retrieve observations without keeping every image in context.</p>__RESEARCHLINK__</div><div class="research-results"><div><strong>76<span>%</span></strong><p>Success rate</p></div><div><strong>66.50<span>%</span></strong><p>Success weighted by path length</p></div><p class="result-context">R2R-CE validation unseen · shared 100-episode evaluation · Gemini-3.7-Flash. Values from the current manuscript.</p><details><summary>Read the abstract</summary><p>__ABSTRACT__</p></details></div></div></section>
__CITATION__</main><footer class="container"><a class="wordmark" href="#top">AgenticNav<span>.</span></a><p>__FOOTER__</p><a href="#top">Back to top ↑</a></footer><script type="application/json" id="demo-data">__DEMOS__</script></body></html>'''

def build():
    import re, base64, json
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
    for anonymous,dest in [(False,SITE),(True,ANON)]:
        values={
          'META':'<meta name="robots" content="noindex,nofollow,noarchive"><meta name="referrer" content="no-referrer">' if anonymous else '<link rel="canonical" href="https://agenticnav-vln.github.io/">',
          'AUTHORS':'<p class="authors">Anonymous authors · ICRA 2027 submission</p>' if anonymous else '<p class="authors">Yijian Li · Changze Li · Hantian Shi · Jiaying Luo<br>Jiyuan Cai · Ming Yang · Tong Qin</p><p class="affiliations">Shanghai Jiao Tong University · Yinwang Intelligent Technology</p>',
          'PAPERLINK':'' if anonymous else '<a class="button button-glass" href="https://arxiv.org/abs/2606.10577" target="_blank" rel="noopener">Read the paper ↗</a>',
          'RESEARCHLINK':'<p class="submission-note">Anonymous submission · ICRA 2027</p>' if anonymous else '<a class="text-button" href="https://arxiv.org/abs/2606.10577" target="_blank" rel="noopener">Read the paper ↗</a>',
          'FOOTER':'Anonymous research project · 2026' if anonymous else 'Vision-and-language navigation · 2026',
          'ABSTRACT':abstract,'DEMOS':data,
          'CITATION':'' if anonymous else '<section class="citation container"><details><summary>Cite this work</summary><pre>@article{li2026agenticnav,\n  title={AgenticNav: Zero-Shot Vision-and-Language Navigation as a Tool-Calling Harness},\n  author={Li, Yijian and Li, Changze and Shi, Hantian and Luo, Jiaying and Cai, Jiyuan and Yang, Ming and Qin, Tong},\n  journal={arXiv preprint arXiv:2606.10577},\n  year={2026}\n}</pre></details></section>'
        }
        page=TEMPLATE
        for key,value in values.items(): page=page.replace('__'+key+'__',value)
        (dest/'index.html').write_text(page,encoding='utf-8')
    for rel in ['static/css/index.css','static/js/index.js','static/js/demos.json','static/js/tool-scene.js','static/css/tool-scene.css','static/js/THREE-LICENSE.txt']:
        (ANON/rel).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(SITE/rel,ANON/rel)
    for rel in ['static/images/web','static/videos/web']: shutil.copytree(SITE/rel,ANON/rel,dirs_exist_ok=True)
    print('Built public and anonymous sites with matching research content.')

if __name__=='__main__':build()
