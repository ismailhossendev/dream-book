import React from 'react';
import { useQuery } from 'react-query';
import Category from './Category';

const BuyCategories = () => {
    const { data: Categories = [] } = useQuery({
        queryKey: 'categories',
        queryFn: () => fetch('http://localhost:5000/categories?limit=3')
            .then(res => res.json())
            .then(data => {
                return data;
            })
    })
    return (
        <div>
            <h3 className="text-2xl">Categories to Sell</h3>
            <div className="grid grid-cols-3 gap-10 ">
                {
                    Categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    );
};

export default BuyCategories;