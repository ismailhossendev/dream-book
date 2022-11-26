import React from 'react';
import { FaLocationArrow } from "react-icons/fa"
import { GoVerified, GoLocation, GoMail, GoDeviceMobile } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './component.css'
const ProductCard = ({ product, setShowModal, showModal }) => {
    const { name, image, location, price, sellerEmail, sellerPhone, newPrice, category, details, _id, ads, condition, seller, verified } = product;

    return (
        // <div className="focus:outline-none mx-2  xl:mb-0 mb-8 rounded-md"
        //     whileHover={{ scale: 1.1 }}
        //     whileTap={{ scale: 0.9 }}
        // >
        //     <div>
        //         <img alt="person capturing " src={image} className="focus:outline-none w-full h-44 rounded-md object-cover " />
        //     </div>
        //     <div className="bg-white">
        //         <div className="flex items-center justify-between px-4 pt-4">
        //             <div>
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="focus:outline-none" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        //                     <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
        //                 </svg>
        //             </div>
        //             {ads && <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
        //                 <p className="focus:outline-none text-xs text-yellow-700">Featured</p>
        //             </div>}
        //         </div>
        //         <div className="p-4">
        //             <div className="flex  h-14 overflow-hidden">
        //                 <h2 className="focus:outline-none text-lg font-semibold">{name}</h2>
        //                 <p className="focus:outline-none text-xs text-gray-600 pl-5">{category}</p>
        //             </div>
        //             <p className="focus:outline-none text-xs text-gray-600 mt-2">{details.slice(0, 100)}..</p>
        //             <div className="mt-4 text-start flex justify-between">
        //                 <h3 className='line-through'>{newPrice} BDT</h3>
        //                 <h3>Sale: <span className='font-semibold'>{price} BDT</span></h3>
        //             </div>
        //             <div className="flex items-center  py-4 gap-1">
        //                 <h2 className="focus:outline-none text-indigo-700 text-xs font-semibold flex gap-1"><FaLocationArrow />  {location ? location : "not "}</h2>
        //             </div>
        //             <label
        //                 onClick={() => setShowModal(product)}
        //                 htmlFor="booking-modal" className="btn btn-warning w-full">Book Now</label>
        //         </div>
        //     </div>
        // </div>
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
                            New Price : ৳ {newPrice}
                            <span className="font-bold px-2">|</span>
                            Sale Price: ৳ {price}
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
                    <div className="flex">
                        <i className="material-icons mr-2 text-red-600">favorite_border</i>
                        <i className="material-icons text-blue-600">remove_red_eye</i>
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