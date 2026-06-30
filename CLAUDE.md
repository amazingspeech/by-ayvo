# By Ayvo — projectnotities

Statische fotografie-portfolio (HTML/CSS/JS, geen build). Live via GitHub Pages.
Bronbestanden staan in de root; `_publish/` is de schone export-map voor GitHub.
Na elke wijziging aan een live-bestand: `_publish/` opnieuw synchroniseren.

## Al gedaan
- Home-band verkleind + 3 meeschalende fotovakjes.
- Foto's geoptimaliseerd (max 2400px, ~35MB → ~1,4MB).
- README.md + .gitignore toegevoegd.
- Favicon (favicon.svg) + social-preview meta (Open Graph/Twitter) op alle 6 pagina's.
- Placeholder-verhaaltjes ("Vertel hier het verhaal…") in portfolio leeggemaakt.

## Nog te doen (op verzoek gebruiker bewaard voor later)
1. **Werkend contactformulier** — contact.html koppelen aan Formspree of mailto; nu doet 'ie niks.
2. **Lege "logo"-vakjes** op de home (sectie "Vertrouwd door & gezien in", 5 stuks) — vullen of weghalen.
3. **Mobiel nalopen** — alle pagina's op telefoonformaat checken.
4. **Alt-teksten** op foto's toevoegen (SEO + toegankelijkheid).
5. **og:image absoluut maken** — na publicatie de og:image/twitter:image paden vervangen door de volledige URL (https://…/assets/ayvo-portrait.jpeg) zodat previews op Facebook/LinkedIn werken.

## Let op
- image-slot drops leven in localStorage, niet in bestanden. Permanente beelden moeten als bestand in assets/ + src in de HTML.
