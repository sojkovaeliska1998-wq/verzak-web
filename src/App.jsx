
import { useEffect, useState } from "react";

// --- Jednoduchý i18n: dvojice konfigurací + přepínač jazyka (CS/EN) ---
const configCs = {
  lang: "cs",
  brand: { primary: "#9a6185", logoUrl: "https://www.verzak.cz/logo.png", logoAlt: "Logo Advokátní kancelář JUDr. Vladimír Tögel" },
  nav: { services: "Služby", team: "Tým", whyUs: "Proč my", references: "Reference", contact: "Kontakt" },
  firmName: "Advokátní kancelář JUDr. Vladimír Tögel – advokát",
  tagline: "Administrativně‑organizační a právní servis zadávání veřejných zakázek",
  phone: "+420 257 214 317",
  phoneAlt: "+420 603 540 010",
  fax: "+420 257 214 614",
  email: "togel.advokat@verzak.cz",
  addressLine1: "Ostrovského 253/3 (Ženské domovy – 5. patro – kancelář 5.098)",
  addressLine2: "150 00 Praha 5 – Smíchov",
  ico: "12493031",
  dic: "CZ6004050195",
  barId: "ČAK: 04993",
  dataBox: "xvff4wu",
  mapEmbedQuery: "Ostrovského 253/3 Praha 5",
  opening: [
    { d: "Po – Pá", h: "po předchozí dohodě" },
    { d: "Mimořádné termíny", h: "dle dohody" },
  ],
  social: [],
  services: [
    { id: "zadavatel-a-z", title: "Zadavatelé: A → Z", desc: "Kompletní vedení zadávacích řízení od přípravy dokumentace po uzavření smlouvy." },
    { id: "administrace", title: "Zveřejnění a administrace", desc: "Zahájení řízení, zveřejnění ve Věstníku/profilu, vyřizování dotazů." },
    { id: "hodnoceni", title: "Posouzení a hodnocení", desc: "Otevírání nabídek, posouzení kvalifikace, mimořádně nízká cena, Zpráva o hodnocení." },
    { id: "pravni-vyceprace", title: "Právní vícepráce", desc: "Vyloučení účastníků, námitky, střet zájmů, sankční a omezující režimy." },
    { id: "po-smlouve", title: "Po uzavření smlouvy", desc: "ÚOHS a soudy, změny závazků, dodatky, stanoviska a kontrola postupů." },
    { id: "dodavatele", title: "Služby pro dodavatele", desc: "Předběžný zájem, žádosti o účast, nabídky, opravné prostředky (námitky, návrhy, rozklady, žaloby)." },
  ],
  team: [
    { name: "JUDr. Vladimír Tögel", role: "Advokát – zakladatel (1999)", bio: "Veřejné zakázky od roku 1994; praxe: Vítkovice, Vojenské stavby, Ministerstvo obrany (Akviziční úřad).", email: "togel@verzak.cz" },
    { name: "Mgr. Zuzana Hradil Gawlová", role: "Samostatná advokátka", bio: "Veřejné zakázky od 2007; spolupráce s AK JUDr. Tögla; právní služby i v angličtině.", email: "gawlova@verzak.cz" },
    { name: "Mgr. Helena Čížková", role: "Samostatná advokátka", bio: "Praxe na MV ČR; veřejné zakázky systematicky od 2016; koncipientská praxe a státní správa.", email: "cizkova@verzak.cz" },
    { name: "Mgr. Marcela Hřebíčková", role: "Samostatná advokátka", bio: "Advokátka od 2003 (Jihlava), generální praxe; spolupráce s AK JUDr. Tögla od 2019.", email: "hrebickova@verzak.cz" },
    { name: "JUDr. Darina Jandová, Ph.D.", role: "Samostatná advokátka", bio: "Praxe v advokacii i justici (Vrchní soud v Praze); zaměření na veřejné zakázky od 2019; AJ.", email: "jandova@verzak.cz" },
    { name: "Mgr. Eliška Sojková", role: "Právní specialista veřejných zakázek", bio: "Veřejné zakázky od 2018; ZČU Plzeň, Panevropská univerzita (Bc. a Mgr.); VZ v angličtině.", email: "sojkova@verzak.cz" },
  ],
  testimonials: [],
  labels: {
    heroCall: "Domluvit konzultaci",
    mapOpen: "Otevřít v Mapách",
    ourServices: "Naše služby",
    ourTeam: "Náš tým",
    whyUs: "Proč právě my",
    references: "Reference",
    contact: "Kontakt",
    contactLead: "Rádi si s vámi domluvíme nezávaznou konzultaci. Napište nám nebo zavolejte.",
    send: "Odeslat",
    name: "Jméno",
    email: "E‑mail",
    message: "Zpráva",
    cookieText: "Tento web používá pouze nezbytné cookies pro funkčnost. Analytiku načteme až po vašem souhlasu.",
    allowAll: "Povolit vše",
    onlyNecessary: "Pouze nezbytné",
    gdprTitle: "Ochrana osobních údajů (základní informace)",
    gdprText: "Správcem osobních údajů je {firmName}. Údaje z kontaktního formuláře zpracováváme pouze za účelem vyřízení vašeho dotazu a po nezbytnou dobu. Máte právo na přístup, opravu a výmaz.",
    cookiesTitle: "Zásady cookies",
    cookiesText: "Používáme technicky nezbytné cookies. Analytické cookies načítáme až po udělení souhlasu. Nastavení lze kdykoli změnit v patičce webu.",
    phoneLabel: "Zavolat",
    contactHours: "Otevírací doba",
  },
};

const configEn = {
  lang: "en",
  brand: { primary: "#9a6185", logoUrl: "https://www.verzak.cz/logo.png", logoAlt: "Law Office JUDr. Vladimír Tögel logo" },
  nav: { services: "Services", team: "Team", whyUs: "Why us", references: "References", contact: "Contact" },
  firmName: "Law Office JUDr. Vladimír Tögel",
  tagline: "Administrative and legal support for public procurement",
  phone: "+420 257 214 317",
  phoneAlt: "+420 603 540 010",
  fax: "+420 257 214 614",
  email: "togel.advokat@verzak.cz",
  addressLine1: "Ostrovského 253/3 (Ženské domovy – 5th floor – Office 5.098)",
  addressLine2: "150 00 Prague 5 – Smíchov",
  ico: "12493031",
  dic: "CZ6004050195",
  barId: "Czech Bar Association: 04993",
  dataBox: "xvff4wu",
  mapEmbedQuery: "Ostrovského 253/3 Praha 5",
  opening: [
    { d: "Mon – Fri", h: "by appointment" },
    { d: "Extra hours", h: "upon agreement" },
  ],
  social: [],
  services: [
    { id: "zadavatel-a-z", title: "Contracting authorities: A → Z", desc: "End‑to‑end management of procurement procedures from tender docs to contract signature." },
    { id: "administrace", title: "Publication & administration", desc: "Launching procedures, publication, handling bidders’ questions." },
    { id: "hodnoceni", title: "Evaluation", desc: "Bid opening, qualification review, abnormally low price, Evaluation Report." },
    { id: "pravni-vyceprace", title: "Legal remedies & issues", desc: "Exclusions, objections, conflict of interest, sanctions and special regimes." },
    { id: "po-smlouve", title: "After contract award", desc: "Proceedings before the Office for the Protection of Competition and courts, amendments and change control." },
    { id: "dodavatele", title: "For bidders", desc: "EOIs, requests to participate, bids, remedies (objections, petitions, appeals, court actions)." },
  ],
  team: [
    { name: "JUDr. Vladimír Tögel", role: "Attorney – founder (1999)", bio: "Public procurement since 1994; experience with Vitkovice, Military Construction, Ministry of Defence (Acquisition Office).", email: "togel@verzak.cz" },
    { name: "Mgr. Zuzana Hradil Gawlová", role: "Attorney (of counsel)", bio: "Public procurement since 2007; cooperation with the Law Office of JUDr. Tögel; legal services also in English.", email: "gawlova@verzak.cz" },
    { name: "Mgr. Helena Čížková", role: "Attorney (of counsel)", bio: "Experience at the Ministry of the Interior; systematic focus on procurement since 2016; trainee practice and public administration.", email: "cizkova@verzak.cz" },
    { name: "Mgr. Marcela Hřebíčková", role: "Attorney (of counsel)", bio: "Attorney since 2003 (Jihlava), general practice; cooperation with the Law Office of JUDr. Tögel since 2019.", email: "hrebickova@verzak.cz" },
    { name: "JUDr. Darina Jandová, Ph.D.", role: "Attorney (of counsel)", bio: "Practice in advocacy and judiciary (High Court in Prague); focus on procurement since 2019; English.", email: "jandova@verzak.cz" },
    { name: "Mgr. Eliška Sojková", role: "Public procurement specialist", bio: "Public procurement since 2018; ZČU Pilsen & Pan‑European University (BSc & MSc); English‑language tenders.", email: "sojkova@verzak.cz" },
  ],
  testimonials: [],
  labels: {
    heroCall: "Book a consultation",
    mapOpen: "Open in Maps",
    ourServices: "Our services",
    ourTeam: "Our team",
    whyUs: "Why us",
    references: "References",
    contact: "Contact",
    contactLead: "We will gladly arrange a non‑binding consultation. Send us a message or give us a call.",
    send: "Send",
    name: "Name",
    email: "Email",
    message: "Message",
    cookieText: "This website uses only essential cookies. Analytics loads only with your consent.",
    allowAll: "Allow all",
    onlyNecessary: "Essential only",
    gdprTitle: "Privacy notice (basic information)",
    gdprText: "The controller is {firmName}. We process contact‑form data solely to handle your enquiry and only for the necessary period. You have the right of access, rectification and erasure.",
    cookiesTitle: "Cookies policy",
    cookiesText: "We use technically necessary cookies. Analytics cookies load only after consent. You can change settings anytime in the footer.",
    phoneLabel: "Call",
    contactHours: "Office hours",
  },
};

// --- Pomocné ikony ---
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C11.85 22 2 12.15 2 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/>
  </svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l8 6.764 8-6.764V18H4z"/>
  </svg>
);
const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
  </svg>
);

// --- Utility ---
function classNames(...args) { return args.filter(Boolean).join(" "); }
const sanitizePhone = (p) => (p || "").split(" ").join("");

function useCookie(name) {
  const get = () => { try { const v = localStorage.getItem(name); return v ? JSON.parse(v) : null; } catch { return null; } };
  const [val, setVal] = useState(get);
  const set = (v) => { setVal(v); try { localStorage.setItem(name, JSON.stringify(v)); } catch {} };
  return [val, set];
}

function useLang() {
  const get = () => { try { return localStorage.getItem("lang") || "cs"; } catch { return "cs"; } };
  const [lang, setLang] = useState(get());
  useEffect(() => { try { localStorage.setItem("lang", lang); } catch {} }, [lang]);
  const cfg = lang === "en" ? configEn : configCs;
  return { lang, setLang, cfg };
}

function SkipLink() {
  return (
    <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-black px-3 py-2 rounded">Skip to content</a>
  );
}

function Nav({ sections, cfg, onToggleLang }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener("hashchange", close); return () => window.removeEventListener("hashchange", close); }, []);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            {cfg.brand?.logoUrl ? (
              <img src={cfg.brand.logoUrl} alt={cfg.brand.logoAlt || cfg.firmName} className="h-8 w-auto" />
            ) : null}
            <span>{cfg.firmName}</span>
          </a>
          <nav className="hidden md:flex gap-6 items-center" aria-label="Main navigation">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-white/80 hover:text-white transition">{s.label}</a>
            ))}
            <button onClick={onToggleLang} className="text-sm rounded-xl border border-white/20 px-3 py-1 text-white/90">{cfg.lang === "cs" ? "EN" : "CZ"}</button>
          </nav>
          <div className="md:hidden">
            <button className="px-3 py-2 rounded-xl border border-white/20 text-white/90" aria-label="Menu" onClick={() => setOpen((v) => !v)}>Menu</button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (<a key={s.id} href={`#${s.id}`} className="text-white/90">{s.label}</a>))}
            <button onClick={onToggleLang} className="text-left text-white/90 underline underline-offset-4">{cfg.lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}</button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ cfg }) {
  const onConsult = () => { const el = document.getElementById("kontakt"); el?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  return (
    <section id="hero" className="bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{cfg.firmName}</h1>
            <p className="mt-4 text-zinc-200 text-lg max-w-prose">{cfg.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {cfg.phone && (
                <a href={`tel:${sanitizePhone(cfg.phone)}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/20 text-white hover:bg-white/10">
                  <IconPhone className="h-5 w-5" /> {cfg.labels.phoneLabel}
                </a>
              )}
              <button onClick={onConsult} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-black hover:opacity-90" style={{ backgroundColor: cfg.brand?.primary || '#ffffff' }}>{cfg.labels.heroCall}</button>
            </div>
            <div className="mt-6 text-sm text-zinc-300">
              <p className="flex items-center gap-2"><IconMapPin className="h-4 w-4" /> {cfg.addressLine1}, {cfg.addressLine2}</p>
              <p className="flex items-center gap-2 mt-1"><IconMail className="h-4 w-4" /> {cfg.email}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cfg.services.slice(0, 4).map((s) => (
                  <li key={s.id} className="rounded-2xl p-4 bg-white/5">
                    <p className="font-medium text-white">{s.title}</p>
                    <p className="text-sm text-zinc-300 mt-2">{s.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-400 mt-4">{cfg.lang === "cs" ? "Poskytujeme právní služby v souladu s předpisy České advokátní komory." : "We provide legal services in accordance with the Czech Bar Association rules."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ cfg }) {
  return (
    <section id="sluzby" className="py-20 border-t border-white/10" aria-labelledby="sluzby-nadpis">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="sluzby-nadpis" className="text-3xl font-semibold text-white">{cfg.labels.ourServices}</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cfg.services.map((s) => (
            <div key={s.id} className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium text-white">{s.title}</h3>
              <p className="text-zinc-300 mt-2">{s.desc}</p>
              <a href="#kontakt" className="inline-block mt-4 text-sm underline underline-offset-4" style={{ color: cfg.brand?.primary || '#ffffff' }}>{cfg.lang === "cs" ? "Nezávazně poptat" : "Enquire"}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team({ cfg }) {
  return (
    <section id="tym" className="py-20 border-t border-white/10" aria-labelledby="tym-nadpis">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="tym-nadpis" className="text-3xl font-semibold text-white">{cfg.labels.ourTeam}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cfg.team.map((m) => (
            <article key={m.email} className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <div className="h-28 w-28 rounded-full bg-white/10" aria-hidden />
              <h3 className="mt-4 text-xl font-medium text-white">{m.name}</h3>
              <p className="text-sm text-zinc-300">{m.role}</p>
              <p className="mt-3 text-zinc-300">{m.bio}</p>
              <a href={`mailto:${m.email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-white underline underline-offset-4"><IconMail className="h-4 w-4" /> {m.email}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function USP({ cfg }) {
  const items = cfg.lang === "cs"
    ? [
        { title: "25+ let specializace", desc: "Výhradně veřejné zakázky – znalost praxe zadavatelů i dodavatelů." },
        { title: "Člen APVZ (od 2022)", desc: "Asociace pro veřejné zakázky – metodická i komunitní kontrola kvality." },
        { title: "Pojistné krytí", desc: "Sdružené připojištění pro škody v rámci zadávacích řízení." },
      ]
    : [
        { title: "25+ years of focus", desc: "Exclusive focus on public procurement; experience on both contracting and bidder side." },
        { title: "APVZ member (since 2022)", desc: "Czech Public Procurement Association – continuous methodological and community quality check." },
        { title: "Insurance cover", desc: "Combined professional liability insurance for procurement‑related damage." },
      ];
  return (
    <section id="proc-my" className="py-20 border-t border-white/10" aria-labelledby="proc-nadpis">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="proc-nadpis" className="text-3xl font-semibold text-white">{cfg.labels.whyUs}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <h3 className="text-xl font-medium text-white">{it.title}</h3>
              <p className="text-zinc-300 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ cfg }) {
  if (!cfg.testimonials?.length) return null;
  return (
    <section id="reference" className="py-20 border-t border-white/10" aria-labelledby="ref-nadpis">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="ref-nadpis" className="text-3xl font-semibold text-white">{cfg.labels.references}</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cfg.testimonials.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-white/10 p-6 bg-white/5 text-left">
              <blockquote className="text-zinc-200">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-zinc-400">{t.author}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-400">{cfg.lang === "cs" ? "Upozornění: uvedené reference jsou obecné a nejsou považovány za reklamu slibující výsledek." : "Note: references are general in nature and do not constitute a guarantee of outcome."}</p>
      </div>
    </section>
  );
}

function Contact({ cfg }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("Form data:", Object.fromEntries(form.entries()));
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <section id="kontakt" className="py-20 border-t border-white/10" aria-labelledby="kontakt-nadpis">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 id="kontakt-nadpis" className="text-3xl font-semibold text-white">{cfg.labels.contact}</h2>
            <p className="mt-3 text-zinc-300">{cfg.labels.contactLead}</p>
            <dl className="mt-6 text-zinc-200 space-y-2">
              {cfg.phone && (<div className="flex items-center gap-2"><IconPhone className="h-5 w-5" /><a href={`tel:${sanitizePhone(cfg.phone)}`}>{cfg.phone}</a></div>)}
              {cfg.phoneAlt && (<div className="flex items-center gap-2"><IconPhone className="h-5 w-5" /><a href={`tel:${sanitizePhone(cfg.phoneAlt)}`}>{cfg.phoneAlt}</a></div>)}
              {cfg.fax && (<div className="flex items-center gap-2"><span>fax: {cfg.fax}</span></div>)}
              <div className="flex items-center gap-2"><IconMail className="h-5 w-5" /><a href={`mailto:${cfg.email}`}>{cfg.email}</a></div>
              <div className="flex items-center gap-2"><IconMapPin className="h-5 w-5" /><span>{cfg.addressLine1}, {cfg.addressLine2}</span></div>
            </dl>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-zinc-300">
              {cfg.opening.map((o) => (
                <li key={o.d} className="flex justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-2"><span>{o.d}</span><span>{o.h}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
              {sent ? (
                <div className="text-green-300">{cfg.lang === "cs" ? "Děkujeme, zpráva byla odeslána. Ozveme se co nejdříve." : "Thank you, your message has been sent. We will get back to you shortly."}</div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
                  <div>
                    <label className="block text-sm text-zinc-300" htmlFor="jmeno">{cfg.labels.name}</label>
                    <input id="jmeno" name="name" required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300" htmlFor="email">{cfg.labels.email}</label>
                    <input id="email" type="email" name="email" required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-300" htmlFor="zprava">{cfg.labels.message}</label>
                    <textarea id="zprava" name="message" rows={5} required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-white" />
                  </div>
                  <div className="text-xs text-zinc-400">{cfg.lang === "cs" ? "Odesláním souhlasíte se zpracováním osobních údajů pro účely vyřízení dotazu." : "By submitting you consent to the processing of personal data to handle your enquiry."}</div>
                  <div className="flex items-center justify-between gap-3">
                    <button type="submit" className="rounded-2xl px-4 py-2 text-black hover:opacity-90" style={{ backgroundColor: cfg.brand?.primary || '#ffffff' }}>{cfg.labels.send}</button>
                    <a className="text-sm underline underline-offset-4" style={{ color: cfg.brand?.primary || '#ffffff' }} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cfg.mapEmbedQuery)}`} target="_blank" rel="noreferrer">{cfg.labels.mapOpen}</a>
                  </div>
                </form>
              )}
            </div>
            <div className="mt-4 aspect-video overflow-hidden rounded-3xl border border-white/10">
              <iframe title="Map" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(cfg.mapEmbedQuery)}&output=embed`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ cfg }) {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 text-sm text-zinc-400">
        <div>
          <p className="text-white font-medium">{cfg.firmName}</p>
          <p>{cfg.addressLine1}, {cfg.addressLine2}</p>
          <p>IČO: {cfg.ico} · DIČ: {cfg.dic}</p>
          <p>{cfg.barId}</p>
          {cfg.dataBox && <p>{cfg.lang === "cs" ? "Datová schránka" : "Data box"}: {cfg.dataBox}</p>}
        </div>
        <div>
          <p>{cfg.labels.contact}</p>
          <p><a href={`mailto:${cfg.email}`}>{cfg.email}</a>{cfg.phone ? <> · <a href={`tel:${sanitizePhone(cfg.phone)}`}>{cfg.phone}</a></> : null}</p>
          <p className="mt-2">© {new Date().getFullYear()} {cfg.firmName}. {cfg.lang === "cs" ? "Všechna práva vyhrazena." : "All rights reserved."}</p>
        </div>
        <div>
          <p><a href="#ochrana-osobnich-udaju" className="underline underline-offset-4">{cfg.labels.gdprTitle}</a></p>
          <p className="mt-1"><a href="#zasady-cookies" className="underline underline-offset-4">{cfg.labels.cookiesTitle}</a></p>
        </div>
      </div>
    </footer>
  );
}

function CookieBar({ cfg }) {
  const [consent, setConsent] = useCookie("cookie-consent");
  if (consent) return null;
  return (
    <div className="fixed bottom-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 z-50">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/80 backdrop-blur p-4 text-sm text-white">
        <p>{cfg.labels.cookieText}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={() => setConsent({ necessary: true, analytics: true, ts: Date.now() })} className="rounded-xl px-3 py-2 text-black" style={{ backgroundColor: cfg.brand?.primary || '#ffffff' }}>{cfg.labels.allowAll}</button>
          <button onClick={() => setConsent({ necessary: true, analytics: false, ts: Date.now() })} className="rounded-xl px-3 py-2 border border-white/20">{cfg.labels.onlyNecessary}</button>
        </div>
      </div>
    </div>
  );
}

function Policy({ cfg }) {
  const gdprText = cfg.labels.gdprText.replace("{firmName}", cfg.firmName);
  return (
    <section id="ochrana-osobnich-udaju" className="py-20 border-t border-white/10" aria-labelledby="gdpr-nadpis">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-invert">
        <h2 id="gdpr-nadpis">{cfg.labels.gdprTitle}</h2>
        <p>{gdprText}</p>
        <h3 id="zasady-cookies">{cfg.labels.cookiesTitle}</h3>
        <p>{cfg.labels.cookiesText}</p>
      </div>
    </section>
  );
}

function StructuredData({ cfg }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: cfg.firmName,
    address: {
      "@type": "PostalAddress",
      streetAddress: cfg.addressLine1,
      addressLocality: cfg.addressLine2,
      addressCountry: "CZ",
    },
    url: typeof window !== "undefined" ? window.location.href : undefined,
    email: cfg.email,
    telephone: cfg.phone || undefined,
    areaServed: "Czech Republic",
    openingHours: cfg.opening.map((o) => `${o.d} ${o.h}`),
  };
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />);
}

export default function App() {
  const [lang, setLang] = useState(() => (typeof window !== 'undefined' ? (localStorage.getItem("lang") || "cs") : "cs"));
  useEffect(() => { try { localStorage.setItem("lang", lang); } catch {} }, [lang]);
  const cfg = lang === "en" ? configEn : configCs;
  const sections = [
    { id: "sluzby", label: cfg.nav.services },
    { id: "tym", label: cfg.nav.team },
    { id: "proc-my", label: cfg.nav.whyUs },
    { id: "reference", label: cfg.nav.references },
    { id: "kontakt", label: cfg.nav.contact },
  ];
  const toggleLang = () => setLang(lang === "cs" ? "en" : "cs");
  return (
    <div className="min-h-screen bg-black text-white">
      <SkipLink />
      <Nav sections={sections} cfg={cfg} onToggleLang={toggleLang} />
      <main id="obsah">
        <Hero cfg={cfg} />
        <Services cfg={cfg} />
        <Team cfg={cfg} />
        <USP cfg={cfg} />
        <Testimonials cfg={cfg} />
        <Contact cfg={cfg} />
        <Policy cfg={cfg} />
      </main>
      <Footer cfg={cfg} />
      <CookieBar cfg={cfg} />
      <StructuredData cfg={cfg} />
    </div>
  );
}
