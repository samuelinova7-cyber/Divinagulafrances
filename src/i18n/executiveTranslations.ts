import { Language } from './translations';

export interface LocalizedExecutiveStrings {
  title: string;
  badge: string;
  subtitle: string;
  howItWorksTitle: string;
  howItWorksStep1Title: string;
  howItWorksStep1Desc: string;
  howItWorksStep2Title: string;
  howItWorksStep2Desc: string;
  howItWorksStep3Title: string;
  howItWorksStep3Desc: string;
  courtesyTitle: string;
  courtesyText: string;
  courtesyTag: string;
  suggestionsTitle: string;
  sidesTitle: string;
  openGameBtn: string;
  openGameSubtitle: string;
  gameTitle: string;
  gameSubtitle: string;
  level1Title: string;
  level2Title: string;
  level3Title: string;
  filterAll: string;
  filterChickenPork: string;
  filterMeat: string;
  filterSeafood: string;
  filterVeg: string;
  sidesCounterBadge: (selected: number, max: number) => string;
  sidesHint: string;
  stepNext: string;
  stepBack: string;
  randomChefSpin: string;
  randomSpinning: string;
  congratulations: string;
  dishCompletedTitle: string;
  dishCompletedSubtitle: string;
  totalPriceLabel: string;
  addToComanda: string;
  addedToComanda: string;
  sendWhatsApp: string;
  createAnotherDish: string;
  xpAwarded: string;
  chefMasterBadge: string;
  copyDishDetails: string;
  copiedSuccess: string;
}

export const EXECUTIVE_STRINGS: Record<Language, LocalizedExecutiveStrings> = {
  pt: {
    title: "Cardápio Executivo",
    badge: "Experiência Executiva em 3 Etapas",
    subtitle: "A melhor refeição do seu dia na Praia do Francês com a assinatura gastronômica do Divina Gula.",
    howItWorksTitle: "Como Funciona o Cardápio Executivo",
    howItWorksStep1Title: "1. Escolha a sua proteína",
    howItWorksStep1Desc: "12 opções preparadas na brasa, grelhadas ou ensopadas com preços a partir de R$ 36,90.",
    howItWorksStep2Title: "2. Escolha até 3 acompanhamentos",
    howItWorksStep2Desc: "14 opções saborosas para personalizar seu prato (arroz, feijões, purês, farofas e frituras).",
    howItWorksStep3Title: "3. Cortesia especial da casa",
    howItWorksStep3Desc: "Enquanto seu pedido é preparado, servimos um mix de folhas verdes com molho de maracujá e entrada do chef.",
    courtesyTitle: "Cortesia da Casa",
    courtesyText: "Enquanto o seu pedido é preparado na brasa, a casa oferece um mix de folhas verdes frescas com molho de maracujá artesanal e uma entrada exclusiva do chef.",
    courtesyTag: "100% CORTESIA",
    suggestionsTitle: "Sugestões da Casa",
    sidesTitle: "Acompanhamentos Disponíveis (Escolha até 3)",
    openGameBtn: "Montar Prato Executivo",
    openGameSubtitle: "Escolha sua proteína, até 3 acompanhamentos e receba a cortesia da casa",
    gameTitle: "Cardápio Executivo · Monte seu Prato",
    gameSubtitle: "Personalize seu prato executivo com acompanhamentos à sua escolha e cortesia do chef.",
    level1Title: "Etapa 1: Escolha a sua Proteína",
    level2Title: "Etapa 2: Escolha até 3 Acompanhamentos",
    level3Title: "Etapa 3: Cortesia da Casa & Resumo do Prato",
    filterAll: "Todas as Proteínas",
    filterChickenPork: "Frango & Suíno",
    filterMeat: "Carnes Nobres",
    filterSeafood: "Peixes & Frutos do Mar",
    filterVeg: "Vegetariano",
    sidesCounterBadge: (sel, max) => `${sel} de ${max} selecionados`,
    sidesHint: "Selecione até 3 guarnições para acompanhar sua proteína favorita.",
    stepNext: "Avançar para Acompanhamentos",
    stepBack: "Voltar Etapa",
    randomChefSpin: "Sugestão do Chef",
    randomSpinning: "Selecionando sugestão...",
    congratulations: "Excelente escolha!",
    dishCompletedTitle: "Prato Executivo Montado",
    dishCompletedSubtitle: "Proteína selada no ponto + acompanhamentos selecionados + cortesia exclusiva do chef.",
    totalPriceLabel: "Valor do Prato Completo:",
    addToComanda: "Adicionar à Comanda",
    addedToComanda: "Adicionado à Comanda!",
    sendWhatsApp: "Pedir pelo WhatsApp",
    createAnotherDish: "Montar Outro Prato",
    xpAwarded: "Refeição Completa",
    chefMasterBadge: "Cardápio Executivo",
    copyDishDetails: "Copiar Resumo do Prato",
    copiedSuccess: "Copiado para a área de transferência!"
  },
  es: {
    title: "Menú Ejecutivo",
    badge: "Experiencia Ejecutiva en 3 Pasos",
    subtitle: "La mejor comida de tu día en Praia do Francês con el toque gastronómico de Divina Gula.",
    howItWorksTitle: "Cómo Funciona el Menú Ejecutivo",
    howItWorksStep1Title: "1. Elige tu proteína",
    howItWorksStep1Desc: "12 opciones a la brasa, a la plancha o guisadas con precios desde R$ 36,90.",
    howItWorksStep2Title: "2. Elige hasta 3 guarniciones",
    howItWorksStep2Desc: "14 deliciosas opciones para personalizar tu plato (arroces, frijoles, purés y farofas).",
    howItWorksStep3Title: "3. Cortesía de la casa",
    howItWorksStep3Desc: "Mientras se prepara tu pedido, te servimos una ensalada verde con salsa de maracuyá y aperitivo del chef.",
    courtesyTitle: "Cortesía de la Casa",
    courtesyText: "Mientras se prepara tu pedido a la brasa, te invitamos a un mix de hojas verdes frescas con aderezo de maracuyá y un aperitivo del chef.",
    courtesyTag: "100% CORTESÍA",
    suggestionsTitle: "Sugerencias del Chef",
    sidesTitle: "Guarniciones Disponibles (Elige hasta 3)",
    openGameBtn: "Montar Menú Ejecutivo",
    openGameSubtitle: "Selecciona tu proteína, hasta 3 guarniciones y recibe la cortesía de la casa",
    gameTitle: "Menú Ejecutivo · Arma tu Plato",
    gameSubtitle: "Personaliza tu menú ejecutivo con guarniciones a tu gusto y cortesía del chef.",
    level1Title: "Paso 1: Elige tu Proteína",
    level2Title: "Paso 2: Elige hasta 3 Guarniciones",
    level3Title: "Paso 3: Cortesía de la Casa & Resumen del Plato",
    filterAll: "Todas las Proteínas",
    filterChickenPork: "Pollo & Cerdo",
    filterMeat: "Carnes Nobles",
    filterSeafood: "Pescados & Mariscos",
    filterVeg: "Vegetariano",
    sidesCounterBadge: (sel, max) => `${sel} de ${max} seleccionadas`,
    sidesHint: "Selecciona hasta 3 guarniciones para acompañar tu proteína.",
    stepNext: "Avanzar a Guarniciones",
    stepBack: "Volver",
    randomChefSpin: "Sugerencia del Chef",
    randomSpinning: "Seleccionando...",
    congratulations: "¡Excelente elección!",
    dishCompletedTitle: "Menú Ejecutivo Armado",
    dishCompletedSubtitle: "Proteína al punto + guarniciones elegidas + cortesía del chef.",
    totalPriceLabel: "Precio del Plato Completo:",
    addToComanda: "Agregar a la Comanda",
    addedToComanda: "¡Agregado a la Comanda!",
    sendWhatsApp: "Pedir por WhatsApp",
    createAnotherDish: "Armar Otro Plato",
    xpAwarded: "Comida Completa",
    chefMasterBadge: "Menú Ejecutivo",
    copyDishDetails: "Copiar Detalles del Plato",
    copiedSuccess: "¡Copiado con éxito!"
  },
  en: {
    title: "Executive Menu",
    badge: "3-Step Executive Dining Experience",
    subtitle: "The ultimate seaside lunch experience at Praia do Francês by Divina Gula.",
    howItWorksTitle: "How the Executive Menu Works",
    howItWorksStep1Title: "1. Choose your protein",
    howItWorksStep1Desc: "12 mouthwatering options grilled over charcoal embers, from R$ 36.90.",
    howItWorksStep2Title: "2. Choose up to 3 sides",
    howItWorksStep2Desc: "14 flavorful side dishes to customize your plate (rice, beans, purees, farofas, and fries).",
    howItWorksStep3Title: "3. House courtesy",
    howItWorksStep3Desc: "While your dish is sizzling, enjoy a fresh mixed green salad with passion fruit dressing & chef's welcome bite.",
    courtesyTitle: "House Courtesy",
    courtesyText: "While your dish is prepared over live coals, we serve crisp mixed green leaves with house passion fruit reduction and an exclusive chef's starter.",
    courtesyTag: "100% COMPLIMENTARY",
    suggestionsTitle: "Chef's Recommendations",
    sidesTitle: "Available Sides (Choose up to 3)",
    openGameBtn: "Customize Executive Plate",
    openGameSubtitle: "Choose your main protein, up to 3 sides and complimentary chef starter",
    gameTitle: "Executive Lunch · Build Your Plate",
    gameSubtitle: "Customize your plate with your favorite protein and sides.",
    level1Title: "Step 1: Choose Your Main Protein",
    level2Title: "Step 2: Choose Up to 3 Sides",
    level3Title: "Step 3: House Courtesy & Plate Summary",
    filterAll: "All Proteins",
    filterChickenPork: "Chicken & Pork",
    filterMeat: "Prime Steaks",
    filterSeafood: "Fish & Seafood",
    filterVeg: "Vegetarian",
    sidesCounterBadge: (sel, max) => `${sel} of ${max} selected`,
    sidesHint: "Pick up to 3 sides to accompany your centerpiece protein.",
    stepNext: "Continue to Sides",
    stepBack: "Go Back",
    randomChefSpin: "Chef's Recommendation",
    randomSpinning: "Selecting combo...",
    congratulations: "Great Choice!",
    dishCompletedTitle: "Your Executive Plate is Ready!",
    dishCompletedSubtitle: "Seared protein + handpicked side dishes + complimentary chef appetizer & salad.",
    totalPriceLabel: "Complete Meal Price:",
    addToComanda: "Add to Digital Tab",
    addedToComanda: "Added to Your Tab!",
    sendWhatsApp: "Order via WhatsApp",
    createAnotherDish: "Build Another Plate",
    xpAwarded: "Complete Meal",
    chefMasterBadge: "Executive Menu",
    copyDishDetails: "Copy Meal Summary",
    copiedSuccess: "Copied to clipboard!"
  },
  fr: {
    title: "Menu Exécutif",
    badge: "Formule Déjeuner en 3 Étapes",
    subtitle: "Le meilleur repas de votre journée à Praia do Francês signé Divina Gula.",
    howItWorksTitle: "Fonctionnement du Menu Exécutif",
    howItWorksStep1Title: "1. Choisissez votre protéine",
    howItWorksStep1Desc: "12 viandes, poissons et options végétariennes grillés au feu de bois dès R$ 36,90.",
    howItWorksStep2Title: "2. Choisissez jusqu'à 3 accompagnements",
    howItWorksStep2Desc: "14 garnitures savoureuses pour composer votre assiette sur mesure.",
    howItWorksStep3Title: "3. Courtoisie de la maison",
    howItWorksStep3Desc: "Pendant la cuisson à la braise, nous vous offrons un mix de salades au fruit de la passion et une mise en bouche du chef.",
    courtesyTitle: "Courtoisie de la Maison",
    courtesyText: "Pendant la cuisson de votre plat sur la braise, la maison vous offre un bouquet de feuilles fraîches au coulis de maracuja et un amuse-bouche du chef.",
    courtesyTag: "100% OFFERT",
    suggestionsTitle: "Suggestions du Chef",
    sidesTitle: "Accompagnements au Choix (Jusqu'à 3)",
    openGameBtn: "Composer mon Assiette Exécutive",
    openGameSubtitle: "Choisissez votre protéine, jusqu'à 3 accompagnements et profitez de la courtoisie",
    gameTitle: "Menu Exécutif · Composez votre Assiette",
    gameSubtitle: "Personnalisez votre formule déjeuner en toute simplicité.",
    level1Title: "Étape 1 : Choisissez votre Protéine",
    level2Title: "Étape 2 : Choisissez jusqu'à 3 Accompagnements",
    level3Title: "Étape 3 : Courtoisie de la Maison & Récapitulatif",
    filterAll: "Toutes les Protéines",
    filterChickenPork: "Volaille & Porc",
    filterMeat: "Viandes Nobles",
    filterSeafood: "Poissons & Fruits de Mer",
    filterVeg: "Végétarien",
    sidesCounterBadge: (sel, max) => `${sel} sur ${max} sélectionnés`,
    sidesHint: "Sélectionnez jusqu'à 3 garnitures pour accompagner votre plat.",
    stepNext: "Passer aux Accompagnements",
    stepBack: "Retour",
    randomChefSpin: "Suggestion du Chef",
    randomSpinning: "Sélection en cours...",
    congratulations: "Excellent choix !",
    dishCompletedTitle: "Votre Assiette Exécutive est Prête !",
    dishCompletedSubtitle: "Cuisson maîtrisée + garnitures choisies + courtoisie offerte du chef.",
    totalPriceLabel: "Prix du Plat Complet :",
    addToComanda: "Ajouter à l'Addition",
    addedToComanda: "Ajouté à l'Addition !",
    sendWhatsApp: "Commander sur WhatsApp",
    createAnotherDish: "Composer une Autre Assiette",
    xpAwarded: "Formule Complète",
    chefMasterBadge: "Menu Exécutif",
    copyDishDetails: "Copier le Récapitulatif",
    copiedSuccess: "Copié dans le presse-papiers !"
  },
  ja: {
    title: "エグゼクティブ・ランチセット",
    badge: "選べる3ステップ特別ランチ",
    subtitle: "ディヴィーナ・グラ自慢の炭火焼き料理とお好みの副菜で楽しむ贅沢プレート。",
    howItWorksTitle: "エグゼクティブセットのご注文方法",
    howItWorksStep1Title: "1. メイン（お肉・お魚・ベジ）を選択",
    howItWorksStep1Desc: "炭火焼きチキン、極上ピカーニャ、新鮮魚介など12種類から選択（R$ 36.90〜）。",
    howItWorksStep2Title: "2. お好みの副菜を最大3品選択",
    howItWorksStep2Desc: "ライス、豆料理、特製ピューレ、ポテトなど14種類のサイドメニューから自由に組み合わせ。",
    howItWorksStep3Title: "3. 当店からの無料サービス",
    howItWorksStep3Desc: "お料理をじっくり焼き上げている間、パッションフルーツドレッシングの新鮮サラダとシェフ特製前菜をサービス！",
    courtesyTitle: "当店からの無料サービス",
    courtesyText: "炭火でお肉やお魚を香ばしく焼き上げる間、パッションフルーツソースのフレッシュサラダとシェフ特製の前菜を無料でご提供いたします。",
    courtesyTag: "無料サービス",
    suggestionsTitle: "シェフのおすすめ組み合わせ",
    sidesTitle: "選べるサイドメニュー（最大3品）",
    openGameBtn: "エグゼクティブプレートをカスタマイズ",
    openGameSubtitle: "お好みのメインと副菜3品を選び、無料サービスの前菜をお楽しみください",
    gameTitle: "エグゼクティブ・ランチ · プレート作成",
    gameSubtitle: "メインと副菜を自由に組み合わせて、あなただけのプレートを。",
    level1Title: "ステップ1：メイン料理を選択",
    level2Title: "ステップ2：副菜を最大3品選択",
    level3Title: "ステップ3：無料サービス＆プレート概要",
    filterAll: "すべてのメイン",
    filterChickenPork: "チキン＆ポーク",
    filterMeat: "厳選牛肉",
    filterSeafood: "魚介＆シーフード",
    filterVeg: "ベジタリアン",
    sidesCounterBadge: (sel, max) => `${max}品中 ${sel}品 選択済み`,
    sidesHint: "お好みのサイドメニューを3品まで選んでください。",
    stepNext: "副菜の選択に進む",
    stepBack: "前に戻る",
    randomChefSpin: "シェフのおすすめ（おまかせ）",
    randomSpinning: "選択中...",
    congratulations: "素晴らしい選択です！",
    dishCompletedTitle: "エグゼクティブプレートが完成！",
    dishCompletedSubtitle: "香ばしいメイン料理＋選べる副菜3品＋無料の前菜＆サラダ付き。",
    totalPriceLabel: "プレート合計価格:",
    addToComanda: "伝票に追加する",
    addedToComanda: "伝票に追加しました！",
    sendWhatsApp: "WhatsAppで注文する",
    createAnotherDish: "別のプレートを作る",
    xpAwarded: "フルセット",
    chefMasterBadge: "エグゼクティブメニュー",
    copyDishDetails: "メニュー詳細をコピー",
    copiedSuccess: "クリップボードにコピーしました！"
  }
};
