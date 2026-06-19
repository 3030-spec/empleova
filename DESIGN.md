---
name: empleova-design
description: Sistema de diseño de empleova — portal de empleo en español. Línea "azul moderno / confianza" inspirada en Stripe: indigo eléctrico (blurple) sobre tinta navy, fondo frío casi blanco, degradado mesh atmosférico en el hero, botones píldora, tarjetas sobre superficie clara con hairline y sombra de tinte azul. Tipografía: Bricolage Grotesque (títulos) + Hanken Grotesk (texto).
---

# empleova — DESIGN.md

Documento de diseño para generar UI consistente en todo el sitio.

## Tono
Moderno, profesional y de confianza. Limpio y legible (es un sitio de contenido con AdSense). Nada recargado.

## Color (definido en `src/styles/global.css` `:root`)
- **Marca (blurple):** `--azul: #635bff`
- **Marca oscura / enlaces:** `--azul-osc: #4f46e5`
- **Acento (cian):** `--acento: #06b6d4` (solo detalles: punto del logo, barras)
- **Tinta (texto):** `--texto: #0d253d`
- **Texto secundario:** `--gris: #64748d`
- **Fondo:** `--bg: #f6f9fc` (frío, casi blanco)
- **Superficie/tarjetas:** `--blanco: #ffffff`
- **Hairline / borde:** `--borde: #e3e8ee`
- **Éxito / salario:** `--verde: #0f9d6e`
- **Navy del hero:** `#1a1f5c → #0d1240`

## Tipografía
- **Títulos:** Bricolage Grotesque, peso 600-800, `letter-spacing: -0.015em` (más cerrado en h1).
- **Texto:** Hanken Grotesk, 400-600, `line-height: 1.65`.
- Tamaños: h1 2.3rem (hero 2.9rem), h2 1.7rem, h3 1.2rem, body 17px.

## Formas y elevación
- **Radio:** tarjetas/inputs `--radio: 16px`; botones y chips píldora (`999px`).
- **Sombra:** `--sombra` con leve tinte azul; al hover, la tarjeta se eleva (`translateY(-3px)`).
- **Hairline:** bordes finos cálidos-fríos `#e3e8ee`.

## Hero
Degradado **mesh atmosférico** (estilo Stripe) sobre navy: radiales de blurple (arriba-izq.), cian (arriba-der.) y un toque magenta (abajo), sobre `linear-gradient` navy. Texto en blanco. Chips translúcidos tipo cristal.

## Componentes
- **Botón primario (`.btn`):** fondo blurple, texto blanco, píldora, hover a `--azul-osc` + leve subida.
- **Tarjeta (`.card`, `.job`):** superficie blanca, hairline, sombra suave, hover elevación.
- **Header:** translúcido con `backdrop-filter` (efecto cristal), sticky en desktop, estático en móvil.
- **Footer:** navy profundo `#0b1733`.
- **Categoría/etiqueta (`.cat`):** blurple, mayúsculas, `letter-spacing: 0.05em`.

## Responsive
- Móvil (≤600px): 1 columna, header estático, tipografía 16px, padding reducido.
- Tablet (≤820px): rejilla algo más estrecha.

## Reglas
- Mantener contraste alto y legibilidad (contenido + AdSense).
- Acento cian con moderación.
- No introducir morados sobre blanco genéricos ni fuentes tipo Inter/Arial.
