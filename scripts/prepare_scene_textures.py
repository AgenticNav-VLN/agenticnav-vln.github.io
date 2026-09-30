"""Prepare small, offline CC0 material maps. Run only when changing materials."""
from pathlib import Path
from io import BytesIO
import urllib.request
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'src/textures'
MAPS = [
    ('laminate_floor_02', 'diff', 512, 'floor-color.jpg', False),
    ('laminate_floor_02', 'nor_gl', 512, 'floor-normal.jpg', False),
    ('laminate_floor_02', 'rough', 256, 'floor-roughness.jpg', False),
    ('wood_table_001', 'diff', 512, 'wood-color.jpg', False),
    ('white_plaster_02', 'diff', 256, 'plaster-color.jpg', False),
    ('poly_wool_herringbone', 'diff', 512, 'fabric-color.jpg', True),
    ('poly_wool_herringbone', 'nor_gl', 256, 'fabric-normal.jpg', False),
]

def main():
    TARGET.mkdir(parents=True, exist_ok=True)
    for asset, kind, size, name, grey in MAPS:
        url = f'https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/{asset}/{asset}_{kind}_1k.jpg'
        request = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(request, timeout=30) as response:
            im = Image.open(BytesIO(response.read())).convert('RGB')
        im = im.resize((size, size), Image.Resampling.LANCZOS)
        if grey:
            im = ImageOps.grayscale(im).convert('RGB')
        if name == 'wood-color.jpg':
            im = ImageOps.colorize(ImageOps.grayscale(im), '#99816a', '#e5d1ac')
        elif name == 'plaster-color.jpg':
            im = ImageOps.colorize(ImageOps.grayscale(im), '#dedbd2', '#faf9f4')
        elif name == 'fabric-color.jpg':
            im = ImageOps.colorize(ImageOps.grayscale(im), '#aaa9a6', '#f1f0eb')
        elif name == 'floor-roughness.jpg':
            im = ImageOps.colorize(ImageOps.grayscale(im), '#b4b4b4', '#fafafa')
        im.save(TARGET / name, quality=76, optimize=True)
        print(f'{name}: {(TARGET / name).stat().st_size} bytes')

if __name__ == '__main__':
    main()
