import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import CategoryItem from './CategoryItem';

const CategoryItems = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-7'>Our <span className='befor-css'>Categories</span></h1>
            <h2 className='text-3xl'>Choose By <span className='text-primary'>Brand.</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories.map(category => <CategoryItem
                        key={category._id}
                        category={category}
                    >

                    </CategoryItem>)
                }
            </div>

        </div>
    );
};

export default CategoryItems;