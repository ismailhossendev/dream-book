import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';

const MyOrders = () => {
    const { user } = useContext(mainContext);



    const { data = [], isLoading } = useQuery({
        queryKey: ['myOrders', user?.email],
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
                            data.map(product => <tr>
                                <th>
                                    1
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
                                    <button disabled={product?.status === "paid"} className="btn btn-outline btn-xs">Pay</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;