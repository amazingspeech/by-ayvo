// ATELIER — light minimal gallery direction for By Ayvo
function AtelierHome() {
  const tiles = [
    { t: 'Portret · Maren', m: 'portret — 01' },
    { t: 'Reizen · Faro', m: 'reizen — 02' },
    { t: 'Commercieel · Studio Vé', m: 'product — 03' },
    { t: 'Portret · Daniël', m: 'portret — 04' },
    { t: 'Reizen · Atlas', m: 'reizen — 05' },
    { t: 'Commercieel · Keramiek', m: 'product — 06' },
  ];
  return (
    <div className="atel">
      <style>{`
        .atel{--bg:#f4f2ed;--ink:#1b1a17;--mut:#8b8780;--line:rgba(27,26,23,.12);
          background:var(--bg);color:var(--ink);width:1440px;font-family:'Hanken Grotesk',sans-serif;
          -webkit-font-smoothing:antialiased;overflow:hidden}
        .atel .nav{display:flex;align-items:center;justify-content:space-between;padding:34px 72px}
        .atel .wordmark{font-size:15px;letter-spacing:.28em;text-transform:uppercase;font-weight:600}
        .atel .nav-links{display:flex;gap:36px;list-style:none;margin:0;padding:0}
        .atel .nav-links a{color:var(--ink);text-decoration:none;font-size:13px;opacity:.7;transition:opacity .2s}
        .atel .nav-links a:hover{opacity:1}
        .atel .lang{font-size:12px;letter-spacing:.12em;color:var(--mut)}
        .atel .lang b{color:var(--ink)}
        .atel .intro{text-align:center;padding:96px 72px 70px;max-width:920px;margin:0 auto}
        .atel .ey{font-size:12px;letter-spacing:.26em;text-transform:uppercase;color:var(--mut);margin:0 0 30px}
        .atel .intro h1{font-family:'Newsreader',serif;font-weight:400;font-size:62px;line-height:1.12;
          letter-spacing:-.01em;margin:0;text-wrap:balance}
        .atel .intro h1 em{font-style:italic}
        .atel .intro p{margin:30px auto 0;max-width:520px;color:var(--mut);font-size:15.5px;line-height:1.7}
        .atel .feature{padding:0 72px}
        .atel .feature .fimg{position:relative;height:620px;overflow:hidden}
        .atel .feature img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.02)}
        .atel .feature .meta{display:flex;justify-content:space-between;margin-top:16px;
          font-size:12px;letter-spacing:.06em;color:var(--mut);font-family:'IBM Plex Mono',monospace}
        .atel .gallery{padding:104px 72px 40px}
        .atel .grow{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:44px}
        .atel .grow h2{font-family:'Newsreader',serif;font-style:italic;font-weight:400;font-size:34px;margin:0}
        .atel .grow span{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--mut)}
        .atel .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px 28px}
        .atel .cell .ph{height:360px;background:
          repeating-linear-gradient(135deg,#eceae4 0 11px,#e6e3dc 11px 22px);
          border:1px solid var(--line);display:flex;align-items:center;justify-content:center}
        .atel .cell .ph span{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;
          color:#a8a39a;text-transform:uppercase}
        .atel .cell .cap{display:flex;justify-content:space-between;margin-top:13px;font-size:12.5px}
        .atel .cell .cap b{font-weight:500}
        .atel .cell .cap i{font-style:normal;color:var(--mut)}
        .atel .quote{text-align:center;padding:130px 72px}
        .atel .quote p{font-family:'Newsreader',serif;font-size:40px;font-weight:400;line-height:1.32;
          max-width:880px;margin:0 auto;letter-spacing:-.005em}
        .atel .quote .by{margin-top:34px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--mut)}
        .atel .cta{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);
          border-bottom:1px solid var(--line)}
        .atel .cta>div{padding:78px 72px}
        .atel .cta>div:first-child{border-right:1px solid var(--line)}
        .atel .cta h3{font-family:'Newsreader',serif;font-size:34px;font-weight:400;margin:0 0 18px}
        .atel .cta p{color:var(--mut);font-size:14.5px;line-height:1.7;margin:0 0 26px;max-width:340px}
        .atel .cta a{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink);
          text-decoration:none;border-bottom:1px solid var(--ink);padding-bottom:4px}
        .atel .foot{display:flex;justify-content:space-between;padding:40px 72px;font-size:12px;
          letter-spacing:.08em;color:var(--mut)}
      `}</style>

      <nav className="nav">
        <div className="wordmark">By Ayvo</div>
        <ul className="nav-links">
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Over mij</a></li>
          <li><a href="#">Diensten</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="lang"><b>NL</b> / EN</div>
      </nav>

      <section className="intro">
        <p className="ey">Portret — Commercieel — Reizen</p>
        <h1>Fotografie met <em>rust</em>, ruimte<br/>en aandacht voor detail.</h1>
        <p>Een portfolio in zwart-wit. Stille beelden die mensen, merken en plekken laten ademen.</p>
      </section>

      <section className="feature">
        <div className="fimg"><img src="assets/ayvo-portrait.jpeg" alt="" /></div>
        <div className="meta"><span>FEATURED — SELF PORTRAIT</span><span>FE 1.8 / 50MM · ROTTERDAM</span></div>
      </section>

      <section className="gallery">
        <div className="grow">
          <h2>Recent werk</h2>
          <span>Selected · 2026</span>
        </div>
        <div className="grid">
          {tiles.map((t, i) => (
            <div className="cell" key={i}>
              <div className="ph"><span>{t.m}</span></div>
              <div className="cap"><b>{t.t}</b><i>0{i+1}</i></div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote">
        <p>“Een goede foto vraagt niet om aandacht — hij verdient het, stil en vanzelf.”</p>
        <div className="by">— By Ayvo</div>
      </section>

      <section className="cta">
        <div>
          <h3>Werken we samen?</h3>
          <p>Beschikbaar voor portret-, merk- en reisopdrachten in heel Europa.</p>
          <a href="#">Bekijk diensten →</a>
        </div>
        <div>
          <h3>Even kennismaken</h3>
          <p>Stuur een bericht met je idee, datum of locatie. Ik denk graag mee.</p>
          <a href="#">Neem contact op →</a>
        </div>
      </section>

      <footer className="foot">
        <span>By Ayvo — Photography</span>
        <span>hello@byayvo.com · @byayvo</span>
        <span>© 2026 — NL / EN</span>
      </footer>
    </div>
  );
}
window.AtelierHome = AtelierHome;
