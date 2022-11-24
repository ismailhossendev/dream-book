import React from 'react';
import useFetch from '../../Hooks/useFetch';
import ProductCard from '../../ShareComponents/ProductCard';

const AdProducts = () => {
    const { data } = useFetch('http://localhost:5000/products?ads=ture', "adsProducts");
    return (
        <div className={`${data.length > 0 ? "block" : "hidden"} `}>
            <h1 className='text-2xl font-semibold font-serif my-3'>Sponsor's Product {data.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>

        </div>
    );
};

export default AdProducts;