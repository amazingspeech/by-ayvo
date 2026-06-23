# By Ayvo — Fotografie

Statische portfolio-website (HTML/CSS/JS, geen build-stap nodig).

## Pagina's
- `index.html` — home
- `portfolio.html` — werk
- `over.html` — over Ayvo
- `diensten.html` — diensten & tarieven
- `blog.html` — journal
- `contact.html` — contact

## Bestanden
- `studio.css` — alle styling
- `site.js` — navigatie, taalwissel (NL/EN), interacties
- `image-slot.js` — drag-and-drop beeldvakken (alleen voor bewerken; live beelden staan in `assets/`)
- `assets/` — foto's (geoptimaliseerd voor web, max 2400px)

## Publiceren met GitHub Pages
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch**, branch **main**, map **/ (root)**
3. Na ~1 min staat de site live op `https://<gebruikersnaam>.github.io/<repo>/`
4. Eigen domein koppelen kan via **Settings → Pages → Custom domain**

## Let op
Beelden die je via slepen in een `image-slot` zet, worden in de browser bewaard (localStorage) en verschijnen **niet** op de live site. Wil je een foto permanent tonen, zet hem dan als bestand in `assets/` en verwijs ernaar via `src="assets/...">` in de HTML.
