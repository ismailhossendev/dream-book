import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { mainContext } from '../../../Contexts/MainContext';
import MyOrders from '../Products/MyOrders';
import MyProducts from '../Products/MyProducts';

const UserDashboard = () => {
    const { user,loading } = useContext(mainContext);
    const location = useLocation();
    if (user?.role === "seller") {
        return <MyProducts />
    }
    if (user?.role === "buyer") {
        return <MyOrders />
    }
    if(loading){
        return 
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default UserDashboard;