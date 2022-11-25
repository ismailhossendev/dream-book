import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../ShareComponents/ProductCard';

const ByCategory = () => {
    const data = useLoaderData();
    return (
        <div>
            <h3>Book In this Category {data.length}</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4">
                {
                    data.map(product => <ProductCard product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default ByCategory;