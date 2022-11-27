import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { mainContext } from '../../../Contexts/MainContext';
import { GoVerified } from 'react-icons/go'

const AllSellers = () => {
    const { user } = useContext(mainContext);
    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['all_sellers', user?.email],
        queryFn: () => fetch(`https://dream-book-server.vercel.app/users?role=seller`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                return data
            }),
    })
    if (isLoading) {
        return toast.loading('Sellers Is loading...', {
            id: 'dashboard'
        });
    } else {
        toast.remove('dashboard');
    }

    const deleteUser = email => {

        const agree = window.confirm('Are you sure? Delete this user?');
        if (!agree) {
            return;
        }


        fetch(`https://dream-book-server.vercel.app/users?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    refetch();
                } else {
                    toast.error(data.message)
                }
            })
    }

    const verified = email => {
        const agree = window.confirm('Are you sure? Verified this user?');
        if (!agree) {
            return;
        }
        toast.loading('Verified is loading...', {
            id: 'verified'
        });

        fetch(`https://dream-book-server.vercel.app/seller-verify?email=${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token')
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('verified');
                    toast.success(data.message)
                    refetch();
                } else {
                    toast.remove('verified');
                    toast.error(data.message)
                }
            })
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
                                                <div className="font-bold flex items-center gap-1">{seller.name}{seller.verified && <GoVerified />}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {seller.email}
                                    </td>
                                    <td>
                                        {seller.verified ? "Verified" : <button onClick={() => verified(seller.email)} className="btn btn-outline btn-xs">Verify</button>}
                                    </td>
                                    <th>
                                        <button onClick={() => deleteUser(seller.email)} className="btn btn-outline btn-xs">Delete</button>
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