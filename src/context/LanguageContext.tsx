import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  LANGUAGES, 
  LanguageOption, 
  TRANSLATIONS, 
  TranslationDictionary, 
  FAQ_LOCALIZED, 
  LocalizedFaqItem, 
  QUIZ_LOCALIZED, 
  LocalizedQuizQuestion 
} from '../i18n/translations';
import { MenuCategory, MenuItem } from '../data/menuData';

interface CategoryTranslation {
  title: string;
  subtitle?: string;
  description?: string;
  servingInfo?: string;
}

const CATEGORY_TRANSLATIONS: Record<Language, Record<string, CategoryTranslation>> = {
  pt: {
    'promocoes': { title: 'Promoções & Destaques', subtitle: 'Ofertas imperdíveis e combos selecionados', description: 'Combos especiais da cervejaria Praya e condições exclusivas para brindar na praia.' },
    'entradinhas': { title: '1. Entradinhas', subtitle: 'Para abrir o apetite e partilhar na brisa', description: 'Caldinhos quentinhos, empanadas caseiras, pastéis estaladiços e espetinhos suculentos.' },
    'petiscos': { title: '2. Petiscos', subtitle: 'Porções generosas para compartilhar com amigos', description: 'Carne de sol maturada, atolados no purê de macaxeira, camarões gigantes e carpaccio autoral.' },
    'frutos-do-mar': { title: '3. Frutos do Mar', subtitle: 'Frescor dos mares alagoanos preparados com maestria', description: 'Robalo grelhado, arrozes de frutos do mar, salmão ao molho de jabuticaba e crostas de castanha.', servingInfo: 'Serve 02 a 03 Pessoas' },
    'moquecas': { title: '4. Moquecas', subtitle: 'Cozidas em panela de barro com leite de coco fresco e dendê', description: 'Acompanham arroz branco soltinho, farofa de dendê crocante e purê aveludado de banana-da-terra.', servingInfo: 'Serve 02 Pessoas' },
    'pratos-da-casa': { title: '5. Pratos da Casa', subtitle: 'A alma da gastronomia brasileira e mineira contemporânea', description: 'Costelas cozidas em fogo brando, feijão tropeiro legítimo, tutu e filés premiados.', servingInfo: 'Serve 02 Pessoas' },
    'petiscos-brasa': { title: '6. Petiscos na Brasa', subtitle: 'Dourados no calor do carvão vegetal', description: 'Queijos na chapa com pão de alho, camarão na força e espetos especiais.' },
    'linguicas-caseiras': { title: '7. Linguiças Caseiras', subtitle: 'Receitas artesanais de embutidos nobres', description: 'Pernil suíno temperado com ervas e especiarias, aceboladas na chapa.' },
    'panelinhas-saladas': { title: '8 & 9. Panelinhas & Saladas', subtitle: 'Sabores regionais de tacho e folhas frescas', description: 'Ensopados tradicionais servidos com pão francês quentinho e saladas com frutos do mar.' },
    'grelhados-brasa': { title: '10. Grelhados na Brasa', subtitle: 'Cortes nobres preparados na churrasqueira', description: 'Acompanham arroz, farofa crocante, vinagrete fresco e acompanhamento à escolha.', servingInfo: 'Serve 02 Pessoas' },
    'menu-infantil': { title: '11. Menu Infantil', subtitle: 'Porções equilibradas e saborosas para os pequenos', description: 'Pratos com filé mignon, frango ou peixe acompanhados de arroz, feijão e batatinhas.', servingInfo: 'Individual' },
    'sobremesas': { title: '12. Sobremesas', subtitle: 'O doce final perfeito para sua refeição', description: 'Receitas tradicionais e autorais para fechar com chave de ouro.' },
    'bebidas': { title: '13. Bebidas & Drinks', subtitle: 'Chopps artesanais, caipiroskas e mixologia tropical', description: 'Cervejas geladas, drinks autorais de frutas regionais e destilados nobres.' }
  },
  es: {
    'promocoes': { title: 'Promociones & Destacados', subtitle: 'Ofertas irresistibles y combos seleccionados', description: 'Combos especiales de cerveza artesanal Praya y condiciones exclusivas para brindar en la playa.' },
    'entradinhas': { title: '1. Entrantes y Tapas', subtitle: 'Para abrir el apetito con la brisa del mar', description: 'Caldos calientes, empanadas caseras, pasteles crujientes y brochetas jugosas.' },
    'petiscos': { title: '2. Picoteo para Compartir', subtitle: 'Porciones generosas para disfrutar entre amigos', description: 'Carne deshebrada curada, puré cremoso de yuca gratinado, camarones gigantes y carpaccio artesanal.' },
    'frutos-do-mar': { title: '3. Mariscos & Pescados', subtitle: 'La frescura del mar de Alagoas preparada con maestría', description: 'Róbalo a la plancha, arroces caldosos de mariscos, salmón y costras crujientes de castaña.', servingInfo: 'Para 2 a 3 Personas' },
    'moquecas': { title: '4. Moquecas en Barro', subtitle: 'Cocinadas en cazuela de barro con leche de coco fresca y aceite de palma', description: 'Servidas con arroz blanco suelto, farofa crujiente de dendê y puré aterciopelado de plátano macho.', servingInfo: 'Para 2 Personas' },
    'pratos-da-casa': { title: '5. Especialidades de la Casa', subtitle: 'El alma de la cocina brasileña tradicional y contemporánea', description: 'Costillas cocinadas a fuego lento, frijol tropeiro tradicional, tutu y cortes premiados.', servingInfo: 'Para 2 Personas' },
    'petiscos-brasa': { title: '6. Tapas a las Brasas', subtitle: 'Doradas al calor de las brasas de carbón vegetal', description: 'Quesos a la plancha con pan de ajo, camarones a la brasa y brochetas selectas.' },
    'linguicas-caseiras': { title: '7. Embutidos Artesanales', subtitle: 'Recetas de longanizas nobles elaboradas a mano', description: 'Pierna de cerdo condimentada con hierbas y especias, salteada con cebolla en la plancha.' },
    'panelinhas-saladas': { title: '8 & 9. Cazuelitas & Ensaladas', subtitle: 'Guisos tradicionales de cazuela y hojas verdes frescas', description: 'Guisos regionales acompañados de pan francés crujiente y ensaladas con mariscos frescos.' },
    'grelhados-brasa': { title: '10. Carnes a la Brasa', subtitle: 'Cortes nobles preparados en parrilla de carbón', description: 'Acompañados de arroz, farofa crujiente, vinagreta fresca y guarnición a elección.', servingInfo: 'Para 2 Personas' },
    'menu-infantil': { title: '11. Menú Infantil', subtitle: 'Platos balanceados y deliciosos para los más pequeños', description: 'Opciones de solomillo, pollo o pescado con arroz, frijoles y papas fritas.', servingInfo: 'Individual' },
    'sobremesas': { title: '12. Postres Artesanales', subtitle: 'El broche de oro dulce para tu comida', description: 'Recetas clásicas brasileñas y creaciones exclusivas.' },
    'bebidas': { title: '13. Bebidas & Coctelería', subtitle: 'Cerveza de barril, caipiroskas y mixología tropical', description: 'Cervezas heladas, cócteles con frutas autóctonas y destilados selectos.' }
  },
  en: {
    'promocoes': { title: 'Specials & Highlights', subtitle: 'Unmissable deals and curated beach pairings', description: 'Special craft beer bundles from Praya brewery and exclusive perks for beach lovers.' },
    'entradinhas': { title: '1. Starters & Finger Foods', subtitle: 'To awaken your appetite with the ocean breeze', description: 'Warming savory broths, golden empanadas, crispy fried pastries, and juicy skewers.' },
    'petiscos': { title: '2. Sharing Platters', subtitle: 'Generous portions crafted for friends and family', description: 'Aged sun-cured beef, baked creamy cassava bowls, giant prawns, and house-cured carpaccio.' },
    'frutos-do-mar': { title: '3. Seafood & Coastal Catches', subtitle: 'Ocean freshness from Alagoas crafted with mastery', description: 'Grilled sea bass, fragrant seafood rice, salmon in wild jabuticaba reduction, and cashew nut crusts.', servingInfo: 'Serves 2 to 3 Guests' },
    'moquecas': { title: '4. Clay-Pot Moquecas', subtitle: 'Simmered in clay with fresh coconut milk and golden dendê oil', description: 'Served with fluffy jasmine rice, toasted coconut farofa, and velvety plantain puree.', servingInfo: 'Serves 2 Guests' },
    'pratos-da-casa': { title: '5. House Classics', subtitle: 'The soul of authentic and contemporary Brazilian cuisine', description: 'Slow-braised ribs, authentic Tropeiro beans, black-eyed pea puree (tutu), and award-winning steaks.', servingInfo: 'Serves 2 Guests' },
    'petiscos-brasa': { title: '6. Charcoal-Grilled Starters', subtitle: 'Charred to perfection over hardwood charcoal embers', description: 'Grilled Brazilian squeaky cheese with garlic bread, flame-kissed prawns, and skewers.' },
    'linguicas-caseiras': { title: '7. Handcrafted Sausages', subtitle: 'Artisanal sausage recipes made from noble pork cuts', description: 'Tender pork leg sausage seasoned with fragrant herbs and sautéed with caramelized onions.' },
    'panelinhas-saladas': { title: '8 & 9. Skillet Stews & Crisp Salads', subtitle: 'Regional hearty casseroles and vibrant farm leaves', description: 'Rich country stews served with warm crusty baguette, and crisp salads crowned with seafood.' },
    'grelhados-brasa': { title: '10. Charcoal-Grilled Steaks', subtitle: 'Prime cuts seared over hot glowing charcoal', description: 'Served with Brazilian rice, crunchy seasoned farofa, fresh vinaigrette, and your favorite side.', servingInfo: 'Serves 2 Guests' },
    'menu-infantil': { title: '11. Kids Menu', subtitle: 'Nutritious and delicious portions for young travelers', description: 'Tender filet mignon, chicken strips, or crispy fish served with rice, beans, and fries.', servingInfo: 'Individual' },
    'sobremesas': { title: '12. Desserts', subtitle: 'The sweetest finish to your seaside feast', description: 'Traditional Brazilian sweet temptations and tropical house creations.' },
    'bebidas': { title: '13. Cocktails & Drinks', subtitle: 'Craft draft beers, caipiroskas, and tropical mixology', description: 'Ice-cold beers, fresh native fruit cocktails, and fine aged spirits.' }
  },
  fr: {
    'promocoes': { title: "Promotions & Incontournables", subtitle: "Offres irrésistibles et formules sélectionnées", description: "Packs spéciaux de la brasserie Praya et conditions exclusives pour trinquer face à la mer." },
    'entradinhas': { title: "1. Entrées & Tapas", subtitle: "Pour éveiller l'appétit avec la douce brise marine", description: "Bouillons chauds parfumés, empanadas dorées, beignets croustillants et brochettes juteuses." },
    'petiscos': { title: "2. Assiettes à Partager", subtitle: "Portions généreuses à déguster entre amis", description: "Viande séchée maturée, purée de manioc onctueuse gratinée, crevettes géantes et carpaccio." },
    'frutos-do-mar': { title: "3. Poissons & Fruits de Mer", subtitle: "La fraîcheur de l'océan d'Alagoas préparée avec maestria", description: "Bar grillé, riz onctueux aux fruits de mer, saumon sauce jabuticaba et croûtes de noix de cajou.", servingInfo: "Pour 2 à 3 Personnes" },
    'moquecas': { title: "4. Moquecas en Marmite", subtitle: "Mijotées en terre cuite au lait de coco frais et huile de dendê", description: "Servies avec riz blanc fondant, farofa dorée au dendê et mousseline veloutée de banane plantain.", servingInfo: "Pour 2 Personnes" },
    'pratos-da-casa': { title: "5. Plats Traditionnels", subtitle: "L'âme de la haute gastronomie brésilienne authentique", description: "Travers de bœuf mijotés 24h à 45h, haricots façon Tropeiro, tutu et viandes médaillées.", servingInfo: "Pour 2 Personnes" },
    'petiscos-brasa': { title: "6. Grillades Apéritives", subtitle: "Dorées sur la braise ardente de charbon de bois", description: "Fromage brésilien toasté avec pain à l'ail, crevettes braisées et brochettes signature." },
    'linguicas-caseiras': { title: "7. Saucisses Artisanales", subtitle: "Recettes maison d'excellence aux viandes nobles", description: "Saucisses de porc assaisonnées aux herbes fraîches, servies avec oignons dorés." },
    'panelinhas-saladas': { title: "8 & 9. Cocottes & Salades", subtitle: "Mijotés régionaux en cocotte et verdures croquantes", description: "Mijotés traditionnels accompagnés de pain chaud et salades garnies de fruits de mer." },
    'grelhados-brasa': { title: "10. Viandes Grillées à la Braise", subtitle: "Pièces d'exception saisies au feu de bois", description: "Accompagnées de riz, farofa croustillante, vinaigrette fraîche et garniture au choix.", servingInfo: "Pour 2 Personnes" },
    'menu-infantil': { title: "11. Menu Enfants", subtitle: "Plats équilibrés et gourmands pour les petits", description: "Filet mignon, aiguillettes de poulet ou poisson pané accompagnés de riz, haricots et frites.", servingInfo: "Individuel" },
    'sobremesas': { title: "12. Desserts Gourmands", subtitle: "La touche finale sucrée et envoûtante", description: "Douceurs classiques brésiliennes et créations pâtissières de la maison." },
    'bebidas': { title: "13. Boissons & Cocktails", subtitle: "Bières pression fraîches, caipiroskas et mixologie tropicale", description: "Bières artisanales glacées, cocktails aux fruits frais et spiritueux fins." }
  },
  ja: {
    'promocoes': { title: '特典＆プロモーション', subtitle: 'おすすめのお得なセット＆ハッピーアワー', description: 'グルテンフリークラフトビール「プライア」と海辺で楽しむ限定特別プラン。' },
    'entradinhas': { title: '1. 前菜・タパス', subtitle: '心地よい海風とともに楽しむ最初の一皿', description: '熱々の特製スープ、自家製パイ包み、サクサクのパステウ、ジューシーな串焼き。' },
    'petiscos': { title: '2. シェア向けおつまみ', subtitle: '仲間と楽しむボリューム満点の一品', description: '熟成肉の旨味、濃厚なキャッサバ芋のオーブン焼き、大エビのソテー、自家製カルパッチョ。' },
    'frutos-do-mar': { title: '3. 魚介・シーフード', subtitle: 'アラゴアス州の海が育んだ極上の海の幸', description: '白身魚のグリル、旨味たっぷりのシーフードリゾット、特製サーモンソテー。', servingInfo: '2〜3名様分' },
    'moquecas': { title: '4. 名物 土鍋ムケッカ', subtitle: '新鮮なココナッツミルクとハーブで煮込む伝統の逸品', description: 'ふっくら炊き上げた白ご飯、特製ファロッファ、バナナピューレ付き。', servingInfo: '2名様分' },
    'pratos-da-casa': { title: '5. 当店自慢の伝統郷土料理', subtitle: 'ブラジル全土で愛される本物の家庭とレストランの味', description: '長時間じっくり煮込んだ自慢の牛リブ、特製お豆料理トロペイロ、上質なステーキ。', servingInfo: '2名様分' },
    'petiscos-brasa': { title: '6. 炭火焼きおつまみ', subtitle: '炭火の遠赤外線で香ばしく焼き上げた逸品', description: '香ばしいブラジル風チーズとガーリックトースト、炭火焼きエビなど。' },
    'linguicas-caseiras': { title: '7. 自家製生ソーセージ', subtitle: '厳選された豚肉とハーブで作る本格ソーセージ', description: 'ジューシーな自家製ポークソーセージと香ばしい玉ねぎソテー。' },
    'panelinhas-saladas': { title: '8 & 9. 小鍋料理＆フレッシュサラダ', subtitle: '滋味あふれる煮込み鍋と新鮮な高原野菜', description: '焼きたてのパンと楽しむ煮込み料理、新鮮なエビやサーモンを添えたサラダ。' },
    'grelhados-brasa': { title: '10. 極上炭火焼きステーキ', subtitle: '豪快な炭火で焼き上げるブラジル最高峰の肉料理', description: 'ライス、サクサクのファロッファ、特製ビネグレットソース、選べる付け合わせ付き。', servingInfo: '2名様分' },
    'menu-infantil': { title: '11. キッズメニュー', subtitle: 'お子様向けの安心で美味しいバランスプレート', description: 'フィレ肉、チキン、白身魚から選べるライス・豆・ポテト付きのキッズセット。', servingInfo: 'お子様1名様分' },
    'sobremesas': { title: '12. 自家製デザート', subtitle: 'お食事の最後を飾る至福のスイーツ', description: '伝統的なブラジルの甘味と特製トロピカルデザート。' },
    'bebidas': { title: '13. ドリンク＆カクテル', subtitle: '冷えた生ビール、カイピロスカ、トロピカルカクテル', description: 'フレッシュフルーツをたっぷり使ったカクテルや厳選スピリッツ。' }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
  faqList: LocalizedFaqItem[];
  quizQuestions: LocalizedQuizQuestion[];
  languages: LanguageOption[];
  currentLanguageOption: LanguageOption;
  getCategoryLocalized: (cat: MenuCategory) => {
    title: string;
    subtitle?: string;
    description: string;
    servingInfo?: string;
  };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'divina_gula_lang_pref';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'pt' || saved === 'es' || saved === 'en' || saved === 'fr' || saved === 'ja')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.pt;
  const faqList = FAQ_LOCALIZED[language] || FAQ_LOCALIZED.pt;
  const quizQuestions = QUIZ_LOCALIZED[language] || QUIZ_LOCALIZED.pt;
  const currentLanguageOption = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  const getCategoryLocalized = (cat: MenuCategory) => {
    const localized = CATEGORY_TRANSLATIONS[language]?.[cat.id];
    if (localized) {
      return {
        title: localized.title || cat.title,
        subtitle: localized.subtitle || cat.subtitle,
        description: localized.description || cat.description,
        servingInfo: localized.servingInfo || cat.servingInfo,
      };
    }
    return {
      title: cat.title,
      subtitle: cat.subtitle,
      description: cat.description,
      servingInfo: cat.servingInfo,
    };
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        faqList,
        quizQuestions,
        languages: LANGUAGES,
        currentLanguageOption,
        getCategoryLocalized,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
