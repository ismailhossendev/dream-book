import React from 'react';
import { FaLocationArrow } from "react-icons/fa"
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const { name, image, location, price, newPrice, category, details, _id, ads, } = product;
    return (
        <div className="focus:outline-none mx-2  xl:mb-0 mb-8 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div>
                <img alt="person capturing " src={image} className="focus:outline-none w-full h-44 rounded-md object-cover " />
            </div>
            <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="focus:outline-none" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                    </div>
                    {ads && <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p className="focus:outline-none text-xs text-yellow-700">Featured</p>
                    </div>}
                </div>
                <div className="p-4">
                    <div className="flex  h-14 overflow-hidden">
                        <h2 className="focus:outline-none text-lg font-semibold">{name}</h2>
                        <p className="focus:outline-none text-xs text-gray-600 pl-5">{category}</p>
                    </div>
                    <p className="focus:outline-none text-xs text-gray-600 mt-2">{details.slice(0, 100)}..</p>
                    <div className="mt-4 text-start flex justify-between">
                        <h3 className='line-through'>{newPrice} BDT</h3>
                        <h3>Sale: <span className='font-semibold'>{price} BDT</span></h3>
                    </div>
                    <div className="flex items-center  py-4 gap-1">
                        <h2 className="focus:outline-none text-indigo-700 text-xs font-semibold flex gap-1"><FaLocationArrow />  {location ? location : "not "}</h2>
                    </div>
                    <Link
                        to={`/book/${_id}`}
                        className='btn btn-outline w-full rounded-2xl'>DETAILS</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;