import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { mainContext } from '../Contexts/MainContext';

const Header = () => {
    const { user, logOut } = useContext(mainContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('Logout Successful')
                navigate('/');
            }).catch(err => {
                toast.error(err.message)
            })
    };


    return (
        <div className="navbar bg-base-100 container mx-auto p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='btn btn-ghost'>Home</Link>

                        <Link to='/register' className='btn btn-ghost'>Register</Link>
                        <Link to='/login' className='btn btn-accent'>Login</Link>

                        <Link to='/' className='btn btn-ghost'>Account</Link>
                        <Link to='/' className='btn btn-primary'>LogOut</Link>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Dream Book {user?.name}</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/' className='btn btn-ghost'>Home</Link>

                    <Link to='/register' className='btn btn-ghost'>Register</Link>
                    <Link to='/login' className='btn btn-accent'>Login</Link>

                    <Link to='/dashboard' className='btn btn-ghost'>Account</Link>
                    <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button >
                </ul>
            </div>
            <label htmlFor="admin-menu" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
    );
};

export default Header;