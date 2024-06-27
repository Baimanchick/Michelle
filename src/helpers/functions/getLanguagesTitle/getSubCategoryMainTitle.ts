import { SubCategoryType } from "../../interfaces/categories.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getSubCategoryMainTitle = (subCategory: SubCategoryType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return subCategory.main_title_ru;
    case "Кыргызча":
      return subCategory.main_title_kg;
    case "English":
      return subCategory.main_title_en;
    case "Türkçe":
      return subCategory.main_title_tu;
    default:
      return subCategory.main_title_ru;
  }
};

export default getSubCategoryMainTitle;
