import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase';
import toast from 'react-hot-toast';

export const mainContext = createContext()
const auth = getAuth(app);

const MainContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const gProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unlink = onAuthStateChanged(auth, result => {
            if (result) {
                fetch(`https://dream-book-server.vercel.app/user?email=${result.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setLoading(false);
                        setUser(data)
                        storeJwt(result.email)
                    })
            } else {
                setUser(null)
                setLoading(false);
                toast.remove('loading')
                localStorage.removeItem('token')
            }
        })
        return () => unlink();
    }, [])

    const emailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const withGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, gProvider);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const storeJwt = email => {
        fetch(`https://dream-book-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(token => {
                localStorage.setItem('token', `Bearer ${token.token}`)
            })
    }

    const value = { emailPassword, withGoogle, user, login, loading, setLoading, logOut }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;