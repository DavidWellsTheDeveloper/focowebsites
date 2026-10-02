# Page wash layer imagery

Three abstract gradients from [Pexels](https://pexels.com), used under the
[Pexels License](https://www.pexels.com/license/). That licence permits free
commercial use without attribution; the credit list below is kept so the
provenance of each file is recorded.

| File | Slot | Photographer | Photo ID |
|------|------|--------------|----------|
| `far-*.webp` | Back / haziest | `diva` | 26831807 |
| `deep-*.webp` | Middle, saturated | `steve` | 29067691 |
| `near-*.webp` | Front / darkest | `codioful` | 6985275 |

Photographer and ID are read from the source filenames. The files carry no
source URL in their EXIF/XMP, so no permalink is asserted here — look the ID up
on Pexels if a link is needed.

## Why these three

The set is ordered **hazy to dark and saturated**, back to front, because that
ordering is what makes stacked layers read as distance rather than as three
unrelated pictures. Measured on each source (mean HSV over a 32px sample):

| Slot | Brightness | Saturation |
|------|-----------|------------|
| `far` | 78.4% | 15.6% |
| `deep` | 49.1% | 75.6% |
| `near` | 26.6% | 99.5% |

All three sit in the site's teal / aqua / green / blue family. `far` carries a
single warm orange form that echoes `--color-accent`.

A fourth layer, `mid` (`steve` 29586676, 59.0% bright / 14.3% saturated,
silver-white-blue), was cut after the first pass. It was the least chromatic
image in the set and the main reason the wash read as grey haze rather than as
teal. Measured against the alternative of cutting `far` instead, dropping `mid`
gave higher visibility from the wash in **both** themes — 104.1 vs 95.7 in light,
48.2 vs 44.9 in dark — while holding the same worst-case contrast bound. It also
takes about a fifth of the stack's raster. The file is not used and not shipped.

Candidates that were rejected outright: `codioful-6985040`,
`steve-33978455` (purple — off palette), `steve-13167325` (red — off palette),
`steve-13551572` (desaturated grey). The `vecteezy_*` files are all literal
landscapes, not abstract, so none of them were in contention.

## Why two sizes

`-1600.webp` is used above 768px, `-800.webp` below it. The layer box is tall
roughly `154vh`–`260vh` by `100vw`, so a landscape source set to `cover` would be
cropped to a narrow vertical strip. Portrait crops at 8:9 keep the composition
intact inside that box and halve the payload.

Total **65KB desktop / 33KB mobile** for all three layers, against 186KB / 51KB
for the photographic hero stack this replaced. Abstract gradients compress
roughly 15x better than photographs at the same quality.

## Regenerating

Sources are 3670–9000px on the long edge, so nothing is upscaled on the way in.
Each source is cropped to the largest 8:9 portrait region (centred, except
`far` which is biased left to keep the orange form in frame), then resized with
Lanczos.

Output is 1600x1800 at WebP quality 62, and 800x1500 at quality 60. The layer
box is grown well past the viewport so it can travel without exposing an edge,
which makes `cover` upscale `deep` by about 1.08x and `near` by about 1.30x on a
1440x900 desktop — invisible on gradients, which unlike ridgelines carry no fine
detail to soften, and the reason this stack tolerates the tall boxes that
`depth` requires.

If the stack is ever pushed faster, re-export taller rather than accepting more
upscale: the originals are 3670–6000px tall and the current export stops at
1800px, so there is headroom before the *source* would be the limiting factor.
Memory still scales with box height either way — that cost does not go away.
