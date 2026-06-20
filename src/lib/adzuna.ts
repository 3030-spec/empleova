// Cliente de la API de Adzuna. Las claves son GRATIS:
// regístrate en https://developer.adzuna.com/ y pon tus claves en un archivo .env
//   ADZUNA_APP_ID=tu_app_id
//   ADZUNA_APP_KEY=tu_app_key
// Si no hay claves, las funciones devuelven [] y el sitio compila igual.

const env = (k: string): string => {
  const p = (typeof process !== 'undefined' && process.env ? process.env[k] : undefined);
  const m = (import.meta as any).env?.[k];
  return String(p || m || '').trim();
};
// El App ID de Adzuna no es secreto (aparece público en los enlaces utm_source de cada
// oferta), así que lo dejamos por defecto en el código. La App KEY sí va por variable.
const APP_ID = env('ADZUNA_APP_ID') || 'cea597cb';
const APP_KEY = env('ADZUNA_APP_KEY');

export const adzunaConfigurado = Boolean(APP_ID && APP_KEY);

export interface Oferta {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  salario?: string;
  categoria: string;
  categoriaTag: string;
  url: string;       // enlace a la fuente original (obligatorio enlazar)
  fecha?: string;
}

// Heurística para detectar si un texto está en español (vs inglés u otro idioma).
function esEspanol(t: string): boolean {
  const s = t.toLowerCase();
  // Frases claramente en inglés -> descartar.
  if (/\b(job description|you will|we are looking|what you will|your mission|join our team|we offer|the role|key responsibilities)\b/.test(s)) return false;
  // Nota: no usamos los acentos como señal porque hay nombres de lugar españoles
  // (Almería, Málaga...) que aparecen en anuncios escritos en inglés.
  const es = (s.match(/\b(de|la|el|los|las|para|con|empresa|trabajo|experiencia|buscamos|empleo|en|un|una|del|se|por|requisitos|funciones|ofrecemos|jornada|salario|nuestro|tus|sus|así|según|también)\b/g) || []).length;
  const en = (s.match(/\b(the|you|we|and|for|with|your|our|will|job|description|mission|are|of|is|as|skills|team|to|in|on|a)\b/g) || []).length;
  // Exigir densidad real de español y que supere al inglés.
  return es >= 3 && es > en;
}

function formateaSalario(min?: number, max?: number): string | undefined {
  if (!min && !max) return undefined;
  const fmt = (n: number) => Math.round(n).toLocaleString('es-ES');
  if (min && max && min !== max) return `${fmt(min)} – ${fmt(max)}`;
  return fmt((min || max)!);
}

export async function getOfertas(
  paisAdzuna: string,
  resultados = 24
): Promise<Oferta[]> {
  if (!adzunaConfigurado) return [];

  // Pedimos un grupo más grande, ordenado por fecha (evita que un único empleador
  // con descripciones genéricas/en otro idioma cope los primeros resultados).
  const url =
    `https://api.adzuna.com/v1/api/jobs/${paisAdzuna}/search/1` +
    `?app_id=${APP_ID}&app_key=${APP_KEY}` +
    `&results_per_page=50&sort_by=date&content-type=application/json`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`[adzuna] ${paisAdzuna}: HTTP ${res.status}`);
      return [];
    }
    const data: any = await res.json();
    const ofertas = (data.results ?? []).map((r: any): Oferta => ({
      id: String(r.id),
      titulo: r.title?.replace(/<\/?[^>]+>/g, '') ?? 'Oferta de empleo',
      empresa: r.company?.display_name ?? 'Empresa confidencial',
      ubicacion: r.location?.display_name ?? '',
      descripcion: (r.description ?? '').replace(/<\/?[^>]+>/g, '').slice(0, 220),
      salario: formateaSalario(r.salary_min, r.salary_max),
      categoria: r.category?.label ?? 'Empleo',
      categoriaTag: r.category?.tag ?? '',
      url: r.redirect_url ?? '#',
      fecha: r.created,
    }));

    // Priorizar ofertas en español; las de otros idiomas solo para completar.
    const espanol = ofertas.filter((o) => esEspanol(`${o.titulo} ${o.descripcion}`));
    const otras = ofertas.filter((o) => !esEspanol(`${o.titulo} ${o.descripcion}`));
    const ordenadas = [...espanol, ...otras];

    // Máximo 3 ofertas por empresa, para dar variedad.
    const porEmpresa = new Map<string, number>();
    const variadas: Oferta[] = [];
    for (const o of ordenadas) {
      const n = porEmpresa.get(o.empresa) ?? 0;
      if (n >= 3) continue;
      porEmpresa.set(o.empresa, n + 1);
      variadas.push(o);
      if (variadas.length >= resultados) break;
    }
    return variadas;
  } catch (e) {
    console.warn(`[adzuna] error en ${paisAdzuna}:`, e);
    return [];
  }
}
