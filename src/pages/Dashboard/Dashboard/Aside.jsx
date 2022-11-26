import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';
import { GoVerified } from 'react-icons/go'
const Aside = () => {
    const { user, loading } = useContext(mainContext);
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="drawer-side">
            <label htmlFor="admin-menu" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 bg-base-100 text-base-content">
                <div>
                    <div className="mt-8 text-center">
                        <img src="" alt="" className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28" />
                        <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:flex justify-center items-center gap-1 dark:text-gray-300">{user.name}{user.verified && <GoVerified />}</h5>
                        <span className="hidden text-gray-400 lg:block">{user?.role}</span>
                    </div>
                    <ul className="mt-8 space-y-2 tracking-wide">
                        <li>
                            <NavLink to='/dashboard/my-products' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">My Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/my-orders' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">My Orders</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/reports' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Reports</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/users' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/add-product' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                    <path className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                </svg>
                                <span className="group-hover:text-gray-700 dark:group-hover:text-white">Add Product</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </ul>

        </div>
    );
};

export default Aside;