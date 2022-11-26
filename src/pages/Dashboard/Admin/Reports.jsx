import React from 'react';
import { useQuery } from 'react-query';

const Reports = () => {
    const { data = [] } = useQuery({
        queryKey: 'reports',
        queryFn: () => fetch('https://dream-book-server.vercel.app/reports')
            .then(res => res.json())
            .then(data => {
                return data
            })
    })
    const handleDelete = (id) => {
        fetch(`https://dream-book-server.vercel.app/reports?id=${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message)
                }
                else {
                    alert(data.message)
                }
            })
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
                                        <td><button className='btn btn-sm'>DELETE</button></td>
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