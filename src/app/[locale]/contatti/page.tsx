import { getDictionary, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

export default async function Contacts({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getDictionary(locale).contacts;
  const { contacts, social } = siteConfig;
  return (
    <div className="section container narrow center">
      <h1>{t.title}</h1>
      <p className="lead-dark">{t.lead}</p>
      <dl className="contacts">
        <dt>{t.address}</dt><dd>{contacts.address}</dd>
        <dt>{t.email}</dt><dd><a href={`mailto:${contacts.email}`}>{contacts.email}</a></dd>
        <dt>{t.phone}</dt><dd><a href={`tel:${contacts.phone.replace(/\s/g, "")}`}>{contacts.phone}</a></dd>
        {(social.instagram || social.facebook) && (
          <>
            <dt>{t.social}</dt>
            <dd>
              {social.instagram && <a href={social.instagram}>Instagram</a>}{" "}
              {social.facebook && <a href={social.facebook}>Facebook</a>}
            </dd>
          </>
        )}
      </dl>
    </div>
  );
}
