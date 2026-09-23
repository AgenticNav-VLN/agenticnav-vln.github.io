"""Export the five approved experiments; preserve originals and record source timing."""
from pathlib import Path
import argparse, json, subprocess, hashlib

SITE = Path(__file__).resolve().parents[1]
WORKSPACE = SITE.parent
PAPER = WORKSPACE / 'icra_paper_agenticnav'
OUT = SITE / 'static' / 'videos' / 'web'
REPORTS = WORKSPACE / 'local_data' / 'website-redesign'
ITEMS = [
    ('long-range', 'long_range_highlighted', 'From the lobby to the main gate', 'Long-horizon navigation', 100),
    ('building-22', 'building21_fixed', 'Read a sign. Remember the way.', 'Visual memory', 185),
    ('kitchen', 'fridge_continuous', 'Through the corridor to the kitchen', 'Multi-step instruction', 100),
    ('trash-bin', 'trash_bin_fixed', 'Find the trash bin', 'Object navigation', 60),
    ('table-tennis', 'table_tennis_fixed', 'Find the table tennis table', 'Object navigation', 96),
]

def run(args, name):
    with (REPORTS / (name + '.log')).open('w', encoding='utf-8') as log:
        result = subprocess.run(args, stdout=log, stderr=subprocess.STDOUT)
    if result.returncode: raise RuntimeError(f'{name} failed; see log')

def encode(args, path, name):
    if path.exists(): return
    run(['ffmpeg','-hide_banner','-loglevel','warning', '-threads','4', *args,
         '-an','-c:v','libx264','-preset','slow','-crf','26','-maxrate','2200k','-bufsize','4400k','-threads','4',
         '-pix_fmt','yuv420p','-g','30','-keyint_min','30','-sc_threshold','0',
         '-movflags','+faststart','-map_metadata','-1','-n',str(path)],name)

def main():
    OUT.mkdir(parents=True, exist_ok=True); REPORTS.mkdir(parents=True, exist_ok=True)
    image_dir = SITE / 'static/images/web'; image_dir.mkdir(parents=True, exist_ok=True)
    demos=[]
    for id, config_name, title, category, poster_at in ITEMS:
        c=json.loads((PAPER / f'video/real_experiment_video_pipeline/configs/{config_name}.json').read_text(encoding='utf-8'))
        timeline=c['timeline']; start=timeline['primary_start_s']; duration=timeline['duration_s']; inset=c['inputs']['insets'][0]
        primary=PAPER/c['inputs']['primary']['path']; bev=PAPER/inset['path']
        if id in ('kitchen','building-22'):
            source_name='fridge' if id=='kitchen' else 'building'
            primary=PAPER/f'video/icra2027_submission/work/anonymization/{source_name}_source_anonymized.mp4'
        target=OUT/f'{id}.mp4'
        # Sample on the original clock before scaling; preserve the recorded 10x temporal relation.
        filters='[0:v]setpts=(PTS-STARTPTS)/10,fps=30,scale=1280:720,setsar=1[main];[1:v]setpts=(PTS-STARTPTS)/10,fps=30,scale=240:240,setsar=1,pad=246:246:3:3:color=white[map];[main][map]overlay=21:453:shortest=1[v]'
        print('Exporting', id, flush=True)
        encode(['-ss',str(start),'-t',str(duration),'-i',str(primary),'-ss',str(start+inset['source_offset_s']),'-t',str(duration),'-i',str(bev),'-filter_complex_threads','2','-filter_complex',filters,'-map','[v]','-t',str(duration/10)], target, id)
        poster=image_dir/f'{id}.jpg'
        if not poster.exists(): run(['ffmpeg','-v','error','-ss',str(poster_at/10),'-i',str(target),'-frames:v','1','-q:v','3','-n',str(poster)],id+'-poster')
        instruction=c['instruction']; schedule=instruction
        if 'schedule_file' in instruction: schedule=json.loads((PAPER/instruction['schedule_file']).read_text(encoding='utf-8'))
        phrases=[]; events=[]
        if 'stages' in schedule:
            last=0
            for st in schedule['stages']:
                phrases.append({'text':schedule['lines'][st['line']][st['phrase']], 'seek':last/10})
                events.append({'phrase':len(phrases)-1,'start':last/10,'end':st['end_s']/10})
                last=st['end_s']
        elif id=='building-22':
            phrases=[{'text':'Follow the','seek':0},{'text':'sign','seek':55.885973198/10},{'text':'to find and stop at the door of','seek':15.9},{'text':'Building 22.','seek':18}]
            events=[{'phrase':1,'start':5.5885973198,'end':6.3271973198},{'phrase':1,'start':11.5,'end':15.9,'color':'recall'},{'phrase':3,'start':18,'end':20.1}]
        else:
            noun='trash bin' if id=='trash-bin' else 'table tennis table'
            arrival=c['region_highlights'][0]['start_s']/10
            phrases=[{'text':'Find and stop at the','seek':0},{'text':noun+'.','seek':arrival}]
            events=[{'phrase':1,'start':0,'end':duration/10}]
        regions=[]
        for r in c.get('region_highlights',[]):
            regions.append({'start':r['start_s']/10,'end':r['end_s']/10,'keyframes':[{'time':k['time_s']/10,**{key:k[key] for key in ['x','y','width','height']}} for k in r['keyframes']]})
        demos.append({'id':id,'title':title,'category':category,'src':f'static/videos/web/{id}.mp4','poster':f'static/images/web/{id}.jpg','duration':duration/10,'originalDuration':duration,'phrases':phrases,'events':events,'regions':regions})
        probe=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(target)],text=True))
        (REPORTS/f'{id}-media.json').write_text(json.dumps({'sourceConfig':config_name,'sourceStart':start,'sourceDuration':duration,'speed':10,'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'probe':probe},indent=2),encoding='utf-8')
    (SITE/'static/js/demos.json').write_text(json.dumps(demos,indent=2),encoding='utf-8')
    import shutil
    callout=PAPER/'video/icra2027_submission/work/anonymization/building_recalled_view_anonymized.png'
    from PIL import Image
    Image.open(callout).convert('RGB').save(image_dir/'remembered-sign.jpg',quality=90)
    # Three confirmed source windows: doorway/lobby, exit, outdoor travel; 250 original seconds at 10x.
    source=PAPER/'video素材/third_view/长程.mp4'
    parts=[]
    for i,(start,duration) in enumerate([(100,80),(184,80),(490,90)]):
        p=REPORTS/f'hero-{i}.mp4'; parts.append(p)
        encode(['-ss',str(start),'-t',str(duration),'-i',str(source),'-vf','setpts=(PTS-STARTPTS)/10,fps=30,scale=1280:720,setsar=1','-t',str(duration/10)],p,f'hero-{i}')
    listing=REPORTS/'hero-concat.txt'; listing.write_text('\n'.join("file '"+str(p).replace('\\','/')+"'" for p in parts),encoding='utf-8')
    if not (OUT/'hero.mp4').exists(): run(['ffmpeg','-v','error','-f','concat','-safe','0','-i',str(listing),'-c','copy','-movflags','+faststart','-map_metadata','-1','-n',str(OUT/'hero.mp4')],'hero')
    if not (image_dir/'hero.jpg').exists(): run(['ffmpeg','-v','error','-ss','2','-i',str(OUT/'hero.mp4'),'-frames:v','1','-q:v','2','-n',str(image_dir/'hero.jpg')],'hero-poster')
    print('All five experiments and hero exported.',flush=True)

if __name__=='__main__': main()
