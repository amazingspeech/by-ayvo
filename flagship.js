/* ============================================================
   By Ayvo — FLAGSHIP motion
   ============================================================ */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

  /* arm hero reveal only when motion is OK + JS runs (base stays visible) */
  if (!reduce) document.querySelector('.hero')?.classList.add('armed');

  /* ---------- loader ---------- */
  const loader = document.querySelector('.loader');
  const bar = document.querySelector('.loader-bar');
  const count = document.querySelector('.loader-count');
  function finishLoad(){
    document.querySelector('.lead')?.classList.add('in');
  }
  if (loader && !reduce){
    let p = 0;
    const t = setInterval(() => {
      p += Math.random()*16 + 6;
      if (p >= 100){ p = 100; clearInterval(t); }
      if (bar) bar.style.width = p + '%';
      if (count) count.textContent = String(Math.floor(p)).padStart(3,'0');
      if (p === 100){
        setTimeout(() => { loader.classList.add('done'); finishLoad(); }, 360);
      }
    }, 130);
  } else {
    loader?.classList.add('done');
    finishLoad();
  }

  /* ---------- custom cursor ---------- */
  if (fine){
    const dot = document.querySelector('.cursor');
    const ring = document.querySelector('.cursor-ring');
    let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
    addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if (dot) dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    });
    (function ring_loop(){
      rx += (mx-rx)*.18; ry += (my-ry)*.18;
      if (ring) ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(ring_loop);
    })();
    document.querySelectorAll('[data-cursor="view"]').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cur-view'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cur-view'));
    });
    document.querySelectorAll('a,button,.btn,.more').forEach(el => {
      if (el.closest('[data-cursor="view"]')) return;
      el.addEventListener('mouseenter', () => document.body.classList.add('cur-link'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cur-link'));
    });
  }

  /* ---------- scroll progress + nav solidify ---------- */
  const prog = document.querySelector('.progress');
  const nav = document.querySelector('.nav');
  const hasHero = !!document.querySelector('.hero');
  function onScroll(){
    const h = document.documentElement;
    const sc = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (prog) prog.style.width = (sc*100) + '%';
    if (nav){
      if (hasHero){
        const past = h.scrollTop > innerHeight*0.72;
        nav.classList.toggle('solid', past);
        nav.classList.toggle('on-dark', !past); // light text while over dark hero
      } else {
        nav.classList.add('solid'); // light pages: always solid bar
      }
    }
  }
  addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.16, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv,.lead').forEach(el => io.observe(el));
  // safety net: never leave content hidden if observers are throttled
  addEventListener('load', () => setTimeout(() => {
    document.querySelectorAll('.rv,.lead').forEach(el => el.classList.add('in'));
  }, 1200));

  if (reduce) return; // everything below is decorative motion

  /* ---------- manifesto word-by-word light-up ---------- */
  const mani = document.querySelector('.mani-h');
  if (mani){
    const words = [...mani.querySelectorAll('.w')];
    const mio = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting){
          const i = words.indexOf(e.target);
          e.target.style.transitionDelay = (i*0.05)+'s';
          e.target.classList.add('lit'); mio.unobserve(e.target);
        }
      });
    }, {threshold:1, rootMargin:'0px 0px -22% 0px'});
    words.forEach(w => mio.observe(w));
  }

  /* ---------- parallax (hero depth, case images, about) ---------- */
  const px = [];
  document.querySelectorAll('[data-px]').forEach(el => px.push({el, s:+el.dataset.px}));
  let ticking = false;
  function parallax(){
    const vh = innerHeight;
    px.forEach(p => {
      const r = p.el.getBoundingClientRect();
      const mid = r.top + r.height/2;
      const off = (mid - vh/2) / vh; // -1..1
      p.el.style.transform = `translate3d(0, ${(-off*p.s)}px, 0)`;
    });
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking){ ticking = true; requestAnimationFrame(parallax); } }, {passive:true});
  parallax();

  /* ---------- hero cursor depth ---------- */
  const hero = document.querySelector('.hero');
  const depth = document.querySelector('.hero-depth');
  if (hero && depth && fine){
    let tx=0,ty=0,cx=0,cy=0;
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX-r.left)/r.width - .5;
      ty = (e.clientY-r.top)/r.height - .5;
    });
    hero.addEventListener('mouseleave', () => { tx=0; ty=0; });
    (function depth_loop(){
      cx += (tx-cx)*.06; cy += (ty-cy)*.06;
      depth.style.transform = `scale(1.08) translate(${-cx*22}px,${-cy*22}px)`;
      requestAnimationFrame(depth_loop);
    })();
  }

  /* ---------- scroll-reactieve kinetische regel ---------- */
  const kin = document.querySelector('.kinetic-track');
  if (kin){
    let x = 0, vx = 0, last = window.scrollY;
    addEventListener('scroll', () => { const d = scrollY - last; last = scrollY; vx += d; }, {passive:true});
    const half = () => (kin.scrollWidth / 2) || 1;
    (function kin_loop(){
      x -= 0.35;            // rustige basisdrift
      x -= vx * 0.22;       // scroll duwt de regel
      let sk = vx * 0.35; sk = Math.max(-7, Math.min(7, sk));
      vx *= 0.86;           // demping
      const w = half();
      if (x <= -w) x += w; else if (x > 0) x -= w;
      kin.style.transform = `translateX(${x}px) skewX(${sk.toFixed(2)}deg)`;
      requestAnimationFrame(kin_loop);
    })();
  }

  /* ---------- magnetic buttons ---------- */
  if (fine){
    document.querySelectorAll('[data-mag]').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top - r.height/2;
        btn.style.transform = `translate(${x*.3}px,${y*.45}px)`;
      });
      btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0,0)');
    });
  }

  /* ---------- specialism cursor-follow preview ---------- */
  const preview = document.querySelector('.spec-preview');
  if (preview && fine){
    const slots = [...preview.children];
    let active = -1, tx=0, ty=0, cx=innerWidth/2, cy=innerHeight/2, on=false;
    document.querySelectorAll('.srow').forEach((row, i) => {
      row.addEventListener('mouseenter', () => {
        active = i; on = true; preview.classList.add('on');
        slots.forEach((s,si) => s.style.opacity = si===i ? '1':'0');
      });
      row.addEventListener('mouseleave', () => { on = false; preview.classList.remove('on'); });
    });
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    (function prev_loop(){
      cx += (tx-cx)*.14; cy += (ty-cy)*.14;
      preview.style.left = cx+'px'; preview.style.top = cy+'px';
      requestAnimationFrame(prev_loop);
    })();
  }
})();
