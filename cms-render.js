/* ============================================================
   By Ayvo — CMS hydration
   Leest content/*.json (door Decap CMS beheerd) en vult de
   homepage. Valt terug op ingebouwde data als fetch faalt,
   zodat de pagina altijd rendert. Laadt flagship.js NA render
   zodat alle motion aan de verse elementen bindt.
   ============================================================ */
(() => {
  /* ---------- fallback data (identiek aan content/*.json) ---------- */
  const FB = {
    settings: {
      brand: "By Ayvo",
      hero: { image:"assets/hero.jpg", location:"Fotografie · Rotterdam", availability:"Beschikbaar 2027",
        title_line1:"Wat woorden", title_line2:"*niet* zeggen.",
        subtitle:"Portret, merk en reizen. Ik luister naar wat mensen niet zeggen, en leg vast wat blijft." },
      stats:[{value:"120+",label:"shoots per jaar"},{value:"8 jr",label:"achter de lens"},{value:"3",label:"specialismen"}],
      contact:{ email:"hello@byayvo.nl", instagram_url:"https://instagram.com/byayvo", instagram_label:"Instagram" }
    },
    projects: { projects: [
      {title:"Drummer",category:"Portret",date:"2026",featured:false,cover:"assets/drummer.jpg",description:"Ritme, zweet en focus."},
      {title:"Zwart paviljoen",category:"Commercieel",date:"2026",featured:true,cover:"assets/architectuur-zwart.jpg",description:"Een studie in vorm, materiaal en licht. Een strak zwart volume tegen witte muren, waar architectuur bijna een portret wordt."},
      {title:"Masca",category:"Reizen",date:"2025",featured:false,cover:"assets/tenerife-masca.jpg",description:"Het ravijn van Masca bij vroeg licht."},
      {title:"Casa",category:"Reizen",date:"2025",featured:false,cover:"assets/casa-deur.jpg",description:"Kleur, textuur en het toeval van een open deur."},
      {title:"Straat",category:"Reizen",date:"2025",featured:false,cover:"assets/tenerife-straat.jpg",description:"Mensen, licht en het ritme van de stad."}
    ]},
    journal: { posts:[
      {title:"Aan de andere kant van de lens",date:"2026-06-12",category:"Portret",cover:"assets/drummer.jpg",excerpt:""},
      {title:"Het licht van Tenerife",date:"2026-05-02",category:"Reizen",cover:"assets/tenerife-masca.jpg",excerpt:""},
      {title:"De emotie die niemand uitspreekt",date:"2026-03-14",category:"Techniek",cover:"assets/architectuur-zwart.jpg",excerpt:""}
    ]},
    pages: {
      manifest:"Ik kom uit de *muziek*. Het juiste moment voelde ik ooit in een ritme; nu vind ik het door de *lens*, vlak voordat het voorbij is.",
      about:{ image:"assets/ayvo-portrait.jpeg", lead:"Ik ben Ayvo. Ik leg de emotie vast die mensen *niet* uitspreken, eerlijk en dichtbij, met oog voor het licht.",
        body:"Studio of op locatie, portret of merk: het draait om het moment net vóór en net ná de pose. Daar zit het verhaal.", link_label:"Meer over mij" },
      cta:{ eyebrow:"Laten we iets maken", title_line1:"Klaar voor", title_line2:"jouw *verhaal*?", button:"Plan een shoot" }
    }
  };

  /* ---------- helpers ---------- */
  const $ = (s) => document.querySelector(s);
  const esc = (s='') => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const accent = (s='') => esc(s).replace(/\*(.+?)\*/g,'<em>$1</em>');
  const setText = (sel,v) => { const el=$(sel); if(el && v!=null) el.textContent=v; };
  const setHTML = (sel,v) => { const el=$(sel); if(el && v!=null) el.innerHTML=v; };
  const setSrc  = (sel,v) => { const el=$(sel); if(el && v) el.setAttribute('src',v); };
  const fmtDate = (d) => { try{ return new Date(d).toLocaleDateString('nl-NL',{day:'2-digit',month:'2-digit',year:'numeric'}); }catch(e){ return d; } };

  async function loadJSON(path, fb){
    try{ const r = await fetch(path,{cache:'no-store'}); if(!r.ok) throw 0; return await r.json(); }
    catch(e){ return fb; }
  }

  /* ---------- render ---------- */
  function render(s, pj, jr, pg){
    /* hero */
    setSrc('#heroSlot', s.hero.image);
    setText('#heroLoc', s.hero.location);
    setText('#heroAvail', s.hero.availability);
    setText('#heroTitle1', s.hero.title_line1);
    setHTML('#heroTitle2', accent(s.hero.title_line2));
    setText('#heroSub', s.hero.subtitle);

    /* stats */
    const sr = $('#statRow');
    if(sr) sr.innerHTML = (s.stats||[]).map(x=>`<div><b>${esc(x.value)}</b>${esc(x.label)}</div>`).join('');

    /* contact */
    const mail = $('#ctaMail'); if(mail){ mail.textContent=s.contact.email; mail.href='mailto:'+s.contact.email; }
    const insta = $('#footInsta'); if(insta){ insta.textContent=s.contact.instagram_label||'Instagram'; insta.href=s.contact.instagram_url||'#'; }

    /* manifest — woord voor woord */
    const mh = $('#maniText');
    if(mh){
      mh.innerHTML = (pg.manifest||'').split(/\s+/).map(tok=>{
        const m = tok.match(/^\*(.+)\*([.,!?;:—-]*)$/);
        const inner = m ? '<em>'+esc(m[1])+'</em>'+esc(m[2]) : esc(tok);
        return `<span class="w">${inner}</span>`;
      }).join(' ');
    }

    /* horizontale strook */
    const ks = $('#kstrip');
    const projects = (pj.projects||[]);
    if(ks){
      ks.innerHTML = projects.map((p,i)=>{
        const n = String(i+1).padStart(2,'0');
        return `<div class="kslide"><div class="km"><image-slot id="vip-strip-${i+1}" shape="rect" fit="cover" src="${esc(p.cover)}" placeholder="${n}"></image-slot></div>
        <div class="kcap"><h3>${esc(p.title)}</h3><span class="n">${esc(p.category)} · ${n}</span></div></div>`;
      }).join('');
    }

    /* uitgelichte case */
    const fc = $('#featuredCase');
    if(fc){
      const f = projects.find(p=>p.featured) || projects[0];
      if(f){
        fc.innerHTML = `<div class="case-media" data-cursor="view">
          <span class="case-tag">${esc(f.date||'')} / Uitgelicht</span>
          <div class="pimg" data-px="60"><image-slot id="vip-case" shape="rect" fit="cover" src="${esc(f.cover)}" placeholder="uitgelicht"></image-slot></div>
        </div>
        <div class="case-meta">
          <span class="ix">${esc(f.category||'')}</span>
          <h3>${esc(f.title||'')}</h3>
          <p>${esc(f.description||'')}</p>
          <a class="more" href="portfolio.html">Bekijk project <span class="arr">→</span></a>
        </div>`;
      }
    }

    /* specialismen-preview — per categorie eerste project */
    const sp = $('#specPreview');
    if(sp){
      const cats = ['Portret','Commercieel','Reizen'];
      sp.innerHTML = cats.map((c,i)=>{
        const p = projects.find(x=>x.category===c);
        const src = p ? p.cover : (projects[i]?projects[i].cover:'');
        return `<image-slot id="vip-prev-${i+1}" shape="rect" fit="cover" src="${esc(src)}" placeholder="${esc(c)}"></image-slot>`;
      }).join('');
    }

    /* over */
    setSrc('#aboutSlot', pg.about.image);
    setHTML('#aboutLead', accent(pg.about.lead));
    setText('#aboutBody', pg.about.body);
    setText('#aboutLink', pg.about.link_label);

    /* journal */
    const jg = $('#journalGrid');
    if(jg){
      jg.innerHTML = (jr.posts||[]).slice(0,3).map(p=>`<a class="jt-card rv" href="blog.html">
        <div class="jt-img"><image-slot shape="rect" fit="cover" src="${esc(p.cover)}" placeholder=""></image-slot></div>
        <span class="mono jt-meta">${esc(fmtDate(p.date))} · ${esc(p.category||'')}</span>
        <h3>${esc(p.title)}</h3></a>`).join('');
    }

    /* cta */
    setText('#ctaEyebrow', pg.cta.eyebrow);
    setText('#ctaTitle1', pg.cta.title_line1);
    setHTML('#ctaTitle2', accent(pg.cta.title_line2));
    const cb = $('#ctaBtn'); if(cb){ cb.firstChild && (cb.childNodes[0].nodeValue = pg.cta.button+' '); }
  }

  /* ---------- boot ---------- */
  (async () => {
    const [s, pj, jr, pg] = await Promise.all([
      loadJSON('content/settings.json', FB.settings),
      loadJSON('content/projects.json', FB.projects),
      loadJSON('content/journal.json', FB.journal),
      loadJSON('content/pages.json', FB.pages),
    ]);
    try{ render(s, pj, jr, pg); }
    catch(e){ console.warn('CMS render fallback', e); render(FB.settings, FB.projects, FB.journal, FB.pages); }
    // motion init NA render zodat cursor/parallax/reveal aan verse elementen binden
    const sc = document.createElement('script'); sc.src='flagship.js'; document.body.appendChild(sc);
  })();
})();
