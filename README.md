# AgenticNav project page

A static, dependency-free research website for AgenticNav.

- Public website: https://agenticnav-vln.github.io/
- Deploy: GitHub Pages, main branch, repository root.

## Content

The five approved current two-dimensional robot experiments are long-range navigation,
Building 22, kitchen fridge, trash bin, and table tennis. Every experiment is complete
at a constant ten times the recorded speed. The 25-second hero uses selected sections
of the long-range experiment. Older demos and three-dimensional experiments are excluded.

Instruction text is rendered by the page and synchronized with the video. Video files
have no instruction burned into the image. Building 22 recall windows and target
tracking boxes are rendered by the page from the original timing and coordinates.
The kitchen and Building 22 source footage and recalled sign reuse the previously
approved anonymized assets. Original source files are never overwritten.
The page flows from Videos to Method, How it works, and Results. The three colored
blocks in the paper architecture figure open their matching interactive tool tabs.

## Editing and rebuilding

- `index.html`: complete page, including an embedded copy of the demo manifest.
- `static/css/index.css`: responsive layout; Calibri bold italic, system fallbacks.
- `static/js/index.js`: player, synchronized instructions, and architecture figure tool links.
- `static/js/demos.json`: media and timing manifest. All times are on the exported video clock.
- `scripts/prepare_media.py`: export approved source footage from the sibling paper workspace.
- `scripts/build_site.py`: refresh research data in the public page, then derive the anonymous page and copy matching assets.
- `scripts/check_site.py`: references, identities, timeline and media validation.

Run from the outer workspace:

```powershell
python agenticnav.github.io/scripts/prepare_media.py
python agenticnav.github.io/scripts/build_site.py
python agenticnav.github.io/scripts/check_site.py
python -m http.server 8765 --bind 127.0.0.1
```

Media preparation needs Python, Pillow, and FFmpeg. The build also needs PyMuPDF.
A build writes the sibling anonymous site's `docs` directory as well as this site.
The anonymous publication identifier and management URL are intentionally kept out of
this public repository. All anonymous media references are relative to that site.

Videos load on demand. If a host does not support byte-range requests, a user-initiated
seek loads that same local video into a browser blob so instruction seeking still works.
For anonymous hosts with an opaque-origin sandbox, the same MP4 bytes also have a
classic-script transport (`*.media.js` manifests and `*.media-N.js` chunks), loaded only
after an instruction seek requires it. Each chunk carries at most 1.5 MiB of MP4 data;
at most three load together, with progress feedback, cancellation, and a timeout.
This stays within the site's own resources and does not require relaxed host permissions.
The background pauses offscreen; data-saving preferences disable its automatic playback.
Reduced-motion preferences retain background playback and visible navigation as requested.
Keyboard users can operate the player, instructions, tool tabs,
and architecture figure links.

The previous site used the Academic Project Page Template. The current design and
interaction implementation are custom, with a video hero inspired by the supplied reference.

## Interactive tool room

The three tool tabs share a furnished office rendered locally with Three.js. Rounded
upholstery, workstations, swivel chairs, plants and wood surfaces replace the old room.
Photographic CC0 material maps, their normal and roughness detail, are embedded in the
classic script; see `static/js/TEXTURE-LICENSE.txt` for sources and processing.
Action selects a visible floor point and immediately plans a route around furniture,
checking the complete route against the robot's 0.24-metre radius. A fast visibility
graph has a fine-grid fallback; neither permits diagonal corner cutting. Floor clicks
with insufficient clearance can move up to 0.65 metres to a nearby safe destination.
Non-floor, occupied, outside and disconnected targets report a specific safety failure.
Movement takes at least 650 ms and about 220 ms per metre, with visible acceleration,
turning and deceleration. A new valid click replans from the current position.
Depth returns the camera-to-surface ray distance in metres, using the nearest visible
surface. Recall selects a saved decision on the BEV and shows its captured camera image.
Three sample decisions are seeded; new moves add observations (the latest 24 are kept).
The map retains the actual routed segments, including interrupted travel. Switching
tools stops navigation and saves the reached position. Reset cancels queued animation.
This is a clearly labelled illustration, not a navigation-model execution or experiment.

Edit `src/tool-scene.js`, `src/office-room.js`, `src/scene-geometry.mjs`, and
`static/css/tool-scene.css`. Only `scripts/prepare_scene_textures.py` needs the Internet
when refreshing material assets; normal builds work entirely offline.
Run `npm ci`, `npm run test:scene`, `npm run build:scene`, then the Python site build.
The bundled classic script and local license are mirrored to the anonymous site; no
external JavaScript, model files, texture requests, or cross-origin module imports are used.
Mouse, touch, arrow keys and Enter work in the camera view. Reduced motion retains the
requested travel animation. Shadows are cached; the office renders only on interaction
or active navigation instead of running a permanent render loop. Embedded material maps
finish loading before sample observations are captured, including in opaque-origin hosts.
