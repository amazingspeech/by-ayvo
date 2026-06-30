/* ============================================================
   By Ayvo — gedeelde CMS-laag
   Laadt content/*.json (door Decap beheerd) met ingebouwde
   fallback, en levert helpers + een boot() die NA render de
   motion (flagship.js) laadt zodat alles correct bindt.
   window.CMS = { esc, accent, fmtDate, load, boot }
   ============================================================ */
window.CMS = (() => {
  const FB = {
    settings: {
      brand: "By Ayvo",
      hero: { image:"assets/hero.jpg", location:"Fotografie · Rotterdam", availability:"Beschikbaar 2027",
        title_line1:"Wat woorden", title_line2:"*niet* zeggen.",
        subtitle:"Portret, merk en reizen. Ik luister naar wat mensen niet zeggen, en leg vast wat blijft." },
      stats:[{value:"120+",label:"shoots per jaar"},{value:"8 jr",label:"achter de lens"},{value:"3",label:"specialismen"}],
      contact:{ email:"hello@byayvo.nl", phone:"+31 6 1234 5678", instagram_url:"https://instagram.com/byayvo", instagram_label:"Instagram" }
    },
    projects: { projects: [
      {title:"Drummer",category:"Portret",date:"2026",featured:false,cover:"assets/drummer.jpg",description:"Ritme, zweet en focus. Een portret op het moment net voor de eerste slag.",gallery:["assets/drummer.jpg"]},
      {title:"Zwart paviljoen",category:"Commercieel",date:"2026",featured:true,cover:"assets/architectuur-zwart.jpg",description:"Een studie in vorm, materiaal en licht. Een strak zwart volume tegen witte muren, waar architectuur bijna een portret wordt.",gallery:["assets/architectuur-zwart.jpg"]},
      {title:"Masca",category:"Reizen",date:"2025",featured:false,cover:"assets/tenerife-masca.jpg",description:"Het ravijn van Masca bij vroeg licht — diepte, mist en stilte.",gallery:["assets/tenerife-masca.jpg","assets/tenerife-bergen.jpg"]},
      {title:"Casa",category:"Reizen",date:"2025",featured:false,cover:"assets/casa-deur.jpg",description:"Kleur, textuur en het toeval van een open deur.",gallery:["assets/casa-deur.jpg","assets/tenerife-casa-mesa.jpg"]},
      {title:"Straat",category:"Reizen",date:"2025",featured:false,cover:"assets/tenerife-straat.jpg",description:"Mensen, licht en het ritme van de stad.",gallery:["assets/tenerife-straat.jpg","assets/tenerife-laguna2.jpg"]}
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
      cta:{ eyebrow:"Laten we iets maken", title_line1:"Klaar voor", title_line2:"jouw *verhaal*?", button:"Plan een shoot" },
      over:{
        portrait:"assets/ayvo-portrait.jpeg",
        lead:"Ik fotografeer mensen, merken en plekken, en zoek daarin de emotie die *niemand* uitspreekt.",
        bio:[
          "Ik ben niet als fotograaf begonnen. Tijdens mijn grafische opleiding kreeg ik er steeds meer mee te maken, en in mijn jaren als dj stond ik zelf vaak aan de andere kant van de lens.",
          "Hoe ouder ik werd, hoe meer ik het bestaan zelf ben gaan waarderen. Dat leg ik vast: niet de perfecte pose, maar het moment waarop iemand even helemaal zichzelf is.",
          "Ik werk vanuit Rotterdam, voor mensen en merken door heel Europa."
        ],
        approach:[
          {title:"Voorbereiding",text:"Elke shoot begint met een gesprek. Wie ben je, wat wil je zeggen, en voor wie? Het beeld volgt daaruit, niet andersom."},
          {title:"De shoot",text:"Rustig tempo, weinig poespas. Eén lichtbron, veel geduld en ruimte voor het toeval. Daar gebeurt het echte werk."},
          {title:"Nabewerking",text:"Een eigen ontwikkeling met diep contrast en behoud van textuur, in kleur of zwart-wit. Geleverd als hi-res, klaar voor print en web."}
        ]
      },
      contact:{
        eyebrow:"Beschikbaar voor opdrachten",
        title_line1:"Zeg",
        title_line2:"*hallo*.",
        intro:"Vertel me over je project — idee, datum, locatie. Ik denk graag mee.",
        studio_lines:["Rotterdam, NL","Op afspraak, door heel Europa beschikbaar."]
      }
    }
  };

  const esc = (s='') => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const accent = (s='') => esc(s).replace(/\*(.+?)\*/g,'<em>$1</em>');
  const fmtDate = (d) => { try{ return new Date(d).toLocaleDateString('nl-NL',{day:'2-digit',month:'2-digit',year:'numeric'}); }catch(e){ return d; } };

  async function one(path, fb){
    try{ const r = await fetch(path,{cache:'no-store'}); if(!r.ok) throw 0; return await r.json(); }
    catch(e){ return fb; }
  }
  async function load(){
    const [settings, projects, journal, pages] = await Promise.all([
      one('content/settings.json', FB.settings),
      one('content/projects.json', FB.projects),
      one('content/journal.json', FB.journal),
      one('content/pages.json', FB.pages),
    ]);
    return { settings, projects, journal, pages, FB };
  }
  async function boot(render){
    const data = await load();
    try{ render(data); }
    catch(e){ console.warn('CMS render fallback', e); render({ ...data, settings:FB.settings, projects:FB.projects, journal:FB.journal, pages:FB.pages, FB }); }
    const sc = document.createElement('script'); sc.src='flagship.js'; document.body.appendChild(sc);
  }
  return { esc, accent, fmtDate, load, boot, FB };
})();
