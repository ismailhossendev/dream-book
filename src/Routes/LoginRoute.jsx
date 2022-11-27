import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { mainContext } from '../Contexts/MainContext';

const LoginRoute = ({ children }) => {
    const { user, loading } = useContext(mainContext);
    const location = useLocation();
    if (loading) {
        return
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default LoginRoute;