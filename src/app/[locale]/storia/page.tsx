import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Story({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale).story;
  return (
    <article className="section container narrow">
      <h1>{t.title}</h1>
      <Image src="/images/trullo_bianco.jpeg" alt={t.trulloAlt} width={640} height={464} sizes="(max-width: 800px) 100vw, 720px" className="rounded wide" />
      {t.paragraphs.map((p, i) => (
        <p key={i} className={i === 3 ? "emph" : undefined}>{p}</p>
      ))}
      <blockquote>
        <p>“{t.quote}”</p>
        <footer>{t.signature}</footer>
      </blockquote>
    </article>
  );
}
