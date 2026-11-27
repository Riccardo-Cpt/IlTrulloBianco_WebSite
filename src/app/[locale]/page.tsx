import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import GoogleReviews from "@/components/GoogleReviews";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale);
  return (
    <>
      <section className="hero">
        <Image src="/images/trullo_bianco.jpeg" alt={t.story.trulloAlt} fill priority sizes="100vw" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="lead">{t.home.lead}</p>
          <div className="actions">
            <Link className="btn" href={`/${locale}/storia`}>{t.home.ctaStory}</Link>
            <Link className="btn btn-ghost" href={`/${locale}/prodotti`}>{t.home.ctaProducts}</Link>
          </div>
        </div>
      </section>

      <section className="section container center">
        <h2>{t.home.introTitle}</h2>
        <p className="lead-dark">{t.home.introText}</p>
        <ol className="steps">
          {t.home.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-n">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section container">
        <div className="split">
          <Image src="/images/olive_mano.jpeg" alt={t.grove.sections[2].alt} width={1206} height={1449} sizes="(max-width: 800px) 90vw, 480px" className="rounded cover" />
          <div>
            <h2>{t.home.cultivarsTitle}</h2>
            <p>{t.home.cultivarsText}</p>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container split">
          <div>
            <h2>{t.home.qualityTitle}</h2>
            <p>{t.home.qualityText}</p>
            <Link className="btn" href={`/${locale}/storia`}>{t.home.ctaStory}</Link>
          </div>
          <Image src="/images/ulivi_cresciuti.jpeg" alt={t.grove.sections[1].alt} width={480} height={640} sizes="(max-width: 800px) 90vw, 480px" className="rounded cover" />
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <Image src="/images/Bottiglie.jpeg" alt={t.products.items[0].alt} width={1122} height={1402} sizes="(max-width: 800px) 90vw, 480px" className="rounded" />
          <div>
            <h2>{t.home.productsTitle}</h2>
            <p>{t.home.productsText}</p>
            <Link className="btn" href={`/${locale}/prodotti`}>{t.home.productsCta}</Link>
          </div>
        </div>
      </section>

      <GoogleReviews t={t} />
    </>
  );
}
