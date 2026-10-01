# Parallax layer imagery

All four layers are photographs from [Unsplash](https://unsplash.com), used under the
[Unsplash License](https://unsplash.com/license). That license permits free commercial
use and does not require attribution; the credit list below is kept anyway so the
provenance of each file is recorded.

The set was chosen by measuring each candidate's average lightness and saturation, then
keeping four that step cleanly from hazy to saturated. That ordering is what makes the
layers read as distance rather than as four unrelated photos.

| File | Layer | Photographer | Source |
|------|-------|--------------|--------|
| `sky-*.webp` | Sky, light rays | Unsplash | https://unsplash.com/photos/mxL5NM2SvS8 |
| `fog-*.webp` | Far fog band | Unsplash | https://unsplash.com/photos/YL3t5SQDknM |
| `mid-*.webp` | Mid ridges | Unsplash | https://unsplash.com/photos/-rxcCKVIj20 |
| `near-*.webp` | Near ridge | Unsplash | https://unsplash.com/photos/ODcUS4Nqhjg |

## Why two sizes

`-1800.webp` is used above 768px, `-760.webp` below it. A 3:2 landscape photo set to
`cover` inside a narrow phone-shaped hero is scaled up roughly 3.3x to fill the height,
which crops away about two thirds of the width and turns the ridgelines into unreadable
blobs. The smaller portrait crop keeps the ridges legible and cuts the mobile payload
from 139KB to 51KB.

## Regenerating

Sources are 2000px wide, so nothing is upscaled. Desktop crops to 1800x1200 biased
toward the upper third to keep the ridgelines rather than empty sky; mobile crops to
760x1013 centered. WebP quality is 62 desktop / 60 mobile, which is where the fog and
sky layers drop under 20KB without visible banding.

The desktop size is set by the layer geometry rather than by taste. Each layer is grown
past the hero's edges so it has room to travel, and that growth makes `cover` scale the
image *up*: at 1600px wide the nearest layer was being stretched about 1.27x, which is
enough to visibly soften a ridgeline. 1800x1200 keeps the scale factor near 1.0.