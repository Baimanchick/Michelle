import { DishesType } from "../../interfaces/dishes.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getDishTitle = (dish: DishesType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return dish.title_ru;
    case "Кыргызча":
      return dish.title_kg;
    case "English":
      return dish.title_en;
    case "Türkçe":
      return dish.title_tu;
    default:
      return dish.title_ru;
  }
};

export default getDishTitle;
