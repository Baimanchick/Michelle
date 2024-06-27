export interface CategoryType {
  id: number;
  image: string;
  number: number;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  link: string;
  is_about: boolean;
  is_constructr: boolean;
  is_collagen: boolean;
  is_coffe: boolean;
  is_tea: boolean;
  is_drink: boolean;
  is_bar: boolean;
  is_smuzi: boolean;
  is_wine: boolean;
  is_sale: boolean;
}

export interface SubCategoryType {
  map: any;
  id: number;
  category_id?: number;
  image: string;
  number: number;
  main_title_ru: string;
  main_title_tu: string;
  main_title_kg: string;
  main_title_en: string;
  title_ru: string;
  title_tu: string;
  title_kg: string;
  title_en: string;
  custom_orange_ru: string;
  custom_orange_kg: string;
  custom_orange_tu: string;
  custom_orange_en: string;
  custom_black_ru: string;
  custom_black_kg: string;
  custom_black_tu: string;
  custom_black_en: string;
  link: string;
}
