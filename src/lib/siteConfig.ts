// Unico punto di configurazione del sito: contatti, social, shop e recensioni.
// Compilare i valori segnati come TODO.
export const siteConfig = {
  name: "Trullo Bianco",
  url: "https://www.trullobianco.it", // TODO: dominio definitivo
  contacts: {
    address: "Modugno (BA), Puglia", // TODO: indirizzo completo
    email: "info@trullobianco.it", // TODO
    phone: "+39 000 000 0000", // TODO
  },
  social: {
    instagram: "", // TODO: URL profilo
    facebook: "", // TODO: URL pagina
  },
  // Integrazione futura: recensioni Google (Places API / widget).
  reviews: {
    enabled: false,
    placeId: "", // TODO: Google Place ID
  },
  // Integrazione futura: servizio acquisti online (Shopify, Snipcart, ...).
  shop: {
    enabled: false,
    url: "", // TODO: URL dello shop
  },
} as const;
