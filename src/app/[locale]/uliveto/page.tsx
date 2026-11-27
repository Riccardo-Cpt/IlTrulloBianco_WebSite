import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Grove({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale).grove;
  return (
    <div className="section container">
      <h1 className="center">{t.title}</h1>
      <p className="lead-dark center narrow">{t.lead}</p>
      {t.sections.map((s, i) => (
        <section key={s.title} className={`split row ${i % 2 ? "reverse" : ""}`}>
          <Image src={`/images/${s.img}`} alt={s.alt} width={640} height={640} sizes="(max-width: 800px) 90vw, 480px" className="rounded cover" />
          <div>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
