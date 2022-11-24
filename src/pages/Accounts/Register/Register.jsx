import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {

    };

    const formClass = "bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    -500 -500"
    return (
        <div className="max-w-2xl mx-auto bg-white p-16">
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                        <input type="text" id="first_name"
                            {...register("first_name")}
                            className={formClass} placeholder="John" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name*</label>
                        <input type="text" id="last_name"
                            {...register("last_name", { required: true })}
                            className={formClass} placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="company"
                            {...register("company")}
                            className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
                        <input type="text" id="company" className={formClass} placeholder="xyz ltd" />
                    </div>
                    <div>
                        <label htmlFor="phone"
                            {...register("phone", { required: true })}
                            className="block mb-2 text-sm font-medium text-gray-900 ">Phone number*</label>
                        <input type="tel" id="phone" className={formClass} placeholder="123-45-678" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Select Member</label>
                    <select
                        {...register("member")}
                        defaultValue="buyer"
                        className='bg-gray-50 border mb-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    -500 -500'>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                    <input type="email" id="email"
                        {...register("email", { required: true })}
                        className={formClass} placeholder="john.doe@company.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password"
                        {...register("password", { required: true })}
                        className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                    <input type="password" id="password" className={formClass} placeholder="•••••••••" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirm_password"
                        {...register("confirm_password", { required: true })}
                        className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                    <input type="password" id="confirm_password" className={formClass} placeholder="•••••••••" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  -700 -800">Submit</button>
            </form>
            <p className="mt-5">
                Already have an account? <Link to='/login' className="text-blue-600 hover:underline ">Log in</Link>
            </p>
        </div>

    );
};

export default Register;