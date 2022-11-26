import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { mainContext } from '../Contexts/MainContext';

const WithGoogle = () => {
    const { withGoogle } = useContext(mainContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
    const handleGoogle = () => {
        toast.loading("Logging in...", {
            id: "google"
        });
        withGoogle()
            .then(res => {
                const user = {
                    firstName: res.user.displayName,
                    email: res.user.email,
                    profile: res.user.photoURL,
                    role: 'buyer',
                    uid: res.user.uid
                }
                createUser(user);
            })
            .catch(err => {
                toast.remove('google');
                toast.error(err.message)
            })
    }

    const createUser = (data) => {
        fetch('https://dream-book-server.vercel.app/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove('google');
                    toast.success("Login Successfully")
                    navigate(from, { replace: true });
                } else {
                    toast.remove('google');
                    toast.error(data.message);
                }
            })
    }
    return (
        <button onClick={handleGoogle} className="btn btn-outline w-full">
            <span className=' w-5 mx-1'> <img className='w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" /></span>
            Continue with Google
        </button>
    );
};

export default WithGoogle;