import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { mainContext } from '../Contexts/MainContext';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(mainContext);
    const location = useLocation();
    if (loading) {
        return toast.loading('Loading...', {
            id: 'loading'
        })
    } else {
        toast.remove('loading')
    }

    if (user && user?.role === "buyer") {
        return children;
    }
    toast.remove('loading')
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default BuyerRoute;