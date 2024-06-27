import { Carousel } from "antd";
import styles from "./sliderMenu.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CategoryType } from "../../helpers/interfaces/categories.interface";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../store/features/category/categoriesSlice";
import DishContentCarousel from "../DishContentCarousel/DishContentCarousel";
import Loading from "../Loading/Loading";

export default function SliderMenu() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.category);
    const [loading, setLoading] = useState(true);

    const sortCategoriesById = (categories: any) => {
        return [...categories].sort((a, b) => a.id - b.id);
    };

    const sortedCategories: any = sortCategoriesById(categories);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            await dispatch(fetchCategory());
            setLoading(false);
        };

        fetchCategories();
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main_container}>
                {loading ? (
                    <div></div>
                ) : (
                    <Carousel
                        dots={false}
                        centerMode={true}
                        infinite={true}
                        slidesToShow={3}
                        speed={500}
                        centerPadding="0"
                        style={{
                            backgroundColor: '#f9ede6',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {sortedCategories.map((category: CategoryType, index: number) => (
                            <DishContentCarousel key={index} category={category} />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
}
