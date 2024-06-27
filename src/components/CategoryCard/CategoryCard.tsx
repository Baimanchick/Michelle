import { Card, Flex, Typography } from "antd"
import getCategoryTitleByLanguage from "../../helpers/functions/getLanguagesTitle/getCategoryTitleByLanguage"
import { CategoryCardProps } from "./CategoryCard.props"
import styles from "./categoryCard.module.scss"
import { useNavigate } from "react-router-dom"

function CategoryCard({ category }: CategoryCardProps) {
    const navigate = useNavigate()
    const navigateToDetail = (
        e: React.MouseEvent<HTMLElement>,
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
    if (!category.id) {
        return null;
    }

    return (
        <Card
            cover={
                <img className={styles.image} src={category.image} alt={category.title_en} />
            }
            classNames={{ cover: styles.CustomCover, body: styles.CustomBody }}
            className={styles.CardCustom}
            onClick={(e) => navigateToDetail(e, category.id)}
        >
            <Flex onClick={(e) => navigateToDetail(e, category.id)} className={styles.TitleFlex} >
                <div className={styles.CustomTitle}>{getCategoryTitleByLanguage(category)}</div>
            </Flex>
        </Card>
    )
}

export default CategoryCard