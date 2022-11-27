import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';
import { GoVerified, GoOrganization } from 'react-icons/go'
import { MdChangeCircle, MdStore, MdGroups } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';
const Aside = () => {
    const { user, loading } = useContext(mainContext);
    if (loading) {
        return <div>Loading...</div>
    }
    const handleImageUpdate = (e) => {
        const img = e.target.files[0];
        const formData = new FormData()
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url;
                console.log(image, data);
                axios.put(`https://dream-book-server.vercel.app/upload-profile?email=${user?.email}&profile=${image}`, {
                })
                    .then(res => {
                        toast(res.data.message)
                    })
            })
    }

    return (
        <div className="drawer-side">
            <label htmlFor="admin-menu" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 text-base-content">
                <div>
                    <div className="mt-8 text-center">
                        <div className="relative">
                            <img src={user?.profile ? user?.profile : "https://i.ibb.co/8cSQDx3/profile.png"} alt="" className="m-auto h-10 object-cover w-10 rounded-full object-cover lg:h-28 lg:w-28" />
                            <label className="text-3xl absolute right-[70px] bottom-2 cursor-pointer" htmlFor="edit" title='change profile image'>
                                <MdChangeCircle />
                            </label>
                            <input onChange={handleImageUpdate} type="file" id="edit" className="hidden" />
                        </div>
                        <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:flex justify-center items-center gap-1 ">{user.name}{user.verified && <GoVerified />}</h5>
                        <span className="hidden text-gray-400 lg:block">{user?.role}</span>
                    </div>
                    <ul className="mt-8 space-y-2 tracking-wide">
                        {/* admins See */}
                        {user?.role === 'admin' &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/sellers'
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <GoOrganization />
                                        <span className="group-hover:text-gray-700 ">Sellers</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/buyers'
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <MdGroups />
                                        <span className="group-hover:text-gray-700 ">Buyers</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        to='/dashboard/reports' className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600 -sky-400" fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 -gray-50">Reports</span>
                                    </NavLink>
                                </li>

                            </>
                        }
                        {/* seller see */}
                        {user?.role === 'seller' &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/my-products'
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <MdStore />
                                        <span className="group-hover:text-gray-700 -gray-50">My Products</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-product'
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600 -sky-400" fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 ">Add Product</span>
                                    </NavLink>
                                </li>
                            </>
                        }
                        {/* buyers see */}
                        {user?.role === 'buyer' &&
                            <>
                                <li>
                                    <NavLink to='/dashboard/my-orders'
                                        style={({ isActive }) =>
                                            isActive ? { backgroundColor: 'blue', color: "white" } : {}
                                        }
                                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path className="fill-current text-gray-300 group-hover:text-cyan-300" fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                                            <path className="fill-current text-gray-600 group-hover:text-cyan-600 -sky-400" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                        </svg>
                                        <span className="group-hover:text-gray-700 -gray-50">My Orders</span>
                                    </NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </ul>

        </div>
    );
};

export default Aside;