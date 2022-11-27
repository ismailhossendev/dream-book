import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';

const MyProducts = () => {
    const { user } = useContext(mainContext);



    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: () => fetch(`https://dream-book-server.vercel.app/my-products?email=${user.email}`)
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

    const handleDelete = id => {
        const agree = window.confirm('Are you sure to delete this product?');
        if (!agree) {
            return
        }
        toast.loading('Deleting Product...', {
            id: 'delete'
        });
        fetch(`https://dream-book-server.vercel.app/products?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('delete');
                    toast.success(data.message);
                    refetch();
                } else {
                    toast.remove('delete');
                    toast.error(data.message);
                }
            })
    }

    const runAd = id => {
        const agree = window.confirm('Are you sure to run this ad?');
        if (!agree) {
            return
        };
        toast.loading('Please wait...', {
            id: 'run'
        })
        fetch(`https://dream-book-server.vercel.app/run-ad?id=${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('run');
                    toast.success(data.message);
                    refetch();
                } else {
                    toast.remove('run');
                    toast.error(data.message);
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
                            <th>PRICE</th>
                            <th>STATUS</th>
                            <th>
                                <Link to="/dashboard/add-product" className='btn btn-sm btn-accent'>
                                    Add Product
                                </Link>
                            </th>
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
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-outline btn-xs mr-2">delete</button>
                                    <button onClick={() => runAd(product._id)} disabled={product.ads} className="btn btn-outline btn-xs">Ad Run</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;