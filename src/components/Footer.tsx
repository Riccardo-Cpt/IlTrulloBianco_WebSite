import type { Dictionary } from "@/lib/i18n";

export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="footer">
      <p className="footer-tag">{t.footer.tagline}</p>
      <p>© {new Date().getFullYear()} Trullo Bianco – {t.footer.rights}</p>
    </footer>
  );
}
