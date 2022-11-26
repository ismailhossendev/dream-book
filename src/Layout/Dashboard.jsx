import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ShareComponents/Header';
import Aside from '../pages/Dashboard/Dashboard/Aside';

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="drawer drawer-mobile">
                <input id="admin-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-2">
                    <Outlet />
                </div>
                <Aside />
            </div>
        </div>
    );
};

export default Dashboard;