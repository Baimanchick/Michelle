import { DishesType } from "../../interfaces/dishes.interface";
import { getSelectedLanguage } from "./getSelectedLanguage";

const getDishText = (dish: DishesType) => {
    const selectedLanguage = getSelectedLanguage();
    switch (selectedLanguage) {
        case "Русский":
            return dish.text_ru;
        case "Кыргызча":
            return dish.text_kg;
        case "English":
            return dish.text_en;
        case "Türkçe":
            return dish.text_tu;
        default:
            return dish.text_ru;
    }
};

export default getDishText;
