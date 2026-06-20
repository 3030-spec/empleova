import type { APIRoute } from 'astro';

// Diagnóstico temporal: longitudes + NOMBRES exactos de variables (no valores).
const g = (k: string): number => {
  const p = (typeof process !== 'undefined' && process.env ? process.env[k] : undefined);
  const m = (import.meta as any).env?.[k];
  return String(p || m || '').trim().length;
};

export const GET: APIRoute = async () => {
  const nombres = (typeof process !== 'undefined' && process.env)
    ? Object.keys(process.env).filter((k) => /ADZUNA|PEXELS|JOOBLE/i.test(k))
    : [];
  return new Response(
    JSON.stringify({
      lens: {
        ADZUNA_APP_ID: g('ADZUNA_APP_ID'),
        ADZUNA_APP_KEY: g('ADZUNA_APP_KEY'),
        PEXELS_API_KEY: g('PEXELS_API_KEY'),
      },
      nombres_encontrados: nombres,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};
