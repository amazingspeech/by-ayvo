// STUDIO — bold typographic / commercial direction for By Ayvo
function StudioHome() {
  const idx = [
    { n: '01', nl: 'Portret', en: 'Portrait', d: 'Mensen, eerlijk en dichtbij.' },
    { n: '02', nl: 'Commercieel', en: 'Commercial', d: 'Merken & producten met karakter.' },
    { n: '03', nl: 'Reizen', en: 'Travel', d: 'Plekken, licht en het toeval.' },
  ];
  return (
    <div className="stud">
      <style>{`
        .stud{--bg:#eceae4;--ink:#111110;--acc:oklch(0.68 0.13 55);--mut:#6f6c64;--line:rgba(17,17,16,.16);
          background:var(--bg);color:var(--ink);width:1440px;font-family:'Space Grotesk',sans-serif;
          -webkit-font-smoothing:antialiased;overflow:hidden}
        .stud .nav{display:flex;align-items:center;justify-content:space-between;padding:26px 56px;
          border-bottom:2px solid var(--ink)}
        .stud .wordmark{font-size:19px;font-weight:700;letter-spacing:-.02em}
        .stud .wordmark span{color:var(--acc)}
        .stud .nav-links{display:flex;gap:30px;list-style:none;margin:0;padding:0}
        .stud .nav-links a{color:var(--ink);text-decoration:none;font-size:13px;font-weight:600;
          text-transform:uppercase;letter-spacing:.04em}
        .stud .nav-links a:hover{color:var(--acc)}
        .stud .lang{font-size:12px;font-weight:600;letter-spacing:.04em}
        .stud .lang b{color:var(--acc)}
        .stud .hero{padding:70px 56px 56px;border-bottom:2px solid var(--ink)}
        .stud .kick{display:flex;justify-content:space-between;font-size:12.5px;font-weight:600;
          text-transform:uppercase;letter-spacing:.1em;color:var(--mut);margin-bottom:34px}
        .stud .hero h1{font-size:158px;line-height:.84;font-weight:700;letter-spacing:-.035em;margin:0;text-transform:uppercase}
        .stud .hero h1 .o{-webkit-text-stroke:2px var(--ink);color:transparent}
        .stud .hero h1 .a{color:var(--acc)}
        .stud .hero-row{display:flex;justify-content:space-between;align-items:flex-end;margin-top:40px}
        .stud .hero-row p{margin:0;max-width:440px;font-size:16px;line-height:1.55;color:#2c2a26}
        .stud .hero-row .btn{flex:0 0 auto;background:var(--ink);color:var(--bg);text-decoration:none;
          padding:18px 34px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;
          display:inline-flex;align-items:center;gap:12px;transition:.2s}
        .stud .hero-row .btn:hover{background:var(--acc)}
        .stud .band{display:grid;grid-template-columns:1.3fr 1fr;border-bottom:2px solid var(--ink)}
        .stud .band .big{position:relative;height:600px;overflow:hidden;border-right:2px solid var(--ink)}
        .stud .band .big img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.05)}
        .stud .band .big .lab{position:absolute;left:22px;bottom:20px;background:var(--bg);
          padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.04em}
        .stud .band .side{display:flex;flex-direction:column}
        .stud .band .ph{flex:1;background:repeating-linear-gradient(135deg,#e3e0d9 0 12px,#dcd9d1 12px 24px);
          display:flex;align-items:flex-end;padding:20px;border-bottom:2px solid var(--ink)}
        .stud .band .ph:last-child{border-bottom:0}
        .stud .band .ph span{font-family:'IBM Plex Mono',monospace;font-size:11px;color:#8a857c;text-transform:uppercase}
        .stud .index{padding:0}
        .stud .row{display:grid;grid-template-columns:90px 1fr 1fr 120px;align-items:center;gap:24px;
          padding:38px 56px;border-bottom:2px solid var(--ink);transition:background .2s;cursor:pointer}
        .stud .row:hover{background:var(--ink);color:var(--bg)}
        .stud .row:hover .en,.stud .row:hover .d{color:rgba(236,234,228,.7)}
        .stud .row:hover .arr{color:var(--acc)}
        .stud .row .num{font-size:15px;font-weight:700;font-family:'IBM Plex Mono',monospace}
        .stud .row h3{margin:0;font-size:46px;font-weight:700;letter-spacing:-.025em;text-transform:uppercase}
        .stud .row .en{font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--mut);margin-top:6px}
        .stud .row .d{font-size:15px;color:var(--mut)}
        .stud .row .arr{font-size:30px;text-align:right}
        .stud .cta{padding:110px 56px;text-align:center}
        .stud .cta .ey{font-size:12.5px;font-weight:600;text-transform:uppercase;letter-spacing:.16em;color:var(--mut);margin:0 0 24px}
        .stud .cta h2{font-size:92px;font-weight:700;line-height:.92;letter-spacing:-.03em;margin:0;text-transform:uppercase}
        .stud .cta h2 em{font-style:normal;color:var(--acc)}
        .stud .cta a{display:inline-flex;margin-top:40px;background:var(--ink);color:var(--bg);
          padding:20px 46px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;text-decoration:none}
        .stud .foot{display:flex;justify-content:space-between;align-items:center;padding:30px 56px;
          border-top:2px solid var(--ink);font-size:12.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em}
      `}</style>

      <nav className="nav">
        <div className="wordmark">By Ayvo<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#">Werk</a></li>
          <li><a href="#">Over</a></li>
          <li><a href="#">Diensten</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="lang"><b>NL</b> / EN</div>
      </nav>

      <header className="hero">
        <div className="kick"><span>Fotografie · Rotterdam</span><span>Beschikbaar 2026</span></div>
        <h1>Beeld<br/>met <span className="a">lef</span>.</h1>
        <div className="hero-row">
          <p>Portret, commercieel en reizen — in rauw, contrastrijk zwart-wit. Voor merken en mensen die durven opvallen.</p>
          <a className="btn" href="#">Bekijk werk <span>→</span></a>
        </div>
      </header>

      <section className="band">
        <div className="big">
          <img src="assets/ayvo-portrait.jpeg" alt="" />
          <div className="lab">FE 1.8 / 50MM — SELF</div>
        </div>
        <div className="side">
          <div className="ph"><span>commercieel — campagne 01</span></div>
          <div className="ph"><span>reizen — reportage 02</span></div>
        </div>
      </section>

      <section className="index">
        {idx.map(c => (
          <div className="row" key={c.n}>
            <span className="num">{c.n}</span>
            <div><h3>{c.nl}</h3><div className="en">{c.en}</div></div>
            <div className="d">{c.d}</div>
            <div className="arr">→</div>
          </div>
        ))}
      </section>

      <section className="cta">
        <p className="ey">Klaar voor iets opvallends?</p>
        <h2>Laten we <em>bouwen</em>.</h2>
        <a href="#">Start een project</a>
      </section>

      <footer className="foot">
        <span>By Ayvo — Photography</span>
        <span>hello@byayvo.com</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
window.StudioHome = StudioHome;
