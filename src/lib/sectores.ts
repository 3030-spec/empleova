// Asigna una imagen/temática a cada oferta según su sector.
// Usa el "tag" o el texto de la categoría de Adzuna y, si no, palabras del título.
// Es 100% legal y gratis (iconos + degradado generados aquí, sin imágenes ajenas).
// Más adelante se puede cambiar por fotos reales con licencia (Pexels/Unsplash API).

export interface Sector {
  emoji: string;
  grad: [string, string];
  query: string; // término para buscar la foto en Pexels
}

const SECTORES: Record<string, Sector> = {
  tecnologia:    { emoji: '💻', grad: ['#2563eb', '#1e40af'], query: 'programmer computer code' },
  sanidad:       { emoji: '🩺', grad: ['#0d9488', '#0f766e'], query: 'nurse hospital healthcare' },
  hosteleria:    { emoji: '🍽️', grad: ['#ea580c', '#c2410c'], query: 'restaurant chef kitchen' },
  construccion:  { emoji: '🏗️', grad: ['#d97706', '#b45309'], query: 'construction worker site' },
  logistica:     { emoji: '🚚', grad: ['#4f46e5', '#3730a3'], query: 'delivery truck warehouse' },
  ventas:        { emoji: '🛒', grad: ['#db2777', '#9d174d'], query: 'retail store shop' },
  educacion:     { emoji: '📚', grad: ['#7c3aed', '#5b21b6'], query: 'teacher classroom' },
  oficina:       { emoji: '🗂️', grad: ['#0891b2', '#155e75'], query: 'office administration desk' },
  finanzas:      { emoji: '💷', grad: ['#059669', '#047857'], query: 'finance accounting' },
  ingenieria:    { emoji: '⚙️', grad: ['#475569', '#334155'], query: 'engineer industrial factory' },
  limpieza:      { emoji: '🧹', grad: ['#0284c7', '#075985'], query: 'cleaning service' },
  atencion:      { emoji: '🎧', grad: ['#6366f1', '#4338ca'], query: 'call center customer service' },
  marketing:     { emoji: '📈', grad: ['#e11d48', '#be123c'], query: 'marketing team meeting' },
  legal:         { emoji: '⚖️', grad: ['#525252', '#404040'], query: 'lawyer law office' },
  agricultura:   { emoji: '🌾', grad: ['#65a30d', '#4d7c0f'], query: 'agriculture farm field' },
  seguridad:     { emoji: '🛡️', grad: ['#1f2937', '#111827'], query: 'security guard' },
  generico:      { emoji: '💼', grad: ['#635bff', '#4f46e5'], query: 'business office work' },
};

// Detección por TÍTULO (la señal más fiable). Orden de específico -> general.
// Incluye términos en español (con y sin acento) e inglés.
const REGLAS_TITULO: [RegExp, keyof typeof SECTORES][] = [
  [/abogad|jurid|jurídic|laboralista|notari|legal|lawyer|letrad/i, 'legal'],
  [/enferm|m[eé]dic|sanitari|hospital|cl[ií]nic|farmac|fisioterap|psic[oó]log|neuropsic|odontolog|dental|celador|cuidador|nurse|doctor|fisio/i, 'sanidad'],
  [/profesor|docent|maestr|teacher|formador|educa|monitor|tutor/i, 'educacion'],
  [/desarroll|program|software|developer|devops|backend|frontend|full[\s-]?stack|data engineer|cient[ií]fico de datos|sistemas inform|inform[aá]tic|ciberseg|cloud|aws|azure|\bqa\b|\bit\b|\bsap\b/i, 'tecnologia'],
  [/camarer|cociner|cocina|\bchef\b|restaura|hosteler|barista|kitchen|waiter|recepcionista de hotel|hotel\b/i, 'hosteleria'],
  [/comercial|dependient|vendedor|\bventas\b|retail|\bsales\b|key account|account manager|televenta|supermercad|reponedor|cajer[oa]|gran superficie|charcuter|fruter|tienda|\bropa\b|moda\b|textil|boutique/i, 'ventas'],
  [/marketing|community manager|redes sociales|social media|publicid|\bseo\b|comunicaci/i, 'marketing'],
  [/alba[ñn]il|\bobra\b|construc|fontaner|electricista|soldad|encofrad|pe[oó]n|plumber|carpinter|pintor/i, 'construccion'],
  [/log[ií]stic|almac[eé]n|repart|conduct|chofer|transport|\bcarga\b|cargo|\bmozo\b|warehouse|delivery|air operations|airport|aeroport|carretiller/i, 'logistica'],
  [/ingenier|engineer|mec[aá]nic|electromec[aá]n|industrial|automotive|mantenimiento|maintenance|facilit|t[eé]cnic/i, 'ingenieria'],
  [/financ|contab|banc|auditor|accounting|tesorer|fiscal/i, 'finanzas'],
  [/limpiez|\blimpia|cleaning|limpiador/i, 'limpieza'],
  [/teleoperad|call center|atenci[oó]n al cliente|customer|soporte|helpdesk|recepcionista/i, 'atencion'],
  [/agr[ií]c|granja|\bfarm\b|ganader|jardin|\bcampo\b/i, 'agricultura'],
  [/segurid|vigilan|security|\bguard\b/i, 'seguridad'],
  [/administrat|administrativ|secretari|\boffice\b|back office|front office|auxiliar admin/i, 'oficina'],
];

// Fallback por etiqueta/categoría de Adzuna (en inglés) si el título no aclara nada.
const REGLAS_TAG: [RegExp, keyof typeof SECTORES][] = [
  [/legal/i, 'legal'],
  [/healthcare|nursing|medic/i, 'sanidad'],
  [/teaching|education/i, 'educacion'],
  [/it-jobs|software/i, 'tecnologia'],
  [/hospitality|catering/i, 'hosteleria'],
  [/retail|sales/i, 'ventas'],
  [/\bpr\b|marketing/i, 'marketing'],
  [/construction|trade|property/i, 'construccion'],
  [/logistics|warehouse/i, 'logistica'],
  [/engineering|manufacturing|maintenance|scientific/i, 'ingenieria'],
  [/accounting|finance|banking/i, 'finanzas'],
  [/cleaning|domestic/i, 'limpieza'],
  [/customer|consultancy/i, 'atencion'],
  [/agriculture|farming/i, 'agricultura'],
  [/security/i, 'seguridad'],
  [/admin/i, 'oficina'],
];

export function sectorDe(tag: string, categoria: string, titulo: string): Sector {
  // 1) Por el título, que es lo más fiable.
  for (const [re, key] of REGLAS_TITULO) {
    if (re.test(titulo)) return SECTORES[key];
  }
  // 2) Por la etiqueta/categoría de Adzuna.
  const meta = `${tag} ${categoria}`;
  for (const [re, key] of REGLAS_TAG) {
    if (re.test(meta)) return SECTORES[key];
  }
  return SECTORES.generico;
}
