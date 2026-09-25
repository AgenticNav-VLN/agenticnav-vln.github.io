(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clock = t => `${Math.floor(Math.max(0, t) / 60)}:${String(Math.floor(Math.max(0, t) % 60)).padStart(2, '0')}`;
  const demos = JSON.parse($('#demo-data').textContent);
  const video = $('#demo-video'), player = $('#player'), progress = $('#seek');
  const hero = $('#hero-video');
  let heroVisible = true;
  function loadHero() { const source = $('source', hero); if (!source.src) { source.src = source.dataset.src; hero.load(); } }
  function resumeHero() {
    if (!heroVisible || document.hidden || !video.paused || navigator.connection?.saveData) return;
    loadHero();
    hero.play().catch(() => {});
  }
  let current = demos[0], pendingSeek = null, wantsPlay = false;
  let fullDownload = null, objectURL = null;
  let loadingMode = null;
  function setLoadingPercent(value) {
    const percent = Math.max(0, Math.min(100, Math.round(value)));
    $('#video-loading-percent').textContent = `${percent}%`;
    $('#video-loading-fill').style.width = `${percent}%`;
  }
  function showLoading(mode, percent = 0) {
    loadingMode = mode;
    setLoadingPercent(percent);
    $('#video-loading').hidden = false;
    player.classList.add('is-loading');
  }
  function hideLoading() {
    loadingMode = null;
    $('#video-loading').hidden = true;
    player.classList.remove('is-loading');
  }
  function bufferedPercent() {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return 0;
    let buffered = 0;
    for (let i = 0; i < video.buffered.length; i++) buffered += video.buffered.end(i) - video.buffered.start(i);
    return Math.min(99, buffered / video.duration * 100);
  }
  const names = ['Indoor-to-Outdoor Journey', 'Building 22', 'Kitchen Fridge', 'Trash Bin', 'Table Tennis'];
  demos.forEach((demo, i) => {
    const button = document.createElement('button');
    button.className = 'demo-choice'; button.type = 'button'; button.dataset.demo = demo.id;
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = `<img src="${demo.poster}" alt="" loading="lazy"><span><strong>${names[i]}</strong><small>${clock(demo.duration)}</small></span>`;
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
    if (video.readyState < 3 && loadingMode !== 'download') showLoading('native', bufferedPercent());
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
    if (wantsPlay) video.play().catch(() => { wantsPlay = false; hideLoading(); setPlayState(); });
  }
  function loadVideoScript(selected, signal) {
    // The anonymous host applies an opaque-origin sandbox. Classic local scripts
    // are allowed there, while fetch is blocked. Carry the same MP4 bytes through
    // an on-demand script, then play a Blob without contacting another host.
    return new Promise((resolve, reject) => {
      const scripts = new Set(), parts = [];
      let total = 0, next = 0, received = 0, receivedBytes = 0;
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
          parts[index] = bytes; received++; receivedBytes += bytes.length;
          setLoadingPercent(Math.min(99, receivedBytes / selected.bytes * 100));
          if (received === total) { setLoadingPercent(100); cleanup(); resolve(new Blob(parts, {type:'video/mp4'})); }
          else queue();
        } catch (error) { cleanup(); reject(error); }
      };
      const timeout = setTimeout(fail, 90000);
      window.addEventListener('agenticnav-media', receive); signal.addEventListener('abort', abort, {once:true});
      append('.media.js');
    });
  }
  async function downloadVideo(response, selected) {
    if (!response.body) {
      const blob = await response.blob();
      setLoadingPercent(100);
      return blob;
    }
    const reader = response.body.getReader(), parts = [];
    let receivedBytes = 0;
    while (true) {
      const {done, value} = await reader.read();
      if (done) break;
      parts.push(value); receivedBytes += value.byteLength;
      setLoadingPercent(Math.min(99, receivedBytes / selected.bytes * 100));
    }
    setLoadingPercent(100);
    return new Blob(parts, {type:'video/mp4'});
  }
  async function loadSeekableCopy() {
    // Some anonymous proxies do not implement byte-range requests. A local blob
    // makes the same approved video seekable without using an external host.
    if (pendingSeek === null || fullDownload || objectURL) return;
    const availableEnd = video.seekable.length ? video.seekable.end(video.seekable.length - 1) : 0;
    if (availableEnd >= pendingSeek) { applyPendingSeek(); return; }
    const controller = new AbortController(), selected = current;
    fullDownload = controller;
    showLoading('download');
    try {
      let blob;
      if (window.origin === 'null') blob = await loadVideoScript(selected, controller.signal);
      else {
        try {
          const response = await fetch(selected.src, {signal:controller.signal});
          if (!response.ok) throw new Error('Video unavailable');
          blob = await downloadVideo(response, selected);
        } catch (error) {
          if (controller.signal.aborted) throw error;
          setLoadingPercent(0);
          blob = await loadVideoScript(selected, controller.signal);
        }
      }
      if (controller.signal.aborted || current !== selected) return;
      objectURL = URL.createObjectURL(blob); video.src = objectURL; video.load();
      $('#media-error').hidden = true;
      $('#demo-status').textContent = 'Video ready. Click any phrase to explore.';
    } catch (error) {
      if (error.name !== 'AbortError') { hideLoading(); $('#media-error').hidden = false; }
    } finally { if (fullDownload === controller) fullDownload = null; }
  }
  async function play() {
    wantsPlay = true; load();
    if (pendingSeek !== null) { applyPendingSeek(); if (video.readyState >= 3) loadSeekableCopy(); return; }
    try { await video.play(); } catch (error) {
      if (error.name !== 'AbortError') { wantsPlay = false; hideLoading(); $('#demo-status').textContent = 'Press play to start the video.'; }
    }
    setPlayState();
  }
  function pause() { wantsPlay = false; video.pause(); if (loadingMode === 'native') hideLoading(); }
  function toggle() { if (video.paused || video.ended) play(); else pause(); }
  function jump(time, label) {
    pendingSeek = Math.max(0, Math.min(time, current.duration - .05));
    video.pause(); wantsPlay = true; load();
    update(time);
    $('#demo-status').textContent = `${label} · ${clock(time)}`;
    applyPendingSeek();
    if (pendingSeek !== null && loadingMode !== 'download') showLoading('native', bufferedPercent());
    if (video.readyState >= 3) loadSeekableCopy();
  }
  function selectDemo(demo) {
    pause(); pendingSeek = null;
    if (fullDownload) { fullDownload.abort(); fullDownload = null; }
    hideLoading();
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
  video.addEventListener('progress', () => { if (loadingMode === 'native') setLoadingPercent(bufferedPercent()); });
  video.addEventListener('canplay', () => { if (pendingSeek === null && (loadingMode === 'native' || !wantsPlay)) hideLoading(); });
  video.addEventListener('canplay', loadSeekableCopy);
  video.addEventListener('timeupdate', () => { if (pendingSeek === null) update(); });
  video.addEventListener('seeking', () => update());
  video.addEventListener('play', () => { setPlayState(); $('#hero-video').pause(); });
  video.addEventListener('playing', hideLoading);
  video.addEventListener('waiting', () => { if (loadingMode !== 'download' && (wantsPlay || !video.paused)) showLoading('native', bufferedPercent()); });
  video.addEventListener('stalled', () => { if (loadingMode === 'native') setLoadingPercent(bufferedPercent()); });
  video.addEventListener('pause', () => { setPlayState(); resumeHero(); });
  video.addEventListener('ended', () => { wantsPlay = false; setPlayState(); resumeHero(); $('#demo-status').textContent = 'Experiment complete. Replay or choose another demonstration.'; });
  video.addEventListener('error', () => { if (video.getAttribute('src') && !fullDownload) { hideLoading(); $('#media-error').hidden = false; setPlayState(); } });
  progress.addEventListener('input', () => {
    const time = Number(progress.value); pendingSeek = time; load();
    applyPendingSeek();
    if (pendingSeek !== null && loadingMode !== 'download') showLoading('native', bufferedPercent());
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

  resumeHero();
  new IntersectionObserver(entries => { heroVisible = entries[0].isIntersecting; if (!heroVisible) hero.pause(); else resumeHero(); }, {threshold:.12}).observe(hero);

  $$('[data-tool-target]').forEach(link => link.addEventListener('click', () => {
    const tab = $(`#tab-${link.dataset.toolTarget}`);
    tab.click();
    tab.focus({preventScroll:true});
  }));
  document.addEventListener('visibilitychange', () => { if (document.hidden) { hero.pause(); pause(); } else resumeHero(); });
})();
