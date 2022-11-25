import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import ProductCard from '../../ShareComponents/ProductCard';
import BookingModal from '../BookDetails/BookingModal';

const AdProducts = () => {
    const { data } = useFetch('https://dream-book-server.vercel.app/products?ads=ture', "adsProducts");
    const [showModal, setShowModal] = useState(null);
    return (
        <div className={`${data.length > 0 ? "block" : "hidden"} `}>
            <h1 className='text-2xl font-semibold font-serif my-3'>Sponsor's Product {data.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(product => <ProductCard
                        product={product}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        key={product._id} />)
                }
            </div>
            {showModal && <BookingModal
                data={showModal}
                setShowModal={setShowModal}
            />}
        </div>
    );
};

export default AdProducts;