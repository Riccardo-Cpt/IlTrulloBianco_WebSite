import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import NavMenu from "./NavMenu";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const other = locale === "it" ? "en" : "it";
  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/storia`, label: t.nav.story },
    { href: `/${locale}/uliveto`, label: t.nav.grove },
    { href: `/${locale}/prodotti`, label: t.nav.products },
    { href: `/${locale}/contatti`, label: t.nav.contacts },
  ];
  return (
    <header className="header">
      <Link href={`/${locale}`} className="logo" aria-label="Trullo Bianco">
        <Image src="/images/logo.png" alt="Trullo Bianco" width={120} height={88} priority />
      </Link>
      <div className="header-right">
        <NavMenu label={t.nav.menu} links={links} />
        <Link href={`/${other}`} className="lang" aria-label={t.lang.label} hrefLang={other}>{t.lang.switch}</Link>
      </div>
    </header>
  );
}
