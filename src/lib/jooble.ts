// Cliente de la API de Jooble. La clave es GRATIS:
// solicítala en https://jooble.org/api/about y ponla en .env
//   JOOBLE_API_KEY=tu_clave
// Cubre los países que Adzuna no tiene (Colombia, Argentina, Chile, Perú, etc.).
// Si no hay clave, devuelve [] y el sitio compila igual.

import type { Oferta } from './adzuna';

const API_KEY = import.meta.env.JOOBLE_API_KEY ?? process.env.JOOBLE_API_KEY;

export const joobleConfigurado = Boolean(API_KEY);

export async function getOfertasJooble(
  location: string,
  resultados = 24
): Promise<Oferta[]> {
  if (!joobleConfigurado) return [];

  try {
    const res = await fetch(`https://jooble.org/api/${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keywords: '', location, page: '1' }),
    });
    if (!res.ok) {
      console.warn(`[jooble] ${location}: HTTP ${res.status}`);
      return [];
    }
    const data: any = await res.json();
    return (data.jobs ?? []).slice(0, resultados).map((j: any): Oferta => ({
      id: String(j.id),
      titulo: (j.title ?? 'Oferta de empleo').replace(/<\/?[^>]+>/g, ''),
      empresa: j.company || 'Empresa confidencial',
      ubicacion: j.location ?? '',
      descripcion: (j.snippet ?? '').replace(/<\/?[^>]+>/g, '').slice(0, 220),
      salario: j.salary || undefined,
      categoria: j.type || 'Empleo',
      categoriaTag: '',
      url: j.link ?? '#',
      fecha: j.updated,
    }));
  } catch (e) {
    console.warn(`[jooble] error en ${location}:`, e);
    return [];
  }
}
