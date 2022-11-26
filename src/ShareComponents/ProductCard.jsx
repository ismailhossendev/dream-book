import React, { useContext } from 'react';
import { FaLocationArrow } from "react-icons/fa"
import { GoVerified, GoLocation, GoMail, GoDeviceMobile } from 'react-icons/go';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './component.css'
import { mainContext } from '../Contexts/MainContext';
import toast from 'react-hot-toast';
const ProductCard = ({ product, setShowModal, showModal }) => {
    const { user } = useContext(mainContext);
    const { name, image, location, price, sellerEmail, sellerPhone, newPrice, category, date, usedTime, _id, ads, condition, seller, verified } = product;
    const handleReport = () => {
        toast.loading("reporting...", { duration: 1000 })
        const details = {
            ProductName: name,
            productId: _id,
            reporterEmail: user.email,
            reporterName: user.name,
        }

        axios.post('https://dream-book-server.vercel.app/report', details)
            .then(res => {
                if (res.data.success) {
                    toast.success('Reported')
                } else {
                    toast.error('Error')
                }
            })
    }
    return (
        <div className=" font-mono mt-5 rounded">
            <div className="bg-gray-300 rounded-md shadow-lg">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none ">
                        <img src={image} alt="pic" className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 " />
                    </div>
                    <div className="flex-col text-gray-900 justify-center w-full">
                        <p className="pt-4 text-xl font-bold h-14">{name}</p>
                        <hr className="hr-text" />
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold flex gap-1">{category} | {ads && 'Sponsor,'}<FaLocationArrow />{location} </span>
                            <span className="font-bold" />
                        </div>
                        <div className="">

                        </div>
                        <p className="flex text-md px-4 my-2">
                            New Price: ৳ {newPrice}
                            <span className="font-bold px-2">|</span>
                            Sale Price: ৳ {price}
                        </p>
                        <p className="flex text-md px-4 my-2">
                            Used:{usedTime}
                            <span className="font-bold px-2">|</span>
                            Post Date: {date}
                        </p>
                        <div className="lg:pl-3">
                            <fieldset className='border border-gray-400 rounded-lg'>
                                <legend className="mb-1 text-sm font-medium">Seller Details</legend>
                                <div className="flow-root p-3  rounded-md w-max">
                                    <div className="-m-0.5  space-y-1">
                                        <div className="flex items-center gap-1 text-xl">
                                            <p>{seller}</p>
                                            {verified && <span className='text-indigo-800'><GoVerified /></span>}
                                        </div>
                                        <div className="">
                                            <p className="text-sm text-gray-600 flex items-center gap-1"><GoMail /> {sellerEmail}</p>
                                        </div>
                                        <div className="">
                                            <p className="text-sm text-gray-600 flex items-center gap-1"><GoDeviceMobile /> {sellerPhone ? sellerPhone : "Number Privet"}</p>
                                        </div>
                                        <div className="">
                                            <p className="text-sm text-gray-600 flex items-center gap-1"><GoLocation /> {location ? location : "Location Not Share"}</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </div>
                </div>
                <div className="flex justify-between items-center p-2 mb-4 w-full">
                    <div onClick={handleReport} className="flex cursor-pointer" title='Report To Admin'>
                        <i className="material-icons mr-2 text-red-600">report</i>
                    </div>
                    <div className="">
                        <p className='flex items-center'>Condition:
                            {condition !== "Excellent" && <i className="material-icons text-green-600">check_circle</i>}
                            {condition === "Good" && <i className="material-icons text-yellow-600">sentiment_neutral</i>}{condition}
                            {condition === "Fair" && <i className="material-icons text-red-600">sentiment_very_dissatisfied</i>}
                        </p>
                    </div>
                </div>
                <label
                    onClick={() => setShowModal(product)}
                    htmlFor="booking-modal" className="btn btn-warning w-full">
                    Book Now
                </label>
            </div>
        </div>

    );
};

export default ProductCard;