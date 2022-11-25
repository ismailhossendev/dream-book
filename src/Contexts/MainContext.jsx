import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase';

export const mainContext = createContext()
const auth = getAuth(app);

const MainContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const gProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unlink = onAuthStateChanged(auth, result => {
            if (result) {
                fetch(`http://localhost:5000/user?email=${result.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUser(data)
                        setLoading(false);

                    })
            } else {
                setUser(null)
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

    const value = { emailPassword, withGoogle, user, login, loading, setLoading }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;