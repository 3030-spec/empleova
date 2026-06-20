// ====== CONFIGURACIÓN GLOBAL DEL SITIO ======
// Edita estos valores. Es lo único que necesitas tocar para personalizar la marca.

export const SITE = {
  nombre: 'empleova',
  descripcion:
    'Ofertas de empleo, guías para conseguir trabajo y consejos para tu CV en España y Latinoamérica. Encuentra tu próximo trabajo.',
  // Cuando tengas tu dominio, ponlo aquí y en astro.config.mjs
  url: 'https://empleova.com',
  // Tu ID de cliente de Google AdSense, ej. 'ca-pub-1234567890123456'.
  // Déjalo vacío hasta que AdSense te apruebe; entonces los anuncios se activan solos.
  adsenseClientId: 'ca-pub-8601874541331336',
};

export const PAISES = [
  { nombre: 'España', slug: 'espana' },
  { nombre: 'México', slug: 'mexico' },
  { nombre: 'Colombia', slug: 'colombia' },
  { nombre: 'Argentina', slug: 'argentina' },
  { nombre: 'Estados Unidos', slug: 'estados-unidos' },
];
