# EmpleoYa — portal de empleo (Astro estático)

Sitio web estático de información y guías de empleo, listo para monetizar con Google AdSense.
**Coste de funcionamiento: ~10 €/año (solo el dominio). Hosting gratis.**

## Comandos

```bash
npm install      # instalar (solo la primera vez)
npm run dev      # ver en local: http://localhost:4321
npm run build    # generar el sitio en /dist
npm run preview  # previsualizar la versión compilada
```

## Cómo personalizar

| Quiero cambiar... | Edito... |
|---|---|
| Nombre, descripción, email, países | `src/config.ts` |
| Mi ID de AdSense (al aprobarme) | `src/config.ts` → `adsenseClientId` |
| Mi dominio | `src/config.ts` (`url`) y `astro.config.mjs` (`site`) |
| Añadir un artículo nuevo | crear un `.md` en `src/content/guias/` |
| Estilos / colores | `src/styles/global.css` |
| Email de contacto | `src/pages/contacto.astro` |

### Añadir un artículo nuevo
Crea un archivo `src/content/guias/mi-articulo.md` con esta cabecera:

```markdown
---
titulo: "Título del artículo"
descripcion: "Resumen breve para Google."
fecha: 2026-06-17
categoria: "Currículum"
---

Aquí va el contenido en Markdown...
```

Aparecerá solo en la portada y en /guias. La URL será `/guias/mi-articulo`.

## Ofertas de empleo reales (APIs de Adzuna + Jooble)

Las páginas `/empleos/{pais}` muestran ofertas reales y legales, enlazando siempre a la
fuente original. Se usan **dos APIs gratuitas** según el país (ver `src/data/paises.ts`):

- **Adzuna** → España, México, Estados Unidos.
- **Jooble** → Colombia, Argentina, Chile, Perú, Ecuador, Venezuela, Uruguay, Bolivia,
  Paraguay, Costa Rica, Panamá, Guatemala, Rep. Dominicana, El Salvador, Honduras, Nicaragua.

**Activarlas:**
1. Adzuna: regístrate gratis en https://developer.adzuna.com/
2. Jooble: solicita tu clave gratis en https://jooble.org/api/about
3. Copia `.env.example` a `.env` y pega tus claves:
   ```
   ADZUNA_APP_ID=tu_app_id
   ADZUNA_APP_KEY=tu_app_key
   JOOBLE_API_KEY=tu_clave
   ```
4. `npm run dev` (o `npm run build`). Las ofertas aparecen solas.

Sin claves, el sitio funciona igual y muestra un aviso en su lugar (no se rompe nada).
Puedes activar solo una de las dos APIs; cada país usará la que le corresponde.

**Mantenerlas frescas:** como el sitio es estático, las ofertas se "congelan" en cada
build. Para refrescarlas, vuelve a desplegar. En Cloudflare Pages/Netlify puedes
programar un **deploy automático diario** gratis (cron/Deploy Hook) y tendrás ofertas
actualizadas sin tocar nada.

**Añadir países:** edita `src/data/paises.ts`. Indica `proveedor: 'adzuna'` (con código
es/mx/us/gb/de/fr/it/br/ca/au...) o `proveedor: 'jooble'` (con el nombre del país como
`codigo`). Jooble cubre prácticamente cualquier país.

**Imágenes de las ofertas:** se asignan automáticamente por sector (`src/lib/sectores.ts`),
sin usar imágenes ajenas. Se puede cambiar luego por fotos reales con licencia (API de
Pexels/Unsplash, también gratis).

## Pasos para publicarlo (gratis)

1. **Sube el proyecto a GitHub** (repo nuevo).
2. **Conéctalo a Cloudflare Pages** (o Netlify / Vercel — todos gratis):
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Tu web quedará online en una URL gratuita (`tuproyecto.pages.dev`).

## Pasos para ganar dinero con AdSense

1. **Compra un dominio** (~10 €/año en Namecheap, Cloudflare, Porkbun...). AdSense aprueba mucho mejor con dominio propio.
2. Apunta el dominio a Cloudflare Pages.
3. Ten **contenido suficiente** publicado (mínimo ~15-20 artículos de calidad recomendado) antes de solicitar AdSense.
4. Solicita **Google AdSense** en https://adsense.google.com.
5. Cuando te aprueben:
   - Pon tu `ca-pub-XXXX` en `src/config.ts` → `adsenseClientId`.
   - Pon tu ID de editor en `public/ads.txt`.
   - Sustituye `https://example.com` por tu dominio en `src/config.ts` y `astro.config.mjs`.
6. Vuelve a hacer `build` y desplegar. Los anuncios se activan solos.

## Importante para que AdSense te apruebe
- Contenido **original y útil** (no copiado). Las guías incluidas son un punto de partida.
- Páginas legales presentes: **Privacidad, Cookies, Aviso legal, Contacto, Sobre nosotros** (ya creadas).
- Tráfico real y navegación clara (ya está montada).
