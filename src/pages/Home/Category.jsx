import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Category = ({ category }) => {
    return (
        <Link to={`/category/${category._id}`} className='text-center'>
            <motion.div className='shadow-md shadow-slate-600 rounded-lg p-2'
                whileHover={{ scale: 1.1 }}
            >
                <img className='h-[200px] w-full object-cover rounded' src={category.image} alt="" />
                <h3 className='text-xl font-semibold mt-2'>{category.name}</h3>
            </motion.div>
        </Link>
    );
};

export default Category;