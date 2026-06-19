import { SITE } from '../config';

const abs = (path: string) => new URL(path, SITE.url).href;

// BreadcrumbList. items NO incluye "Inicio" (se añade aquí).
export function breadcrumbJsonLd(items: { nombre: string; url: string }[]) {
  const todos = [{ nombre: 'Inicio', url: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: todos.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nombre,
      item: abs(it.url),
    })),
  };
}

// Article para las guías.
export function articleJsonLd(opts: {
  titulo: string;
  descripcion: string;
  url: string;
  fecha?: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    mainEntityOfPage: abs(opts.url),
    datePublished: opts.fecha ? opts.fecha.toISOString() : undefined,
    author: { '@type': 'Organization', name: SITE.nombre },
    publisher: { '@type': 'Organization', name: SITE.nombre },
  };
}

// FAQPage a partir de pares pregunta/respuesta.
export function faqJsonLd(qas: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map((q) => ({
      '@type': 'Question',
      name: q.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: q.respuesta },
    })),
  };
}
