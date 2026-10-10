import { MenuItem } from './data/menuData';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export type DietaryFilter = 'all' | 'destaques' | 'frutos-mar' | 'carnes' | 'petiscos' | 'bebidas' | 'sobremesas' | 'sem-gluten';
