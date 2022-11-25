import React, { useContext, useState } from 'react';
import { mainContext } from '../../Contexts/MainContext';

const BookingModal = ({ setShowModal, data }) => {
    const { user } = useContext(mainContext);
    const { name, price, seller, sellerEmail, sellerPhone } = data;
    const [loading, setLoading] = useState(false);


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-3 bg-gray-300">
                    <label onClick={() => setShowModal(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-xl w-5/6'>Please Confirm Your Booking</h1>
                    <form className='mt-1 space-y-3'>
                        <input type="text" defaultValue={user?.name} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={name} readOnly className="input input-bordered w-full" />
                        <input type="text" defaultValue={"BDT" + price} readOnly className="input input-bordered w-full" />
                        <div className="grid lg:grid-cols-2 gap-1">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Meeting Location?*</span>
                                </label>
                                <input type="text" placeholder="Meeting location for buying this product" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contact Number*</span>
                                </label>
                                <input type="text" placeholder="Meeting location for buying this product" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <input onClick={() => setShowModal(null)} type="submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;