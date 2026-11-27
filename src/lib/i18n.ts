import it from "@/dictionaries/it";
import en from "@/dictionaries/en";

export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof it;

const dictionaries: Record<Locale, Dictionary> = { it, en };

export const isLocale = (l: string): l is Locale =>
  (locales as readonly string[]).includes(l);

export const getDictionary = (l: Locale): Dictionary => dictionaries[l];
