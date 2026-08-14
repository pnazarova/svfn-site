# The Silicon Valley Faculty Network — working context

Read this first. It carries the decisions behind the code so a new session
does not re-litigate settled choices or undo them by accident.

---

## What this is

An independent executive-education institute. A **house of programs**: each one
is convened with a different lead practitioner, who teaches it and sells through
their own network. Not a single course with a brand on top.

**People**
- **Polina Nazarova** — operator. Runs the business, the site, GTM.
- **Gregory La Blanc** — Faculty Director. Faculty at UC Berkeley (Professional
  Education, College of Engineering). The constant across every program.
- **Carlos Escapa** — Program Lead, Chief AI Officer Program. Formerly AWS
  (Global AI/ML Practice Leader) and Meta.

Legal entity: **Faculty Network LLC**. Note the brand carries "The"; the domain
does not. That is deliberate.

**Live at** https://siliconvalleyfaculty.com
**Repo** https://github.com/pnazarova/svfn-site (public — required for free GitHub Pages)

---

## Stack and deployment

- **Astro**, static output. No framework, no client JS beyond a little inline.
- `npm run dev` → localhost:4321 · `npm run build` → `dist/`
- **Push to `main` deploys.** GitHub Actions builds and publishes to Pages.
- Domain is at **GoDaddy**: four A records to GitHub's IPs, `www` CNAME to
  `pnazarova.github.io`. `public/CNAME` holds the domain.
- **Forms use Web3Forms**, which emails submissions straight to
  info@siliconvalleyfaculty.com. GitHub Pages cannot process a form post, and
  there is deliberately no CRM. The key lives in `src/data/site.js`.

If the dev server shows stale styles, **restart it**. Astro caches scoped CSS
and this has already caused one false diagnosis.

---

## Where content lives

Edit data, not markup. These feed several pages at once.

| File | Holds |
|---|---|
| `src/data/guests.js` | Guest practitioners. `photo` set → photo card; `photo: null` → named list row. |
| `src/data/masterclasses.js` | Masterclasses. `date` set → "Save my seat"; `window` only → "Sign up for date"; neither → waitlist. |
| `src/data/site.js` | Domain, contact email, Web3Forms key. |
| `public/faculty/` | Portraits. Square, 400px+, face centred. |

---

## Brand

- **Type** — geometric bold. Futura is the local stand-in; production should
  license GT Walsheim, Söhne Breit or Neue Montreal and swap `--font-display`.
- **Palette (Ink & Signal)** — ink `#111214`, bone `#F5F3EE`, signal `#D6431F`,
  steel `#85888C`. Signal is rationed: buttons, one accent word, the mark's
  centre atom. Never a background.
- **Mark** — graphene lattice, three cells, red centre atom. In `Mark.astro`.
- Deliberately **not** navy-and-gold, which would imply a Berkeley affiliation.

### Voice
- **No em dashes.** Rewrite the sentence; do not swap in a hyphen.
- **American spelling** (program, organization, enrollment).
- Precise, peer-level, plain. Give the number, the name, the date.
- Banned: journey, unlock, empower, cutting-edge, revolutionary, world-class.
- Headings argue rather than describe: "You leave with a plan, not a certificate".

---

## Decisions that must not be quietly reversed

**Berkeley attribution.** Berkeley describes *a person's affiliation*, never the
program's endorsement. "Gregory La Blanc, faculty at UC Berkeley" is fine.
"A Berkeley program" is not, and neither is their logo or palette. The online
programs are **not** UC Berkeley certified and the FAQ says so. The iGaming
program is separately UC Berkeley certified and may say so.

**Faculty names.** Only publish someone as leading a program once they have
agreed in writing or verbally. Until then the card reads "Faculty to be
announced". Conversations in progress are tracked outside this repository.

**Photos.** Use images the subject supplies, or ones published on their own
site or academic page, and log the source beside the path in `guests.js`.
Avoid LinkedIn (its terms prohibit it) and press or event photography, where
the copyright belongs to the publication or photographer rather than the
subject. When in doubt, ask the person for a headshot.

**Cohort size is ~30.** Small is the product, not a limitation. Research showed
platform-delivered competitors run 150–400; live faculty-led seminars cap small.

**Price $6,500.** Verified competitor band for online executive AI programs is
$3,100–$9,700 (McCombs, Booth, Section, Cornell, MIT xPRO, Imperial). Anything
above ~$10k in that research included a campus residency.

**Build track.** No competitor in that band has executives ship working software.
That is the one piece of genuinely unclaimed ground; keep it.

---

## Still outstanding

1. **Web3Forms key** — set it in `src/data/site.js` so the forms deliver.
   The key is designed to be public and appears in the served HTML either way.
2. Session **day, time, timezone** and program length in **weeks** (last visible
   placeholders, on the program page).
3. Team discount, payment terms, refund policy.
4. Confirm the **16 vs 17 session** count against the final curriculum.
5. Photos for the remaining guests.
6. About page founding line.
7. `og:image` social card, analytics.

Placeholders render as orange dashed chips (`.todo`). Grep `class="todo"` to
find every one still live.

---

## Strategy documents

Competitor research, the curriculum re-cut, the brand platform and the site plan
live as HTML in the parent folder (`../`) and are published as Artifacts. They
hold the reasoning behind the positioning and pricing.
