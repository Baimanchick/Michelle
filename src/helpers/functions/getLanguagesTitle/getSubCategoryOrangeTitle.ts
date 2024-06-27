import { SubCategoryType } from "../../interfaces/categories.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getSubCategoryOrangeTitle = (subCategory: SubCategoryType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return subCategory.custom_orange_ru;
    case "Кыргызча":
      return subCategory.custom_orange_kg;
    case "English":
      return subCategory.custom_orange_en;
    case "Türkçe":
      return subCategory.custom_orange_tu;
    default:
      return subCategory.custom_orange_ru;
  }
};

export default getSubCategoryOrangeTitle;
