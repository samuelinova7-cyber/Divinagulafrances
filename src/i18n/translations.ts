export type Language = 'pt' | 'es' | 'en' | 'fr' | 'ja';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷', nativeName: 'Português' },
  { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'en', label: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', nativeName: '日本語' },
];

export interface TranslationDictionary {
  // Navigation
  navPromo: string;
  navMenu: string;
  navQuiz: string;
  navInstagram: string;
  navReviews: string;
  navDirections: string;
  navComanda: string;
  navReserveWhatsApp: string;
  navSelectLanguage: string;

  // Hero
  heroGoogleReviews: string;
  heroLocation: string;
  heroOutdoor: string;
  heroTagline: string;
  heroStory: string;
  heroHappyHourTitle: string;
  heroHappyHourDesc: string;
  heroViewMenu: string;
  heroOrderIfood: string;
  heroQuizBtn: string;

  // iFood Section
  ifoodBadge: string;
  ifoodTitle: string;
  ifoodDesc: string;
  ifoodBtnMain: string;
  ifoodBtnApp: string;
  ifoodFeature1Title: string;
  ifoodFeature1Desc: string;
  ifoodFeature2Title: string;
  ifoodFeature2Desc: string;
  ifoodFeature3Title: string;
  ifoodFeature3Desc: string;
  ifoodSchedule: string;
  ifoodAvgTime: string;

  // Instagram Section
  igConnect: string;
  igFollowers: string;
  igBranchOf: string;
  igFollowBtn: string;

  // Promotions Section
  promoBadge: string;
  promoTitle: string;
  promoDesc: string;
  promoPrayaExpTitle: string;
  promoPrayaExpDesc: string;
  promoPraya4x3Title: string;
  promoPraya4x3Desc: string;
  addToOrder: string;
  addedToOrder: string;
  tagSpecialCombo: string;
  tagGlutenFree: string;
  tagFavorite: string;
  tagColdBeer: string;
  tagBuy3Get4: string;

  // Category Nav & Menu
  searchPlaceholder: string;
  filterAll: string;
  filterSeafood: string;
  filterMeat: string;
  filterSnacks: string;
  filterDrinks: string;
  filterDesserts: string;
  filterGlutenFreeBadge: string;
  menuSectionServing: string;
  menuSectionPeople: string;
  menuSectionPerson: string;
  menuItemHighlight: string;
  noDishesFound: string;
  clearFilters: string;
  videoNotSupported: string;
  soundOn: string;
  soundOff: string;

  // Taste Quiz
  quizTitle: string;
  quizSubtitle: string;
  quizQuestionOf: string;
  quizSeafoodResultTitle: string;
  quizSeafoodResultDesc: string;
  quizSeafoodResultDish: string;
  quizMeatResultTitle: string;
  quizMeatResultDesc: string;
  quizMeatResultDish: string;
  quizSeeDishInMenu: string;
  quizRetake: string;

  // Google Reviews & Location
  reviewsSectionBadge: string;
  reviewsSectionTitle: string;
  reviewsSectionSubtitle: string;
  reviewsFilterAll: string;
  reviewsFilterFood: string;
  reviewsFilterService: string;
  reviewsFilterAmbience: string;
  reviewsFilterDrinks: string;
  reviewsBadgeVerified: string;
  reviewsPhotoTag: string;
  reviewsReadMore: string;
  reviewsShowLess: string;
  locationTitle: string;
  locationSubtitle: string;
  locationAddressLabel: string;
  locationRefLabel: string;
  locationCopyAddress: string;
  locationCopied: string;
  locationOpenMaps: string;
  locationGetDirections: string;
  locationOpeningHours: string;
  locationScheduleTueThu: string;
  locationScheduleFriSat: string;
  locationScheduleSun: string;
  locationScheduleMon: string;

  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;

  // Order Drawer
  orderDrawerTitle: string;
  orderDrawerSubtitle: string;
  orderTableInputLabel: string;
  orderTableInputPlaceholder: string;
  orderNameInputLabel: string;
  orderNameInputPlaceholder: string;
  orderNotesInputLabel: string;
  orderNotesInputPlaceholder: string;
  orderServiceFeeLabel: string;
  orderSplitBillLabel: string;
  orderSubtotal: string;
  orderServiceFee: string;
  orderTotal: string;
  orderPerPerson: string;
  orderSendWhatsApp: string;
  orderCopyText: string;
  orderCopied: string;
  orderClear: string;
  orderEmptyTitle: string;
  orderEmptySubtitle: string;

  // Live Toast
  toastGoogleReview: string;
  toastLocalOrder: string;
  toastIfoodOrder: string;
  toastJustNow: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerOpeningHoursTitle: string;
  footerContactTitle: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  pt: {
    // Navigation
    navPromo: "Promoções",
    navMenu: "Cardápio Completo",
    navQuiz: "Quiz do Sabor",
    navInstagram: "Instagram",
    navReviews: "Avaliações (5.0 ⭐)",
    navDirections: "Como Chegar",
    navComanda: "Comanda",
    navReserveWhatsApp: "Fazer Reserva via WhatsApp",
    navSelectLanguage: "Idioma",

    // Hero
    heroGoogleReviews: "avaliações Google",
    heroLocation: "Praia do Francês, Alagoas",
    heroOutdoor: "Mesas ao Ar Livre",
    heroTagline: "Comida brasileira de verdade.",
    heroStory: "A autêntica culinária brasileira com ingredientes nobres do mar e da terra, moquecas borbulhantes na panela de barro, cortes maturados na brasa e mixologia tropical.",
    heroHappyHourTitle: "Happy Hour Especial:",
    heroHappyHourDesc: "Terça a Sexta, 16h às 19h · Chopp a partir de R$ 6,50 · Caipiroska R$ 14,90",
    heroViewMenu: "Ver Cardápio",
    heroOrderIfood: "Pedir no iFood",
    heroQuizBtn: "Descubra seu Prato (Quiz)",

    // iFood Section
    ifoodBadge: "Delivery Oficial no Francês",
    ifoodTitle: "Peça no iFood & Receba em Casa",
    ifoodDesc: "Toda a tradição e os sabores consagrados do Divina Gula Francês entregues com embalagem térmica especial, agilidade e máxima segurança direto na sua pousada, casa ou praia.",
    ifoodBtnMain: "Pedir Agora no iFood",
    ifoodBtnApp: "Abrir App do iFood",
    ifoodFeature1Title: "Entrega Rápida",
    ifoodFeature1Desc: "Chega quentinho e no ponto ideal direto na sua pousada ou casa.",
    ifoodFeature2Title: "Embalagem Térmica Segura",
    ifoodFeature2Desc: "Recipientes selados antivazamento mantêm o sabor e a textura originais.",
    ifoodFeature3Title: "Cardápio Completo no App",
    ifoodFeature3Desc: "Moquecas, petiscos, carnes grelhadas e bebidas geladas a um clique.",
    ifoodSchedule: "Terça a Domingo: Almoço e Jantar",
    ifoodAvgTime: "30 - 45 min",

    // Instagram Section
    igConnect: "Conecte-se Conosco",
    igFollowers: "seguidores",
    igBranchOf: "Filial de",
    igFollowBtn: "Seguir no Instagram",

    // Promotions Section
    promoBadge: "Destaques da Praia",
    promoTitle: "Promoções & Happy Hour",
    promoDesc: "Condições especiais para aproveitar a brisa do mar com cerveja gelada, petiscos artesanais e drinks selecionados.",
    promoPrayaExpTitle: "Praya Experience",
    promoPrayaExpDesc: "2 Cervejas Prayas bem geladas + Bolinho de Camarão (crocante por fora, macio por dentro, feito com massa de macaxeira sem glúten e catupiry).",
    promoPraya4x3Title: "Promoção Praya 4x3",
    promoPraya4x3Desc: "Na compra de 3 cervejas artesanais Praya puro malte (sem glúten), a 4ª unidade sai 100% por nossa conta!",
    addToOrder: "Adicionar à Comanda",
    addedToOrder: "Adicionado!",
    tagSpecialCombo: "Combo Especial",
    tagGlutenFree: "Sem Glúten",
    tagFavorite: "Favorito",
    tagColdBeer: "Cerveja Gelada",
    tagBuy3Get4: "Pague 3 Leve 4",

    // Category Nav & Menu
    searchPlaceholder: "Buscar no cardápio (ex: camarão, picanha, moqueca, chopp)...",
    filterAll: "Todo o Cardápio",
    filterSeafood: "Frutos do Mar",
    filterMeat: "Carnes & Brasa",
    filterSnacks: "Petiscos & Entradas",
    filterDrinks: "Drinks & Cervejas",
    filterDesserts: "Sobremesas",
    filterGlutenFreeBadge: "Sem Glúten",
    menuSectionServing: "Serve",
    menuSectionPeople: "pessoas",
    menuSectionPerson: "pessoa",
    menuItemHighlight: "Destaque da Casa",
    noDishesFound: "Nenhum prato encontrado para sua busca.",
    clearFilters: "Limpar filtros",
    videoNotSupported: "Seu navegador não suporta vídeos.",
    soundOn: "Ativar Som",
    soundOff: "Silenciar",

    // Taste Quiz
    quizTitle: "Quiz do Sabor",
    quizSubtitle: "Responda a perguntas rápidas e descubra o prato perfeito para o seu paladar hoje!",
    quizQuestionOf: "Pergunta",
    quizSeafoodResultTitle: "Seu prato ideal é do Mar!",
    quizSeafoodResultDesc: "Seu perfil combina com sabores frescos, o calor aconchegante da panela de barro e os frutos do mar mais nobres da costa de Alagoas.",
    quizSeafoodResultDish: "Moqueca Mista de Robalo e Camarão",
    quizMeatResultTitle: "Seu prato ideal é da Brasa!",
    quizMeatResultDesc: "Seu paladar pede a força de um corte nobre grelhado na brasa de carvão ou o cozimento lento da nossa premiada costela.",
    quizMeatResultDish: "Picanha Nobre na Brasa ou Costela 24h",
    quizSeeDishInMenu: "Ver Prato no Cardápio",
    quizRetake: "Refazer Quiz",

    // Google Reviews & Location
    reviewsSectionBadge: "Avaliações Verificadas",
    reviewsSectionTitle: "O que dizem os nossos clientes",
    reviewsSectionSubtitle: "Mais de 1.840 avaliações de clientes apaixonados pela gastronomia e atendimento do Divina Gula Francês.",
    reviewsFilterAll: "Todas as Avaliações",
    reviewsFilterFood: "Comida & Sabor",
    reviewsFilterService: "Atendimento Exemplar",
    reviewsFilterAmbience: "Ambiente & Praia",
    reviewsFilterDrinks: "Drinks & Chopp",
    reviewsBadgeVerified: "Avaliação Verificada",
    reviewsPhotoTag: "Foto do cliente",
    reviewsReadMore: "Mais",
    reviewsShowLess: "Menos",
    locationTitle: "Localização & Como Chegar",
    locationSubtitle: "Estamos a poucos passos do mar na praia mais famosa de Marechal Deodoro.",
    locationAddressLabel: "Endereço Completo:",
    locationRefLabel: "Ponto de Referência: Em frente à charmosa La Rue",
    locationCopyAddress: "Copiar Endereço",
    locationCopied: "Endereço Copiado!",
    locationOpenMaps: "Abrir no Google Maps",
    locationGetDirections: "Traçar Rota",
    locationOpeningHours: "Horários de Funcionamento",
    locationScheduleTueThu: "Terça a Quinta: 12h às 23h",
    locationScheduleFriSat: "Sexta e Sábado: 12h às 00h",
    locationScheduleSun: "Domingo: 12h às 22h",
    locationScheduleMon: "Segunda-feira: Fechado para descanso da equipe",

    // FAQ
    faqBadge: "Tire suas Dúvidas",
    faqTitle: "Perguntas Frequentes (FAQ)",
    faqSubtitle: "Tudo o que você precisa saber sobre o Divina Gula Francês, reservas, cardápio e funcionamento.",

    // Order Drawer
    orderDrawerTitle: "Sua Comanda / Pedido",
    orderDrawerSubtitle: "Revise seus pratos selecionados e envie direto para nossa equipe.",
    orderTableInputLabel: "Mesa ou Local de Entrega",
    orderTableInputPlaceholder: "Ex: Mesa 12 ou Pousada Francês Quarto 4",
    orderNameInputLabel: "Seu Nome (opcional)",
    orderNameInputPlaceholder: "Como podemos lhe chamar?",
    orderNotesInputLabel: "Observações do Pedido",
    orderNotesInputPlaceholder: "Ex: Carne ao ponto, sem cebola, copos com gelo e limão...",
    orderServiceFeeLabel: "Incluir taxa de serviço sugerida (10%)",
    orderSplitBillLabel: "Dividir conta em quantas pessoas?",
    orderSubtotal: "Subtotal",
    orderServiceFee: "Taxa de Serviço (10%)",
    orderTotal: "Total Estimado",
    orderPerPerson: "Por pessoa",
    orderSendWhatsApp: "Enviar Pedido via WhatsApp",
    orderCopyText: "Copiar Texto da Comanda",
    orderCopied: "Copiado para a área de transferência!",
    orderClear: "Limpar Comanda",
    orderEmptyTitle: "Sua comanda está vazia",
    orderEmptySubtitle: "Navegue pelo cardápio e clique em 'Adicionar à Comanda' nos seus pratos preferidos!",

    // Live Toast
    toastGoogleReview: "Novo Comentário no Google",
    toastLocalOrder: "Novo Pedido no Salão",
    toastIfoodOrder: "Novo Pedido saindo no iFood",
    toastJustNow: "agora mesmo",

    // Footer
    footerDesc: "Comida brasileira de verdade. Frutos do mar frescos, moquecas de barro, carnes nobres na brasa, chopps artesanais e a brisa inconfundível do Francês.",
    footerQuickLinks: "Links Rápidos",
    footerOpeningHoursTitle: "Horários",
    footerContactTitle: "Contato & Reservas",
    footerRights: "Todos os direitos reservados. Praia do Francês, Alagoas.",
  },

  es: {
    // Navigation
    navPromo: "Promociones",
    navMenu: "Menú Completo",
    navQuiz: "Quiz del Sabor",
    navInstagram: "Instagram",
    navReviews: "Reseñas (5.0 ⭐)",
    navDirections: "Cómo Llegar",
    navComanda: "Comanda",
    navReserveWhatsApp: "Reservar vía WhatsApp",
    navSelectLanguage: "Idioma",

    // Hero
    heroGoogleReviews: "reseñas en Google",
    heroLocation: "Praia do Francês, Alagoas",
    heroOutdoor: "Mesas al Aire Libre",
    heroTagline: "Auténtica comida brasileña de verdad.",
    heroStory: "La auténtica gastronomía brasileña con ingredientes nobles del mar y la tierra, cazuelas borboteantes de moqueca en barro, carnes nobles a la brasa y coctelería tropical.",
    heroHappyHourTitle: "Happy Hour Especial:",
    heroHappyHourDesc: "Martes a Viernes, 16h a 19h · Chopp desde R$ 6,50 · Caipiroska R$ 14,90",
    heroViewMenu: "Ver Menú",
    heroOrderIfood: "Pedir en iFood",
    heroQuizBtn: "Descubre tu Plato (Quiz)",

    // iFood Section
    ifoodBadge: "Delivery Oficial en el Francês",
    ifoodTitle: "Pide en iFood y Recibe en Casa",
    ifoodDesc: "Toda la tradición y los consagrados sabores de Divina Gula Francês entregados con empaque térmico especial, rapidez y máxima seguridad directamente en tu posada, casa o playa.",
    ifoodBtnMain: "Pedir Ahora en iFood",
    ifoodBtnApp: "Abrir App de iFood",
    ifoodFeature1Title: "Entrega Rápida",
    ifoodFeature1Desc: "Llega caliente y en el punto ideal directo a tu posada o casa.",
    ifoodFeature2Title: "Empaque Térmico Seguro",
    ifoodFeature2Desc: "Envases sellados antiderrames que preservan el sabor y la textura originales.",
    ifoodFeature3Title: "Menú Completo en la App",
    ifoodFeature3Desc: "Moquecas, aperitivos, carnes a la brasa y bebidas heladas a un solo clic.",
    ifoodSchedule: "Martes a Domingo: Almuerzo y Cena",
    ifoodAvgTime: "30 - 45 min",

    // Instagram Section
    igConnect: "Conéctate con Nosotros",
    igFollowers: "seguidores",
    igBranchOf: "Sucursal de",
    igFollowBtn: "Seguir en Instagram",

    // Promotions Section
    promoBadge: "Destacados de la Playa",
    promoTitle: "Promociones & Happy Hour",
    promoDesc: "Ofertas especiales para disfrutar de la brisa marina con cerveza helada, tapas artesanales y cócteles exclusivos.",
    promoPrayaExpTitle: "Experiencia Praya",
    promoPrayaExpDesc: "2 Cervezas artesanales Praya bien frías + Bolinho de Camarón (crujiente por fuera, suave por dentro, masa de yuca sin gluten y catupiry).",
    promoPraya4x3Title: "Promoción Praya 4x3",
    promoPraya4x3Desc: "¡Al comprar 3 cervezas artesanales Praya (sin gluten), la 4ª unidad va 100% por nuestra cuenta!",
    addToOrder: "Añadir a la Comanda",
    addedToOrder: "¡Añadido!",
    tagSpecialCombo: "Combo Especial",
    tagGlutenFree: "Sin Gluten",
    tagFavorite: "Favorito",
    tagColdBeer: "Cerveza Helada",
    tagBuy3Get4: "Paga 3 Lleva 4",

    // Category Nav & Menu
    searchPlaceholder: "Buscar en el menú (ej: camarón, picaña, moqueca, cerveza)...",
    filterAll: "Todo el Menú",
    filterSeafood: "Mariscos y Pescados",
    filterMeat: "Carnes a la Brasa",
    filterSnacks: "Tapas y Entradas",
    filterDrinks: "Cócteles y Cervezas",
    filterDesserts: "Postres",
    filterGlutenFreeBadge: "Sin Gluten",
    menuSectionServing: "Para",
    menuSectionPeople: "personas",
    menuSectionPerson: "persona",
    menuItemHighlight: "Especialidad de la Casa",
    noDishesFound: "No se encontraron platos para su búsqueda.",
    clearFilters: "Limpiar filtros",
    videoNotSupported: "Su navegador no soporta reproducción de video.",
    soundOn: "Activar Sonido",
    soundOff: "Silenciar",

    // Taste Quiz
    quizTitle: "Quiz del Sabor",
    quizSubtitle: "¡Responde preguntas sencillas y descubre el plato perfecto para tu apetito hoy!",
    quizQuestionOf: "Pregunta",
    quizSeafoodResultTitle: "¡Tu plato ideal viene del Mar!",
    quizSeafoodResultDesc: "Tu estilo combina con ingredientes frescos del océano, el encanto de la cazuela de barro y los mejores mariscos de la costa de Alagoas.",
    quizSeafoodResultDish: "Moqueca Mixta de Róbalo y Camarón",
    quizMeatResultTitle: "¡Tu plato ideal es a la Brasa!",
    quizMeatResultDesc: "Tu paladar busca la potencia de un corte noble a las brasas de carbón o la cocción lenta de nuestra costilla premiada.",
    quizMeatResultDish: "Picaña Noble a la Brasa o Costilla 24h",
    quizSeeDishInMenu: "Ver Plato en el Menú",
    quizRetake: "Reiniciar Quiz",

    // Google Reviews & Location
    reviewsSectionBadge: "Reseñas Verificadas",
    reviewsSectionTitle: "Lo que opinan nuestros clientes",
    reviewsSectionSubtitle: "Más de 1.840 reseñas de clientes fascinados con la gastronomía y la atención de Divina Gula Francês.",
    reviewsFilterAll: "Todas las Reseñas",
    reviewsFilterFood: "Comida & Sabor",
    reviewsFilterService: "Atención Impecable",
    reviewsFilterAmbience: "Ambiente & Playa",
    reviewsFilterDrinks: "Cócteles & Chopp",
    reviewsBadgeVerified: "Reseña Verificada",
    reviewsPhotoTag: "Foto de cliente",
    reviewsReadMore: "Más",
    reviewsShowLess: "Menos",
    locationTitle: "Ubicación & Cómo Llegar",
    locationSubtitle: "Estamos a pocos pasos del mar en la playa más famosa de Marechal Deodoro.",
    locationAddressLabel: "Dirección Completa:",
    locationRefLabel: "Punto de Referencia: Frente a la encantadora galería La Rue",
    locationCopyAddress: "Copiar Dirección",
    locationCopied: "¡Dirección Copiada!",
    locationOpenMaps: "Abrir en Google Maps",
    locationGetDirections: "Cómo Llegar (Ruta)",
    locationOpeningHours: "Horarios de Atención",
    locationScheduleTueThu: "Martes a Jueves: 12h a 23h",
    locationScheduleFriSat: "Viernes y Sábado: 12h a 00h",
    locationScheduleSun: "Domingo: 12h a 22h",
    locationScheduleMon: "Lunes: Cerrado por descanso del equipo",

    // FAQ
    faqBadge: "Resuelve tus Dudas",
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqSubtitle: "Todo lo que necesitas saber sobre Divina Gula Francês, reservas, menú y horarios.",

    // Order Drawer
    orderDrawerTitle: "Tu Comanda / Pedido",
    orderDrawerSubtitle: "Revisa los platos seleccionados y envíalos directo a nuestro equipo.",
    orderTableInputLabel: "Mesa o Lugar de Entrega",
    orderTableInputPlaceholder: "Ej: Mesa 12 o Posada Francês Habitación 4",
    orderNameInputLabel: "Tu Nombre (opcional)",
    orderNameInputPlaceholder: "¿Cómo podemos llamarte?",
    orderNotesInputLabel: "Notas del Pedido",
    orderNotesInputPlaceholder: "Ej: Carne al punto, sin cebolla, vasos con hielo y limón...",
    orderServiceFeeLabel: "Incluir propina sugerida de servicio (10%)",
    orderSplitBillLabel: "¿Dividir cuenta entre cuántas personas?",
    orderSubtotal: "Subtotal",
    orderServiceFee: "Servicio (10%)",
    orderTotal: "Total Estimado",
    orderPerPerson: "Por persona",
    orderSendWhatsApp: "Enviar Pedido por WhatsApp",
    orderCopyText: "Copiar Texto de la Comanda",
    orderCopied: "¡Copiado al portapapeles!",
    orderClear: "Vaciar Comanda",
    orderEmptyTitle: "Tu comanda está vacía",
    orderEmptySubtitle: "¡Explora el menú y haz clic en 'Añadir a la Comanda' en tus platos preferidos!",

    // Live Toast
    toastGoogleReview: "Nueva Reseña en Google",
    toastLocalOrder: "Nuevo Pedido en Sala",
    toastIfoodOrder: "Nuevo Pedido saliendo en iFood",
    toastJustNow: "hace un momento",

    // Footer
    footerDesc: "Auténtica comida brasileña de verdad. Mariscos frescos, moquecas en barro, carnes selectas a la brasa, cervezas artesanales y la inconfundible brisa del Francês.",
    footerQuickLinks: "Enlaces Rápidos",
    footerOpeningHoursTitle: "Horarios",
    footerContactTitle: "Contacto & Reservas",
    footerRights: "Todos los derechos reservados. Praia do Francês, Alagoas.",
  },

  en: {
    // Navigation
    navPromo: "Specials",
    navMenu: "Full Menu",
    navQuiz: "Taste Quiz",
    navInstagram: "Instagram",
    navReviews: "Reviews (5.0 ⭐)",
    navDirections: "Directions",
    navComanda: "Order Slip",
    navReserveWhatsApp: "Book via WhatsApp",
    navSelectLanguage: "Language",

    // Hero
    heroGoogleReviews: "Google reviews",
    heroLocation: "Praia do Francês, Alagoas",
    heroOutdoor: "Outdoor Seating",
    heroTagline: "Authentic Brazilian cuisine from the heart.",
    heroStory: "Genuine Brazilian culinary art with premier ingredients from sea and land, bubbling clay pot moquecas, charcoal-grilled cuts, and tropical mixology.",
    heroHappyHourTitle: "Special Happy Hour:",
    heroHappyHourDesc: "Tue to Fri, 4pm to 7pm · Draft Beer from R$ 6.50 · Caipiroska R$ 14.90",
    heroViewMenu: "View Full Menu",
    heroOrderIfood: "Order on iFood",
    heroQuizBtn: "Find Your Dish (Quiz)",

    // iFood Section
    ifoodBadge: "Official Delivery at Praia do Francês",
    ifoodTitle: "Order on iFood & Enjoy at Home",
    ifoodDesc: "All the rich tradition and celebrated flavours of Divina Gula Francês delivered in specialized thermal containers directly to your inn, vacation rental, or beach villa.",
    ifoodBtnMain: "Order Now on iFood",
    ifoodBtnApp: "Open iFood App",
    ifoodFeature1Title: "Fast Delivery",
    ifoodFeature1Desc: "Arrives piping hot and cooked to perfection right to your doorstep.",
    ifoodFeature2Title: "Spill-Proof Thermal Packaging",
    ifoodFeature2Desc: "Double-sealed containers preserve taste, warmth, and crispy textures.",
    ifoodFeature3Title: "Full Menu on App",
    ifoodFeature3Desc: "Moquecas, savory appetizers, grilled steaks, and chilled drinks at your fingertips.",
    ifoodSchedule: "Tuesday to Sunday: Lunch & Dinner",
    ifoodAvgTime: "30 - 45 min",

    // Instagram Section
    igConnect: "Connect With Us",
    igFollowers: "followers",
    igBranchOf: "Branch of",
    igFollowBtn: "Follow on Instagram",

    // Promotions Section
    promoBadge: "Beachside Highlights",
    promoTitle: "Specials & Happy Hour",
    promoDesc: "Curated specials to enjoy with the ocean breeze, ice-cold draft beer, artisanal appetizers, and handcrafted cocktails.",
    promoPrayaExpTitle: "Praya Experience",
    promoPrayaExpDesc: "2 Chilled Praya artisanal beers + Crispy Shrimp Croquettes (gluten-free cassava dough stuffed with Brazilian catupiry cheese).",
    promoPraya4x3Title: "Praya 4x3 Promotion",
    promoPraya4x3Desc: "Buy 3 Praya gluten-free craft pure malt beers and the 4th is 100% on us!",
    addToOrder: "Add to Order",
    addedToOrder: "Added!",
    tagSpecialCombo: "Special Combo",
    tagGlutenFree: "Gluten-Free",
    tagFavorite: "Favorite",
    tagColdBeer: "Ice-Cold Beer",
    tagBuy3Get4: "Buy 3 Get 4",

    // Category Nav & Menu
    searchPlaceholder: "Search menu (e.g., shrimp, steak, moqueca, draft beer)...",
    filterAll: "Full Menu",
    filterSeafood: "Seafood & Fish",
    filterMeat: "Grilled Meats",
    filterSnacks: "Appetizers & Starters",
    filterDrinks: "Cocktails & Beers",
    filterDesserts: "Desserts",
    filterGlutenFreeBadge: "Gluten-Free",
    menuSectionServing: "Serves",
    menuSectionPeople: "guests",
    menuSectionPerson: "guest",
    menuItemHighlight: "House Specialty",
    noDishesFound: "No dishes found matching your search.",
    clearFilters: "Clear filters",
    videoNotSupported: "Your browser does not support video playback.",
    soundOn: "Turn Sound On",
    soundOff: "Mute Sound",

    // Taste Quiz
    quizTitle: "Taste Quiz",
    quizSubtitle: "Answer a few fun questions to discover your ideal Brazilian dish today!",
    quizQuestionOf: "Question",
    quizSeafoodResultTitle: "Your ideal dish comes from the Sea!",
    quizSeafoodResultDesc: "Your palate craves the warmth of coconut milk and dendê oil simmered in traditional clay pots with fresh coastal seafood.",
    quizSeafoodResultDish: "Mixed Snapper & Jumbo Shrimp Moqueca",
    quizMeatResultTitle: "Your ideal dish is Grilled to Perfection!",
    quizMeatResultDesc: "Your palate demands the bold, smoky flavors of charcoal-grilled prime beef or our legendary 24-hour slow-cooked ribs.",
    quizMeatResultDish: "Charcoal-Grilled Prime Picanha or 24h Ribs",
    quizSeeDishInMenu: "View Dish in Menu",
    quizRetake: "Restart Quiz",

    // Google Reviews & Location
    reviewsSectionBadge: "Verified Reviews",
    reviewsSectionTitle: "What our guests say",
    reviewsSectionSubtitle: "Over 1,840 reviews from travelers and locals raving about the food, warm hospitality, and coastal vibes.",
    reviewsFilterAll: "All Reviews",
    reviewsFilterFood: "Food & Flavor",
    reviewsFilterService: "Service & Staff",
    reviewsFilterAmbience: "Ambience & Beach",
    reviewsFilterDrinks: "Drinks & Draft Beer",
    reviewsBadgeVerified: "Verified Google Review",
    reviewsPhotoTag: "Guest Photo",
    reviewsReadMore: "More",
    reviewsShowLess: "Less",
    locationTitle: "Location & Getting Here",
    locationSubtitle: "Located just steps from the turquoise shoreline of famous Praia do Francês.",
    locationAddressLabel: "Full Address:",
    locationRefLabel: "Landmark: Right across from charming La Rue gallery",
    locationCopyAddress: "Copy Address",
    locationCopied: "Address Copied!",
    locationOpenMaps: "Open in Google Maps",
    locationGetDirections: "Get Directions",
    locationOpeningHours: "Opening Hours",
    locationScheduleTueThu: "Tuesday to Thursday: 12:00 PM – 11:00 PM",
    locationScheduleFriSat: "Friday and Saturday: 12:00 PM – Midnight",
    locationScheduleSun: "Sunday: 12:00 PM – 10:00 PM",
    locationScheduleMon: "Monday: Closed for staff rest",

    // FAQ
    faqBadge: "Need Help?",
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqSubtitle: "Everything you need to know about Divina Gula Francês, reservations, menu, and location.",

    // Order Drawer
    orderDrawerTitle: "Your Order Slip",
    orderDrawerSubtitle: "Review your selected items and send directly to our team.",
    orderTableInputLabel: "Table # or Delivery Room/House",
    orderTableInputPlaceholder: "e.g., Table 12 or Pousada Francês Room 4",
    orderNameInputLabel: "Your Name (optional)",
    orderNameInputPlaceholder: "What should we call you?",
    orderNotesInputLabel: "Order Special Requests",
    orderNotesInputPlaceholder: "e.g., Medium rare steak, no onions, extra ice & lemon...",
    orderServiceFeeLabel: "Include suggested 10% service fee",
    orderSplitBillLabel: "Split bill between how many guests?",
    orderSubtotal: "Subtotal",
    orderServiceFee: "Service Fee (10%)",
    orderTotal: "Estimated Total",
    orderPerPerson: "Per person",
    orderSendWhatsApp: "Send Order via WhatsApp",
    orderCopyText: "Copy Order Text",
    orderCopied: "Copied to clipboard!",
    orderClear: "Clear Slip",
    orderEmptyTitle: "Your order slip is empty",
    orderEmptySubtitle: "Explore our menu and click 'Add to Order' on your favorite items!",

    // Live Toast
    toastGoogleReview: "New Google Review",
    toastLocalOrder: "New Order at Dining Room",
    toastIfoodOrder: "New iFood Delivery Order",
    toastJustNow: "just now",

    // Footer
    footerDesc: "Authentic Brazilian cuisine from the heart. Fresh coastal seafood, clay-pot moquecas, charcoal-grilled cuts, and the unforgettable breeze of Praia do Francês.",
    footerQuickLinks: "Quick Links",
    footerOpeningHoursTitle: "Hours",
    footerContactTitle: "Contact & Bookings",
    footerRights: "All rights reserved. Praia do Francês, Alagoas, Brazil.",
  },

  fr: {
    // Navigation
    navPromo: "Promotions",
    navMenu: "Menu Complet",
    navQuiz: "Quiz des Saveurs",
    navInstagram: "Instagram",
    navReviews: "Avis (5.0 ⭐)",
    navDirections: "Accès & Plan",
    navComanda: "Addition",
    navReserveWhatsApp: "Réserver par WhatsApp",
    navSelectLanguage: "Langue",

    // Hero
    heroGoogleReviews: "avis Google",
    heroLocation: "Praia do Francês, Alagoas",
    heroOutdoor: "Tables en Plein Air",
    heroTagline: "Véritable cuisine brésilienne authentique.",
    heroStory: "La véritable gastronomie brésilienne aux ingrédients nobles de la mer et de la terre, moquecas fumantes en marmite de terre cuite, viandes grillées et mixologie tropicale.",
    heroHappyHourTitle: "Happy Hour Spécial :",
    heroHappyHourDesc: "Du mardi au vendredi, 16h à 19h · Bière pression dès R$ 6,50 · Caipiroska R$ 14,90",
    heroViewMenu: "Voir le Menu",
    heroOrderIfood: "Commander sur iFood",
    heroQuizBtn: "Découvrez Votre Plat (Quiz)",

    // iFood Section
    ifoodBadge: "Livraison Officielle au Francês",
    ifoodTitle: "Commandez sur iFood & Savourez chez Vous",
    ifoodDesc: "Toute la tradition et les saveurs renommées du Divina Gula Francês livrées dans un emballage thermique hermétique, rapidement et en toute sécurité dans votre hôtel, villa ou maison d'hôtes.",
    ifoodBtnMain: "Commander Maintenant sur iFood",
    ifoodBtnApp: "Ouvrir l'App iFood",
    ifoodFeature1Title: "Livraison Rapide",
    ifoodFeature1Desc: "Arrive bien chaud et cuit à point directement à votre porte.",
    ifoodFeature2Title: "Emballage Thermique Sécurisé",
    ifoodFeature2Desc: "Récipients hermétiques anti-fuite préservant la fraîcheur et les saveurs.",
    ifoodFeature3Title: "Menu Complet sur l'App",
    ifoodFeature3Desc: "Moquecas, tapas, grillades de viande et boissons fraîches en un clic.",
    ifoodSchedule: "Mardi au Dimanche : Déjeuner et Dîner",
    ifoodAvgTime: "30 - 45 min",

    // Instagram Section
    igConnect: "Rejoignez-nous",
    igFollowers: "abonnés",
    igBranchOf: "Filiale de",
    igFollowBtn: "Suivre sur Instagram",

    // Promotions Section
    promoBadge: "Les Incontournables",
    promoTitle: "Promotions & Happy Hour",
    promoDesc: "Conditions privilégiées pour savourer la brise marine avec une bière bien fraîche, des tapas et des cocktails tropicaux.",
    promoPrayaExpTitle: "Expérience Praya",
    promoPrayaExpDesc: "2 Bières artisanales Praya bien fraîches + Beignets croustillants de crevettes (pâte de manioc sans gluten et fromage catupiry).",
    promoPraya4x3Title: "Promotion Praya 4x3",
    promoPraya4x3Desc: "Pour l'achat de 3 bières artisanales Praya sans gluten, la 4ème vous est offerte à 100% !",
    addToOrder: "Ajouter à la Commande",
    addedToOrder: "Ajouté !",
    tagSpecialCombo: "Formule Spéciale",
    tagGlutenFree: "Sans Gluten",
    tagFavorite: "Coup de Cœur",
    tagColdBeer: "Bière Fraîche",
    tagBuy3Get4: "3 Achetées = 1 Offerte",

    // Category Nav & Menu
    searchPlaceholder: "Rechercher un plat (ex : crevettes, picanha, moqueca, bière)...",
    filterAll: "Tout le Menu",
    filterSeafood: "Fruits de Mer & Poissons",
    filterMeat: "Viandes & Grillades",
    filterSnacks: "Tapas & Entrées",
    filterDrinks: "Cocktails & Bières",
    filterDesserts: "Desserts",
    filterGlutenFreeBadge: "Sans Gluten",
    menuSectionServing: "Pour",
    menuSectionPeople: "personnes",
    menuSectionPerson: "personne",
    menuItemHighlight: "Spécialité de la Maison",
    noDishesFound: "Aucun plat trouvé pour votre recherche.",
    clearFilters: "Réinitialiser les filtres",
    videoNotSupported: "Votre navigateur ne prend pas en charge la lecture vidéo.",
    soundOn: "Activer le Son",
    soundOff: "Couper le Son",

    // Taste Quiz
    quizTitle: "Quiz des Saveurs",
    quizSubtitle: "Répondez à quelques questions et trouvez le plat brésilien fait pour vous aujourd'hui !",
    quizQuestionOf: "Question",
    quizSeafoodResultTitle: "Votre plat idéal vient de la Mer !",
    quizSeafoodResultDesc: "Vos papilles recherchent la douceur du lait de coco, la marmite traditionnelle en terre cuite et les fruits de mer les plus fins d'Alagoas.",
    quizSeafoodResultDish: "Moqueca Mixte de Bar & Crevettes",
    quizMeatResultTitle: "Votre plat idéal est Grillé à la Braise !",
    quizMeatResultDesc: "Vous recherchez la générosité des viandes maturées grillées au feu de bois ou notre célèbre travers de bœuf mijoté pendant 24h.",
    quizMeatResultDish: "Picanha Grillée au Charbon ou Travers 24h",
    quizSeeDishInMenu: "Voir le Plat au Menu",
    quizRetake: "Recommencer le Quiz",

    // Google Reviews & Location
    reviewsSectionBadge: "Avis Vérifiés",
    reviewsSectionTitle: "Ce que disent nos clients",
    reviewsSectionSubtitle: "Plus de 1 840 avis de voyageurs et résidents conquis par la cuisine et l'accueil chaleureux du Divina Gula Francês.",
    reviewsFilterAll: "Tous les Avis",
    reviewsFilterFood: "Cuisine & Saveurs",
    reviewsFilterService: "Service & Accueil",
    reviewsFilterAmbience: "Ambiance & Plage",
    reviewsFilterDrinks: "Cocktails & Bières",
    reviewsBadgeVerified: "Avis Google Vérifié",
    reviewsPhotoTag: "Photo de client",
    reviewsReadMore: "Plus",
    reviewsShowLess: "Moins",
    locationTitle: "Localisation & Comment Venir",
    locationSubtitle: "À deux pas de l'eau turquoise sur la célèbre plage de Praia do Francês.",
    locationAddressLabel: "Adresse Complète :",
    locationRefLabel: "Repère : Juste en face de la charmante galerie La Rue",
    locationCopyAddress: "Copier l'Adresse",
    locationCopied: "Adresse Copiée !",
    locationOpenMaps: "Ouvrir dans Google Maps",
    locationGetDirections: "Itinéraire",
    locationOpeningHours: "Heures d'Ouverture",
    locationScheduleTueThu: "Mardi au Jeudi : 12h00 – 23h00",
    locationScheduleFriSat: "Vendredi et Samedi : 12h00 – Minuit",
    locationScheduleSun: "Dimanche : 12h00 – 22h00",
    locationScheduleMon: "Lundi : Fermé pour repos hebdomadaire",

    // FAQ
    faqBadge: "Foire Aux Questions",
    faqTitle: "Questions Fréquentes (FAQ)",
    faqSubtitle: "Tout ce qu'il faut savoir sur le restaurant, les réservations, le menu et l'accès.",

    // Order Drawer
    orderDrawerTitle: "Votre Addition / Commande",
    orderDrawerSubtitle: "Consultez vos articles choisis et envoyez-les directement à notre équipe.",
    orderTableInputLabel: "Table ou Adresse de Livraison",
    orderTableInputPlaceholder: "Ex : Table 12 ou Hôtel Francês Chambre 4",
    orderNameInputLabel: "Votre Nom (optionnel)",
    orderNameInputPlaceholder: "Comment pouvons-nous vous appeler ?",
    orderNotesInputLabel: "Instructions Particulières",
    orderNotesInputPlaceholder: "Ex : Cuisson à point, sans oignon, verres avec glaçons et citron...",
    orderServiceFeeLabel: "Inclure le service suggéré (10%)",
    orderSplitBillLabel: "Partager l'addition entre combien de personnes ?",
    orderSubtotal: "Sous-total",
    orderServiceFee: "Frais de Service (10%)",
    orderTotal: "Total Estimé",
    orderPerPerson: "Par personne",
    orderSendWhatsApp: "Envoyer la Commande via WhatsApp",
    orderCopyText: "Copier le Texte de la Commande",
    orderCopied: "Copié dans le presse-papier !",
    orderClear: "Vider l'Addition",
    orderEmptyTitle: "Votre addition est vide",
    orderEmptySubtitle: "Explorez notre menu et cliquez sur 'Ajouter à la Commande' sur vos plats préférés !",

    // Live Toast
    toastGoogleReview: "Nouvel Avis Google",
    toastLocalOrder: "Nouvelle Commande en Salle",
    toastIfoodOrder: "Nouvelle Commande sur iFood",
    toastJustNow: "à l'instant",

    // Footer
    footerDesc: "Véritable cuisine brésilienne authentique. Fruits de mer frais, moquecas en marmite de terre cuite, viandes grillées au feu de bois et la douce brise du Francês.",
    footerQuickLinks: "Liens Rapides",
    footerOpeningHoursTitle: "Horaires",
    footerContactTitle: "Contact & Réservations",
    footerRights: "Tous droits réservés. Praia do Francês, Alagoas, Brésil.",
  },

  ja: {
    // Navigation
    navPromo: "お得な特典",
    navMenu: "全メニュー",
    navQuiz: "味覚診断クイズ",
    navInstagram: "インスタグラム",
    navReviews: "クチコミ (5.0 ⭐)",
    navDirections: "アクセス",
    navComanda: "注文伝票",
    navReserveWhatsApp: "WhatsAppで席予約",
    navSelectLanguage: "言語切替",

    // Hero
    heroGoogleReviews: "Googleレビュー",
    heroLocation: "プライア・ド・フランセス、アラゴアス州",
    heroOutdoor: "開放的なテラス席あり",
    heroTagline: "本物の本格ブラジル料理。",
    heroStory: "海と大地の厳選食材、土鍋でじっくり煮込んだ名物ムケッカ、香ばしい炭火焼きの極上肉、爽やかなトロピカルカクテルが織りなす本場ブラジルの味わい。",
    heroHappyHourTitle: "ハッピーアワー限定特典：",
    heroHappyHourDesc: "火〜金 16:00〜19:00 · 生ビール R$ 6.50〜 · カイピロスカ R$ 14.90",
    heroViewMenu: "メニューを見る",
    heroOrderIfood: "iFoodで注文する",
    heroQuizBtn: "あなたにぴったりの料理を探す (クイズ)",

    // iFood Section
    ifoodBadge: "フランセス海岸 公式デリバリー",
    ifoodTitle: "iFoodで注文＆ご自宅やホテルへお届け",
    ifoodDesc: "ディヴィーナ・グラ・フランセスの伝統と極上の味わいを、特製保温パッケージで迅速かつ安全にご宿泊のホテルや別荘、ビーチへお届けします。",
    ifoodBtnMain: "今すぐiFoodで注文",
    ifoodBtnApp: "iFoodアプリを開く",
    ifoodFeature1Title: "スピーディー配達",
    ifoodFeature1Desc: "出来立て熱々をそのままホテルやお部屋にお届けします。",
    ifoodFeature2Title: "安心の密閉保温容器",
    ifoodFeature2Desc: "こぼれ防止加工の専用容器で美味しさとサクサク感をキープ。",
    ifoodFeature3Title: "アプリで全品注文可能",
    ifoodFeature3Desc: "名物ムケッカからおつまみ、炭火焼き肉、冷えたビールまでワンタップ。",
    ifoodSchedule: "火曜〜日曜：ランチ＆ディナー営業",
    ifoodAvgTime: "30〜45分",

    // Instagram Section
    igConnect: "公式SNSをチェック",
    igFollowers: "フォロワー",
    igBranchOf: "系列店：",
    igFollowBtn: "Instagramをフォロー",

    // Promotions Section
    promoBadge: "ビーチ限定のおすすめ",
    promoTitle: "プロモーション＆ハッピーアワー",
    promoDesc: "心地よい海風を感じながら、キンキンに冷えたクラフトビールやこだわりのおつまみ、カクテルをお楽しみください。",
    promoPrayaExpTitle: "プライア・エクスペリエンス",
    promoPrayaExpDesc: "冷えたプライアビール2本 ＋ 特製エビクロケット（グルテンフリーのキャッサバ生地にとろけるカトゥピリチーズ入り）。",
    promoPraya4x3Title: "プライアビール 3本注文で1本無料",
    promoPraya4x3Desc: "グルテンフリーのクラフトビール「プライア」を3本ご注文いただくと、4本目を無料サービス！",
    addToOrder: "伝票に追加する",
    addedToOrder: "追加完了！",
    tagSpecialCombo: "特別セット",
    tagGlutenFree: "グルテンフリー",
    tagFavorite: "一番人気",
    tagColdBeer: "冷えたビール",
    tagBuy3Get4: "3本で1本無料",

    // Category Nav & Menu
    searchPlaceholder: "メニューを検索（例：エビ、ピカーニャ、ムケッカ、生ビール）...",
    filterAll: "全メニュー",
    filterSeafood: "魚介・シーフード",
    filterMeat: "炭火焼き・肉料理",
    filterSnacks: "前菜・おつまみ",
    filterDrinks: "カクテル＆ビール",
    filterDesserts: "デザート",
    filterGlutenFreeBadge: "グルテンフリー",
    menuSectionServing: "目安：",
    menuSectionPeople: "名様分",
    menuSectionPerson: "名様分",
    menuItemHighlight: "当店自慢の逸品",
    noDishesFound: "お探しのメニューが見つかりませんでした。",
    clearFilters: "フィルターを解除",
    videoNotSupported: "お使いのブラウザは動画再生に対応していません。",
    soundOn: "音声をオンにする",
    soundOff: "消音",

    // Taste Quiz
    quizTitle: "味覚診断クイズ",
    quizSubtitle: "簡単な質問に答えて、今日の気分にぴったりのブラジル料理を見つけましょう！",
    quizQuestionOf: "質問",
    quizSeafoodResultTitle: "あなたにぴったりの料理は「海の恵み」！",
    quizSeafoodResultDesc: "新鮮な魚介とココナッツミルク、伝統的な土鍋の香りがあなたの食欲を満たします。",
    quizSeafoodResultDish: "白身魚と特大エビのミックスムケッカ",
    quizMeatResultTitle: "あなたにぴったりの料理は「炭火焼きの極上肉」！",
    quizMeatResultDesc: "炭火の香ばしい香りとジューシーな肉の旨味、または24時間じっくり煮込んだ自慢の牛リブが最適です。",
    quizMeatResultDish: "極上ピカーニャの炭火焼き または 24時間熟成リブ",
    quizSeeDishInMenu: "メニューでこの料理を見る",
    quizRetake: "もう一度診断する",

    // Google Reviews & Location
    reviewsSectionBadge: "認証済みクチコミ",
    reviewsSectionTitle: "お客様からの声",
    reviewsSectionSubtitle: "ディヴィーナ・グラ・フランセスの料理と心のこもった接客に寄せられた1,840件以上のリアルな評価。",
    reviewsFilterAll: "すべてのクチコミ",
    reviewsFilterFood: "料理・味付け",
    reviewsFilterService: "スタッフの接客",
    reviewsFilterAmbience: "雰囲気・ビーチ",
    reviewsFilterDrinks: "ドリンク・生ビール",
    reviewsBadgeVerified: "Google公式レビュー",
    reviewsPhotoTag: "お客様の写真",
    reviewsReadMore: "続きを読む",
    reviewsShowLess: "閉じる",
    locationTitle: "店舗案内＆アクセス",
    locationSubtitle: "アラゴアス州屈指の観光名所「プライア・ド・フランセス」海岸からすぐ。",
    locationAddressLabel: "住所：",
    locationRefLabel: "目印：人気のラルー（La Rue）モールの向かい側",
    locationCopyAddress: "住所をコピー",
    locationCopied: "住所をコピーしました！",
    locationOpenMaps: "Googleマップで開く",
    locationGetDirections: "経路案内を見る",
    locationOpeningHours: "営業時間のご案内",
    locationScheduleTueThu: "火曜〜木曜：12:00 〜 23:00",
    locationScheduleFriSat: "金曜・土曜：12:00 〜 24:00",
    locationScheduleSun: "日曜：12:00 〜 22:00",
    locationScheduleMon: "月曜：定休日（スタッフ休息のため）",

    // FAQ
    faqBadge: "よくあるご質問",
    faqTitle: "FAQ（よくある質問と回答）",
    faqSubtitle: "予約方法、営業時間、アレルギー対応、メニューについての疑問にお答えします。",

    // Order Drawer
    orderDrawerTitle: "お客様のご注文伝票",
    orderDrawerSubtitle: "選択した料理を確認し、WhatsAppでスタッフに直接送信できます。",
    orderTableInputLabel: "お席番号または配達先ホテル名",
    orderTableInputPlaceholder: "例：テーブル12 または ホテル客室4号室",
    orderNameInputLabel: "お名前（任意）",
    orderNameInputPlaceholder: "お名前をご入力ください",
    orderNotesInputLabel: "ご要望・特記事項",
    orderNotesInputPlaceholder: "例：お肉はミディアム、玉ねぎ抜き、氷とレモン希望など...",
    orderServiceFeeLabel: "サービス料（10%）を含める",
    orderSplitBillLabel: "何名様でお会計を分けますか？",
    orderSubtotal: "小計",
    orderServiceFee: "サービス料 (10%)",
    orderTotal: "お見積り合計",
    orderPerPerson: "1名様あたり",
    orderSendWhatsApp: "WhatsAppで注文内容を送信",
    orderCopyText: "注文伝票のテキストをコピー",
    orderCopied: "クリップボードにコピーしました！",
    orderClear: "伝票をクリア",
    orderEmptyTitle: "現在、伝票は空です",
    orderEmptySubtitle: "メニューをご覧いただき、お好きな料理の「伝票に追加する」ボタンを押してください！",

    // Live Toast
    toastGoogleReview: "Googleに新規クチコミが届きました",
    toastLocalOrder: "店内で新しい注文が入りました",
    toastIfoodOrder: "iFoodで新しい配達注文を受注しました",
    toastJustNow: "たった今",

    // Footer
    footerDesc: "本物の本格ブラジル料理。新鮮な海の幸、土鍋仕込みのムケッカ、炭火焼きの極上肉、冷えたクラフトビール、そしてフランセス海岸の心地よい潮風をお届けします。",
    footerQuickLinks: "クイックリンク",
    footerOpeningHoursTitle: "営業時間",
    footerContactTitle: "お問い合わせ＆ご予約",
    footerRights: "無断転載を禁じます。プライア・ド・フランセス、アラゴアス州、ブラジル。",
  }
};

// Localized 10 FAQ items for all 5 languages
export interface LocalizedFaqItem {
  question: string;
  answer: string;
}

export const FAQ_LOCALIZED: Record<Language, LocalizedFaqItem[]> = {
  pt: [
    {
      question: "Onde o Divina Gula Francês está localizado?",
      answer: "Estamos localizados na R. Massunim, 5 - Praia do Francês, Mal. Deodoro - AL, em frente à famosa La Rue, a poucos passos do mar."
    },
    {
      question: "Como faço para reservar uma mesa?",
      answer: "Você pode fazer sua reserva de forma rápida e prática clicando no botão 'WhatsApp' ou direto pelo nosso telefone oficial."
    },
    {
      question: "Quais são os dias e horários de funcionamento?",
      answer: "Funcionamos de Terça a Quinta das 12h às 23h, Sexta e Sábado das 12h às 00h, e aos Domingos das 12h às 22h. Às segundas-feiras estamos fechados para descanso da equipe."
    },
    {
      question: "O restaurante possui opções sem glúten?",
      answer: "Sim! Temos excelentes opções como o famoso Bolinho de Camarão feito com massa de macaxeira 100% sem glúten, cervejas artesanais Praya puro malte, além de moquecas e grelhados seguros."
    },
    {
      question: "Como funciona o Happy Hour?",
      answer: "Nosso Happy Hour acontece de Terça a Sexta, das 16h às 19h, com preços especiais em Chopp Amstel (R$ 6,50), Chopp Heineken (R$ 8,90) e Caipiroska Tradicional (R$ 14,90)."
    },
    {
      question: "O Divina Gula Francês é adequado para crianças (Menu Infantil)?",
      answer: "Sim! Oferecemos Menu Infantil com pratos equilibrados e deliciosos como Picadinho de Filé Mignon, Peixinho empanado e Franguinho com arroz, feijão e batatas fritas."
    },
    {
      question: "Quais são as principais especialidades da casa?",
      answer: "Nossos destaques incluem as Moquecas borbulhantes na panela de barro (Camarão, Peixe e Polvo), a Costela Minga cozida lentamente por 24h a 45h, o Atolado de Camarão e a Picanha nobre na brasa."
    },
    {
      question: "É permitido animais de estimação (Pet Friendly)?",
      answer: "Sim, aceitamos pets de pequeno porte na nossa agradável varanda externa voltada para a calçada e com a brisa do mar."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito e débito das principais bandeiras (Visa, Mastercard, Elo, Amex), Pix, dinheiro e pagamento no delivery iFood."
    },
    {
      question: "Posso pedir para viagem ou delivery?",
      answer: "Sim! Você pode pedir diretamente pelo iFood com entrega rápida em toda a Praia do Francês ou montar sua comanda digital aqui e retirar no balcão."
    }
  ],
  es: [
    {
      question: "¿Dónde está ubicado Divina Gula Francês?",
      answer: "Estamos en R. Massunim, 5 - Praia do Francês, Mal. Deodoro - AL, justo frente a la conocida galería La Rue, a pocos pasos de la playa."
    },
    {
      question: "¿Cómo puedo reservar una mesa?",
      answer: "Puedes hacer tu reserva de forma rápida y sencilla haciendo clic en el botón de 'WhatsApp' o llamando directamente a nuestro número oficial."
    },
    {
      question: "¿Cuáles son los días y horarios de apertura?",
      answer: "Abrimos de martes a jueves de 12:00 a 23:00, viernes y sábados de 12:00 a 00:00, y domingos de 12:00 a 22:00. Los lunes permanecemos cerrados por descanso del equipo."
    },
    {
      question: "¿El restaurante cuenta con opciones sin gluten?",
      answer: "¡Sí! Ofrecemos opciones deliciosas como nuestro famoso Bolinho de Camarón elaborado con masa de yuca 100% libre de gluten, cervezas artesanales Praya sin gluten y cazuelas de mariscos seguras."
    },
    {
      question: "¿Cómo funciona el Happy Hour?",
      answer: "Nuestro Happy Hour es de martes a viernes, de 16:00 a 19:00, con descuentos especiales en cerveza de barril (desde R$ 6,50) y Caipiroskas clásicas (R$ 14,90)."
    },
    {
      question: "¿Es apto para niños (Menú Infantil)?",
      answer: "¡Por supuesto! Contamos con platos infantiles bien balanceados como picadillo de solomillo, tiritas de pescado empanizado y pollo con arroz, frijoles y papas fritas."
    },
    {
      question: "¿Cuáles son las especialidades más destacadas?",
      answer: "Destacan nuestras Moquecas en cazuela de barro (camarón, pescado y pulpo), la Costilla cocida a fuego lento durante 24 a 45 horas, el Atolado de camarón y la Picaña a las brasas."
    },
    {
      question: "¿Se admiten mascotas (Pet Friendly)?",
      answer: "Sí, aceptamos mascotas de tamaño pequeño en nuestra terraza exterior al aire libre, disfrutando de la fresca brisa marina."
    },
    {
      question: "¿Qué formas de pago se aceptan?",
      answer: "Aceptamos tarjetas de crédito y débito internacionales (Visa, Mastercard, Amex, Elo), Pix, efectivo y pedidos pagados a través de la app de iFood."
    },
    {
      question: "¿Hacen pedidos para llevar o entrega a domicilio?",
      answer: "¡Sí! Puedes pedir cómodamente a través de iFood con entrega rápida en posadas y casas de Praia do Francês, o pedir por WhatsApp para recoger."
    }
  ],
  en: [
    {
      question: "Where is Divina Gula Francês located?",
      answer: "We are located at R. Massunim, 5 - Praia do Francês, Mal. Deodoro - AL, directly across from the popular La Rue shopping gallery, just steps from the beach."
    },
    {
      question: "How do I make a table reservation?",
      answer: "You can easily book a table by tapping the 'WhatsApp' button in the navigation or contacting our host team directly."
    },
    {
      question: "What are your operating hours and days?",
      answer: "We are open Tuesday through Thursday from 12:00 PM to 11:00 PM, Friday and Saturday from 12:00 PM to Midnight, and Sunday from 12:00 PM to 10:00 PM. We are closed on Mondays."
    },
    {
      question: "Do you have gluten-free dishes?",
      answer: "Yes! We proudly offer our famous Shrimp Croquettes made with 100% naturally gluten-free cassava dough, gluten-free craft Praya beer, fresh fish moquecas, and grilled meats."
    },
    {
      question: "How does Happy Hour work?",
      answer: "Our Happy Hour runs Tuesday to Friday from 4:00 PM to 7:00 PM with special rates on chilled draft beer (starting at R$ 6.50) and classic fruit caipiroskas (R$ 14.90)."
    },
    {
      question: "Is there a Kids Menu?",
      answer: "Yes! We offer a dedicated children's menu featuring tender beef medallions, crispy breaded fish fillets, and chicken tenders served with Brazilian rice, beans, and fries."
    },
    {
      question: "What are the signature specialties?",
      answer: "Our house stars include bubbling clay-pot seafood Moquecas (fresh snapper, jumbo shrimp, and octopus), 24-to-45-hour slow-braised ribs, and charcoal-grilled prime Picanha steak."
    },
    {
      question: "Are you pet-friendly?",
      answer: "Yes! Well-behaved small dogs are welcome on our outdoor patio facing the street where you can enjoy the shade and ocean breeze."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major international credit and debit cards (Visa, Mastercard, Amex, Elo), Pix, cash in Brazilian Reais (BRL), and app payments via iFood."
    },
    {
      question: "Can I order delivery or takeout?",
      answer: "Yes! You can order directly on the iFood app for speedy delivery to your hotel, pousada, or beach rental, or prepare your digital order slip right here for takeout."
    }
  ],
  fr: [
    {
      question: "Où se situe le restaurant Divina Gula Francês ?",
      answer: "Nous sommes situés au 5 R. Massunim - Praia do Francês, Mal. Deodoro - AL, juste en face de la galerie La Rue, à quelques foulées de la plage."
    },
    {
      question: "Comment puis-je réserver une table ?",
      answer: "Vous pouvez réserver rapidement et facilement en cliquant sur le bouton 'WhatsApp' ou en appelant directement notre équipe."
    },
    {
      question: "Quels sont vos jours et horaires d'ouverture ?",
      answer: "Nous vous accueillons du mardi au jeudi de 12h00 à 23h00, le vendredi et samedi de 12h00 à minuit, et le dimanche de 12h00 à 22h00. Fermé le lundi pour le repos de l'équipe."
    },
    {
      question: "Le restaurant propose-t-il des options sans gluten ?",
      answer: "Oui ! Notamment nos fameux beignets de crevettes préparés à base de pâte de manioc sans gluten, notre bière artisanale Praya certifiée sans gluten, ainsi que nos poissons et moquecas."
    },
    {
      question: "Comment fonctionne l'Happy Hour ?",
      answer: "Notre Happy Hour a lieu du mardi au vendredi, de 16h00 à 19h00, avec des tarifs préférentiels sur la bière pression (dès R$ 6,50) et nos Caipiroskas maison (R$ 14,90)."
    },
    {
      question: "Proposez-vous un menu enfant adapté ?",
      answer: "Tout à fait ! Nous disposons d'un menu enfant équilibré comprenant émincé de bœuf filet mignon, poisson pané croustillant ou poulet accompagnés de riz, haricots et frites."
    },
    {
      question: "Quelles sont les spécialités incontournables ?",
      answer: "Nos grandes spécialités sont les Moquecas fumantes en marmite de terre cuite (crevettes, poisson et poulpe), le travers de bœuf mijoté 24h et la picanha grillée au charbon de bois."
    },
    {
      question: "Les animaux de compagnie sont-ils les bienvenus (Pet Friendly) ?",
      answer: "Oui, les animaux de petite taille sont chaleureusement acceptés dans notre espace terrasse extérieure au grand air."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons les cartes bancaires internationales (Visa, Mastercard, Amex), Pix, espèces en Réais (BRL) et le paiement sécurisé via l'application iFood."
    },
    {
      question: "Puis-je commander à emporter ou en livraison ?",
      answer: "Oui ! Vous pouvez commander en quelques clics sur iFood pour une livraison rapide à votre hôtel ou maison de vacances, ou via WhatsApp pour retirer au comptoir."
    }
  ],
  ja: [
    {
      question: "ディヴィーナ・グラ・フランセスの場所はどこですか？",
      answer: "アラゴアス州マレシャウ・デオドロのフランセス海岸、R. Massunim, 5 に位置しています。有名なラルー（La Rue）ショッピングモールの真向かい、ビーチから徒歩すぐです。"
    },
    {
      question: "テーブルの予約方法は？",
      answer: "画面上部の「WhatsApp」ボタンをタップするか、公式お電話から簡単に日本語/英語/ポルトガル語でご予約いただけます。"
    },
    {
      question: "営業時間と定休日はいつですか？",
      answer: "火曜〜木曜は12:00〜23:00、金曜・土曜は12:00〜24:00、日曜は12:00〜22:00に営業しております。月曜日はスタッフ休養のため定休日です。"
    },
    {
      question: "グルテンフリーのメニューはありますか？",
      answer: "はい！100%グルテンフリーのキャッサバ生地で作られた特製エビのクロケットや、グルテンフリークラフトビール「プライア」、魚介のムケッカ、炭火焼き肉など多数ご用意しています。"
    },
    {
      question: "ハッピーアワーの特典は？",
      answer: "火曜〜金曜の16:00〜19:00に開催しています。キンキンに冷えた生ビール（R$ 6.50〜）やトロピカルなカイピロスカ（R$ 14.90）を特別価格でお楽しみいただけます。"
    },
    {
      question: "子供向けのキッズメニューはありますか？",
      answer: "はい！小さなお子様向けに、フィレ肉のソテー、白身魚のフライ、チキンナゲットなどにライス、お豆、フライドポテトが付いた安心のキッズプレートをご用意しています。"
    },
    {
      question: "お店の看板料理・名物は何ですか？",
      answer: "熱々の土鍋で煮立つシーフード「ムケッカ」（エビ・魚・タコ）、24〜45時間じっくり煮込んだ極上牛リブ、炭火で香ばしく焼き上げた最高級「ピカーニャ」が絶品です。"
    },
    {
      question: "ペット同伴（ペットフレンドリー）は可能ですか？",
      answer: "はい、潮風が心地よい開放的なテラス席では、小型のワンちゃんやペットと一緒に安心してお食事をお楽しみいただけます。"
    },
    {
      question: "利用できる支払い方法は何ですか？",
      answer: "主要な国際クレジットカード（Visa、Mastercard、Amex、Elo）、デビットカード、Pix、現金（レアル）、およびiFoodアプリ決済に対応しています。"
    },
    {
      question: "テイクアウトやデリバリー（配達）は利用できますか？",
      answer: "はい！iFoodアプリを通じてフランセス海岸のホテルや別荘へ迅速にデリバリー可能で、店内のデジタル伝票からテイクアウトの事前注文も承っております。"
    }
  ]
};

// Localized Quiz Questions
export interface LocalizedQuizQuestion {
  q: string;
  o: [string, string];
}

export const QUIZ_LOCALIZED: Record<Language, LocalizedQuizQuestion[]> = {
  pt: [
    { q: "1/6 - Qual é a sua vibe para hoje na Praia do Francês?", o: ["Curtir a brisa do mar com água de coco ou drinks refrescantes", "Chegar com bastante fome para uma refeição reforçada"] },
    { q: "2/6 - Como prefere abrir o apetite (sua entradinha favorita)?", o: ["Petiscos crocantes de frutos do mar (bolinho de camarão, caldinho)", "Cortes nobres fatiados ou dadinhos de queijo coalho"] },
    { q: "3/6 - Qual é a sua proteína principal de eleição?", o: ["Peixes nobres e camarões frescos da costa de Alagoas", "Picanha suculenta, costela macia ou filé mignon"] },
    { q: "4/6 - Como você gosta do estilo de preparo do seu prato?", o: ["Ensopado na panela de barro com leite de coco e azeite de dendê", "Grelhado na brasa de carvão com toque defumado"] },
    { q: "5/6 - No quesito bebida, qual é a sua escolha número um?", o: ["Um drink tropical autoral ou caipiroska de frutas", "Um chopp artesanal bem gelado ou cerveja Praya"] },
    { q: "6/6 - O que torna sua experiência perfeita no Divina Gula?", o: ["Saborear a culinária litorânea olhando a brisa", "Reunir a família em volta de pratos fartos e carnes nobres"] }
  ],
  es: [
    { q: "1/6 - ¿Cuál es tu plan hoy en Praia do Francês?", o: ["Disfrutar de la brisa marina con agua de coco o cócteles frescos", "Llegar con buen apetito para una comida abundante"] },
    { q: "2/6 - ¿Cómo prefieres abrir el apetito?", o: ["Tapas crujientes de mariscos (croquetas de camarón, caldillos)", "Cortes de carne en lonchas o dados de queso a la plancha"] },
    { q: "3/6 - ¿Cuál es tu proteína principal favorita?", o: ["Pescados nobles y camarones frescos de la costa", "Picaña jugosa, costilla tierna o solomillo"] },
    { q: "4/6 - ¿Qué estilo de cocción prefieres?", o: ["Guisado en cazuela de barro con leche de coco y aceite de palma", "A la brasa de carbón con aroma ahumado irresistible"] },
    { q: "5/6 - En cuanto a bebidas, ¿cuál es tu primera opción?", o: ["Un cóctel tropical de frutas o caipiroska", "Una cerveza tirada bien helada o cerveza Praya"] },
    { q: "6/6 - ¿Qué hace perfecta tu visita a Divina Gula?", o: ["Saborear mariscos frescos contemplando la brisa", "Compartir una mesa abundante de carnes nobles con los tuyos"] }
  ],
  en: [
    { q: "1/6 - What is your ideal vibe today at Praia do Francês?", o: ["Relax with ocean breeze, fresh coconut water or tropical cocktails", "Arrive with a big appetite ready for a hearty Brazilian feast"] },
    { q: "2/6 - How do you like to start your meal?", o: ["Crispy coastal appetizers (shrimp croquettes, savory broth)", "Charcoal-grilled sliced meats or tapioca cheese cubes"] },
    { q: "3/6 - What is your preferred main protein?", o: ["Fresh coastal fish and jumbo prawns from Alagoas", "Juicy Picanha steak, 24h braised ribs, or tender filet mignon"] },
    { q: "4/6 - Which cooking style excites your palate?", o: ["Simmered in clay pots with coconut milk, cilantro, and dendê oil", "Sizzling over glowing charcoal embers with smoky crust"] },
    { q: "5/6 - When it comes to drinks, what is your go-to?", o: ["Handcrafted fruit caipiroska or signature tropical cocktail", "Ice-cold craft draft beer or gluten-free Praya beer"] },
    { q: "6/6 - What completes your dining experience?", o: ["Soaking in the coastal atmosphere with authentic seafood", "Gathering with friends & family around generous prime meat platters"] }
  ],
  fr: [
    { q: "1/6 - Quelle est votre humeur du jour à Praia do Francês ?", o: ["Profiter de la brise marine avec une eau de coco ou un cocktail frais", "Avoir un bel appétit pour un généreux repas brésilien"] },
    { q: "2/6 - Par quoi préférez-vous commencer ?", o: ["Tapas croustillantes de la mer (beignets de crevettes, bouillon marin)", "Tranches de viande grillée ou dés de fromage brésilien doré"] },
    { q: "3/6 - Quelle est votre protéine favorite ?", o: ["Poissons fins et crevettes fraîches de la côte d'Alagoas", "Picanha juteuse, travers de bœuf fondant ou filet mignon"] },
    { q: "4/6 - Quel mode de cuisson vous séduit le plus ?", o: ["Mijoté en marmite de terre cuite au lait de coco et huile de palme", "Grillé à la braise de charbon de bois aux arômes fumés"] },
    { q: "5/6 - Côté boissons, quel est votre premier choix ?", o: ["Une caipiroska aux fruits tropicaux ou cocktail signature", "Une bière pression artisanale glacée ou bière Praya"] },
    { q: "6/6 - Qu'est-ce qui rend votre moment inoubliable ?", o: ["Déguster des saveurs marines face à la brise", "Partager un plat généreux de viandes nobles en famille"] }
  ],
  ja: [
    { q: "1/6 - フランセス海岸での今日の気分は？", o: ["海風を感じながらココナッツジュースや冷たいカクテルでリラックス", "しっかりとお腹を空かせてボリューム満点の料理を満喫"] },
    { q: "2/6 - 最初の一品（前菜）は何を選びますか？", o: ["サクサクのエビクロケットや濃厚な魚介スープ", "香ばしいお肉のスライスやこんがり焼いたチーズ"] },
    { q: "3/6 - メインに選ぶならどちらが好きですか？", o: ["獲れたての新鮮な白身魚やアラゴアス特産の大エビ", "ジューシーな赤身肉のピカーニャやとろける牛リブ"] },
    { q: "4/6 - どんな調理法に惹かれますか？", o: ["ココナッツミルクとハーブを伝統の土鍋でじっくり煮込んだ料理", "炭火で香ばしく焼き上げた本格グリル"] },
    { q: "5/6 - 乾杯のドリンクは何にしますか？", o: ["もぎたてフルーツのカイピロスカや特製トロピカルカクテル", "キンキンに冷えたクラフト生ビールやプライアビール"] },
    { q: "6/6 - ディヴィーナ・グラで過ごす最高の時間は？", o: ["潮風を感じながら本場のシーフードを堪能すること", "大切な仲間や家族と豪華なお肉料理を囲むこと"] }
  ]
};
