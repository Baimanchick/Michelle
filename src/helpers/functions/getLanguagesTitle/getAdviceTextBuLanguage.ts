import { DishesType } from "../../interfaces/dishes.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getAdviceTextBuLanguage = (dish: DishesType) => {
  const selectedLanguage = getSelectedLanguage();
  switch (selectedLanguage) {
    case "Русский":
      return dish.advice_ru;
    case "Кыргызча":
      return dish.advice_kg;
    case "English":
      return dish.advice_en;
    case "Türkçe":
      return dish.advice_tu;
    default:
      return dish.advice_ru;
  }
};

export default getAdviceTextBuLanguage;
