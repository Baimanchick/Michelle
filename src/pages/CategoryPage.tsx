import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { fetchCategory } from '../store/features/category/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import CategoryList from '../components/CategoryList/CategoryList';
import { Flex } from 'antd';

const CategoryPage = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: RootState) => state.category.category);
    const [loading, setLoading] = useState(true);
    const sortCategoriesById = (categories: any) => {
        return [...categories].sort((a, b) => a.id - b.id);
    };

    const sortedCategories = sortCategoriesById(categories);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(fetchCategory());
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);



    return (
        <div>
            <Flex align={'center'} justify={'center'} style={{ height: 100 }}>
                <h1>MENU</h1>
            </Flex>
            <Flex style={{ paddingLeft: '10px', paddingRight: '10px' }} justify={'center'}>
                <CategoryList
                    categories={sortedCategories}
                    loading={loading}
                    grid={{
                        gutter: 10,
                        column: 3,
                        xxl: 3,
                        xl: 3,
                        lg: 3,
                        md: 3,
                        sm: 3,
                        xs: 3,
                    }}
                />
            </Flex>
        </div>
    );
};

export default CategoryPage;
