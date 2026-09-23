(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clock = t => `${Math.floor(Math.max(0, t) / 60)}:${String(Math.floor(Math.max(0, t) % 60)).padStart(2, '0')}`;
  const demos = JSON.parse($('#demo-data').textContent);
  const video = $('#demo-video'), player = $('#player'), progress = $('#seek');
  let current = demos[0], pendingSeek = null, wantsPlay = false;
  let fullDownload = null, objectURL = null;
  const names = ['Long-range journey', 'Building 22', 'Kitchen fridge', 'Trash bin', 'Table tennis'];
  demos.forEach((demo, i) => {
    const button = document.createElement('button');
    button.className = 'demo-choice'; button.type = 'button'; button.dataset.demo = demo.id;
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<img src="${demo.poster}" alt="" loading="lazy"><span><strong>${names[i]}</strong><small>${clock(demo.duration)} · 10× speed</small></span>`;
    button.addEventListener('click', () => selectDemo(demo));
    $('.demo-picker').append(button);
  });
  function setPlayState() {
    const playing = !video.paused && !video.ended;
    player.classList.toggle('is-playing', playing);
    $('#play-toggle').setAttribute('aria-label', playing ? 'Pause demonstration' : 'Play demonstration');
    $('#play-toggle').innerHTML = `<span aria-hidden="true">${playing ? 'Ⅱ' : '▶'}</span>`;
    $('#big-play').setAttribute('aria-label', video.ended ? 'Replay demonstration' : 'Play demonstration');
  }
  function load() {
    const unloaded = video.preload === 'none';
    if (!video.getAttribute('src')) { video.src = current.src; video.load(); }
    video.preload = 'auto';
    if (unloaded) video.load();
  }
  function applyPendingSeek() {
    if (pendingSeek === null || video.readyState < 1) return;
    const time = pendingSeek;
    const available = time === 0 || [...Array(video.seekable.length)].some((_, i) => video.seekable.start(i) <= time && video.seekable.end(i) >= time);
    if (!available) return;
    pendingSeek = null; video.currentTime = time; update(time);
    if (wantsPlay) video.play().catch(() => { wantsPlay = false; setPlayState(); });
  }
  function loadVideoScript(selected, signal) {
    // The anonymous host applies an opaque-origin sandbox. Classic local scripts
    // are allowed there, while fetch is blocked. Carry the same MP4 bytes through
    // an on-demand script, then play a Blob without contacting another host.
    return new Promise((resolve, reject) => {
      const scripts = new Set(), parts = [];
      let total = 0, next = 0, received = 0;
      const cleanup = () => { clearTimeout(timeout); window.removeEventListener('agenticnav-media', receive); signal.removeEventListener('abort', abort); scripts.forEach(script => script.remove()); };
      const fail = () => { cleanup(); reject(new Error('Video could not load')); };
      const abort = () => { cleanup(); reject(new DOMException('Aborted', 'AbortError')); };
      const append = suffix => {
        const script = document.createElement('script'); scripts.add(script);
        script.onerror = fail;
        script.onload = () => { scripts.delete(script); script.remove(); };
        script.src = selected.src.replace(/\.mp4$/, suffix); script.async = true;
        document.head.append(script);
      };
      const queue = () => { if (next < total) append(`.media-${next++}.js`); };
      const receive = event => {
        if (event.detail?.id !== selected.id || signal.aborted) return;
        try {
          if (event.detail.chunks) {
            if (total) return;
            total = event.detail.chunks;
            if (!Number.isInteger(total) || total < 1 || total > 64) throw new Error('Invalid video manifest');
            queue(); queue(); queue(); return;
          }
          const index = event.detail.index;
          if (!Number.isInteger(index) || index < 0 || index >= total || parts[index]) return;
          const binary = atob(event.detail.data), bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          parts[index] = bytes; received++;
          $('#demo-status').textContent = `Loading the selected moment… ${Math.round(received / total * 100)}%`;
          if (received === total) { cleanup(); resolve(new Blob(parts, {type:'video/mp4'})); }
          else queue();
        } catch (error) { cleanup(); reject(error); }
      };
      const timeout = setTimeout(fail, 90000);
      window.addEventListener('agenticnav-media', receive); signal.addEventListener('abort', abort, {once:true});
      append('.media.js');
    });
  }
  async function loadSeekableCopy() {
    // Some anonymous proxies do not implement byte-range requests. A local blob
    // makes the same approved video seekable without using an external host.
    if (pendingSeek === null || fullDownload || objectURL) return;
    const availableEnd = video.seekable.length ? video.seekable.end(video.seekable.length - 1) : 0;
    if (availableEnd >= pendingSeek) { applyPendingSeek(); return; }
    const controller = new AbortController(), selected = current;
    fullDownload = controller;
    $('#demo-status').textContent = 'Loading the selected moment…';
    try {
      let blob;
      if (window.origin === 'null') blob = await loadVideoScript(selected, controller.signal);
      else {
        try {
          const response = await fetch(selected.src, {signal:controller.signal});
          if (!response.ok) throw new Error('Video unavailable');
          blob = await response.blob();
        } catch (error) {
          if (controller.signal.aborted) throw error;
          blob = await loadVideoScript(selected, controller.signal);
        }
      }
      if (controller.signal.aborted || current !== selected) return;
      objectURL = URL.createObjectURL(blob); video.src = objectURL; video.load();
      $('#media-error').hidden = true;
      $('#demo-status').textContent = 'Video ready. Click any phrase to explore.';
    } catch (error) {
      if (error.name !== 'AbortError') $('#media-error').hidden = false;
    } finally { if (fullDownload === controller) fullDownload = null; }
  }
  async function play() {
    wantsPlay = true; load();
    if (pendingSeek !== null) { applyPendingSeek(); if (video.readyState >= 3) loadSeekableCopy(); return; }
    try { await video.play(); } catch (error) {
      if (error.name !== 'AbortError') { wantsPlay = false; $('#demo-status').textContent = 'Press play to start the video.'; }
    }
    setPlayState();
  }
  function pause() { wantsPlay = false; video.pause(); }
  function toggle() { if (video.paused || video.ended) play(); else pause(); }
  function jump(time, label) {
    pendingSeek = Math.max(0, Math.min(time, current.duration - .05));
    video.pause(); wantsPlay = true; load();
    update(time);
    $('#demo-status').textContent = `${label} · ${clock(time)}`;
    applyPendingSeek();
    if (video.readyState >= 3) loadSeekableCopy();
  }
  function selectDemo(demo) {
    pause(); pendingSeek = null;
    if (fullDownload) { fullDownload.abort(); fullDownload = null; }
    if (objectURL) { URL.revokeObjectURL(objectURL); objectURL = null; }
    current = demo;
    video.preload = 'none'; video.src = demo.src; video.load(); video.poster = demo.poster;
    $('#demo-title').textContent = demo.title; $('#demo-category').textContent = demo.category;
    $('#video-download').href = demo.src; $('#duration').textContent = clock(demo.duration);
    $('#instruction').replaceChildren(); $('#media-error').hidden = true;
    demo.phrases.forEach((phrase, i) => {
      const button = document.createElement('button'); button.type = 'button'; button.className = 'phrase';
      button.textContent = phrase.text; button.dataset.phrase = i;
      button.title = `Jump to ${clock(phrase.seek)}`;
      button.setAttribute('aria-label', `${phrase.text} — jump to ${clock(phrase.seek)}`);
      button.addEventListener('click', () => jump(phrase.seek, phrase.text));
      $('#instruction').append(button, document.createTextNode(' '));
    });
    $('#memory-moment')?.remove();
    if (demo.id === 'building-22') {
      const shortcut = document.createElement('button'); shortcut.id = 'memory-moment'; shortcut.className = 'memory-moment';
      shortcut.textContent = 'Revisit the sign · 0:11 ↗';
      shortcut.addEventListener('click', () => jump(11.5, 'Recall the sign'));
      $('#instruction').after(shortcut);
    }
    $$('.demo-choice').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.demo === demo.id)));
    $('#demo-status').textContent = 'Select a phrase or press play.';
    progress.max = demo.duration; update(0); setPlayState();
  }
  function update(time = video.currentTime || 0) {
    $('#elapsed').textContent = clock(time); progress.value = Math.min(time, current.duration);
    const active = current.events.find(e => time >= e.start && time < e.end);
    $$('.phrase').forEach((button, i) => {
      const isActive = active?.phrase === i;
      button.classList.toggle('is-active', isActive);
      button.classList.toggle('is-recall', isActive && active.color === 'recall');
      if (isActive) button.setAttribute('aria-current','step'); else button.removeAttribute('aria-current');
    });
    const region = current.regions.find(r => time >= r.start && time <= r.end);
    const box = $('#tracking-box'); box.toggleAttribute('hidden', !region);
    if (region) {
      const keys = region.keyframes;
      const next = keys.findIndex(k => k.time >= time);
      const b = keys[next < 0 ? keys.length - 1 : next], a = keys[Math.max(0, next - 1)];
      const ratio = b.time === a.time ? 0 : (time - a.time) / (b.time - a.time);
      ['x','y','width','height'].forEach(k => box.setAttribute(k, a[k] + (b[k] - a[k]) * ratio));
    }
    const recall = $('.recall-overlay');
    const memorizing = current.id === 'building-22' && time >= 5.5885973198 && time < 6.3271973198;
    const recalling = current.id === 'building-22' && time >= 11.5 && time < 15.9;
    recall.hidden = !(memorizing || recalling); recall.classList.toggle('recalling', recalling);
    $('#recall-title').textContent = recalling ? 'VLM uses Recall Tool' : 'Observation Memorized';
  }
  $('#big-play').addEventListener('click', toggle); $('#play-toggle').addEventListener('click', toggle);
  video.addEventListener('click', toggle);
  ['loadedmetadata', 'loadeddata', 'canplay', 'progress'].forEach(event => video.addEventListener(event, applyPendingSeek));
  video.addEventListener('canplay', loadSeekableCopy);
  video.addEventListener('timeupdate', () => { if (pendingSeek === null) update(); });
  video.addEventListener('seeking', () => update());
  video.addEventListener('play', () => { setPlayState(); $('#hero-video').pause(); });
  video.addEventListener('pause', setPlayState);
  video.addEventListener('ended', () => { wantsPlay = false; setPlayState(); $('#demo-status').textContent = 'Experiment complete. Replay or choose another demonstration.'; });
  video.addEventListener('error', () => { if (video.getAttribute('src')) { $('#media-error').hidden = false; setPlayState(); } });
  progress.addEventListener('input', () => {
    const time = Number(progress.value); pendingSeek = time; load();
    applyPendingSeek();
    if (video.readyState >= 3) loadSeekableCopy();
    update(time);
  });
  $('#retry-video').addEventListener('click', () => { $('#media-error').hidden = true; video.load(); play(); });
  $('#fullscreen').addEventListener('click', async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (player.requestFullscreen) await player.requestFullscreen(); else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); }
    catch { $('#demo-status').textContent = 'Fullscreen is unavailable in this browser.'; }
  });
  document.addEventListener('fullscreenchange', () => $('#fullscreen').setAttribute('aria-label', document.fullscreenElement ? 'Exit fullscreen' : 'Enter fullscreen'));
  selectDemo(current);

  const hero = $('#hero-video'), heroToggle = $('#hero-toggle');
  let heroUserPaused = false, heroVisible = true;
  function loadHero() { const source = $('source', hero); if (!source.src) { source.src = source.dataset.src; hero.load(); } }
  function heroState() { const playing = !hero.paused; heroToggle.innerHTML = `${playing ? 'Pause background' : 'Play background'} <span aria-hidden="true">${playing ? 'Ⅱ' : '▶'}</span>`; heroToggle.setAttribute('aria-label', playing ? 'Pause background video' : 'Play background video'); }
  hero.addEventListener('play', heroState); hero.addEventListener('pause', heroState);
  heroToggle.addEventListener('click', () => { if (hero.paused) { heroUserPaused = false; loadHero(); hero.play().catch(heroState); } else { heroUserPaused = true; hero.pause(); } });
  if (!reduced.matches && !navigator.connection?.saveData) { loadHero(); hero.play().catch(heroState); }
  new IntersectionObserver(entries => { heroVisible = entries[0].isIntersecting; if (!heroVisible) hero.pause(); else if (!heroUserPaused && !reduced.matches && !document.hidden && video.paused) { loadHero(); hero.play().catch(heroState); } }, {threshold:.12}).observe(hero);

  const ideas = {
    action: {kicker:'Action tool', title:'Choose beyond the predicted waypoints.', description:'A waypoint predictor limits the available choices. AgenticNav lets the model select a visible target pixel, then checks the resulting motion before execution.', button:'Show the selected pixel', result:'A target pixel becomes a motion request, subject to geometric safety checks.', visual:'<div class="idea-scene"><img src="static/images/web/action-scene.jpg" alt="Office floor from the paper, with candidate waypoints"><span class="scene-label">Action space</span><span class="waypoint one">1</span><span class="waypoint two">2</span><span class="waypoint three">3</span><span class="target-point"></span></div><div class="visual-caption"><span>Predicted candidates</span><strong>A directly selected pixel</strong></div>'},
    depth: {kicker:'Depth tool', title:'Ask how far, exactly where it matters.', description:'The model queries depth at selected image pixels. Metric distances help resolve spatial relationships that are difficult to infer from appearance alone.', button:'Query the two points', result:'12.54 m and 7.68 m: metric evidence distinguishes the two desks.', visual:'<div class="idea-scene"><img src="static/images/web/depth-scene.jpg" alt="Two desks at different distances, from the paper"><span class="scene-label">Which desk is nearer?</span><span class="query-point"></span><span class="query-point second"></span><span class="depth-value">12.54 m</span><span class="depth-value second">7.68 m</span></div><div class="visual-caption"><span>Selected pixels</span><strong>On-demand metric evidence</strong></div>'},
    recall: {kicker:'Compact memory + recall', title:'Keep the context small. Bring back the evidence.', description:'Recent reasoning and actions stay alongside a compact trajectory map. When an earlier view matters, the model selects a past decision point and retrieves that observation.', button:'Recall the past observation', result:'A selected memory returns visual evidence without carrying every image in the prompt.', visual:'<div class="memory-visual"><img src="static/images/web/memory-map.jpg" alt="Trajectory map with decision points"><span aria-hidden="true">→</span><div class="memory-frame"><img src="static/images/web/memory-view.jpg" alt="Past visual observation returned by recall"></div></div><div class="visual-caption"><span>Compact map + recent history</span><strong>Selective visual recall</strong></div>'}
  };
  let idea = 'action', revealed = false;
  function setIdea(key) {
    idea = key; revealed = false; const data = ideas[key];
    $('#idea-visual').innerHTML = data.visual; $('#idea-visual').classList.remove('revealed');
    $('#idea-kicker').textContent = data.kicker; $('#idea-title').textContent = data.title; $('#idea-description').textContent = data.description;
    $('#idea-action').textContent = data.button + ' →'; $('#idea-result').textContent = '';
    $('#idea-panel').setAttribute('aria-labelledby', 'tab-' + key);
    $$('[data-idea]').forEach(b => { const selected = b.dataset.idea === key; b.setAttribute('aria-selected', selected); b.tabIndex = selected ? 0 : -1; });
  }
  $$('[data-idea]').forEach((b, index) => {
    b.addEventListener('click', () => setIdea(b.dataset.idea));
    b.addEventListener('keydown', e => { let next; if (e.key === 'ArrowRight') next = (index + 1) % 3; if (e.key === 'ArrowLeft') next = (index + 2) % 3; if (e.key === 'Home') next = 0; if (e.key === 'End') next = 2; if (next !== undefined) { e.preventDefault(); const tab = $$('[data-idea]')[next]; setIdea(tab.dataset.idea); tab.focus(); } });
  });
  $('#idea-action').addEventListener('click', () => { revealed = !revealed; $('#idea-visual').classList.toggle('revealed', revealed); $('#idea-result').textContent = revealed ? ideas[idea].result : ''; $('#idea-action').textContent = revealed ? 'Reset illustration ↺' : ideas[idea].button + ' →'; });
  setIdea('action');

  const steps = [
    ['Start with the current observation.', 'The model receives the instruction, RGB views, a compact map, and recent reasoning and action history.'],
    ['Query the depth of selected pixels.', 'The depth tool returns metric distances at the requested image coordinates. The model uses this spatial evidence in its reasoning.'],
    ['Recall an observation when it becomes relevant.', 'The model selects a past decision point and view from memory. The recall tool returns the corresponding image.'],
    ['Select a visible target. Check. Execute.', 'The action tool converts a selected pixel into a motion target. Geometric checks validate the motion; an unsafe request returns feedback for reselection.'],
    ['Observe the result and update memory.', 'The robot moves or stops. New observations and recent reasoning and action history support the next decision. Tool calls are selected as needed, not in a fixed order.']
  ];
  let step = 0, timer = null;
  function stopWalkthrough() { clearInterval(timer); timer = null; $('#method-play').textContent = 'Play walkthrough ▶'; }
  function showStep(index) {
    step = index; $('.method-diagram').dataset.step = index;
    $$('[data-step]').filter(b => b.tagName === 'BUTTON').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.step) === index)));
    $$('.diagram-node').forEach(n => n.classList.toggle('active', index === 0 ? n.classList.contains('observation-node') : index === 4 ? n.classList.contains('core-node') || n.classList.contains('observation-node') : Number(n.dataset.node) === index));
    $$('[data-connection]').forEach(p => p.classList.toggle('active', Number(p.dataset.connection) === index));
    $('#method-count').textContent = `0${index + 1} / 05`; $('#method-title').textContent = steps[index][0]; $('#method-description').textContent = steps[index][1];
    $('#method-next').innerHTML = index === 4 ? 'Start again <span aria-hidden="true">↺</span>' : 'Next step <span aria-hidden="true">→</span>';
  }
  $$('button[data-step],button[data-node]').forEach(b => b.addEventListener('click', () => { stopWalkthrough(); showStep(Number(b.dataset.step ?? b.dataset.node)); }));
  $('#method-next').addEventListener('click', () => { stopWalkthrough(); showStep((step + 1) % 5); });
  $('#method-play').addEventListener('click', () => {
    if (timer) { stopWalkthrough(); return; } showStep(0); $('#method-play').textContent = 'Pause walkthrough Ⅱ';
    timer = setInterval(() => { if (step === 4) stopWalkthrough(); else showStep(step + 1); }, 3200);
  });
  showStep(0);
  document.addEventListener('visibilitychange', () => { if (document.hidden) { hero.pause(); pause(); stopWalkthrough(); } else if (heroVisible && !heroUserPaused && !reduced.matches) hero.play().catch(heroState); });
  reduced.addEventListener('change', () => { if (reduced.matches) { hero.pause(); stopWalkthrough(); } });
})();
