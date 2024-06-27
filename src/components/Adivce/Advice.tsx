import styles from "./advice.module.scss";
import { getSelectedLanguage } from "../../helpers/functions/getLanguagesTitle/getSelectedLanguage";
import { AdviceProps } from "./Advice.props";
import getAdviceTextBuLanguage from "../../helpers/functions/getLanguagesTitle/getAdviceTextBuLanguage";

function Advice({ dish }: AdviceProps) {
    const selectedLanguage = getSelectedLanguage();
    const adviceText = getAdviceTextBuLanguage(dish);

    if (!adviceText) {
        return null;
    }

    return (
        <div className={styles.adviceMain}>
            <div className={styles.adviceContainer}>
                <div className={styles.advice}>
                    <div className={styles.adviceTitleContainer}>
                        {selectedLanguage === "Русский" && <span>Полезные советы:</span>}
                        {selectedLanguage === "English" && <span>Useful tips:</span>}
                        {selectedLanguage === "Türkçe" && <span>Faydalı ipuçları:</span>}
                        {selectedLanguage === "Кыргызча" && <span>Пайдалуу кеңештер:</span>}
                        <p>{adviceText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advice;
