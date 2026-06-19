import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.date(),
    categoria: z.string(),
    imagen: z.string().optional(),
    // Preguntas frecuentes opcionales -> generan datos estructurados FAQPage.
    faq: z.array(z.object({ pregunta: z.string(), respuesta: z.string() })).optional(),
  }),
});

export const collections = { guias };
