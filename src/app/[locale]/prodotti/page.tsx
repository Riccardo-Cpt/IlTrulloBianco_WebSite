import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Products({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale).products;
  return (
    <div className="section container">
      <h1 className="center">{t.title}</h1>
      <p className="lead-dark center narrow">{t.lead}</p>
      <div className="cards">
        {t.items.map((p) => (
          <article key={p.name} className="card">
            <Image src={`/images/${p.img}`} alt={p.alt} width={800} height={800} sizes="(max-width: 800px) 90vw, 440px" className="cover" />
            <div className="card-body">
              <h2>{p.name}</h2>
              <p>{p.text}</p>
              {/* Punto di aggancio futuro per il pulsante di acquisto (vedi siteConfig.shop) */}
            </div>
          </article>
        ))}
      </div>
      <p className="center muted">{t.note}</p>
    </div>
  );
}
