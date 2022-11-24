import React from 'react';
import ProductCard from '../../ShareComponents/ProductCard';

const AdProducts = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold font-serif my-3'>Sponsor's Product</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard />
            </div>

        </div>
    );
};

export default AdProducts;