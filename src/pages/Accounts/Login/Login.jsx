import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import WithGoogle from '../../../ShareComponents/WithGoogle';
import { mainContext } from '../../../Contexts/MainContext';

const Login = () => {
    const { login, } = useContext(mainContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        login(e.target.email.value, e.target.password.value)
            .then(res => {
                toast.success('Login Successful')
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.code)
            })
    }


    return (
        <section className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 hidden md:block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt='login' />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSubmit}>
                            <h1 className='text-center text-2xl font-serif font-bold my-2 text-gray-700'>Login Please</h1>
                            <div className="mb-6">
                                <input type="email" name='email' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                            </div>
                            <div className="mb-6">
                                <input type="password" name='password' className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                            </div>
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Sign in
                            </button>
                            <p className='text-right p-1'>
                                Don't Have Account ?<Link to="/register" className="text-blue-700 hover:text-blue-800"> Register</Link>
                            </p>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <WithGoogle />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;