import { SubCategoryType } from "../../interfaces/categories.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getSubCategoryBalckTitle = (subCategory: SubCategoryType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return subCategory.custom_black_ru;
    case "Кыргызча":
      return subCategory.custom_black_kg;
    case "English":
      return subCategory.custom_black_en;
    case "Türkçe":
      return subCategory.custom_black_tu;
    default:
      return subCategory.custom_black_ru;
  }
};

export default getSubCategoryBalckTitle;
