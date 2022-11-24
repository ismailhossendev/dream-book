import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareComponents/Footer';
import Header from '../ShareComponents/Header';

const Main = () => {
    return (
        <div className=''>
            <div className="container mx-auto">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;