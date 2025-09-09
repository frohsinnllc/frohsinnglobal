
function setLang(lang){
  document.documentElement.setAttribute('lang', lang);
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(n=>{
    const key=n.getAttribute('data-i18n');
    n.textContent = (window.i18n[lang] && window.i18n[lang][key]) || n.textContent;
  });
  // Update placeholders
  const ph = document.querySelectorAll('[data-ph]');
  ph.forEach(n=>{
    const key=n.getAttribute('data-ph');
    const val=(window.i18n[lang] && window.i18n[lang][key]) || n.getAttribute('placeholder');
    n.setAttribute('placeholder', val);
  });
  localStorage.setItem('lang',lang);
}
function smoothScrollTo(id){
  document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
}
window.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('lang') || (navigator.language.startsWith('de')?'de':'en');
  setLang(saved);
  document.getElementById('lang').value = saved;
  document.getElementById('lang').addEventListener('change', (e)=> setLang(e.target.value));
});
window.i18n = {
  de:{
    'nav_about':'Über uns','nav_services':'Leistungen','nav_proof':'Nachweise','nav_contact':'Kontakt',
    'hero_kicker':'Beratung • Operations • Media',
    'hero_title':'Struktur. Compliance. Wachstum.',
    'hero_sub':'Frohsinn LLC unterstützt Unternehmer und Marken mit präziser Finanz- & Medienstrategie, schlanken Prozessen und bankfähiger Dokumentation.',
    'hero_cta':'Unverbindliches Gespräch',
    'about_t':'Profil',
    'about_p1':'Wir sind eine in Wyoming (USA) registrierte LLC mit operativem Schwerpunkt in der EU. Unser Fokus: klare Strukturen, rechtskonforme Umsetzung und messbare Ergebnisse.',
    'about_p2':'Für Banken und Partner stellen wir vollständige, nachvollziehbare Unterlagen bereit – inklusive KYC-konformer Prozesse und sauberer Trennung von EU- und US-Aktivitäten.',
    'services_t':'Leistungen',
    's1_t':'Finance & Compliance',
    's1_p':'Bank‑ready Unterlagen, Cash‑Flow‑Struktur, Rechnungsabläufe, Policy‑Frameworks (GDPR, TMG), UBO/BOI‑Abstimmung.',
    's2_t':'Media & Brand',
    's2_p':'Brand‑Setup, einheitliche Assets, Pitch‑Material, Web‑Präsenz, Social Content, Reporting.',
    's3_t':'Ops & Staffing',
    's3_p':'Projektsteuerung, Einsatzplanung (Stagehands/Crew), Lieferanten‑Onboarding, SLA‑Checks, Vor‑Ort‑Koordination.',
    'proof_t':'Vertrauen',
    'proof_p1':'Registriert in Wyoming, USA. Operative Präsenz in Deutschland.',
    'proof_p2':'Dokumentierte Prozesse: Angebots‑ & Rechnungsabläufe, Vier‑Augen‑Prinzip, revisionssichere Archivierung.',
    'contact_t':'Kontakt',
    'form_name':'Voller Name','form_mail':'E‑Mail','form_msg':'Worum geht es?',
    'form_btn':'Nachricht senden',
    'foot_left':"© "+new Date().getFullYear()+" Frohsinn LLC — Alle Rechte vorbehalten.",
    'foot_right':"Impressum · Datenschutz · AGB"
  },
  en:{
    'nav_about':'About','nav_services':'Services','nav_proof':'Trust','nav_contact':'Contact',
    'hero_kicker':'Advisory • Operations • Media',
    'hero_title':'Structure. Compliance. Growth.',
    'hero_sub':'Frohsinn LLC helps founders and brands with precise finance & media strategy, lean operations, and bank‑ready documentation.',
    'hero_cta':'Book a call',
    'about_t':'Profile',
    'about_p1':'We are a Wyoming (USA) LLC with operational focus in the EU. Our priorities: clear structures, compliant execution, measurable outcomes.',
    'about_p2':'For banks and partners we provide complete, auditable documentation — including KYC‑aligned processes and clean separation of EU vs. US activities.',
    'services_t':'Services',
    's1_t':'Finance & Compliance',
    's1_p':'Bank‑ready documentation, cash‑flow structure, invoicing flows, policy frameworks (GDPR, TMG), UBO/BOI alignment.',
    's2_t':'Media & Brand',
    's2_p':'Brand setup, unified assets, pitch materials, web presence, social content, reporting.',
    's3_t':'Ops & Staffing',
    's3_p':'Project control, workforce scheduling (stagehands/crew), vendor onboarding, SLA checks, on‑site coordination.',
    'proof_t':'Trust',
    'proof_p1':'Registered in Wyoming, USA. Operational presence in Germany.',
    'proof_p2':'Documented processes: offers & invoicing flows, four‑eyes principle, audit‑proof archiving.',
    'contact_t':'Contact',
    'form_name':'Full Name','form_mail':'Email','form_msg':'How can we help?',
    'form_btn':'Send message',
    'foot_left':"© "+new Date().getFullYear()+" Frohsinn LLC — All rights reserved.",
    'foot_right':"Imprint · Privacy · Terms"
  }
};
