import type { APIRoute } from 'astro';

// Diagnóstico temporal: muestra solo la LONGITUD de cada variable (no el valor).
// Sirve para comprobar si Cloudflare entrega las claves durante el build.
const g = (k: string): number => {
  const p = (typeof process !== 'undefined' && process.env ? process.env[k] : undefined);
  const m = (import.meta as any).env?.[k];
  return String(p || m || '').trim().length;
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ADZUNA_APP_ID_len: g('ADZUNA_APP_ID'),
      ADZUNA_APP_KEY_len: g('ADZUNA_APP_KEY'),
      PEXELS_API_KEY_len: g('PEXELS_API_KEY'),
      JOOBLE_API_KEY_len: g('JOOBLE_API_KEY'),
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};
