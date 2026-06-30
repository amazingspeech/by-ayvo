// NOIR — dark editorial / filmic direction for By Ayvo
function NoirHome() {
  const cats = [
    { n: '01', nl: 'Portret', en: 'Portrait' },
    { n: '02', nl: 'Commercieel', en: 'Commercial' },
    { n: '03', nl: 'Reizen', en: 'Travel' },
  ];
  return (
    <div className="noir">
      <style>{`
        .noir{--bg:#0b0b0b;--ink:#f3f1ec;--mut:#8d887f;--line:rgba(243,241,236,.14);
          background:var(--bg);color:var(--ink);width:1440px;font-family:'Hanken Grotesk',sans-serif;
          -webkit-font-smoothing:antialiased;overflow:hidden}
        .noir .serif{font-family:'Cormorant Garamond',serif}
        .noir .nav{display:flex;align-items:center;justify-content:space-between;
          padding:30px 64px;border-bottom:1px solid var(--line);position:relative;z-index:3}
        .noir .nav-links{display:flex;gap:38px;list-style:none;margin:0;padding:0}
        .noir .nav-links a{color:var(--ink);text-decoration:none;font-size:12.5px;letter-spacing:.16em;
          text-transform:uppercase;opacity:.78;transition:opacity .2s}
        .noir .nav-links a:hover{opacity:1}
        .noir .wordmark{font-family:'Cormorant Garamond',serif;font-size:27px;font-style:italic;letter-spacing:.02em;white-space:nowrap}
        .noir .lang{display:flex;gap:10px;align-items:center;font-size:11.5px;letter-spacing:.14em;color:var(--mut)}
        .noir .lang b{color:var(--ink)}
        .noir .hero{position:relative;height:760px;overflow:hidden}
        .noir .hero img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.04);
          opacity:.92}
        .noir .hero::after{content:'';position:absolute;inset:0;
          background:linear-gradient(180deg,rgba(11,11,11,.5) 0%,rgba(11,11,11,.05) 40%,rgba(11,11,11,.85) 100%)}
        .noir .hero-cap{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;
          justify-content:flex-end;padding:0 64px 60px}
        .noir .hero-h{font-family:'Cormorant Garamond',serif;font-size:128px;line-height:.9;
          font-weight:500;letter-spacing:-.01em;max-width:1000px;text-wrap:balance}
        .noir .hero-h em{font-style:italic;color:#cfcabf}
        .noir .hero-sub{display:flex;justify-content:space-between;align-items:flex-end;
          margin-top:34px;border-top:1px solid var(--line);padding-top:22px}
        .noir .hero-sub p{margin:0;max-width:430px;color:var(--mut);font-size:15px;line-height:1.6}
        .noir .scrolltag{font-size:11.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--mut)}
        .noir .work{padding:96px 64px 30px}
        .noir .sec-head{display:flex;justify-content:space-between;align-items:baseline;
          border-bottom:1px solid var(--line);padding-bottom:20px;margin-bottom:48px}
        .noir .sec-head h2{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:500;margin:0;font-style:italic}
        .noir .sec-head span{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--mut)}
        .noir .grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .noir .ph{position:relative;background:
          repeating-linear-gradient(135deg,#171717 0 11px,#131313 11px 22px);
          border:1px solid var(--line);display:flex;align-items:flex-end;padding:22px;overflow:hidden}
        .noir .ph .tag{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.06em;
          color:var(--mut);text-transform:uppercase}
        .noir .ph .idx{position:absolute;top:18px;right:22px;font-family:'IBM Plex Mono',monospace;
          font-size:11px;color:var(--mut)}
        .noir .tall{height:560px}
        .noir .wide{height:380px}
        .noir .span2{grid-column:span 2}
        .noir .cats{display:grid;grid-template-columns:repeat(3,1fr);margin-top:96px;border-top:1px solid var(--line)}
        .noir .cat{padding:40px 30px 46px;border-right:1px solid var(--line);min-height:200px;
          display:flex;flex-direction:column;justify-content:space-between;transition:background .25s}
        .noir .cat:last-child{border-right:0}
        .noir .cat:hover{background:#121212}
        .noir .cat .num{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--mut)}
        .noir .cat h3{font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:500;margin:18px 0 0}
        .noir .cat .en{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin-top:6px}
        .noir .cta{padding:120px 64px;text-align:center}
        .noir .cta p{font-size:12.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--mut);margin:0 0 26px}
        .noir .cta h2{font-family:'Cormorant Garamond',serif;font-size:88px;font-weight:500;
          line-height:1;margin:0 auto;max-width:900px}
        .noir .cta .btn{display:inline-flex;margin-top:44px;border:1px solid var(--ink);
          padding:17px 42px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;
          color:var(--ink);text-decoration:none;transition:.25s}
        .noir .cta .btn:hover{background:var(--ink);color:var(--bg)}
        .noir .foot{display:flex;justify-content:space-between;align-items:center;
          padding:34px 64px;border-top:1px solid var(--line);font-size:12px;
          letter-spacing:.1em;color:var(--mut);text-transform:uppercase}
      `}</style>

      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Werk</a></li>
          <li><a href="#">Over</a></li>
          <li><a href="#">Diensten</a></li>
        </ul>
        <div className="wordmark">By Ayvo</div>
        <div className="lang"><b>NL</b><span>/</span>EN</div>
      </nav>

      <header className="hero">
        <img src="assets/ayvo-portrait.jpeg" alt="" />
        <div className="hero-cap">
          <h1 className="hero-h">Stilte in <em>beweging</em>.<br/>Beelden die blijven.</h1>
          <div className="hero-sub">
            <p>Portret-, commerciële en reisfotografie in tijdloos zwart-wit. Gevestigd in Rotterdam, werkzaam waar het licht me brengt.</p>
            <span className="scrolltag">Scroll ↓ Selected work</span>
          </div>
        </div>
      </header>

      <section className="work">
        <div className="sec-head">
          <h2>Selected Work</h2>
          <span>2024 — 2026 · Index</span>
        </div>
        <div className="grid">
          <div className="ph tall"><span className="idx">01 / FF1.8</span><span className="tag">portret — studio</span></div>
          <div className="ph tall"><span className="idx">02 / 24mm</span><span className="tag">reizen — lissabon</span></div>
          <div className="ph wide span2"><span className="idx">03 / commercieel</span><span className="tag">product — campagne</span></div>
        </div>

        <div className="cats">
          {cats.map(c => (
            <div className="cat" key={c.n}>
              <span className="num">{c.n}</span>
              <div>
                <h3>{c.nl}</h3>
                <div className="en">{c.en} →</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <p>Laten we samenwerken</p>
        <h2>Een verhaal te <span className="serif" style={{fontStyle:'italic'}}>vertellen</span>?</h2>
        <a className="btn" href="#">Neem contact op</a>
      </section>

      <footer className="foot">
        <span>By Ayvo — Photography</span>
        <span>Instagram · hello@byayvo.com</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
window.NoirHome = NoirHome;
