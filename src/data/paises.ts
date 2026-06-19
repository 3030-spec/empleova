// Datos por país: proveedor de ofertas + textos introductorios ORIGINALES + recurso oficial.
// El texto único por país evita el "contenido duplicado" que penaliza AdSense.
// proveedor 'adzuna' -> codigo es el código de país de Adzuna (es, mx, us...)
// proveedor 'jooble' -> codigo es el nombre del país que usa Jooble como location.
//
// recurso: enlace al servicio público de empleo oficial de cada país (aporta valor y
// autoridad/E-E-A-T). NOTA: los enlaces de Colombia y Nicaragua no se pudieron verificar
// automáticamente; revísalos en el navegador antes de publicar.

export type Proveedor = 'adzuna' | 'jooble';

export interface Pais {
  slug: string;
  nombre: string;
  proveedor: Proveedor;
  codigo: string;
  emoji: string;
  intro: string[];
  sectores: string;
  recurso: { nombre: string; url: string };
}

export const PAISES: Pais[] = [
  // ===== Adzuna =====
  {
    slug: 'espana', nombre: 'España', proveedor: 'adzuna', codigo: 'es', emoji: '🇪🇸',
    intro: [
      'El mercado laboral español genera miles de vacantes nuevas cada día en ciudades como Madrid, Barcelona, Valencia y Sevilla. Aquí reunimos ofertas reales y actualizadas para que encuentres antes tu próximo trabajo en España.',
      'Cada oferta enlaza directamente a su fuente original, donde puedes leer los detalles y postular. Adapta tu currículum a cada puesto y desconfía de cualquier oferta que te pida dinero por adelantado.',
    ],
    sectores: 'Hostelería, comercio, sanidad, tecnología, logística y atención al cliente lideran la contratación en España.',
    recurso: { nombre: 'SEPE (Servicio Público de Empleo Estatal)', url: 'https://www.sepe.es' },
  },
  {
    slug: 'mexico', nombre: 'México', proveedor: 'adzuna', codigo: 'mx', emoji: '🇲🇽',
    intro: [
      'México es uno de los mercados más dinámicos de la región, con oportunidades en la Ciudad de México, Monterrey, Guadalajara y los polos industriales del norte. En esta página encontrarás ofertas reales y actualizadas en todo el país.',
      'Prepara un buen currículum y postula cuanto antes a las vacantes que te interesen. Cada anuncio enlaza a la fuente original para que apliques directamente.',
    ],
    sectores: 'Manufactura, comercio, tecnología, servicios financieros y turismo concentran gran parte de las vacantes en México.',
    recurso: { nombre: 'Portal del Empleo (Gobierno de México)', url: 'https://www.gob.mx/empleo' },
  },
  {
    slug: 'estados-unidos', nombre: 'Estados Unidos', proveedor: 'adzuna', codigo: 'us', emoji: '🇺🇸',
    intro: [
      'Estados Unidos ofrece un enorme volumen de empleos en todos los sectores, con muchas oportunidades también para la comunidad hispanohablante. Aquí recopilamos ofertas reales en distintos estados.',
      'Revisa los requisitos de cada puesto y prepara tu solicitud en el idioma que pida la empresa. Cada oferta enlaza a su fuente original donde podrás aplicar.',
    ],
    sectores: 'Salud, hostelería, transporte, construcción, comercio y tecnología tienen alta demanda de personal en EE. UU.',
    recurso: { nombre: 'CareerOneStop (Departamento de Trabajo de EE. UU.)', url: 'https://www.careeronestop.org' },
  },

  // ===== Jooble (Latinoamérica) =====
  {
    slug: 'colombia', nombre: 'Colombia', proveedor: 'jooble', codigo: 'Colombia', emoji: '🇨🇴',
    intro: [
      'Colombia concentra gran parte de su oferta de empleo en Bogotá, Medellín, Cali y Barranquilla, con un mercado en crecimiento en servicios y tecnología. Aquí encontrarás vacantes reales y actualizadas en todo el país.',
      'Postula a las ofertas que encajen con tu perfil y aplica directamente en la fuente original de cada anuncio.',
    ],
    sectores: 'Comercio, centros de contacto (BPO), tecnología, construcción y salud son sectores con fuerte demanda en Colombia.',
    recurso: { nombre: 'Servicio Público de Empleo de Colombia', url: 'https://www.serviciodeempleo.gov.co' },
  },
  {
    slug: 'argentina', nombre: 'Argentina', proveedor: 'jooble', codigo: 'Argentina', emoji: '🇦🇷',
    intro: [
      'En Argentina, Buenos Aires, Córdoba y Rosario reúnen buena parte de las oportunidades laborales, con un sector tecnológico especialmente activo. Te mostramos ofertas reales y actualizadas.',
      'Revisa cada vacante y postula en su fuente original. Un currículum claro y orientado a resultados marca la diferencia.',
    ],
    sectores: 'Tecnología y software, comercio, gastronomía y servicios profesionales destacan en el empleo argentino.',
    recurso: { nombre: 'Ministerio de Trabajo de Argentina', url: 'https://www.argentina.gob.ar/trabajo' },
  },
  {
    slug: 'chile', nombre: 'Chile', proveedor: 'jooble', codigo: 'Chile', emoji: '🇨🇱',
    intro: [
      'Chile ofrece un mercado laboral estable con foco en Santiago, Valparaíso y Concepción. Aquí reunimos ofertas reales y actualizadas en distintas regiones del país.',
      'Aplica directamente en la fuente original de cada oferta y adapta tu candidatura al puesto.',
    ],
    sectores: 'Minería, retail, tecnología, servicios financieros y construcción lideran la contratación en Chile.',
    recurso: { nombre: 'Bolsa Nacional de Empleo (BNE)', url: 'https://www.bne.cl' },
  },
  {
    slug: 'peru', nombre: 'Perú', proveedor: 'jooble', codigo: 'Perú', emoji: '🇵🇪',
    intro: [
      'En Perú, Lima concentra la mayoría de las vacantes, aunque ciudades como Arequipa y Trujillo también ofrecen oportunidades crecientes. Te mostramos ofertas reales y actualizadas.',
      'Postula en la fuente original de cada anuncio y prepara un currículum adaptado a cada puesto.',
    ],
    sectores: 'Comercio, minería, turismo, construcción y servicios concentran gran parte del empleo en Perú.',
    recurso: { nombre: 'Ministerio de Trabajo del Perú', url: 'https://www.gob.pe/mtpe' },
  },
  {
    slug: 'ecuador', nombre: 'Ecuador', proveedor: 'jooble', codigo: 'Ecuador', emoji: '🇪🇨',
    intro: [
      'Ecuador centra su oferta de empleo en Quito y Guayaquil, con oportunidades en comercio y servicios. Aquí encontrarás vacantes reales y actualizadas.',
      'Aplica directamente en la fuente original y revisa bien los requisitos de cada oferta.',
    ],
    sectores: 'Comercio, agricultura, servicios, construcción y turismo destacan en el mercado laboral ecuatoriano.',
    recurso: { nombre: 'Ministerio del Trabajo de Ecuador', url: 'https://www.trabajo.gob.ec' },
  },
  {
    slug: 'venezuela', nombre: 'Venezuela', proveedor: 'jooble', codigo: 'Venezuela', emoji: '🇻🇪',
    intro: [
      'En Venezuela, Caracas, Maracaibo y Valencia reúnen buena parte de las ofertas de empleo. Te mostramos vacantes reales y actualizadas.',
      'Postula en la fuente original de cada anuncio y desconfía de ofertas que pidan pagos por adelantado.',
    ],
    sectores: 'Comercio, salud, servicios, educación y administración concentran las vacantes en Venezuela.',
    recurso: { nombre: 'INCES (formación y empleo)', url: 'https://www.inces.gob.ve' },
  },
  {
    slug: 'uruguay', nombre: 'Uruguay', proveedor: 'jooble', codigo: 'Uruguay', emoji: '🇺🇾',
    intro: [
      'Uruguay ofrece un mercado laboral estable, con Montevideo como principal foco de empleo y un sector tecnológico en crecimiento. Aquí reunimos ofertas reales y actualizadas.',
      'Aplica directamente en la fuente original de cada oferta.',
    ],
    sectores: 'Tecnología, agroindustria, servicios y turismo destacan en el empleo uruguayo.',
    recurso: { nombre: 'Ministerio de Trabajo de Uruguay', url: 'https://www.gub.uy/ministerio-trabajo-seguridad-social' },
  },
  {
    slug: 'bolivia', nombre: 'Bolivia', proveedor: 'jooble', codigo: 'Bolivia', emoji: '🇧🇴',
    intro: [
      'En Bolivia, Santa Cruz, La Paz y Cochabamba concentran la mayoría de las oportunidades laborales. Te mostramos ofertas reales y actualizadas.',
      'Revisa cada vacante y postula en su fuente original.',
    ],
    sectores: 'Comercio, agricultura, minería, construcción y servicios lideran la contratación en Bolivia.',
    recurso: { nombre: 'Ministerio de Trabajo de Bolivia', url: 'https://www.mintrabajo.gob.bo' },
  },
  {
    slug: 'paraguay', nombre: 'Paraguay', proveedor: 'jooble', codigo: 'Paraguay', emoji: '🇵🇾',
    intro: [
      'Paraguay centra su oferta de empleo en Asunción y Ciudad del Este, con un mercado en expansión. Aquí encontrarás vacantes reales y actualizadas.',
      'Aplica directamente en la fuente original de cada anuncio.',
    ],
    sectores: 'Comercio, agroindustria, servicios y construcción destacan en el empleo paraguayo.',
    recurso: { nombre: 'Ministerio de Trabajo de Paraguay (MTESS)', url: 'https://www.mtess.gov.py' },
  },
  {
    slug: 'costa-rica', nombre: 'Costa Rica', proveedor: 'jooble', codigo: 'Costa Rica', emoji: '🇨🇷',
    intro: [
      'Costa Rica destaca por su sector de servicios y tecnología, con San José como principal foco de empleo. Te mostramos ofertas reales y actualizadas.',
      'Postula en la fuente original de cada oferta y adapta tu candidatura al puesto.',
    ],
    sectores: 'Turismo, tecnología, servicios, agricultura y centros de servicios compartidos lideran el empleo en Costa Rica.',
    recurso: { nombre: 'Ministerio de Trabajo de Costa Rica', url: 'https://www.mtss.go.cr' },
  },
  {
    slug: 'panama', nombre: 'Panamá', proveedor: 'jooble', codigo: 'Panamá', emoji: '🇵🇦',
    intro: [
      'Panamá es un importante centro logístico y financiero de la región, con la mayoría de vacantes en Ciudad de Panamá. Aquí reunimos ofertas reales y actualizadas.',
      'Aplica directamente en la fuente original de cada anuncio.',
    ],
    sectores: 'Logística, comercio, banca, construcción y turismo concentran el empleo en Panamá.',
    recurso: { nombre: 'MITRADEL (Ministerio de Trabajo de Panamá)', url: 'https://www.mitradel.gob.pa' },
  },
  {
    slug: 'guatemala', nombre: 'Guatemala', proveedor: 'jooble', codigo: 'Guatemala', emoji: '🇬🇹',
    intro: [
      'En Guatemala, la Ciudad de Guatemala concentra la mayor parte de las oportunidades laborales. Te mostramos ofertas reales y actualizadas.',
      'Revisa los requisitos y postula en la fuente original de cada oferta.',
    ],
    sectores: 'Comercio, manufactura, agricultura y centros de contacto destacan en el empleo guatemalteco.',
    recurso: { nombre: 'Ministerio de Trabajo de Guatemala', url: 'https://www.mintrabajo.gob.gt' },
  },
  {
    slug: 'republica-dominicana', nombre: 'República Dominicana', proveedor: 'jooble', codigo: 'República Dominicana', emoji: '🇩🇴',
    intro: [
      'La República Dominicana ofrece oportunidades en Santo Domingo y Santiago, con fuerte peso del turismo y las zonas francas. Aquí encontrarás vacantes reales y actualizadas.',
      'Aplica directamente en la fuente original de cada anuncio.',
    ],
    sectores: 'Turismo, comercio, zonas francas, construcción y servicios lideran la contratación dominicana.',
    recurso: { nombre: 'Ministerio de Trabajo de República Dominicana', url: 'https://www.mt.gob.do' },
  },
  {
    slug: 'el-salvador', nombre: 'El Salvador', proveedor: 'jooble', codigo: 'El Salvador', emoji: '🇸🇻',
    intro: [
      'En El Salvador, San Salvador concentra buena parte del empleo, con un sector de centros de contacto en crecimiento. Te mostramos ofertas reales y actualizadas.',
      'Postula en la fuente original de cada oferta.',
    ],
    sectores: 'Centros de contacto, comercio, manufactura y servicios destacan en el empleo salvadoreño.',
    recurso: { nombre: 'Ministerio de Trabajo de El Salvador', url: 'https://www.mtps.gob.sv' },
  },
  {
    slug: 'honduras', nombre: 'Honduras', proveedor: 'jooble', codigo: 'Honduras', emoji: '🇭🇳',
    intro: [
      'Honduras centra su oferta laboral en Tegucigalpa y San Pedro Sula, con peso de la manufactura y el comercio. Aquí reunimos ofertas reales y actualizadas.',
      'Aplica directamente en la fuente original de cada anuncio.',
    ],
    sectores: 'Manufactura (maquila), comercio, agricultura y servicios lideran el empleo en Honduras.',
    recurso: { nombre: 'Secretaría de Trabajo de Honduras', url: 'https://www.trabajo.gob.hn' },
  },
  {
    slug: 'nicaragua', nombre: 'Nicaragua', proveedor: 'jooble', codigo: 'Nicaragua', emoji: '🇳🇮',
    intro: [
      'En Nicaragua, Managua concentra la mayoría de las oportunidades de empleo. Te mostramos ofertas reales y actualizadas.',
      'Revisa cada vacante y postula en su fuente original.',
    ],
    sectores: 'Comercio, agricultura, manufactura y servicios destacan en el mercado laboral nicaragüense.',
    recurso: { nombre: 'Ministerio del Trabajo de Nicaragua', url: 'https://www.mitrab.gob.ni' },
  },
];

export const getPais = (slug: string) => PAISES.find((p) => p.slug === slug);
