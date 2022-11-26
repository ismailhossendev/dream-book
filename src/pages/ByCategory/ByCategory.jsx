import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../ShareComponents/ProductCard';
import BookingModal from '../BookDetails/BookingModal';

const ByCategory = () => {
    const data = useLoaderData();
    const [showModal, setShowModal] = useState(null);
    return (
        <div className='min-h-[90vh]'>
            <h3>Book In this Category {data.length}</h3>
            <div className="grid lg:grid-cols-2  grid-cols-1 my-4 gap-5">
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

export default ByCategory;