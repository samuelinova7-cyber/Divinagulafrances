export const BRAND_ASSETS = {
  logoUrl: "https://res.cloudinary.com/gu3r4btn/image/upload/v1790880258/WhatsApp_Image_2026-10-01_at_3.22.12_PM_1_nwjoxi.jpg",
  praya4x3Image: "https://res.cloudinary.com/gu3r4btn/image/upload/v1790880253/WhatsApp_Image_2026-10-01_at_3.22.12_PM_cq97go.jpg",
  happyHourImage: "https://res.cloudinary.com/gu3r4btn/image/upload/v1790880254/SnapInsta.to_830540599_18636797335040406_8022401376043101883_n_gwc9ue.jpg",
  heroVideoUrl: "https://res.cloudinary.com/hd1sahto/video/upload/v1792791366/Gold_shimmer_website_hero_animation_20261023183344.mp4",
  // iFood Section media (photo & video alternating)
  ifoodImage: "https://res.cloudinary.com/hd1sahto/image/upload/v1792714147/WhatsApp_Image_2026-10-22_at_8.05.24_PM.jpg",
  ifoodVideo: "https://res.cloudinary.com/hd1sahto/video/upload/v1792719167/WhatsApp_Video_2026-10-22_at_9.40.16_PM.mp4",
  // Location & Reviews Section media (video & photo alternating)
  locationVideo: "https://res.cloudinary.com/hd1sahto/video/upload/v1792721082/WhatsApp_Video_2026-10-22_at_9.40.16_PM_1.mp4",
  locationImage: "https://res.cloudinary.com/hd1sahto/image/upload/v1792715028/WhatsApp_Image_2026-10-22_at_8.05.23_PM_1.jpg",
  instagramVideos: [
    {
      id: "ig-v1",
      videoUrl: "https://res.cloudinary.com/hd1sahto/video/upload/v1792721082/WhatsApp_Video_2026-10-22_at_9.40.16_PM_1.mp4",
      caption: "Brisa da Praia do Francês e gastronomia inigualável no Divina Gula. 🌊✨",
      likes: "1.4k",
    },
    {
      id: "ig-v2",
      videoUrl: "https://res.cloudinary.com/gu3r4btn/video/upload/v1790880257/SnapInsta.to_AQME4kH3ch9mYCrhQ5BZm-tIBthC3tsgoEFqmBAHdnm1yJvsb7TWtqWOtYZrFj_47DUsp8iVnuCeZSK5fGpMat6gwaExuBho_BoWNdo_uzri3w.mp4",
      caption: "Moquecas borbulhantes e frutos do mar frescos preparados com carinho. 🦐🥘",
      likes: "1.2k",
    },
    {
      id: "ig-v3",
      videoUrl: "https://res.cloudinary.com/gu3r4btn/video/upload/v1790880258/SnapInsta.to_AQOy3F3iSaK8pdtpdfC5Tq58YYyE-zl3pJ_bj4btaObqYBy1uvhJXVJdsLuTGGbxHbfiM4uQszn3G-qgUumMNRyaGVhet7vXJGk7zWQ_qbmr4r.mp4",
      caption: "Drinks refrescantes e mixologia tropical para o seu happy hour. 🍹🍋",
      likes: "956",
    },
    {
      id: "ig-v4",
      videoUrl: "https://res.cloudinary.com/gu3r4btn/video/upload/v1790880259/SnapInsta.to_AQNJrqrn56gzYpI5FHNC2r4mAjD-c4mrv9KNo2pqw-zu__lOU60_n1bFfoW0EBpougVQkYbt5SNfQrFCWx7E-5jHMVhnbzFD7FL9-Kk_r16pp6.mp4",
      caption: "Cortes nobres na brasa e aquela picanha suculenta que você ama. 🥩🔥",
      likes: "1.5k",
    },
    {
      id: "ig-v5",
      videoUrl: "https://res.cloudinary.com/gu3r4btn/video/upload/v1790880268/SnapInsta.to_AQMRJ1Z5wL7Hin_sv-oKK-edY6T647J2PmeIMytCm6WF7i3jGfmDVF6Z9LV_2nHvO_aCOdH_IyB2dHHiatK_fSB7UeV9CbzNzMZdlU8_yjdv0v.mp4",
      caption: "Ambiente acolhedor em frente à La Rue na Praia do Francês. 🌴🪑",
      likes: "789",
    },
    {
      id: "ig-v6",
      videoUrl: "https://res.cloudinary.com/gu3r4btn/video/upload/v1790880269/SnapInsta.to_AQOF0P2CMXpfNhKJac7VAW8No3ezsHcVvmqcwAoqVwYUap0RN08Cvx6QNazHZZbU_A3ug6L_olKP03IlzkquaMz8aD5L5AuK9bEgIAI_bzlvuv.mp4",
      caption: "Comida brasileira de verdade com sabor de quero mais! 💛✨",
      likes: "2.1k",
    }
  ]
};

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  portion?: string;
  tags?: string[];
  isHighlight?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
  videoUrl: string;
  fallbackImage: string;
  description: string;
  servingInfo?: string;
  items: MenuItem[];
}

export const RESTAURANT_INFO = {
  name: "Divina Gula Francês",
  tagline: "Comida brasileira de verdade.",
  parentBrand: "@divinagulabr",
  instagram: "@divinagulafrances",
  instagramUrl: "https://www.instagram.com/divinagulafrances",
  followers: "9.951",
  rating: 5.0,
  reviewCount: 226,
  priceRange: "R$ 60 – R$ 160",
  address: "R. Massunim, 5 - Praia do Francês, Mal. Deodoro - AL, 57160-000, Brasil",
  locationRef: "Em frente à La Rue, Praia do Francês",
  googleMapsUrl: "https://maps.google.com/?q=Divina+Gula+Frances+Praia+do+Frances+Alagoas",
  googleReviewUrl: "https://g.co/kgs/sua-avaliacao-aqui",
  ifoodUrl: "https://www.ifood.com.br/delivery/marechal-deodoro-al/divina-gula-frances-praia-do-frances",
  whatsapp: "5582999999999",
  whatsappUrl: "https://wa.me/5582999999999?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20ou%20reserva%20no%20Divina%20Gula%20Franc%C3%AAs.",
  hours: [
    { days: "Terça a Quinta", hours: "12h às 23h" },
    { days: "Sexta e Sábado", hours: "12h às 00h" },
    { days: "Domingo", hours: "12h às 22h" },
    { days: "Segunda", hours: "Fechado" },
  ],
  happyHour: {
    days: "Terça a Sexta",
    time: "16h às 19h",
    deals: [
      { item: "Chopp Amstel", price: 6.50 },
      { item: "Chopp Heineken", price: 8.90 },
      { item: "Caipiroska Tradicional", price: 14.90 },
    ]
  }
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "promocoes",
    title: "Promoções & Destaques",
    subtitle: "Ofertas imperdíveis e combos selecionados",
    iconName: "Sparkles",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cheers-with-beer-mugs-in-a-bar-42999-large.mp4",
    fallbackImage: "/src/assets/images/hero_divina_gula_frances_1790876275132.jpg",
    description: "Combos especiais da cervejaria Praya e condições exclusivas para brindar na praia.",
    items: [
      {
        id: "praya-exp",
        name: "Praya Experience",
        price: 55.00,
        description: "2 Cervejas Prayas bem geladas + Bolinho de Camarão (crocante por fora, macio por dentro, feito com massa de macaxeira sem glúten).",
        tags: ["Combo Especial", "Sem Glúten", "Favorito"],
        isHighlight: true,
      },
      {
        id: "praya-4x3",
        name: "Promoção Praya 4x3",
        price: 37.50,
        description: "Na compra de 3 cervejas Praya puro malte sem glúten, a 4ª cerveja é por nossa conta!",
        tags: ["Cerveja Gelada", "4 por 3"],
        isHighlight: true,
      },
      {
        id: "hh-amstel",
        name: "Happy Hour: Chopp Amstel",
        price: 6.50,
        description: "Válido de Terça a Sexta das 16h às 19h. Chopp cremoso tirado na pressão.",
        tags: ["Happy Hour (16h-19h)"],
      },
      {
        id: "hh-heineken",
        name: "Happy Hour: Chopp Heineken",
        price: 8.90,
        description: "Válido de Terça a Sexta das 16h às 19h. O chopp mais gelado da Praia do Francês.",
        tags: ["Happy Hour (16h-19h)"],
      },
      {
        id: "hh-caipiroska",
        name: "Happy Hour: Caipiroska Tradicional",
        price: 14.90,
        description: "Válido de Terça a Sexta das 16h às 19h. Feita com frutas frescas e vodka nacional.",
        tags: ["Happy Hour (16h-19h)"],
      }
    ]
  },
  {
    id: "executivo",
    title: "Cardápio Executivo",
    subtitle: "1 Proteína + até 3 Acompanhamentos + Cortesia da Casa",
    iconName: "Utensils",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sizzling-meat-steaks-on-a-charcoal-grill-42691-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Experiência executiva em 3 etapas com cortesia de mix de folhas e entrada do chef.",
    servingInfo: "Individual",
    items: [
      {
        id: "exec-frango-grelhado",
        name: "Peito de frango grelhado na brasa",
        price: 36.90,
        description: "Peito de frango suculento marinado em ervas frescas e grelhado no carvão. Escolha até 3 acompanhamentos + cortesia de mix de folhas e entrada do chef.",
        tags: ["Executivo", "Na Brasa"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-isquinhas-frango",
        name: "Isquinhas de frango crocante",
        price: 36.90,
        description: "Tiras selecionadas de frango empanadas com crosta dourada e sequinha. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Crocante"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-pernil-acebolado",
        name: "Bife de pernil acebolado",
        price: 36.90,
        description: "Corte de pernil macio grelhado com cebolas caramelizadas no ponto. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Suíno"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-moqueca-banana",
        name: "Moqueca de banana da terra (vegetariano)",
        price: 36.90,
        description: "Receita aromática com leite de coco artesanal, dendê suave e banana da terra doce. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Vegetariano"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-tilapia-grelhada",
        name: "Filé de tilápia grelhado",
        price: 48.50,
        description: "Filé de tilápia fresco selado na chapa com azeite de oliva e raspas de limão. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Peixe"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-tilapia-crosta",
        name: "Tilápia na crosta",
        price: 48.50,
        description: "Filé alto de tilápia coberto com crosta crocante de ervas e queijo dourado. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Mais Pedido"],
        portion: "1 Pessoa",
        isHighlight: true
      },
      {
        id: "exec-carne-sol-acebolada",
        name: "Carne de sol acebolada",
        price: 48.50,
        description: "Carne de sol curada artesanalmente na casa, dourada na manteiga de garrafa. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Regional"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-file-mignon",
        name: "Filé mignon grelhado",
        price: 58.90,
        description: "Medalhão de filé mignon super macio grelhado ao ponto de sua preferência. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Corte Nobre"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-bobo-camarao",
        name: "Bobó de camarão",
        price: 62.50,
        description: "Creme aveludado de macaxeira com camarões graúdos, leite de coco e coentro fresco. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Frutos do Mar"],
        portion: "1 Pessoa",
        isHighlight: true
      },
      {
        id: "exec-salmao-grelhado",
        name: "Filé de salmão grelhado",
        price: 69.90,
        description: "Salmão fresco com pele crocante, servido suculento e macio por dentro. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Salmão"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-robalo-grelhado",
        name: "Filé de robalo grelhado",
        price: 75.80,
        description: "O nobre robalo dos mares alagoanos grelhado com azeite de ervas e flor de sal. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Robalo"],
        portion: "1 Pessoa"
      },
      {
        id: "exec-picanha-brasa",
        name: "Picanha importada na brasa",
        price: 75.80,
        description: "Fatias nobres de picanha importada com capa de gordura perfeita, seladas no fogo forte. Escolha até 3 acompanhamentos + cortesia da casa.",
        tags: ["Executivo", "Picanha Nobre"],
        portion: "1 Pessoa",
        isHighlight: true
      }
    ]
  },
  {
    id: "entradinhas",
    title: "1. Entradinhas",
    subtitle: "Para abrir o apetite e partilhar na brisa",
    iconName: "UtensilsCrossed",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-appetizers-arranged-on-a-table-41551-large.mp4",
    fallbackImage: "/src/assets/images/hero_divina_gula_frances_1790876275132.jpg",
    description: "Caldinhos quentinhos, empanadas artesanais, pastéis estaladiços e espetinhos suculentos.",
    items: [
      { id: "ent-1", name: "Caldinho de Feijão", price: 16.50, description: "Caldinho temperado na tradição da casa com torresminho crocante e cheiro-verde." },
      { id: "ent-2", name: "Caldinho Bobó de Camarão", price: 18.50, description: "Cremoso caldo de mandioca com camarões frescos e toque suave de dendê." },
      { id: "ent-3", name: "Empanada de Costela (3 unid.)", price: 49.90, description: "Acompanha vinagrete e maionese picante artesanal." },
      { id: "ent-4", name: "Bolinho de Camarão", price: 45.00, description: "Feito com massa de macaxeira, recheado com camarão e catupiry cremoso.", tags: ["Sem Glúten", "Mais Pedido"] },
      { id: "ent-5", name: "Croquete de Cupim", price: 43.00, description: "Acompanha maionese picante da casa." },
      { id: "ent-6", name: "Tijolinho de Tapioca", price: 36.00, description: "Queijo coalho com tapioca crocante, acompanha deliciosa geleia de pimenta." },
      { id: "ent-7", name: "Pão de Alho", price: 21.50, description: "Feito com baguete caseira, dourada na brasa com alho suave e manteiga." },
      { id: "ent-8", name: "Pastel de Camarão", price: 44.00, description: "Bem recheado com filé de camarão e creme catupiry original." },
      { id: "ent-9", name: "Pastel de Queijo", price: 38.00, description: "Massa crocante sequinha recheada com blend de queijos derretidos." },
      { id: "ent-10", name: "Bun de Robalo", price: 39.80, description: "Dupla de pão chinês no vapor, recheados com filé de robalo crocante e molho especial." },
      { id: "ent-11", name: "Mini Hambúrguer de Costela", price: 32.00, description: "Mini hambúrgueres de costela desfiada com barbecue e macaxeira palha." },
      { id: "ent-12", name: "Bolinho do Francês", price: 42.00, description: "Receita autoral exclusiva da casa, servido com molho da chef.", tags: ["Especialidade Francês"] },
      { id: "ent-13", name: "Espetinho de Filé", price: 24.50, description: "Acompanha farofa crocante e vinagrete fresco." },
      { id: "ent-14", name: "Espetinho de Frango", price: 20.50, description: "Acompanha farofa crocante e vinagrete fresco." }
    ]
  },
  {
    id: "petiscos",
    title: "2. Petiscos",
    subtitle: "Porções generosas para compartilhar com amigos",
    iconName: "Flame",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sizzling-meat-steaks-on-a-charcoal-grill-42691-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Carne de sol maturada, atolados no purê de macaxeira, camarões gigantes e carpaccio autoral.",
    items: [
      { id: "pet-1", name: "Atolado de Camarão", price: 75.00, description: "Filé de camarão refogado sobre purê de macaxeira coberto com catupiry gratinado." },
      { id: "pet-2", name: "Atolado de Carne de Sol", price: 70.00, description: "Carne de sol refogada sobre purê de macaxeira coberto com catupiry gratinado." },
      { id: "pet-3", name: "Carne de Sol Tradição", price: 72.00, description: "Carne de sol acebolada com macaxeira frita bem dourada." },
      { id: "pet-4", name: "Carne Sol Picanha do Mercadão", price: 95.50, description: "Carne de sol de picanha acebolada com creme de macaxeira e torradas ao alho." },
      { id: "pet-5", name: "Filé do Mercadão", price: 95.50, description: "Filé mignon acebolado com creme de macaxeira e torradas ao alho crocantes." },
      { id: "pet-6", name: "Cupim Petisco", price: 82.00, description: "Cupim 24h na brasa com molho próprio e farofa matuta.", tags: ["24h na Brasa"] },
      { id: "pet-7", name: "Fish 'N Chips", price: 68.00, description: "Filé de peixe empanado bem crocante servido com batatas fritas." },
      { id: "pet-8", name: "Carpaccio Mineiro", price: 58.00, description: "Carpaccio de picanha defumada de produção própria, acompanha pão sírio na brasa." },
      { id: "pet-9", name: "Camarão ao Azeite", price: 99.00, description: "Filé de camarão salteado em azeite extravirgem, alho laminado e cebola." },
      { id: "pet-10", name: "Picanha do Sol com Farofa Matuta", price: 95.00, description: "Carne de sol de picanha com farofa, queijo coalho à milanesa e molho chimichurri." },
      { id: "pet-11", name: "Camarão Vitrola (10 unid.)", price: 95.00, description: "Filé de camarão gigante empanado com crosta crocante e molho tártaro da casa." },
      { id: "pet-12", name: "Brochete Divina", price: 92.00, description: "Filé mignon, bacon, cebola, tomate e pimentão com farofa e vinagrete." }
    ]
  },
  {
    id: "petiscos-brasa",
    title: "3. Petiscos na Brasa",
    subtitle: "Dourados no calor do carvão vegetal",
    iconName: "Flame",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-skewered-meat-cooking-on-a-charcoal-grill-42994-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Queijos na chapa com pão de alho, camarão na força e espetos especiais.",
    items: [
      { id: "pb-1", name: "Filé de Frango com Bacon", price: 46.00, description: "Filé de coxa e sobrecoxa intercalado com bacon na brasa com farofa e vinagrete." },
      { id: "pb-2", name: "Coração de Galinha", price: 46.00, description: "Corações intercalados com bacon na brasa com farofa e vinagrete." },
      { id: "pb-3", name: "Camarão na Força", price: 95.00, description: "Camarões na brasa com molho especial de gergelim torrado e gengibre fresco." },
      { id: "pb-4", name: "Queijo Coalho com Ervas", price: 48.00, description: "Queijo coalho na chapa com ervas aromáticas e pão de alho crocante." },
      { id: "pb-5", name: "Queijo Coalho com Pipoca de Alho", price: 48.00, description: "Queijo coalho servido na chapa com lâminas crocantes de alho e pão de alho." },
      { id: "pb-6", name: "Queijo Tranchinha", price: 65.00, description: "Queijo coalho com bacon fatiado na chapa, servido com pão de alho quentinho." }
    ]
  },
  {
    id: "linguicas-caseiras",
    title: "4. Linguiças Caseiras",
    subtitle: "Receitas artesanais de embutidos nobres",
    iconName: "Drumstick",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sausages-sizzling-on-a-hot-grill-42995-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Pernil suíno temperado com ervas e especiarias, aceboladas na chapa.",
    items: [
      { id: "lc-1", name: "Linguiça de Porco com Macaxeira", price: 52.50, description: "Rodelas de linguiça artesanal de pernil aceboladas servidas com macaxeira cozida ou frita." },
      { id: "lc-2", name: "Linguiça de Porco com Batata", price: 52.50, description: "Rodelas de linguiça artesanal de pernil aceboladas acompanhadas de batatas fritas crocantes." }
    ]
  },
  {
    id: "saladas",
    title: "5. Saladas",
    subtitle: "Frescor leve com folhas nobres e frutos do mar",
    iconName: "Salad",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-salad-with-dressing-being-mixed-42998-large.mp4",
    fallbackImage: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    description: "Saladas frescas com ingredientes nobres e molhos especiais.",
    items: [
      { id: "sal-1", name: "Salada Verde com Camarão", price: 63.50, description: "Camarões salteados com mix de folhas nobres, tomates secos, cubos de laranja e crocante de macaxeira." },
      { id: "sal-2", name: "Salada de Salmão", price: 74.50, description: "Salmão grelhado com mix de folhas, legumes grelhados e molho oriental suave." }
    ]
  },
  {
    id: "panelinhas",
    title: "6. Panelinhas",
    subtitle: "Sabores regionais de tacho e molhos ricos",
    iconName: "Soup",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vegetable-soup-simmering-in-a-pot-43003-large.mp4",
    fallbackImage: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    description: "Ensopados tradicionais servidos com pão francês quentinho e temperos nordestinos.",
    items: [
      { id: "pan-1", name: "Panelinha de Miúdos", price: 56.00, description: "Miúdos bovinos apurados no molho rico, serve com pão francês caseiro quentinho." },
      { id: "pan-2", name: "Panelinha de Carneiro", price: 69.00, description: "Ensopado suculento de carneiro regional, serve com pão francês caseiro." },
      { id: "pan-3", name: "Siri no Coco", price: 69.00, description: "Carne pura de siri catada no leite de coco, serve com farofa de dendê e molho lambão." }
    ]
  },
  {
    id: "grelhados-brasa",
    title: "7. Grelhados na Brasa",
    subtitle: "Cortes nobres preparados na brasa de carvão",
    iconName: "Beef",
    servingInfo: "Serve 02 Pessoas",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-slicing-a-grilled-beef-steak-42997-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Acompanham arroz, farofa crocante, vinagrete fresco e o acompanhamento de sua preferência.",
    items: [
      {
        id: "gb-1",
        name: "Picanha",
        price: 198.00,
        portion: "Serve 02 Pessoas",
        description: "Picanha bovina selecionada com capa de gordura perfeita na brasa. Acompanha arroz, farofa, vinagrete e acompanhamento à escolha.",
        tags: ["Corte Nobre", "Serve 02 Pessoas"]
      },
      {
        id: "gb-2",
        name: "Maminha",
        price: 165.00,
        portion: "Serve 02 Pessoas",
        description: "Maminha suculenta e macia na brasa. Acompanha arroz, farofa, vinagrete e acompanhamento à escolha.",
        tags: ["Serve 02 Pessoas"]
      },
      {
        id: "gb-3",
        name: "Carne de Sol de Picanha",
        price: 192.00,
        portion: "Serve 02 Pessoas",
        description: "Picanha maturada artesanalmente na casa. Acompanha arroz, feijão tropeiro, farofa, vinagrete e macaxeira.",
        tags: ["Autêntica Alagoana", "Serve 02 Pessoas"]
      },
      {
        id: "gb-4",
        name: "Picanha Suína",
        price: 120.00,
        portion: "Serve 02 Pessoas",
        description: "Corte suíno nobre grelhado na brasa com abacaxi tostado, arroz, farofa e vinagrete.",
        tags: ["Serve 02 Pessoas"]
      }
    ]
  },
  {
    id: "infantil",
    title: "8. Infantil",
    subtitle: "Pratinhos pensados com carinho para os pequenos",
    iconName: "Baby",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-french-fries-and-chicken-served-on-a-table-41553-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Porções equilibradas e saborosas acompanhadas de arroz e batatinha frita.",
    items: [
      { id: "inf-1", name: "Picadinho de Filé", price: 52.00, portion: "Individual Kids", description: "Filé mignon em cubinhos macios, serve com arroz soltinho, batata frita e ovo frito." },
      { id: "inf-2", name: "Picadinho de Frango", price: 39.00, portion: "Individual Kids", description: "Peito de frango em tirinhas grelhadas, serve com arroz, batata frita e ovo frito." },
      { id: "inf-3", name: "Peixinho Empanado", price: 48.50, portion: "Individual Kids", description: "Iscas de peixe branco empanadas crocantes, serve com arroz e batata frita." }
    ]
  },
  {
    id: "frutos-do-mar",
    title: "9. Frutos do Mar",
    subtitle: "Frescor dos mares alagoanos preparados com maestria",
    iconName: "Fish",
    servingInfo: "Serve 02 a 03 Pessoas",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cooking-prawns-in-a-pan-43229-large.mp4",
    fallbackImage: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    description: "Robalo grelhado, arrozes de frutos do mar, salmão ao molho de jabuticaba e crostas de castanha.",
    items: [
      { id: "fm-1", name: "Camarão Catupiry", price: 175.00, portion: "Serve 02 Pessoas", description: "Filé de camarão ao molho com catupiry gratinado, farofa de alho e arroz de castanha.", tags: ["Clássico da Casa"] },
      { id: "fm-2", name: "Arroz de Camarão", price: 175.00, portion: "Até 3 pessoas", description: "Arroz caldoso bem temperado com camarões salteados, ervas e azeite." },
      { id: "fm-3", name: "Arroz de Polvo", price: 198.00, portion: "Até 3 pessoas", description: "Arroz suculento com pedaços macios de polvo fresco, tomate e cheiro-verde." },
      { id: "fm-4", name: "Arroz de Polvo com Camarão", price: 198.00, portion: "Até 3 pessoas", description: "A união nobre de polvo grelhado e camarões em arroz aromático." },
      { id: "fm-5", name: "Molho de Camarão", price: 231.00, portion: "Até 3 pessoas", description: "Filé de peixe nobre ao molho de camarão abundante, arroz de alho e batatas coradas." },
      { id: "fm-6", name: "Filé de Peixe na Castanha", price: 185.00, portion: "Serve 02 Pessoas", description: "Filé de peixe em crosta de castanhas com mousseline de banana-da-terra e farofa de bacon." },
      { id: "fm-7", name: "Filé de Peixe ao Molho Laranja", price: 185.00, portion: "Serve 02 Pessoas", description: "Filé ao molho suave de laranja com arroz de castanha e purê de banana-da-terra." },
      { id: "fm-8", name: "Peixe Grelhado com Uvas e Legumes", price: 185.00, portion: "Serve 02 Pessoas", description: "Peixe grelhado flambado com uvas verdes e legumes na manteiga, com arroz de alho." },
      { id: "fm-9", name: "Salmão Grelhado com Uvas e Legumes", price: 185.00, portion: "Serve 02 Pessoas", description: "Salmão nobre flambado com uvas frescas, legumes na manteiga e arroz de alho." },
      { id: "fm-10", name: "Filé de Salmão ao Molho de Jabuticaba", price: 185.00, portion: "Serve 02 Pessoas", description: "Salmão com redução artesanal de jabuticaba, arroz de castanha e couve crocante." },
      { id: "fm-11", name: "Peixe Inteiro", price: 0, portion: "Serve 02 a 03 Pessoas", description: "Peixe fresco do dia assado na brasa. Consultar disponibilidade e tamanho com o atendente.", tags: ["Consultar Disponibilidade"] }
    ]
  },
  {
    id: "moquecas",
    title: "10. Moquecas",
    subtitle: "Cozidas em panela de barro com leite de coco fresco e dendê",
    iconName: "Soup",
    servingInfo: "Serve 02 Pessoas",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vegetable-soup-simmering-in-a-pot-43003-large.mp4",
    fallbackImage: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    description: "Acompanham arroz branco soltinho, farofa de dendê crocante e purê aveludado de banana-da-terra.",
    items: [
      { id: "moq-1", name: "Camarão", price: 175.00, portion: "Serve 02 Pessoas", description: "Moqueca farta de camarões, serve com arroz branco, farofa de dendê e purê de banana-da-terra.", tags: ["Especialidade"] },
      { id: "moq-2", name: "Peixe", price: 165.00, portion: "Serve 02 Pessoas", description: "Feita com postas de peixe fresco, serve com arroz, farofa de dendê e purê de banana da terra." },
      { id: "moq-3", name: "Polvo", price: 198.00, portion: "Serve 02 Pessoas", description: "Tentáculos macios de polvo cozidos lentamente no coco e dendê, com arroz e purê." },
      { id: "moq-4", name: "Peixe com Camarão", price: 198.00, portion: "Serve 02 Pessoas", description: "Filé de peixe e camarões graúdos, serve com arroz, farofa de dendê e purê de banana da terra." },
      { id: "moq-5", name: "Vegetariana", price: 62.00, portion: "Individual", description: "Moqueca aromática de banana-da-terra com leite de coco, arroz e farofa de dendê.", tags: ["Vegetariano"] }
    ]
  },
  {
    id: "pratos-da-casa",
    title: "11. Pratos da Casa",
    subtitle: "A alma da gastronomia brasileira e mineira contemporânea",
    iconName: "ChefHat",
    servingInfo: "Serve 02 Pessoas",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cutting-a-tender-piece-of-cooked-meat-43001-large.mp4",
    fallbackImage: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    description: "Costelas cozidas em fogo brando, feijão tropeiro legítimo, tutu e filés premiados.",
    items: [
      { id: "pc-1", name: "Amostrado", price: 165.00, portion: "Até 3 pessoas", description: "Seleção de tutu, tropeiro, couve, arroz, linguiça, costelinha, pernil, franguinho, torresmo e farofa.", tags: ["Banquete Completo"] },
      { id: "pc-2", name: "Costela Minga ao Bafo", price: 162.00, portion: "Até 3 pessoas", description: "Costela bovina cozida lentamente ao bafo, serve com arroz, farofa, macaxeira cozida e vinagrete.", tags: ["Cozida 24h"] },
      { id: "pc-3", name: "Costela Inteira 45h", price: 232.00, portion: "Até 4 pessoas", description: "Costela preparada por 45h com arroz, farofa de ovo, legumes na brasa e vinagrete.", tags: ["Maturada 45h"] },
      { id: "pc-4", name: "Filé Bom de Baba", price: 162.00, portion: "Serve 02 Pessoas", description: "Filé com alho crocante, cebolas douradas, arroz biro-biro, couve e batata frita." },
      { id: "pc-5", name: "Tutu à Mineira", price: 152.00, portion: "Serve 02 Pessoas", description: "Filé de pernil, linguiça, couve refogada, ovos, banana à milanesa e arroz." },
      { id: "pc-6", name: "Tropeiro Mineiro", price: 152.00, portion: "Serve 02 Pessoas", description: "Filé de pernil, linguiça caseira, couve, torresmo crocante, banana à milanesa e arroz." },
      { id: "pc-7", name: "Picanha Individual", price: 105.00, portion: "Individual", description: "Picanha grelhada com arroz biro-biro, macaxeira frita, farofa e vinagrete." },
      { id: "pc-8", name: "Cupim à Parmegiana", price: 98.00, portion: "Serve 02 Pessoas", description: "Cupim empanado gratinado ao molho artesanal de tomate com purê de inhame e arroz." }
    ]
  },
  {
    id: "sobremesas",
    title: "12. Sobremesas",
    subtitle: "Para adoçar a alma com toques regionais e clássicos",
    iconName: "IceCream",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-sauce-over-ice-cream-42996-large.mp4",
    fallbackImage: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    description: "Cartola alagoana, sobremesas autorais com goiaba, chocolate e tapioca.",
    items: [
      { id: "sob-1", name: "Crème Brûlée", price: 19.00, description: "Sobremesa clássica com creme de baunilha aveludado e casquinha crocante de açúcar queimado." },
      { id: "sob-2", name: "Pudim de Leite", price: 19.00, description: "Pudim cremoso tradicional sem furinhos, com calda de caramelo dourado." },
      { id: "sob-3", name: "Brigadeiro", price: 9.00, description: "Brigadeiro artesanal enrolado no granulado nobre de chocolate." },
      { id: "sob-4", name: "Torre de Tapioca", price: 48.00, description: "Sorvete cremoso de tapioca artesanal com redução perfumada de tangerina fresca.", tags: ["Exclusivo"] },
      { id: "sob-5", name: "Quero-Quero", price: 45.00, description: "Creme de goiabada cascão com creme gelado de queijo sobre biscoito amanteigado de castanha.", tags: ["Autoral"] },
      { id: "sob-6", name: "Cartola", price: 38.00, description: "Banana e queijo manteiga grelhados na manteiga de garrafa com açúcar e canela." },
      { id: "sob-7", name: "Torta Ferreiro", price: 38.00, description: "Brownie denso com mousse de chocolate e avelãs tostadas, servido com sorvete e calda de chocolate." }
    ]
  },
  {
    id: "bebidas-nao-alcoolicas",
    title: "13. Bebidas Não Alcoólicas",
    subtitle: "Refrescância natural para hidratar o seu dia de sol",
    iconName: "GlassWater",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-cold-orange-juice-into-a-glass-43000-large.mp4",
    fallbackImage: "/src/assets/images/drink_caipiroska_cocktail_1790876304849.jpg",
    description: "Água de coco da praia, sucos naturais em copo ou jarra, águas e energéticos.",
    items: [
      { id: "bna-1", name: "Água de Coco", price: 8.00, description: "Água de coco verde geladinha direto do coqueiral." },
      { id: "bna-2", name: "Jarra de Água de Coco", price: 17.00, description: "Jarra de água de coco natural para compartilhar à mesa." },
      { id: "bna-3", name: "Água Mineral (500 ml)", price: 7.50, description: "Água mineral sem gás garrafa 500ml." },
      { id: "bna-4", name: "Água Mineral com Gás (500 ml)", price: 8.50, description: "Água mineral com gás garrafa 500ml." },
      { id: "bna-5", name: "Água Tônica", price: 9.50, description: "Lata 350ml gelada." },
      { id: "bna-6", name: "Suco de Fruta", price: 9.50, description: "Sabores da estação naturais (Acerola, Caju, Maracujá, Abacaxi, Limão, Manga)." },
      { id: "bna-7", name: "Jarra de Suco", price: 19.80, description: "Jarra de 1 litro de suco natural da fruta." },
      { id: "bna-8", name: "Suco de Morango", price: 12.00, description: "Suco natural feito na hora com morangos frescos selecionados." },
      { id: "bna-9", name: "Jarra de Suco de Morango", price: 24.00, description: "Jarra de 1L com morangos frescos batidos." },
      { id: "bna-10", name: "Suco de Morango com Laranja", price: 14.00, description: "Combinação cítrica e refrescante de frutas frescas." },
      { id: "bna-11", name: "Jarra de Suco de Morango com Laranja", price: 28.00, description: "Jarra de 1L de morangos batidos com suco de laranja natural." },
      { id: "bna-12", name: "Refrigerante", price: 9.50, description: "Coca-Cola, Coca Zero, Guaraná Antarctica, Sprite (Lata 350ml)." },
      { id: "bna-13", name: "Red Bull", price: 24.50, description: "Energy Drink lata 250ml." }
    ]
  },
  {
    id: "cervejas-chopes",
    title: "14. Cervejas & Chopes",
    subtitle: "Rótulos artesanais, sem glúten e garrafas estupidamente geladas",
    iconName: "Beer",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pouring-beer-from-a-tap-into-a-glass-42993-large.mp4",
    fallbackImage: "/src/assets/images/hero_divina_gula_frances_1790876275132.jpg",
    description: "Chopes na pressão (P e G), cervejas 600ml de mesa, opções sem glúten e cervejas especiais.",
    items: [
      { id: "cer-ln-1", name: "Heineken", price: 14.50, description: "Long Neck 330ml gelada.", tags: ["Long Neck"] },
      { id: "cer-ln-2", name: "Heineken 0.0", price: 14.50, description: "Long Neck 330ml sem álcool.", tags: ["Long Neck", "Zero Álcool"] },
      { id: "cer-ln-3", name: "Cerveja Praya (Sem Glúten)", price: 14.50, description: "Witbier artesanal sem glúten garrafa 355ml.", tags: ["Long Neck", "Sem Glúten"] },
      { id: "cer-ln-4", name: "Amstel Ultra 72kcal (Sem Glúten)", price: 13.50, description: "Ultra leve, apenas 72 calorias e livre de glúten.", tags: ["Long Neck", "Sem Glúten"] },
      { id: "cer-600-1", name: "Baden Baden (600 ml)", price: 29.00, description: "Cerveja especial artesanal garrafa 600ml.", tags: ["600ml"] },
      { id: "cer-600-2", name: "Blue Moon", price: 24.00, description: "Belgian White com casca de laranja e coentro.", tags: ["Craft"] },
      { id: "cer-600-3", name: "Lagunitas IPA", price: 26.50, description: "IPA californiana com lúpulos marcantes.", tags: ["Craft"] },
      { id: "cer-600-4", name: "Heineken (600 ml)", price: 22.00, description: "Cerveja lager puro malte garrafa 600ml.", tags: ["600ml"] },
      { id: "cer-600-5", name: "Eisenbahn (600 ml)", price: 19.50, description: "Pilsen puro malte garrafa 600ml.", tags: ["600ml"] },
      { id: "cer-600-6", name: "Amstel Puro Malte (600 ml)", price: 18.50, description: "Puro malte refrescante garrafa 600ml.", tags: ["600ml"] },
      { id: "cer-600-7", name: "Devassa (600 ml)", price: 17.50, description: "Puro malte tropical garrafa 600ml.", tags: ["600ml"] },
      { id: "chp-1", name: "Chopp Heineken P", price: 10.50, description: "Chopp na pressão colarinho cremoso 300ml.", tags: ["Chopp"] },
      { id: "chp-2", name: "Chopp Heineken G", price: 14.50, description: "Chopp Heineken na caneca gelada 500ml.", tags: ["Chopp"] },
      { id: "chp-3", name: "Chopp Amstel P", price: 8.50, description: "Chopp Amstel leve na pressão 300ml.", tags: ["Chopp"] },
      { id: "chp-4", name: "Chopp Amstel G", price: 10.50, description: "Chopp Amstel caneca 500ml.", tags: ["Chopp"] },
      { id: "chp-5", name: "Chopp Jararaca P", price: 10.50, description: "Chopp artesanal alagoano Jararaca 300ml.", tags: ["Chopp Artesanal"] },
      { id: "chp-6", name: "Chopp Jararaca G", price: 14.50, description: "Chopp artesanal alagoano Jararaca 500ml.", tags: ["Chopp Artesanal"] }
    ]
  },
  {
    id: "drinks-bar",
    title: "15. Drinks Especiais & da Casa",
    subtitle: "Mixologia autoral, clássicos mundiais e caipiroskas",
    iconName: "Wine",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bartender-making-a-cocktail-in-a-glass-43002-large.mp4",
    fallbackImage: "/src/assets/images/drink_caipiroska_cocktail_1790876304849.jpg",
    description: "Drinks autorais alagoanos, caipiroskas de frutas frescas e clássicos da coquetelaria mundial.",
    items: [
      { id: "drk-1", name: "Moscow Mule", price: 32.00, description: "Vodka, xarope de gengibre caseiro, suco de limão e espuma aveludada de gengibre na caneca de cobre.", tags: ["Drinks Especiais"] },
      { id: "drk-2", name: "Fitzgerald", price: 36.00, description: "Gin premium, suco de limão siciliano, xarope de açúcar e Angostura bitters.", tags: ["Drinks Especiais"] },
      { id: "drk-3", name: "Negroni", price: 36.00, description: "Gin, Campari bitter italiano e Vermute rosso com casca de laranja flambada.", tags: ["Drinks Especiais"] },
      { id: "drk-4", name: "Paloma", price: 46.00, description: "Tequila prata, refrigerante de toranja/grapefruit, suco de limão e borda de sal rosa.", tags: ["Drinks Especiais"] },
      { id: "drk-5", name: "Porn Star Martini", price: 42.00, description: "Vodka com baunilha, polpa de maracujá fresco, licor Passoa e shot de espumante.", tags: ["Drinks Especiais"] },
      { id: "drk-6", name: "Pastoril", price: 32.00, description: "Criação autoral com cachaça Divininha da casa, frutas cítricas e toque de especiarias.", tags: ["Drinks Especiais", "Autoral"] },
      { id: "drk-7", name: "Strawberry Gin Brasil Smash", price: 36.00, description: "Gin nacional, morangos macerados, manjericão fresco e tônica aromática.", tags: ["Drinks Especiais"] },
      { id: "drk-8", name: "Guerreiro Alagoano", price: 36.00, description: "Drink em homenagem à cultura alagoana com cachaça envelhecida, cajá e limão cravo.", tags: ["Drinks Especiais", "Autoral"] },
      { id: "drk-9", name: "Reisado", price: 36.00, description: "Mixologia tropical com rum, abacaxi tostado, xarope de capim-santo e hortelã fresca.", tags: ["Drinks Especiais", "Autoral"] },
      { id: "drk-10", name: "Caipiroska Tradicional", price: 24.50, description: "Vodka nacional com 1 fruta (Limão, Maracujá, Kiwi, Morango ou Abacaxi).", tags: ["Do Nosso Jeito"] },
      { id: "drk-11", name: "Caipiroska Tradicional 2 Frutas", price: 27.50, description: "Vodka nacional com blend de 2 frutas frescas à sua escolha.", tags: ["Do Nosso Jeito"] },
      { id: "drk-12", name: "Caipiroska Absolut", price: 28.50, description: "Vodka Absolut sueca com 1 fruta fresca selecionada.", tags: ["Do Nosso Jeito"] },
      { id: "drk-13", name: "Caipiroska Absolut 2 Frutas", price: 32.00, description: "Vodka Absolut com combinação de 2 frutas da sua preferência.", tags: ["Do Nosso Jeito"] },
      { id: "drk-14", name: "Aperol Spritz", price: 42.00, description: "Aperol, espumante prosecco brut, água com gás e fatia de laranja bahia.", tags: ["Do Nosso Jeito"] },
      { id: "drk-15", name: "Gin Tônica", price: 37.50, description: "Gin London Dry com água tônica premium, zimbro e fatia de limão siciliano.", tags: ["Do Nosso Jeito"] },
      { id: "drk-16", name: "Mojito", price: 28.00, description: "Rum branco, folhas frescas de hortelã, suco de limão, açúcar e club soda.", tags: ["Do Nosso Jeito"] },
      { id: "drk-17", name: "Piña Colada", price: 32.00, description: "Rum caribenho, leite de coco artesanal, suco de abacaxi fresco e leite condensado.", tags: ["Do Nosso Jeito"] }
    ]
  },
  {
    id: "destilados-licores",
    title: "16. Destilados & Licores",
    subtitle: "Rótulos selecionados, doses nobres e cachaça de produção familiar",
    iconName: "Flame",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bartender-making-a-cocktail-in-a-glass-43002-large.mp4",
    fallbackImage: "/src/assets/images/drink_caipiroska_cocktail_1790876304849.jpg",
    description: "Whiskies escoceses, vodkas, gins, tequila, cachaça Divininha e licores finos.",
    items: [
      { id: "dst-1", name: "Tequila Dose", price: 24.00, description: "Dose de tequila importada servida com sal e limão.", tags: ["Destilados"] },
      { id: "dst-2", name: "Campari Dose", price: 13.00, description: "Dose tradicional do bitter italiano com gelo e laranja.", tags: ["Destilados"] },
      { id: "dst-3", name: "Vodka Smirnoff", price: 13.00, description: "Dose de vodka pura gelada.", tags: ["Destilados"] },
      { id: "dst-4", name: "Vodka Absolut", price: 17.00, description: "Dose de vodka premium sueca.", tags: ["Destilados"] },
      { id: "dst-5", name: "Gin", price: 22.00, description: "Dose de gin botânico com gelo e especiarias.", tags: ["Destilados"] },
      { id: "dst-6", name: "Whiskie Johnnie Walker Red", price: 19.00, description: "Dose de blended scotch whisky 8 anos.", tags: ["Destilados"] },
      { id: "dst-7", name: "Whiskie Johnnie Walker Black", price: 30.00, description: "Dose de blended scotch whisky 12 anos.", tags: ["Destilados"] },
      { id: "dst-8", name: "Whiskie Johnnie Walker Double Black", price: 35.00, description: "Dose de blended scotch whisky turfado intenso.", tags: ["Destilados"] },
      { id: "dst-9", name: "Whiskie Old Par", price: 25.00, description: "Dose de whisky escocês 12 anos blend.", tags: ["Destilados"] },
      { id: "dst-10", name: "Cachaça Divininha (Produção Familiar)", price: 12.00, description: "Cachaça artesanal de alambique da família Divina Gula.", tags: ["Produção Própria", "Destilados"] },
      { id: "lic-1", name: "Amarula", price: 23.00, description: "Licor cremoso de fruto marula sul-africano.", tags: ["Licores"] },
      { id: "lic-2", name: "Cointreau", price: 24.00, description: "Licor fino francês de laranjas amargas e doces.", tags: ["Licores"] },
      { id: "lic-3", name: "Cuarenta y Tres", price: 33.00, description: "Licor espanhol com 43 ingredientes botânicos e cítricos.", tags: ["Licores"] },
      { id: "lic-4", name: "Drambuie", price: 27.00, description: "Licor nobre de whisky escocês com mel e ervas.", tags: ["Licores"] },
      { id: "lic-5", name: "Frangèlico", price: 27.00, description: "Licor italiano de avelãs tostadas e cacau.", tags: ["Licores"] }
    ]
  }
];

export const GOOGLE_REVIEWS = [
  {
    author: "Taynara Maceno",
    rating: 5,
    date: "Há 2 meses",
    text: "Ambiente gostoso, aconchegante, pertinho da praia. Atendimento excelente e comida boa. Única ressalva que não tinha trocador para bebê.",
    highlight: "Ambiente & Atendimento",
  },
  {
    author: "Elisangela Genova",
    rating: 5,
    date: "Há 5 meses",
    text: "Experiência maravilhosa! Ambiente super agradável, comida excelente, boa música, atendimento excelente. Gostaria de destacar especialmente o atendimento dos garços Careca e Gabriela.",
    highlight: "Garços Careca e Gabriela",
  },
  {
    author: "Erick Menezes",
    rating: 5,
    date: "Há 6 meses",
    text: "Fui atendido pelo Sr. Luiz Antônio. Atendimento excelente, comida boa e ambiente agradável.",
    highlight: "Atendimento do Luiz Antônio",
  },
  {
    author: "Thaís Quintas",
    rating: 5,
    date: "Há 5 meses",
    text: "Atendimento muito gentil, apresentação dos pratos, principalmente os especiais do dia!",
    highlight: "Especiais do Dia",
  },
  {
    author: "Carolina Camargo",
    rating: 5,
    date: "Há 7 meses",
    text: "Comida ótima, vale muito a pena visitar. O prato de costela para 4 pessoas muito bem servido e uma delícia. Isabella que nos atendeu é ótima funcionária, e super atentiva!",
    highlight: "Costela para 4 & Isabella",
  },
  {
    author: "Rosemairy S Montes",
    rating: 5,
    date: "Há 3 meses",
    text: "Excelente atendimento Luiz comida boa, rapidez, preço justo. Super indico!",
    highlight: "Luiz & Preço Justo",
  },
  {
    author: "Lindomar Figueiredo",
    rating: 5,
    date: "Há 3 meses",
    text: "Preço justo. Atendimento excelente, ambiente aconchegante. Cerveja bem gelada. Comida excelente.",
    highlight: "Cerveja Gelada & Comida",
  },
  {
    author: "Kreesla Hurick Passos Kowalski",
    rating: 5,
    date: "Há 8 meses",
    text: "Boa comida e atendimento muito bom.",
    highlight: "Qualidade Garantida",
  },
  {
    author: "Regiane Figueiredo",
    rating: 5,
    date: "Há 3 meses",
    text: "Experiência maravilhosa! Ambiente agradável, comida deliciosa e um atendimento impecável. O garçom Luiz, foi extremamente atencioso, educado e fez toda a diferença.",
    highlight: "Garçom Luiz Destaque",
  },
  {
    author: "Leonardo Rodrigues",
    rating: 5,
    date: "Há 1 mês",
    text: "Ambiente agradável, comida excelente. Atendente Luiz muito gente fina!!",
    highlight: "Atendimento Luiz",
  },
  {
    author: "Mariana Nunes",
    rating: 5,
    date: "Há 4 meses",
    text: "Atendimento maravilhoso pelo Luiz. Comida ótima! Ambiente tranquilo!",
    highlight: "Ambiente Tranquilo",
  },
  {
    author: "Karina Povoas",
    rating: 5,
    date: "Há 3 semanas",
    text: "Fomos muito bem recebidos e atendidos pelo Luiz. A comida foi bem servida e gostosa. Ótima opção de refeição e atendimento diferenciado na Praia do Francês.",
    highlight: "Atendimento Diferenciado",
  },
  {
    author: "BeaFabulous Beauty SPA",
    rating: 5,
    date: "Há 7 meses",
    text: "Um dos melhores restaurantes de Alagoas, super recomendo!",
    highlight: "Destaque Alagoas",
  },
  {
    author: "Alessandro Grangeiro",
    rating: 5,
    date: "Há 2 meses",
    text: "Ambiente aconchegante, comida maravilhosa, atendimento perfeito do Luiz.",
    highlight: "Atendimento do Luiz",
  },
  {
    author: "Jairo Menezes Junior",
    rating: 5,
    date: "Há 7 meses",
    text: "A experiencia foi maravilhosa, começando pelo atendimento especial do Fabio do Divina e do Alisson. Alem disso, uma gastronomia excelente e ambiente fantastico!",
    highlight: "Fábio & Alisson",
  },
  {
    author: "Antonio Carlos Santos",
    rating: 5,
    date: "Há 7 meses",
    text: "Fomos divinamente bem atendidos pela equipe, principalmente pelo gerente Fábio, que adaptou o meu pedido de acordo com as recomendações médicas. Estão de parabéns!!!!",
    highlight: "Gerente Fábio & Cuidado",
  },
  {
    author: "Lusia Iwashita",
    rating: 5,
    date: "Há 2 meses",
    text: "Tivemos uma experiência maravilhosa! A comida é muito saborosa, bem temperada e preparada com muito capricho. Fomos atendidos pelo Careca, que foi extremamente simpático e atencioso.",
    highlight: "Garçom Careca",
  },
  {
    author: "Lorena Norberta da Silva",
    rating: 5,
    date: "Há 3 meses",
    text: "Excelente! A comida como sempre deliciosa. Mesmo padrão da unidade de Maceió. O atendimento foi impecável. Quem nos atendeu foi o garçom com apelido de careca. Nota 10!",
    highlight: "Padrão Divina Gula",
  },
  {
    author: "Edigelson Mansano",
    rating: 5,
    date: "Há 4 meses",
    text: "Lugar fantástico com atendimento pelo nosso amigo Luis e excelente cardápio !!!",
    highlight: "Luis & Cardápio",
  },
  {
    author: "Lucas",
    rating: 5,
    date: "Há 1 mês",
    text: "Increíble atención Stefania (Garconete), foi muito gentil e amable. Com certeza voltaremos, recomendo, nota 10!!!!",
    highlight: "Garçonete Stefania",
  },
  {
    author: "Pauliane Pertile Macedo",
    rating: 5,
    date: "Há 3 meses",
    text: "Almoço maravilhoso! Fomos atendidos pelo Luiz e ele foi muito prestativo nos auxiliando o tempo todo. Comida com tempero na medida certa e gostinho de comida caseira.",
    highlight: "Tempero Caseiro",
  },
  {
    author: "Luana Barros",
    rating: 5,
    date: "Há 3 meses",
    text: "Ambiente aconchegante, atendimento e comida impecáveis. Amamos muito! Garçom Luís, muito gentil.",
    highlight: "Luís Gentil",
  },
  {
    author: "Pedro Gonçalves da Costa Junior",
    rating: 5,
    date: "Há 5 meses",
    text: "Excelente atendimento com muito boa comida. Garçonete atendeu super bem e voltaremos assim que possível.",
    highlight: "Equipe Atenciosa",
  },
  {
    author: "Fernanda Monteiro",
    rating: 5,
    date: "Há 2 meses",
    text: "Muito bom!! Tudo perfeito e o garçom Luiz super atencioso e paciente!",
    highlight: "Luiz Paciente",
  },
  {
    author: "Ivana Faria",
    rating: 5,
    date: "Há 6 meses",
    text: "Tudo muito bom, atendimento, comidas e chopp bem gelado. Destaque para o atendente Luiz Antônio, que faz do ambiente melhor ainda e mais acolhedor.",
    highlight: "Chopp Gelado & Luiz",
  },
  {
    author: "Lucas Felipe do Nascimento Souto",
    rating: 5,
    date: "Há 3 meses",
    text: "Comida boa e ambiente agradável, ótima opção para quem quer comemorar uma data importante. Vale ressaltar o atendimento excepcional do funcionário Careca.",
    highlight: "Data Importante & Careca",
  },
  {
    author: "Eva Sampaio",
    rating: 5,
    date: "Há 2 meses",
    text: "O melhor lugar da praia do francês. Comida maravilhosa, chopp gelado!",
    highlight: "Praia do Francês",
  },
  {
    author: "Fabiana Lopes",
    rating: 5,
    date: "Há 6 meses",
    text: "Luiz Antônio ótimo garçom, comida maravilhosa, feijão perfeito!",
    highlight: "Feijão Perfeito",
  },
  {
    author: "Simone Antunes",
    rating: 5,
    date: "Há 3 meses",
    text: "Super indico esse lugar!! A comida é ótima, as bebidas são muito boas, o chopp então, é excelente. Fomos muito bem atendidos pelo Luiz.",
    highlight: "Chopp Excelente",
  },
  {
    author: "Dani Bonotto",
    rating: 5,
    date: "Há 4 meses",
    text: "Comida excelente! Atendimento nota 10, fomos atendidos pelo careca.",
    highlight: "Careca Nota 10",
  },
  {
    author: "Marlei Alcantara",
    rating: 5,
    date: "Há 6 meses",
    text: "Comida muito boa, ambiente muito agradável e atendimento impecável recomendo para uma boa experiência. Tudo impecável.",
    highlight: "Experiência Impecável",
  },
  {
    author: "Patricia Dias",
    rating: 5,
    date: "Há 7 meses",
    text: "O Divina Gula situado na Praia do Francês é um lugar para comer bem e se sentir acolhido. Luiz e Mari, garçons que nos atenderam, e Fábio, que nos serviu, foram ótimos! Além de um tutu delicioso.",
    highlight: "Tutu & Equipe",
  },
  {
    author: "Pedro Saboia",
    rating: 5,
    date: "Há 6 meses",
    text: "Ambiente agradável, ótimo atendimento do Luiz e a comida muito boa!",
    highlight: "Luiz Atencioso",
  },
  {
    author: "Cintia Palacios",
    rating: 5,
    date: "Há 4 meses",
    text: "Excelente! Fomos muito bem atendidos pela Stefanini e Isabela, foram muito atenciosas. O ambiente super agradável e a comida muito saborosa. Preço justo.",
    highlight: "Stefanini & Isabela",
  },
  {
    author: "Jessica Cavalcante",
    rating: 5,
    date: "Há 1 mês",
    text: "Atendimento do Careca sem igual. Nos deu dicas em relação aos pratos, muito gentil. Pratos saborosos e ambiente impecável. Certeza de voltar!!",
    highlight: "Dicas do Careca",
  },
  {
    author: "Ana Paula Santos",
    rating: 5,
    date: "Há 2 meses",
    text: "Lugar maravilhoso, comida boa e o atendimento do Careca é espetacular. Música boa.",
    highlight: "Música & Careca",
  },
  {
    author: "Douglas C B C Motta",
    rating: 5,
    date: "Há 2 meses",
    text: "Atendimento excelente. Luis nos recepcionou com muito acolhimento e suas sugestões foram ótimas. Voltaremos.",
    highlight: "Acolhimento",
  },
  {
    author: "Marina Catão",
    rating: 5,
    date: "Há 4 meses",
    text: "Ambiente muito agradável, os profissionais muito simpáticos, o Careca é super solicito, adoramos o atendimento. Pedimos muitas coisas e estava tudo delicioso 😋",
    highlight: "Tudo Delicioso",
  },
  {
    author: "Kydelmir Maia De Souza",
    rating: 5,
    date: "Há 4 meses",
    text: "Simplesmente sensacional! O cardápio tem várias opções, bem como o sabor da comida é mto boa. Os funcionários/atendentes são de uma cortesia a toda prova.",
    highlight: "Cortesia Geral",
  },
  {
    author: "Heloise Feijó",
    rating: 5,
    date: "Há 2 meses",
    text: "Nosso garçom Luiz, obrigado pela receptividade. Muito educado, atencioso. Ambiente confortável, e comida espetacular.",
    highlight: "Receptividade",
  },
  {
    author: "Cherly Pedrosa",
    rating: 5,
    date: "Há 6 meses",
    text: "Ambiente agradável, excelente atendimento e comida boa. Os colaboradores Wilson e Isabela são ótimos, educados e atenciosos.",
    highlight: "Wilson & Isabela",
  },
  {
    author: "Date Solutions",
    rating: 5,
    date: "Há 2 meses",
    text: "Melhor lugar para comer no francês, comida boa chopp heineken maravilhoso e o atendimento pelo careca sensacional!! Recomendo",
    highlight: "Chopp Heineken & Careca",
  },
  {
    author: "Marina Albuquerque",
    rating: 5,
    date: "Há 2 semanas",
    text: "Experiência sensacional na Praia do Francês! O Atolado de Camarão e o Bolinho com massa de macaxeira são divinos. Atendimento impecável, brisa gostosa e ambiente muito agradável.",
    highlight: "Atolado de Camarão",
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    imageUrl: "/src/assets/images/dish_moqueca_camarao_1790876285675.jpg",
    caption: "Moqueca borbulhante no barro com dendê na medida certa e purê de banana-da-terra. O almoço de domingo perfeito!",
    likes: 428,
    comments: 31,
  },
  {
    id: "ig-2",
    imageUrl: "/src/assets/images/dish_picanha_brasa_1790876295398.jpg",
    caption: "Picanha na brasa com aquela crosta de sal grosso e macaxeira crocante por fora e macia por dentro. 🔥🥩",
    likes: 612,
    comments: 49,
  },
  {
    id: "ig-3",
    imageUrl: "/src/assets/images/drink_caipiroska_cocktail_1790876304849.jpg",
    caption: "Happy Hour ativado das 16h às 19h! Chopp geladíssimo e caipiroskas de frutas da estação na brisa da praia. 🍹🌴",
    likes: 539,
    comments: 28,
  },
  {
    id: "ig-4",
    imageUrl: "/src/assets/images/hero_divina_gula_frances_1790876275132.jpg",
    caption: "Mesas externas, aconchego e o melhor da comida brasileira em frente à La Rue. Vem viver essa experiência! ✨",
    likes: 745,
    comments: 63,
  }
];
