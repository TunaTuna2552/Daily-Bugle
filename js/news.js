// news.js - Gestión de noticias para Daily-Bugle

const NORMAL_ARTICLES = [
  {
    id: 1,
    title: 'Cumbre Internacional logra histórico acuerdo sobre reducción de emisiones de carbono',
    summary: 'Los líderes de 195 países firmaron un compromiso sin precedentes para reducir las emisiones en un 45% antes de 2035, marcando un punto de inflexión en la lucha global contra el cambio climático.',
    category: 'Política',
    date: '10 ago 2026',
    time: '08:30',
    img: 'https://images.unsplash.com/photo-1672264597620-d792bb6de88d?w=900&h=560&fit=crop&auto=format',
    imgAlt: 'Edificio gubernamental con banderas',
    featured: true
  },
  {
    id: 2,
    title: 'La IA supera por primera vez a médicos humanos en diagnóstico oncológico',
    summary: 'Un nuevo modelo de inteligencia artificial desarrollado por investigadores europeos alcanzó un 97.3% de precisión en la detección temprana de cáncer de pulmón.',
    category: 'Tecnología',
    date: '10 ago 2026',
    time: '10:15',
    img: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Chip de inteligencia artificial'
  },
  {
    id: 3,
    title: 'El Madrid cierra el fichaje del delantero más caro de la historia por 280M€',
    summary: 'El club blanco confirma la incorporación del joven astro brasileño Vinicius Santos en una operación que rompe todos los récords del fútbol mundial.',
    category: 'Deportes',
    date: '10 ago 2026',
    time: '11:40',
    img: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Estadio de fútbol desde el aire'
  },
  {
    id: 4,
    title: 'Bitcoin rompe la barrera de los 200.000 dólares ante la tensión geopolítica',
    summary: 'La criptomoneda líder alcanzó un nuevo máximo histórico impulsada por la incertidumbre en los mercados tradicionales y la creciente adopción institucional.',
    category: 'Economía',
    date: '10 ago 2026',
    time: '09:05',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Gráfico de trading de Bitcoin'
  },
  {
    id: 5,
    title: 'Festival Coachella 2026 anuncia cartel con más de 80 artistas internacionales',
    summary: 'La edición de este año promete ser la más ambiciosa de su historia con la reunión de bandas legendarias junto a los nuevos referentes de la música global.',
    category: 'Entretenimiento',
    date: '10 ago 2026',
    time: '13:20',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Concierto multitudinario'
  },
  {
    id: 6,
    title: 'Protestas masivas sacuden capitales europeas ante alza del coste de vida',
    summary: 'Más de tres millones de ciudadanos salieron a las calles en doce países para exigir medidas urgentes frente a la inflación que supera el 8% anual.',
    category: 'Mundo',
    date: '10 ago 2026',
    time: '14:55',
    img: 'https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Manifestantes con pancartas en la calle'
  },
  {
    id: 7,
    title: 'OpenAI presenta GPT-6: razonamiento cuántico y memoria persistente ilimitada',
    summary: 'El nuevo modelo puede procesar documentos de hasta 10 millones de tokens y mantener contexto a largo plazo entre conversaciones separadas por meses.',
    category: 'Tecnología',
    date: '10 ago 2026',
    time: '16:10',
    img: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Esfera digital de inteligencia artificial'
  },
  {
    id: 8,
    title: 'La selección colombiana clasifica al Mundial 2026 con récord de goles',
    summary: 'La tricolor cerró la fase de clasificación con 42 goles a favor y la mejor defensa de la CONMEBOL, generando expectativas históricas para la cita mundialista.',
    category: 'Deportes',
    date: '9 ago 2026',
    time: '22:30',
    img: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Jugadores de fútbol en el campo'
  },
  {
    id: 9,
    title: 'FMI alerta: recesión técnica en tres economías del G7 antes de fin de año',
    summary: 'El Fondo Monetario Internacional rebajó sus previsiones de crecimiento global al 1.8%, el nivel más bajo desde la crisis financiera de 2008.',
    category: 'Economía',
    date: '9 ago 2026',
    time: '17:45',
    img: 'https://images.unsplash.com/photo-1560221328-12fe60f83ab8?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Monitor con gráfico financiero'
  },
  {
    id: 10,
    title: 'Escándalo en el Senado: filtran conversaciones comprometedoras de tres ministros',
    summary: 'Una fuente anónima entregó a la prensa 4.200 mensajes que revelarían acuerdos irregulares en la adjudicación de contratos públicos por valor de 800M€.',
    category: 'Política',
    date: '9 ago 2026',
    time: '19:00',
    img: 'https://images.unsplash.com/photo-1607778417094-1fef13315e6e?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Sala del senado vacía'
  }
];

const SPIDERMAN_ARTICLES = [
  {
    id: 101,
    title: '¡EXCLUSIVA! Spider-Man es captado enfrentando al Duende Verde en Manhattan',
    summary: 'Fotografías exclusivas enviadas a la redacción del Daily Bugle por Peter Parker muestran al trepamuros balanceándose entre los rascacielos para detener un atentado en Oscorp.',
    category: 'Mundo',
    date: '11 ago 2026',
    time: '09:15',
    img: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=900&h=560&fit=crop&auto=format',
    imgAlt: 'Hombre Araña en la ciudad',
    featured: true
  },
  {
    id: 102,
    title: 'J. Jonah Jameson advierte: "¿Es Spider-Man una amenaza para Nueva York?"',
    summary: 'En una explosiva columna editorial, nuestro director exige el arresto inmediato del vigilante enmascarado tras los costosos daños colaterales en la Quinta Avenida.',
    category: 'Política',
    date: '11 ago 2026',
    time: '10:45',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Rascacielos de Nueva York'
  },
  {
    id: 103,
    title: 'Laboratorios Oscorp revelan robo de prototipo biotecnológico arácnido',
    summary: 'Norman Osborn declara estado de emergencia tras la intrusión nocturna en las instalaciones del laboratorio central. Se investiga posible conexión con el Hombre Araña.',
    category: 'Tecnología',
    date: '11 ago 2026',
    time: '11:20',
    img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Laboratorio de biotecnología'
  },
  {
    id: 104,
    title: 'Misteriosa red de telarañas gigantes salva autobús escolar en el Puente de Brooklyn',
    summary: 'Decenas de testigos presenciaron el rescate heroico cuando los frenos del autobús fallaron en plena hora punta. Las autoridades aún no emiten declaración oficial.',
    category: 'Mundo',
    date: '11 ago 2026',
    time: '12:05',
    img: 'https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Puente de Brooklyn'
  },
  {
    id: 105,
    title: 'Peter Parker consigue las tomas más cercanas de Spider-Man jamás publicadas',
    summary: 'El joven fotógrafo del Daily Bugle comparte los detalles de cómo logró capturar en primer plano la agilidad y las acrobacias del misterioso enmascarado.',
    category: 'Entretenimiento',
    date: '10 ago 2026',
    time: '16:30',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Cámara fotográfica profesional'
  },
  {
    id: 106,
    title: 'Doc Ock y los Seis Siniestros amenazan la seguridad de la red eléctrica',
    summary: 'Un informe confidencial advierte que una alianza de supervillanos planea un apagón masivo en todo el estado de Nueva York este fin de semana.',
    category: 'Tecnología',
    date: '10 ago 2026',
    time: '18:10',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Torre de energía eléctrica'
  },
  {
    id: 107,
    title: 'Caos financiero en Wall Street tras atraco frustrado al banco central',
    summary: 'El villano conocido como el Buitre intentó apoderarse de un cargamento de lingotes de oro pero fue interceptado a tiempo por el lanzarredes.',
    category: 'Economía',
    date: '10 ago 2026',
    time: '20:00',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Edificio de Wall Street'
  },
  {
    id: 108,
    title: 'Spider-Man se une a la carrera benéfica de la Fundación Stark',
    summary: 'Miles de fans se congregaron en Central Park para ver al enmascarado participar en la maratón anual en apoyo a los hospitales infantiles.',
    category: 'Deportes',
    date: '9 ago 2026',
    time: '14:20',
    img: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=380&fit=crop&auto=format',
    imgAlt: 'Maratón en la ciudad'
  }
];

const NORMAL_POPULAR = [
  { id: 1, title: 'El acuerdo climático que cambia las reglas del juego global', category: 'Política', date: '10 ago' },
  { id: 2, title: 'Bitcoin a 200K: ¿burbuja o nueva normalidad financiera?', category: 'Economía', date: '10 ago' },
  { id: 3, title: 'GPT-6 y el fin de la búsqueda tradicional en internet', category: 'Tecnología', date: '10 ago' },
  { id: 4, title: 'Colombia al Mundial: la generación dorada que lo logró', category: 'Deportes', date: '9 ago' },
  { id: 5, title: 'Coachella 2026: las 10 actuaciones que no te puedes perder', category: 'Entretenimiento', date: '9 ago' }
];

const SPIDERMAN_POPULAR = [
  { id: 101, title: '¡EXCLUSIVA! Spider-Man vs Duende Verde en Manhattan', category: 'Mundo', date: '11 ago' },
  { id: 102, title: 'Editorial de J. Jonah Jameson: ¿Heroe o Amenaza?', category: 'Política', date: '11 ago' },
  { id: 103, title: 'Oscorp reporta robo de tecnología arácnida confidencial', category: 'Tecnología', date: '11 ago' },
  { id: 104, title: 'Rescate en el Puente de Brooklyn: Testigos hablan', category: 'Mundo', date: '11 ago' },
  { id: 105, title: 'Secretos tras las fotos de Peter Parker sobre Spider-Man', category: 'Entretenimiento', date: '10 ago' }
];

const CAT_COLORS = {
  'Política': 'var(--cat-politica)',
  'Tecnología': 'var(--cat-tecnologia)',
  'Deportes': 'var(--cat-deportes)',
  'Entretenimiento': 'var(--cat-entretenimiento)',
  'Economía': 'var(--cat-economia)',
  'Mundo': 'var(--cat-mundo)'
};
