import React from 'react';
import AdProducts from './AdProducts';
import BuyCategories from './BuyCategories';
import HeroCarousel from './HeroCarousel';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='space-y-4'>
            <HeroCarousel />
            <AdProducts />
            <BuyCategories />
            <Testimonials />
        </div>
    );
};

export default Home;