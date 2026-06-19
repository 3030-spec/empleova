// Contenido por sector (categoriaTag) para enriquecer las fichas de empresa:
// qué hace el puesto, requisitos habituales, si suele pedir experiencia y la guía
// de salarios relacionada. Hace que cada ficha tenga texto sustancial y útil.

export interface SectorTexto {
  queHace: string;
  funciones: string[];
  requisitos: string[];
  sinExperiencia: boolean;
  salarioGuia?: string; // slug de una guía de salarios relacionada
}

export const SECTOR_TEXTO: Record<string, SectorTexto> = {
  'retail-jobs': {
    queHace: 'El personal de comercio y supermercado se encarga de que la tienda funcione y de que el cliente tenga una buena experiencia de compra. Es uno de los empleos más accesibles y con más vacantes durante todo el año.',
    funciones: ['Atención al cliente y resolución de dudas', 'Cobro en caja', 'Reposición y orden del producto en estantería', 'Control de stock y recepción de mercancía', 'Mantenimiento del orden y limpieza del punto de venta'],
    requisitos: ['Ganas de trabajar y trato amable', 'Disponibilidad horaria (turnos rotativos y fines de semana)', 'Capacidad para trabajar en equipo', 'En muchos casos no se exige experiencia previa'],
    sinExperiencia: true,
    salarioGuia: 'cuanto-gana-camarero-repartidor-teleoperador',
  },
  'hospitality-catering-jobs': {
    queHace: 'El personal de hostelería y restauración atiende a los clientes, prepara y sirve la comida y mantiene el local en marcha. Es un sector con muchísima demanda, ideal para un primer empleo y con opciones de crecer rápido.',
    funciones: ['Atención al cliente y toma de comandas', 'Preparación y emplatado en cocina', 'Servicio en sala o barra', 'Cobro en caja', 'Limpieza y orden del local'],
    requisitos: ['Actitud de servicio y rapidez', 'Disponibilidad para turnos partidos, noches y fines de semana', 'Trabajo en equipo', 'Sin experiencia en muchos puestos (forman al entrar)'],
    sinExperiencia: true,
    salarioGuia: 'cuanto-gana-camarero-repartidor-teleoperador',
  },
  'healthcare-nursing-jobs': {
    queHace: 'El personal de cuidado y salud atiende las necesidades de pacientes o residentes y apoya al equipo sanitario. Es un sector con demanda creciente y mucha estabilidad por el envejecimiento de la población.',
    funciones: ['Cuidado e higiene del paciente o residente', 'Ayuda en la movilización y la alimentación', 'Apoyo al personal de enfermería', 'Acompañamiento y atención', 'Control y registro de incidencias'],
    requisitos: ['Empatía, paciencia y vocación de cuidado', 'Para algunos puestos, titulación de auxiliar/TCAE o similar', 'Disponibilidad para turnos', 'Trabajo en equipo'],
    sinExperiencia: false,
    salarioGuia: 'cuanto-gana-enfermero-sanidad',
  },
  'finance-banking-jobs': {
    queHace: 'El empleo en banca incluye atención al cliente en oficina, ventas de productos financieros y gestión administrativa. Suele ofrecer buenas condiciones y planes de carrera.',
    funciones: ['Atención al cliente en sucursal', 'Gestión de cajas y operaciones', 'Asesoramiento y venta de productos', 'Tareas administrativas', 'Cumplimiento de objetivos comerciales'],
    requisitos: ['Buena atención al cliente y orientación comercial', 'Formación en áreas administrativas o financieras (según puesto)', 'Manejo de herramientas informáticas', 'Programas para jóvenes y recién titulados'],
    sinExperiencia: false,
  },
  'logistics-warehouse-jobs': {
    queHace: 'El personal de logística y producción mueve, prepara y distribuye la mercancía. Es uno de los sectores con más contratación, especialmente en campañas de alta demanda.',
    funciones: ['Preparación de pedidos y empaquetado', 'Carga, descarga y manipulación', 'Uso de carretilla o transpaleta (según puesto)', 'Control de inventario', 'Reparto y distribución'],
    requisitos: ['Capacidad para el trabajo físico', 'Disponibilidad para turnos (incluidos noches y fines de semana)', 'Para conducir, el carné correspondiente', 'Sin experiencia en muchos puestos de almacén'],
    sinExperiencia: true,
    salarioGuia: 'cuanto-gana-conductor-camion',
  },
  'customer-services-jobs': {
    queHace: 'El personal de atención al cliente resuelve dudas, gestiona incidencias y ofrece productos por teléfono, chat o en tienda. Es un empleo muy accesible y con vacantes constantes.',
    funciones: ['Atención de llamadas, chat o presencial', 'Resolución de dudas e incidencias', 'Venta y promoción de servicios', 'Registro de gestiones', 'Cumplimiento de objetivos'],
    requisitos: ['Buena comunicación y trato amable', 'Manejo básico del ordenador', 'En puestos bilingües, idiomas (mejor pagados)', 'Sin experiencia en muchos casos (forman al entrar)'],
    sinExperiencia: true,
    salarioGuia: 'cuanto-gana-camarero-repartidor-teleoperador',
  },
  'cleaning-jobs': {
    queHace: 'El personal de limpieza y servicios mantiene en buen estado oficinas, centros, hospitales, hoteles o espacios públicos. Es un empleo con mucha demanda y vacantes durante todo el año.',
    funciones: ['Limpieza y desinfección de espacios', 'Reposición de material', 'Manejo de productos y maquinaria de limpieza', 'Orden y mantenimiento básico'],
    requisitos: ['Responsabilidad y atención al detalle', 'Disponibilidad para distintos turnos', 'Capacidad para el trabajo físico', 'Sin experiencia en muchos casos'],
    sinExperiencia: true,
  },
  'security-jobs': {
    queHace: 'El personal de seguridad protege instalaciones, controla accesos y vela por las personas y los bienes. Requiere acreditación según el país, pero ofrece empleo estable.',
    funciones: ['Control de accesos y vigilancia', 'Rondas y supervisión', 'Atención de incidencias', 'Elaboración de informes'],
    requisitos: ['Acreditación o carné de vigilante (según el país)', 'Responsabilidad y buena presencia', 'Disponibilidad para turnos, incluidos noches', 'Trabajo en equipo'],
    sinExperiencia: false,
  },
  'engineering-jobs': {
    queHace: 'El empleo en industria y operaciones abarca producción, mantenimiento y manejo de maquinaria en plantas y fábricas. Hay puestos de operario sin cualificación y otros técnicos mejor pagados.',
    funciones: ['Operación de líneas de producción', 'Manejo y mantenimiento de maquinaria', 'Control de calidad', 'Carga, descarga y logística interna'],
    requisitos: ['Capacidad para el trabajo físico y por turnos', 'Para puestos técnicos, formación específica', 'Atención a la seguridad laboral', 'Sin experiencia en puestos de operario'],
    sinExperiencia: true,
  },
  'construction-property-jobs': {
    queHace: 'El empleo en construcción y oficios incluye desde peón sin experiencia hasta oficiales especializados. Es un sector con mucha demanda y buenos sueldos para quien se especializa.',
    funciones: ['Trabajos de obra y ayuda a oficiales', 'Manejo de herramientas y materiales', 'Carga y descarga', 'Mantenimiento e instalaciones'],
    requisitos: ['Capacidad para el trabajo físico', 'Para oficios, experiencia o formación específica', 'Atención a la seguridad en obra', 'Sin experiencia en puestos de peón'],
    sinExperiencia: true,
    salarioGuia: 'cuanto-gana-electricista',
  },
  'it-jobs': {
    queHace: 'El empleo corporativo y tecnológico abarca oficinas, soporte, atención y perfiles técnicos. Ofrece buenas condiciones y opciones de teletrabajo en muchos casos.',
    funciones: ['Soporte y atención', 'Tareas administrativas y de oficina', 'Gestión de sistemas o proyectos (según puesto)', 'Trabajo por objetivos'],
    requisitos: ['Formación según el puesto', 'Manejo de herramientas informáticas', 'Capacidad de organización', 'Programas para jóvenes y prácticas'],
    sinExperiencia: false,
    salarioGuia: 'cuanto-gana-programador',
  },
  'other-general-jobs': {
    queHace: 'Esta empresa ofrece empleo en distintas áreas, con vacantes que cambian a lo largo del año. Es una buena opción para encontrar trabajo según tu perfil.',
    funciones: ['Atención al cliente', 'Ventas y promoción', 'Tareas administrativas o de apoyo', 'Otras según el puesto'],
    requisitos: ['Ganas de trabajar y aprender', 'Disponibilidad horaria', 'Trabajo en equipo', 'Requisitos según cada vacante'],
    sinExperiencia: true,
  },
};
