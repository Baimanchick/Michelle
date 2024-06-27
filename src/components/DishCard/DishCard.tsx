import { Card, Flex } from 'antd'
import { DishCardProps } from './DishCardProps.props'
import styles from "./dishCard.module.scss"
import getDishTitle from '../../helpers/functions/getLanguagesTitle/getDishTitle'
import { formatNumberAndAddCurrency } from '../../helpers/functions/helperFunctions'
import { getSelectedLanguage } from '../../helpers/functions/getLanguagesTitle/getSelectedLanguage'
import getDishText from '../../helpers/functions/getLanguagesTitle/getDishText'

function DishCard({ dish }: DishCardProps) {
    const selectedLanguage = getSelectedLanguage()

    return (
        <Card
            className={styles.cardCustom}
            classNames={{
                body: styles.bodyCustom,
                header: styles.headCustom,
                cover: styles.coverCustom,
            }}
            cover={
                <img className={styles.image} src={dish.image} alt={dish.title_en} />
            }
        >
            <Flex style={{ flexDirection: 'column', }}>
                <div className={styles.white_block}></div>
                <h2 className={styles.title}>{getDishTitle(dish)}</h2>
                <div className={styles.weight}>{dish.weight === 0 ? null : formatNumberAndAddCurrency(dish.weight, '')} {selectedLanguage === 'Русский' || selectedLanguage === 'Кыргызча' ? 'г' : 'g'}</div>
                <p className={styles.text}>{getDishText(dish)}</p>
                <Flex style={{ marginTop: 5 }} align={'center'} justify={'space-between'} >
                    <Flex >
                        {dish.svg_urls.map((svg: any, index: number) => (
                            <img className={styles.svg} src={svg.svg} key={index} />
                        ))}
                    </Flex>
                    <div className={styles.price}>{formatNumberAndAddCurrency(dish.price, `${selectedLanguage === 'Русский' || selectedLanguage === 'Кыргызча' ? 'сом' : 'kgs'}`)}</div>
                </Flex>
            </Flex>
        </Card>
    )
}

export default DishCard