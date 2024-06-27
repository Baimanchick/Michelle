import { SubCategoryType } from "../../interfaces/categories.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getSubCategoryTitleByLanguage = (subCategory: SubCategoryType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return subCategory.title_ru;
    case "Кыргызча":
      return subCategory.title_kg;
    case "English":
      return subCategory.title_en;
    case "Türkçe":
      return subCategory.title_tu;
    default:
      return subCategory.title_ru;
  }
};

export default getSubCategoryTitleByLanguage;
