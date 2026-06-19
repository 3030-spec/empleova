import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { PAISES } from '../data/paises';
import { OFERTAS_DESTACADAS } from '../data/ofertas_destacadas';

// Índice de búsqueda servido como archivo JSON estático (/buscador.json).
// Así no carga peso a la portada; se descarga solo al usar el buscador.
const KW: Record<string, string> = {
  'retail-jobs': 'supermercado tienda cajero cajera reponedor reponedora dependiente dependienta vendedor comercio ventas mostrador farmacia',
  'hospitality-catering-jobs': 'camarero camarera cocina cocinero ayudante de cocina restaurante hotel hosteleria barista cafeteria mesero limpieza de habitaciones recepcion lavaplatos comedor',
  'healthcare-nursing-jobs': 'cuidador cuidadora auxiliar enfermeria residencia mayores gerocultor sanitario salud',
  'logistics-warehouse-jobs': 'almacen mozo carretillero reparto repartidor delivery logistica preparacion de pedidos conductor produccion',
  'finance-banking-jobs': 'banco banca cajero oficina financiero',
  'customer-services-jobs': 'atencion al cliente call center teleoperador soporte ventas telefonia',
  'cleaning-jobs': 'limpieza limpiador limpiadora servicios',
  'security-jobs': 'seguridad vigilante guardia',
  'engineering-jobs': 'industrial produccion operario mantenimiento tecnico',
  'it-jobs': 'tecnologia informatica programador oficina corporativo',
  'construction-property-jobs': 'construccion obra peon albanil oficios',
  'other-general-jobs': 'empleo trabajo ofertas ett',
};

export const GET: APIRoute = async () => {
  const guias = await getCollection('guias');
  const paisNombre = Object.fromEntries(PAISES.map((p) => [p.slug, p.nombre]));
  const indice = [
    ...guias.map((g) => ({ t: g.data.titulo, s: 'Guía · ' + g.data.categoria, u: `/guias/${g.id}`, k: g.data.descripcion })),
    ...PAISES.map((p) => ({ t: `Empleos en ${p.nombre}`, s: 'Ofertas por país', u: `/empleos/${p.slug}`, k: 'trabajo empleo ofertas ' + p.sectores })),
    ...OFERTAS_DESTACADAS.map((o) => ({ t: `${o.empresa} — ${o.titulo}`, s: `Empresa · ${paisNombre[o.pais] ?? ''}`, u: `/empleos/${o.pais}`, k: `${o.descripcion} ${KW[o.categoriaTag] ?? ''}` })),
  ];
  return new Response(JSON.stringify(indice), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
