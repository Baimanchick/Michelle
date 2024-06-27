import { CategoryType } from "../../interfaces/categories.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getCategoryTitleByLanguage = (category: CategoryType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return category.title_ru;
    case "Кыргызча":
      return category.title_kg;
    case "English":
      return category.title_en;
    case "Türkçe":
      return category.title_tu;
    default:
      return category.title_ru;
  }
};

export default getCategoryTitleByLanguage;
