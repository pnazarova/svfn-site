# Faculty headshots

Drop image files here, then reference them in the pages.

## Naming
Use kebab-case, matching the person:
  carlos-escapa.jpg
  gregory-la-blanc.jpg
  douglas-laney.jpg

## Source image spec
- Square or 4:5 portrait, at least 800px on the short side
- Face centred, some headroom (the CSS crops to `center 22%`)
- JPG for photos, quality ~80. Keep each file under ~250KB.

## Wiring one up
In the page, pass `src` to the Portrait component:

  <Portrait src="/faculty/carlos-escapa.jpg" name="Carlos Escapa" size="lg" />

Leave `src` off and it renders the orange placeholder instead.

## Where to get them
Ask each person directly for a headshot they are happy to have published.
Do not take images from LinkedIn: profile photos are too low resolution
for web use, and LinkedIn's terms prohibit automated collection.
