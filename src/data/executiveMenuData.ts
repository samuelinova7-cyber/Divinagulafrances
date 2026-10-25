export interface ExecutiveProtein {
  id: string;
  name: string;
  price: number;
  category: 'frango' | 'carne' | 'peixe' | 'vegetariano' | 'frutos-mar';
  icon: string;
  tag?: string;
  description: string;
  badgeColor?: string;
}

export interface ExecutiveSide {
  id: string;
  name: string;
  category: 'arroz' | 'feijao' | 'fritura' | 'pure' | 'legumes' | 'farofa' | 'outro';
  icon: string;
}

export interface ExecutiveHouseSuggestion {
  id: string;
  proteinId: string;
  proteinName: string;
  price: number;
  sideIds: string[];
  sideNames: string[];
  badge: string;
  chefQuote: string;
}

export const EXECUTIVE_PROTEINS: ExecutiveProtein[] = [
  {
    id: "exec-frango-grelhado",
    name: "Peito de frango grelhado na brasa",
    price: 36.90,
    category: "frango",
    icon: "🍗",
    tag: "Na Brasa",
    description: "Peito de frango suculento marinado em ervas frescas e grelhado no carvão.",
    badgeColor: "from-amber-500 to-yellow-600"
  },
  {
    id: "exec-isquinhas-frango",
    name: "Isquinhas de frango crocante",
    price: 36.90,
    category: "frango",
    icon: "✨",
    tag: "Super Crocante",
    description: "Tiras selecionadas de frango empanadas com crosta dourada e sequinha.",
    badgeColor: "from-yellow-500 to-amber-600"
  },
  {
    id: "exec-pernil-acebolado",
    name: "Bife de pernil acebolado",
    price: 36.90,
    category: "carne",
    icon: "🥩",
    tag: "Tradição",
    description: "Corte de pernil macio grelhado com cebolas caramelizadas no ponto.",
    badgeColor: "from-orange-600 to-amber-700"
  },
  {
    id: "exec-moqueca-banana",
    name: "Moqueca de banana da terra (vegetariano)",
    price: 36.90,
    category: "vegetariano",
    icon: "🍲",
    tag: "Vegetariano",
    description: "Receita aromática com leite de coco artesanal, dendê suave e banana da terra doce.",
    badgeColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "exec-tilapia-grelhada",
    name: "Filé de tilápia grelhado",
    price: 48.50,
    category: "peixe",
    icon: "🐟",
    tag: "Leve e Fresco",
    description: "Filé de tilápia fresco selado na chapa com azeite de oliva e raspas de limão.",
    badgeColor: "from-sky-500 to-cyan-600"
  },
  {
    id: "exec-tilapia-crosta",
    name: "Tilápia na crosta",
    price: 48.50,
    category: "peixe",
    icon: "⭐",
    tag: "Mais Pedido",
    description: "Filé alto de tilápia coberto com crosta crocante de ervas e queijo dourado.",
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    id: "exec-carne-sol-acebolada",
    name: "Carne de sol acebolada",
    price: 48.50,
    category: "carne",
    icon: "🥩",
    tag: "Sabor Regional",
    description: "Carne de sol curada artesanalmente na casa, dourada na manteiga de garrafa.",
    badgeColor: "from-red-600 to-amber-700"
  },
  {
    id: "exec-file-mignon",
    name: "Filé mignon grelhado",
    price: 58.90,
    category: "carne",
    icon: "👑",
    tag: "Corte Nobre",
    description: "Medalhão de filé mignon super macio grelhado ao ponto de sua preferência.",
    badgeColor: "from-rose-600 to-red-800"
  },
  {
    id: "exec-bobo-camarao",
    name: "Bobó de camarão",
    price: 62.50,
    category: "frutos-mar",
    icon: "🦐",
    tag: "Alagoas Gourmet",
    description: "Creme aveludado de macaxeira com camarões graúdos, leite de coco e coentro fresco.",
    badgeColor: "from-amber-600 to-red-600"
  },
  {
    id: "exec-salmao-grelhado",
    name: "Filé de salmão grelhado",
    price: 69.90,
    category: "peixe",
    icon: "🍣",
    tag: "Premium",
    description: "Salmão fresco com pele crocante, servido suculento e macio por dentro.",
    badgeColor: "from-pink-600 to-rose-700"
  },
  {
    id: "exec-robalo-grelhado",
    name: "Filé de robalo grelhado",
    price: 75.80,
    category: "peixe",
    icon: "🌊",
    tag: "Pesca do Dia",
    description: "O nobre robalo dos mares alagoanos grelhado com azeite de ervas e flor de sal.",
    badgeColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "exec-picanha-brasa",
    name: "Picanha importada na brasa",
    price: 75.80,
    category: "carne",
    icon: "🔥",
    tag: "Importada Premium",
    description: "Fatias nobres de picanha com capa de gordura perfeita, seladas no fogo forte.",
    badgeColor: "from-red-700 to-amber-800"
  }
];

export const EXECUTIVE_SIDES: ExecutiveSide[] = [
  { id: "arroz-branco", name: "Arroz branco", category: "arroz", icon: "🍚" },
  { id: "arroz-alho", name: "Arroz de alho", category: "arroz", icon: "🧄" },
  { id: "feijao-caseiro", name: "Feijão caseiro", category: "feijao", icon: "🫘" },
  { id: "feijao-tropeiro", name: "Feijão tropeiro", category: "feijao", icon: "🥓" },
  { id: "batata-frita", name: "Batata frita", category: "fritura", icon: "🍟" },
  { id: "macaxeira-frita", name: "Macaxeira frita", category: "fritura", icon: "🍠" },
  { id: "ovo-frito", name: "Ovo frito", category: "outro", icon: "🍳" },
  { id: "macaxeira-cozida", name: "Macaxeira cozida", category: "outro", icon: "🥣" },
  { id: "pure-batata", name: "Purê de batata", category: "pure", icon: "🥔" },
  { id: "pure-banana-terra", name: "Purê de banana da terra", category: "pure", icon: "🍌" },
  { id: "legumes-refogados", name: "Legumes refogados", category: "legumes", icon: "🥦" },
  { id: "banana-milanesa", name: "Banana à milanesa (2 un.)", category: "outro", icon: "🍌" },
  { id: "farofa-alho", name: "Farofa de alho", category: "farofa", icon: "🧅" },
  { id: "farofa-dende", name: "Farofa de dendê", category: "farofa", icon: "🌶️" }
];

export const EXECUTIVE_COURTESY = {
  title: "Cortesia da Casa",
  subtitle: "Experiência Executiva Completa",
  description: "Enquanto o seu pedido é preparado na brasa com todo o esmero, a casa oferece um mix de folhas verdes com molho de maracujá e uma entrada do chef.",
  items: [
    {
      name: "Mix de Folhas Verdes",
      description: "Folhas frescas da estação regadas com molho artesanal de maracujá agridoce.",
      icon: "🥗"
    },
    {
      name: "Entrada do Chef",
      description: "Criação do chef para abrir seu apetite enquanto o prato principal é grelhado.",
      icon: "👨‍🍳"
    }
  ]
};

export const EXECUTIVE_HOUSE_SUGGESTIONS: ExecutiveHouseSuggestion[] = [
  {
    id: "sug-frango",
    proteinId: "exec-frango-grelhado",
    proteinName: "Peito de frango grelhado na brasa",
    price: 36.90,
    sideIds: ["arroz-branco", "feijao-caseiro", "batata-frita"],
    sideNames: ["Arroz branco", "Feijão caseiro", "Batata frita"],
    badge: "Clássico Brasileiro",
    chefQuote: "O combo mais equilibrado e reconfortante do dia a dia."
  },
  {
    id: "sug-tilapia",
    proteinId: "exec-tilapia-crosta",
    proteinName: "Tilápia na crosta",
    price: 48.50,
    sideIds: ["arroz-alho", "pure-banana-terra", "legumes-refogados"],
    sideNames: ["Arroz de alho", "Purê de banana da terra", "Legumes refogados"],
    badge: "Campeão de Vendas",
    chefQuote: "Contraste sublime entre o peixe crocante e a doçura aveludada da banana."
  },
  {
    id: "sug-picanha",
    proteinId: "exec-picanha-brasa",
    proteinName: "Picanha na brasa",
    price: 75.80,
    sideIds: ["arroz-alho", "batata-frita", "farofa-alho"],
    sideNames: ["Arroz de alho", "Batata frita", "Farofa de alho"],
    badge: "Churrasco Nobre",
    chefQuote: "A combinação perfeita para quem ama carne vermelha suculenta com crocância."
  }
];
