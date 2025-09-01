import { useEffect, useState } from "react";

// Configuration – CZ only (from the provided document)
const config = {
  firmName: "Advokátní kancelář JUDr. Vladimír Tögel – advokát",
  tagline: "Administrativně-organizační a právní servis zadávání veřejných zakázek",
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
  brand: { primary: "#9a6185" },
  services: [
    {
      id: "zadavatel-a-z",
      title: "Zadavatelé: A → Z",
      desc: "Kompletní vedení zadávacích řízení od přípravy dokumentace, stanovení zadávacích podmínek, zveřejnění oznámení, administraci dotazů a vysvětlení zadávací dokumentace, přes posouzení kvalifikace, hodnocení nabídek a zpracování zprávy o hodnocení až po uzavření smlouvy s vybraným dodavatelem."
    },
    {
      id: "administrace",
      title: "Zveřejnění a administrace",
      desc: "Zajištění zveřejnění oznámení o zahájení řízení ve Věstníku veřejných zakázek a na profilu zadavatele, průběžná administrace zadávacího řízení a vyřizování veškerých dotazů a žádostí o vysvětlení zadávací dokumentace."
    },
    {
      id: "hodnoceni",
      title: "Posouzení a hodnocení",
      desc: "Organizace a vedení otevírání nabídek, posouzení kvalifikace, hodnocení nabídek včetně posouzení mimořádně nízké nabídkové ceny a zpracování zprávy o hodnocení nabídek."
    },
    {
      id: "pravni-vyceprace",
      title: "Právní vícepráce",
      desc: "Právní podpora v otázkách vyloučení účastníků, vypořádání námitek, posuzování střetu zájmů, aplikace sankčních a omezujících režimů."
    },
    {
      id: "po-smlouve",
      title: "Po uzavření smlouvy",
      desc: "Zastupování zadavatelů i dodavatelů před ÚOHS a soudy, příprava a posouzení dodatků, stanoviska ke změnám závazků a kontrola správnosti postupů."
    },
    {
      id: "dodavatele",
      title: "Služby pro dodavatele",
      desc: "Kompletní právní servis pro dodavatele: podání předběžného zájmu, žádostí o účast, zpracování a podání nabídek, zastupování v řízeních o opravných prostředcích (námitky, návrhy k ÚOHS, rozklady, žaloby)."
    }
  ],
  team: [
    {
      name: "JUDr. Vladimír Tögel",
      role: "Advokát – zakladatel (1999)",
      bio: "Specialista na veřejné zakázky s praxí od roku 1994. Profesní zkušenosti: Vítkovice, Vojenské stavby, Ministerstvo obrany (Akviziční úřad).",
      email: "togel@verzak.cz"
    },
    {
      name: "Mgr. Zuzana Hradil Gawlová",
      role: "Samostatná advokátka",
      bio: "Zaměření na veřejné zakázky od roku 2007. Spolupracuje s AK JUDr. Tögla, poskytuje právní služby také v angličtině.",
      email: "gawlova@verzak.cz"
    },
    {
      name: "Mgr. Helena Čížková",
      role: "Samostatná advokátka",
      bio: "Praxe na Ministerstvu vnitra ČR, veřejné zakázky systematicky od roku 2016. Zkušenosti z koncipientské praxe i státní správy.",
      email: "cizkova@verzak.cz"
    },
    {
      name: "Mgr. Marcela Hřebíčková",
      role: "Samostatná advokátka",
      bio: "Advokátka od roku 2003 (Jihlava), generální praxe. Spolupráce s AK JUDr. Tögla od roku 2019.",
      email: "hrebickova@verzak.cz"
    },
    {
      name: "JUDr. Darina Jandová, Ph.D.",
      role: "Samostatná advokátka",
      bio: "Praxe v advokacii i justici (Vrchní soud v Praze), zaměření na veřejné zakázky od roku 2019. Poskytuje právní služby i v angličtině.",
      email: "jandova@verzak.cz"
    },
    {
      name: "Mgr. Eliška Sojková",
      role: "Právní specialista veřejných zakázek",
      bio: "Specializace na veřejné zakázky od roku 2018. Absolventka ZČU v Plzni a Panevropské univerzity (Bc. a Mgr.). Zkušenosti s veřejnými zakázkami vedenými v angličtině.",
      email: "sojkova@verzak.cz"
    }
  ]
};

export default function App() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <header className="bg-black border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-[#9a6185]">{config.firmName}</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#sluzby" className="hover:text-[#9a6185]">Služby</a>
            <a href="#tym" className="hover:text-[#9a6185]">Tým</a>
            <a href="#proc-my" className="hover:text-[#9a6185]">Proč my</a>
            <a href="#kontakt" className="hover:text-[#9a6185]">Kontakt</a>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#9a6185]">{config.tagline}</h2>
          <p className="max-w-2xl mx-auto text-lg">{config.addressLine1}, {config.addressLine2}</p>
        </section>
        <section id="sluzby" className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#9a6185]">Služby</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {config.services.map(s => (
              <div key={s.id} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="tym" className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#9a6185]">Tým</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {config.team.map(m => (
              <div key={m.email} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-zinc-300">{m.role}</p>
                <p className="mt-2 text-sm">{m.bio}</p>
                <a href={`mailto:${m.email}`} className="text-[#9a6185] underline mt-2 inline-block">{m.email}</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="py-12 border-t border-white/10 text-sm text-zinc-400 px-6 max-w-7xl mx-auto">
        <p className="text-white font-medium">{config.firmName}</p>
        <p>{config.addressLine1}, {config.addressLine2}</p>
        <p>IČO: {config.ico} · DIČ: {config.dic}</p>
        <p>{config.barId}</p>
        <p>Datová schránka: {config.dataBox}</p>
        <p className="mt-2">© {new Date().getFullYear()} {config.firmName}. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
