/* By Ayvo — shared chrome + site behaviour */
(function () {
  var KEY = 'byayvo.lang';

  /* ---- nav + footer markup (single source of truth) ---- */
  var NAV_LINKS = [
    { href: 'index.html',     nl: 'Home',     en: 'Home',     page: 'home' },
    { href: 'portfolio.html', nl: 'Werk',     en: 'Work',     page: 'portfolio' },
    { href: 'over.html',      nl: 'Over',     en: 'About',    page: 'over' },
    { href: 'diensten.html',  nl: 'Diensten', en: 'Services', page: 'diensten' },
    { href: 'blog.html',      nl: 'Journal',  en: 'Journal',  page: 'blog' },
    { href: 'contact.html',   nl: 'Contact',  en: 'Contact',  page: 'contact' }
  ];

  function bi(nl, en) {
    return '<span data-lang-nl>' + nl + '</span><span data-lang-en>' + en + '</span>';
  }

  function buildNav(active) {
    var links = NAV_LINKS.map(function (l) {
      return '<li><a href="' + l.href + '"' + (l.page === active ? ' class="active"' : '') +
        '>' + bi(l.nl, l.en) + '</a></li>';
    }).join('');
    return '' +
      '<nav class="nav">' +
        '<div class="nav-in">' +
          '<a class="brand" href="index.html">By Ayvo<span class="dot">.</span></a>' +
          '<ul class="nav-links">' + links + '</ul>' +
          '<div class="nav-right">' +
            '<div class="lang-toggle" role="group" aria-label="Language">' +
              '<button data-setlang="nl">NL</button><button data-setlang="en">EN</button>' +
            '</div>' +
            '<a class="nav-cta" href="contact.html">' + bi('Boek nu', 'Book now') + '</a>' +
            '<button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  function buildFoot() {
    var siteCol = NAV_LINKS.filter(function (l) { return l.page !== 'home'; }).map(function (l) {
      return '<a href="' + l.href + '">' + bi(l.nl, l.en) + '</a>';
    }).join('');
    return '' +
      '<footer class="foot">' +
        '<div class="foot-top">' +
          '<div>' +
            '<h3>' + bi('Laten we iets<br>maken met <em>lef</em>.', 'Let\u2019s make<br>something <em>bold</em>.') + '</h3>' +
            '<a class="btn foot-cta" href="contact.html">' + bi('Start een project', 'Start a project') +
              ' <span class="arr">\u2192</span></a>' +
          '</div>' +
          '<div class="col"><h4>Site</h4>' + siteCol + '</div>' +
          '<div class="col"><h4>Contact</h4>' +
            '<a href="mailto:hello@byayvo.com">hello@byayvo.com</a>' +
            '<a href="tel:+31612345678">+31 6 1234 5678</a>' +
            '<a href="#">Rotterdam, NL</a>' +
            '<a href="#">Instagram \u2197</a>' +
          '</div>' +
        '</div>' +
        '<div class="foot-bot">' +
          '<span>\u00a9 <span data-year></span> By Ayvo \u2014 ' + bi('Fotografie', 'Photography') + '</span>' +
          '<span>' + bi('Portret \u00b7 Commercieel \u00b7 Reizen', 'Portrait \u00b7 Commercial \u00b7 Travel') + '</span>' +
          '<span>NL / EN</span>' +
        '</div>' +
      '</footer>';
  }

  function injectChrome() {
    var active = document.body.getAttribute('data-page') || '';
    var navMount = document.querySelector('[data-nav]');
    var footMount = document.querySelector('[data-foot]');
    if (navMount) navMount.outerHTML = buildNav(active);
    if (footMount) footMount.outerHTML = buildFoot();
  }

  /* ---- language ---- */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.setlang === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  function initLang() {
    var saved = 'nl';
    try { saved = localStorage.getItem(KEY) || 'nl'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.setlang); });
    });
  }

  function initNav() {
    var nav = document.querySelector('.nav');
    var burger = document.querySelector('.burger');
    if (burger && nav) {
      burger.addEventListener('click', function () { nav.classList.toggle('open'); });
      nav.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () { nav.classList.remove('open'); });
      });
    }
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (e) { e.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (e) {
      e.textContent = new Date().getFullYear();
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    injectChrome();
    initLang(); initNav(); initReveal(); initYear();
  });
})();
