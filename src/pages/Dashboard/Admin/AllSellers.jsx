import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';

const AllSellers = () => {
    const { user } = useContext(mainContext);



    const { data = [], isLoading } = useQuery({
        queryKey: ['all_sellers', user?.email],
        queryFn: () => fetch(`https://dream-book-server.vercel.app/users?role=seller`)
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
                            <th>email</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((seller, i) => {
                                seller.name = seller.firstName + ' ' + seller.lastName
                                return <tr>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={seller.profile} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{seller.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {seller.email}
                                    </td>
                                    <td>
                                        {seller.verified ? "Verified" : <button className="btn btn-outline btn-xs">Verify</button>}
                                    </td>
                                    <th>
                                        <button disabled={seller?.status === "paid"} className="btn btn-outline btn-xs">Delete</button>
                                    </th>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;