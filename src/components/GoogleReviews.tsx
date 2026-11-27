import { siteConfig } from "@/lib/siteConfig";
import type { Dictionary } from "@/lib/i18n";

// Predisposto per l'integrazione con le recensioni Google.
// Quando siteConfig.reviews.enabled sarà true, sostituire il segnaposto
// con il widget o con una chiamata alla Places API (usando placeId).
export default function GoogleReviews({ t }: { t: Dictionary }) {
  if (!siteConfig.reviews.enabled) return null;
  return (
    <section className="section reviews">
      <h2>{t.reviews.title}</h2>
      <p className="muted">{t.reviews.placeholder}</p>
    </section>
  );
}
