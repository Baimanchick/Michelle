import { SubCategoryProps } from './SubCategory.props'
import getSubCategoryTitleByLanguage from '../../helpers/functions/getLanguagesTitle/getSubCategoryTitleByLanguage'
import { Flex } from 'antd'
import styles from "./subcategory.module.scss"
import getSubCategoryMainTitle from '../../helpers/functions/getLanguagesTitle/getSubCategoryMainTitle';
import getSubCategoryOrangeTitle from '../../helpers/functions/getLanguagesTitle/getSubCategoryOrangeTitle';
import getSubCategoryBalckTitle from '../../helpers/functions/getLanguagesTitle/getSubCategoryBalckTitle';

function SubCategory({ subcategory }: SubCategoryProps) {


    return (
        <Flex style={{ flexDirection: 'column', width: '100%', height: 'auto' }} gap={4.5} justify={'center'} align={'center'}>
            <div>
                <h1 className={styles.main_title}>{getSubCategoryMainTitle(subcategory)}</h1>
            </div>
            <Flex style={{ width: '100%', height: 'auto' }} justify={'center'} align={'center'}>
                <hr className={styles.hr} />
                <h2 className={styles.tur_title}>{getSubCategoryTitleByLanguage(subcategory)}</h2>
                <hr className={styles.hr} />
            </Flex>
            <div>
                <h3 className={styles.orange_title}>{getSubCategoryOrangeTitle(subcategory)}</h3>
            </div>
            <div>
                <h4 className={styles.black_title}>{getSubCategoryBalckTitle(subcategory)}</h4>
            </div>
        </Flex>

    )
}

export default SubCategory
