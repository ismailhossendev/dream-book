import React from 'react';
import { useQuery } from 'react-query';
import Testimonial from './Testimonial';
const Testimonials = () => {
    const { data = [] } = useQuery({
        queryKey: 'testimonials',
        queryFn: () => fetch('https://dream-book-server.vercel.app/reviews')
            .then(res => res.json())
    })

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>
                    <p className="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
                        Read Review from out previews customers with their experience with us.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
                    {
                        data.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;