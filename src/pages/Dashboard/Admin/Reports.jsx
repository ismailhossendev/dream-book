import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { FaTrash, FaRegTimesCircle, } from "react-icons/fa"

const Reports = () => {

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: 'reports',
        queryFn: () => fetch('https://dream-book-server.vercel.app/reports')
            .then(res => res.json())
            .then(data => {
                return data
            })
    })

    const handleDelete = (id, productName, _id) => {
        const agree = window.confirm(`Are you sure you want to delete ${!id && 'Report '} on ${productName} ?`)
        if (!agree) {
            return
        }
        toast.loading('Deleting...', {
            id: 'delete'
        });

        fetch(`https://dream-book-server.vercel.app/reports?${id && "id=" + id}&reportId=${_id} `, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('delete');
                    toast.success(data.message)
                    refetch();
                }
                else {
                    toast.remove('delete');
                    toast.error(data.message)
                }
            })
    }
    if (isLoading) {
        return toast.loading('Report Loading...', {
            id: 'reports'
        });
    } else {
        toast.remove('reports');
    }

    return (
        <div>
            {data.length} reports

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Reporter</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((report, index) => {
                                    return <tr>
                                        <th>{index + 1}</th>
                                        <td>{report.ProductName}</td>
                                        <td>{report.reporterName}</td>
                                        <td className='flex gap-2'>
                                            <button
                                                onClick={() => handleDelete(report.productId, report.ProductName, report._id)}
                                                className='text-xl text-rose-900' title='Delete Product'><FaTrash />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(false, report.ProductName, report._id)}
                                                className='text-xl text-rose-900'><FaRegTimesCircle
                                                    title='Delete Report' />
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;