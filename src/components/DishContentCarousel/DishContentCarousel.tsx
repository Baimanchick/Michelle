import { DishCarouselProps } from './Dish.props'
import getCategoryTitleByLanguage from '../../helpers/functions/getLanguagesTitle/getCategoryTitleByLanguage'
import styles from "../SliderMenu/sliderMenu.module.scss"
import { useNavigate } from 'react-router-dom';

function DishContentCarousel({ category }: DishCarouselProps) {
    const navigate = useNavigate()
    const navigateToDetail = (
        e: React.MouseEvent<HTMLDivElement>,
        id: number
    ) => {
        const target = e.target as HTMLElement;
        e.stopPropagation();
        if (e.currentTarget === target || e.target instanceof HTMLImageElement) {
            if (
                category.is_about ||
                category.is_constructr ||
                category.is_collagen ||
                category.is_coffe ||
                category.is_tea ||
                category.is_drink ||
                category.is_bar ||
                category.is_smuzi ||
                category.is_wine ||
                category.is_sale
            ) {
                navigate(category.link);
            } else {
                navigate(`/dish/${category.id}`);
            }
        }
    };

    return (
        <div onClick={(e) => navigateToDetail(e, category.id)} className={styles.slider_items}>
            <h3 onClick={(e) => navigateToDetail(e, category.id)} className={styles.title}>{getCategoryTitleByLanguage(category)}</h3>
        </div>
    )
}

export default DishContentCarousel