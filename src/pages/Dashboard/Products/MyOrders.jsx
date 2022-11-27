import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { mainContext } from '../../../Contexts/MainContext';
import PayModal from './PayModal';

const MyOrders = () => {
    const { user } = useContext(mainContext);
    const [payModal, setPayModal] = useState(null);


    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['myOrders', user?.email,],
        queryFn: () => fetch(`https://dream-book-server.vercel.app/booked-products?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                return data
            }),
    })
    if (isLoading) {
        return toast.loading('Your Product Is loading...', {
            id: 'dashboard'
        });
    } else {
        toast.remove('dashboard');
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>PRICE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product, i) => <tr>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    BDT {product.price}
                                </td>
                                <td>
                                    {product.status}
                                </td>
                                <th>
                                    <label htmlFor="pay-modal"
                                        disabled={product?.status === "Paid"}
                                        onClick={() => setPayModal(product)}
                                        className="btn btn-outline btn-xs">Pay</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {payModal && <PayModal
                setPayModal={setPayModal}
                refetch={refetch}
                payModal={payModal}
            />}
        </div>
    );
};

export default MyOrders;