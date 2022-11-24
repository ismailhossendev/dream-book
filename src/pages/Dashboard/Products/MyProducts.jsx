import React from 'react';
import AddModal from './AddModal';

const MyProducts = () => {
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
                                <label
                                    htmlFor="add-product"
                                    className='btn btn-sm btn-accent'>Add Product</label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.ibb.co/mGWrSNF/TVS-Apache-RTR-160-4v-price-in-Bangladesh.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                BDT 1000
                            </td>
                            <td>
                                SOLD
                            </td>
                            <th>
                                <button className="btn btn-outline btn-xs">delete</button>
                            </th>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>TOTAL POST</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
                <AddModal />
            </div>
        </div>
    );
};

export default MyProducts;