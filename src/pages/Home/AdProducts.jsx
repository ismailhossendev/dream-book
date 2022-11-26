import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ProductCard from '../../ShareComponents/ProductCard';
import BookingModal from '../BookDetails/BookingModal';

const AdProducts = () => {
    const { data = [], isLoading } = useQuery({
        queryKey: ['adsProducts'],
        queryFn: () => fetch(`https://dream-book-server.vercel.app/products?ads=ture`)
            .then(res => res.json())
            .then(data => {
                return data
            }),
    })

    const [showModal, setShowModal] = useState(null);

    if (isLoading) {
        toast.loading('Loading...', {
            id: 'adsProducts'
        })
    } else {
        toast.remove('adsProducts')
    }
    return (
        <div className={`${data.length > 0 ? "block" : "hidden"} `}>
            <h1 className='text-2xl font-semibold font-serif my-3'>Sponsor's Product {data.length}</h1>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 ">
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