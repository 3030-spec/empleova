// Cliente de la API de Pexels (fotos con licencia libre, uso comercial gratis).
// Clave GRATIS en https://www.pexels.com/api/ -> ponla en .env como:
//   PEXELS_API_KEY=tu_clave
// Si no hay clave, devuelve null y las páginas se muestran sin foto (no se rompe nada).

const API_KEY = String(
  (typeof process !== 'undefined' && process.env ? process.env.PEXELS_API_KEY : undefined) ||
  (import.meta as any).env?.PEXELS_API_KEY ||
  ''
).trim();

export const pexelsConfigurado = Boolean(API_KEY);

export interface Foto {
  url: string;
  alt: string;
  fotografo: string;
  fotografoUrl: string;
}

// Cache por query dentro del mismo build (evita llamadas repetidas).
const cache = new Map<string, Foto | null>();

export async function getFoto(query: string): Promise<Foto | null> {
  if (!pexelsConfigurado) return null;
  if (cache.has(query)) return cache.get(query)!;

  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: API_KEY as string } }
    );
    if (!res.ok) {
      console.warn(`[pexels] "${query}": HTTP ${res.status}`);
      cache.set(query, null);
      return null;
    }
    const data: any = await res.json();
    const p = data.photos?.[0];
    if (!p) { cache.set(query, null); return null; }
    const foto: Foto = {
      url: p.src?.landscape ?? p.src?.large ?? p.src?.original,
      alt: p.alt || query,
      fotografo: p.photographer ?? 'Pexels',
      fotografoUrl: p.photographer_url ?? 'https://www.pexels.com',
    };
    cache.set(query, foto);
    return foto;
  } catch (e) {
    console.warn(`[pexels] error en "${query}":`, e);
    cache.set(query, null);
    return null;
  }
}
