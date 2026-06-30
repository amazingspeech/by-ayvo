# By Ayvo — CMS instellen (op GitHub blijven)

Je beheert de site straks via **byayvo.nl/admin**: inloggen met GitHub, foto's
slepen, teksten typen. Alles wordt automatisch in je GitHub-repo opgeslagen en
staat daarna live. Je website blijft gewoon op GitHub (Pages) staan.

> **Waarom één extra stap?** GitHub Pages serveert alleen statische bestanden.
> Het inloggen heeft een klein stukje server nodig dat jouw geheime GitHub-sleutel
> bewaart — dat moet onder jóuw eigen account draaien (privacy/veiligheid). We
> gebruiken daarvoor een gratis Cloudflare Worker. Eenmalig, ~10 minuten klikken,
> geen onderhoud, geen kosten.

## Wat al klaarstaat (door mij gemaakt)
- `admin/index.html` + `admin/config.yml` — het beheerpaneel.
- `content/*.json` — de inhoud die het paneel bewerkt.
- `cms-render.js` — vult de homepage automatisch.
- `oauth-worker.js` — de complete login-service (kopiëren-plakken).
- Uploads belanden in `assets/uploads/`.

---

## Stap 1 — GitHub OAuth App aanmaken (2 min)
1. Ga naar GitHub → **Settings** → **Developer settings** → **OAuth Apps** →
   **New OAuth App**.
2. Vul in:
   - **Application name:** `By Ayvo CMS`
   - **Homepage URL:** `https://byayvo.nl`
   - **Authorization callback URL:** `https://JOUW-WORKER.workers.dev/callback`
     *(dit adres krijg je in stap 2 — je mag het daarna nog aanpassen)*
3. Klik **Register application**. Je krijgt een **Client ID**. Klik
   **Generate a new client secret** → je krijgt een **Client Secret**.
   Bewaar beide even (secret zie je maar één keer).

## Stap 2 — Login-service deployen op Cloudflare (5 min, gratis)
1. Maak een gratis account op **cloudflare.com** → ga naar
   **Workers & Pages** → **Create** → **Create Worker**.
2. Geef 'm een naam, bv. `byayvo-login`, en klik **Deploy**.
3. Klik **Edit code**, verwijder de voorbeeldcode en plak de volledige inhoud
   van **`oauth-worker.js`**. Klik **Deploy**.
4. Ga naar de Worker → **Settings** → **Variables and Secrets** → voeg twee
   **Secrets** toe (type: Secret):
   - `GITHUB_CLIENT_ID`     = je Client ID uit stap 1
   - `GITHUB_CLIENT_SECRET` = je Client Secret uit stap 1
   Klik **Deploy** om op te slaan.
5. Bovenaan zie je het adres van je Worker, bv.
   `https://byayvo-login.JOUWNAAM.workers.dev`. **Kopieer dat.**
6. Ga terug naar je GitHub OAuth App (stap 1) en zet de **callback URL** op
   `https://byayvo-login.JOUWNAAM.workers.dev/callback` (let op: `/callback`).

## Stap 3 — Config invullen (1 min)
Open `admin/config.yml` en pas de bovenste regels aan:
```yaml
backend:
  name: github
  repo: JOUW-GEBRUIKERSNAAM/JOUW-REPO        # bv. ayvo/byayvo-site
  branch: main
  base_url: https://byayvo-login.JOUWNAAM.workers.dev
  auth_endpoint: /auth
```
Commit + push dit naar GitHub.

## Stap 4 — Inloggen
Ga naar `byayvo.nl/admin`, klik **Login with GitHub**, geef toestemming, klaar.
Je ziet vier secties:

- **⚙︎ Site-instellingen** — hero-foto, titel, beschikbaarheid, cijfers, contact.
- **📸 Projecten / Reeksen** — portfolio: cover + galerij per project, categorie,
  "uitlichten op homepage". Sleep om de volgorde te bepalen.
- **✎ Journal / Blog** — korte verhalen met cover en tekst.
- **📝 Pagina-teksten** — manifest, over-blok, contactoproep.

Wijziging → **Publish**. Binnen ~1 minuut live.

---

## Handig om te weten
- **Accentkleur in tekst:** zet `*sterretjes*` rond een woord → het kleurt amber.
- **Uitgelicht project:** zet bij één project "uitlichten" aan.
- De homepage werkt óók als het CMS nog niet ingericht is (ingebouwde fallback).
- Lever foto's bij voorkeur aan op ~2000–2400px; grens is 12 MB per upload.

> **Vastgelopen?** Stuur me je GitHub-gebruikersnaam + repo-naam en het
> Worker-adres, dan vul ik `config.yml` exact voor je in en loop ik mee.
