import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoVerified, GoMail, GoDeviceMobile, GoLocation } from 'react-icons/go';
import BookingModal from './BookingModal';

const BookDetails = () => {
    const data = useLoaderData()
    const { name, image, location, price, newPrice, category, details, seller, sellerEmail, sellerPhone, verified, usedTime, date } = data;
    const [showModal, setShowModal] = useState(false);
    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img alt={name} src={image} className="aspect-square w-full rounded-xl object-cover" />
                    </div>
                    <div className="sticky top-0">
                        <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                            {category}
                        </strong>
                        <div className="mt-8 lg:flex justify-between">
                            <div className="max-w-[35ch]">
                                <h1 className="text-2xl font-bold">
                                    {name}
                                </h1>
                            </div>
                            <div className="">
                                <p className="text-md ">New Price: <span className='line-through'>{newPrice} BDT</span> </p>
                                <p className="text- font-semibold">Now Price: {price} BDT</p>
                                <p>Used: {usedTime}</p>
                            </div>
                        </div>
                        <details className="group relative mt-4">
                            <summary className="block">
                                <div>
                                    <div className="prose max-w-none group-open:hidden">
                                        <p>
                                            {details.slice(0, 300)}
                                        </p>
                                    </div>
                                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                                        Read More
                                    </span>
                                </div>
                            </summary>
                            <div className="prose max-w-none pb-6">
                                {details}
                            </div>
                        </details>
                        <form className="mt-8">
                            <fieldset>
                                <legend className="mb-1 text-sm font-medium">Seller Details</legend>
                                <div className="flow-root p-3 border border-gray-400 rounded-md w-max">
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
                            <p>Post: {date}</p>
                            <div className="mt-8 flex">
                                <label
                                    onClick={() => setShowModal(true)}
                                    htmlFor="booking-modal" className="btn btn-warning">Book Now</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showModal &&
                <BookingModal
                    data={data}
                    setShowModal={setShowModal}
                />}
        </section>
    );
};

export default BookDetails;