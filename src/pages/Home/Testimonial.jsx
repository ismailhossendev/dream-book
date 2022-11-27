import React from 'react';
import locationIcon from '../../assets/Icons/location.svg';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";


const Testimonial = ({ testimonial }) => {
    const { name, location, review, image, rating } = testimonial;
    const restRating = 5 - rating;
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <img alt={name} src={image} className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl" />
            <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p className="text-lg font-bold text-gray-700">{name}</p>
                <p className="mt-1 text-xs font-medium text-gray-500 flex items-center gap-1 justify-center">
                    <img className='bg-accent w-5 h-5 p-1 rounded-full' src={locationIcon} alt="" />
                    {location}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                    {review}
                </p>
                <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                    {
                        Array.from({ length: rating }, (_, i) => <FaStar />)
                    }
                    {
                        Array.from({ length: restRating }, (_, i) => <FaStar className='text-black' />)
                    }
                </div>
            </blockquote>
        </motion.div>
    );
};

export default Testimonial;