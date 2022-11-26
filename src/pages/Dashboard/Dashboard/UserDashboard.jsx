import React, { useContext } from 'react';
import { mainContext } from '../../../Contexts/MainContext';
import MyProducts from '../Products/MyProducts';

const UserDashboard = () => {
    const { user } = useContext(mainContext);

    if (user?.role === "seller") {
        return <MyProducts />
    }

    return (
        <div>

        </div>
    );
};

export default UserDashboard;