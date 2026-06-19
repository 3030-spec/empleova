// Utilidades y metadatos de las categorías de guías.

export const slugCat = (c: string): string =>
  c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');

// Info por categoría: query de foto (Pexels) + intro original para SEO.
export const CAT_INFO: Record<string, { query: string; intro: string }> = {
  'Salarios': {
    query: 'money salary cash',
    intro: 'Descubre cuánto se gana en los empleos más buscados, según experiencia, sector y país. Sueldos orientativos para ayudarte a decidir tu próximo paso profesional.',
  },
  'Trabajar en empresas': {
    query: 'team employees store work',
    intro: 'Guías prácticas para trabajar en las empresas que más contratan: requisitos, puestos, sueldos orientativos y cómo postular en su web oficial de empleo.',
  },
  'Profesiones': {
    query: 'professional worker portrait',
    intro: 'Cómo acceder a las profesiones y oficios más demandados: qué se necesita, cómo formarte y dónde encontrar las mejores oportunidades.',
  },
  'Trámites y derechos': {
    query: 'documents paperwork office',
    intro: 'Información orientativa sobre trámites laborales y derechos del trabajador. Consulta siempre las fuentes oficiales de tu país para los datos definitivos.',
  },
  'Búsqueda de empleo': {
    query: 'job search laptop',
    intro: 'Dónde y cómo buscar trabajo de forma eficaz: portales, redes, trabajo remoto y consejos prácticos para encontrar empleo antes.',
  },
  'Currículum': {
    query: 'resume cv desk',
    intro: 'Aprende a crear un currículum que destaque, con o sin experiencia, además de cartas de presentación y todo lo necesario para tu candidatura.',
  },
  'Entrevistas': {
    query: 'job interview office',
    intro: 'Prepárate para tus entrevistas de trabajo: preguntas frecuentes, respuestas, lenguaje corporal y consejos para causar buena impresión.',
  },
  'Ayudas y subsidios': {
    query: 'office paperwork documents',
    intro: 'Información orientativa sobre ayudas, subsidios y prestaciones relacionadas con el empleo. Consulta siempre las fuentes oficiales de cada país.',
  },
  'Seguridad laboral': {
    query: 'cyber security laptop',
    intro: 'Protégete durante la búsqueda de empleo: cómo detectar ofertas falsas, evitar estafas y cuidar tus datos personales y bancarios.',
  },
};

// Orden de presentación de las categorías.
export const ORDEN_CAT = [
  'Salarios',
  'Trabajar en empresas',
  'Profesiones',
  'Búsqueda de empleo',
  'Currículum',
  'Entrevistas',
  'Trámites y derechos',
  'Ayudas y subsidios',
  'Seguridad laboral',
];
