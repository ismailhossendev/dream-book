import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { mainContext } from '../../../Contexts/MainContext';
import { format } from 'date-fns';



const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(mainContext);
    const [loading, setLoading] = useState(false);
    const { data: categories = [] } = useQuery({
        queryKey: 'categories',
        queryFn: () => fetch('https://dream-book-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                return data;
            })
    })

    const handleAddProduct = (data) => {
        setLoading(true);
        if (data.category === "select") {
            toast.error('Please select a category');
            return;
        }
        data.seller = user?.name;
        data.sellerId = user?._id;
        data.verified = user?.verified || false;
        data.date = format(new Date(), 'PPP');
        data.sellerEmail = user?.email;
        const formData = new FormData()
        formData.append('image', data.image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_API_KEY}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(ImageData => {
                data.image = ImageData.data.url;
                createProduct(data);
            }).catch(error => {
                toast.error(error.message);
            })
    };

    const createProduct = data => {
        fetch('https://dream-book-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    reset();
                } else {
                    toast.error(data.message);
                }
            })
        setLoading(false);
    }

    return (

        <form onSubmit={handleSubmit(handleAddProduct)} className="w-5/6 mx-auto lg:p-10">
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Name*</span>
                    </label>
                    <input type="text" placeholder="Enter Product Name"
                        {...register('name', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Product Image*</span>
                    </label>
                    <input type="file" placeholder="image"
                        {...register('image', { required: true })}
                        className="file-input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">New Price*</span>
                    </label>
                    <input type="number" placeholder="1800"
                        {...register('newPrice', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Sale Price*</span>
                    </label>
                    <input type="number" placeholder="Sale Price"
                        {...register('price', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Used Time*</span>
                    </label>
                    <input type="text"
                        placeholder="Enter Used Time"
                        {...register('usedTime', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Phone*</span>
                    </label>
                    <input type="number"
                        placeholder="01 11 22 11 44"
                        {...register('sellerPhone', { required: true })}
                        className="input input-bordered w-full " />
                </div>
            </div>
            <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 mt-2">Select Category*</label>
                <select
                    {...register("category", { required: true })}
                    defaultValue="select"
                    className='select select-bordered w-full '>
                    <option value="select" disabled>Select Category</option>
                    {
                        categories.map(category => <option key={category._id} value={category.name}>{category.name}</option>)
                    }
                </select>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Details*</span>
                </label>
                <textarea type="number" placeholder="Enter your Book details"
                    {...register('details', { required: true })}
                    className="textarea textarea-bordered mb-2 w-full " ></textarea>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Location*</span>
                </label>
                <input type="text"
                    placeholder="Enter your Location"
                    {...register('location', { required: true })}
                    className="input input-bordered w-full mb-2" />
            </div>
            <button disabled={loading} type="submit" className={`btn btn-primary w-full ${loading && 'loading'}`}>Add Product</button>
        </form>
    );
};

export default AddProduct;