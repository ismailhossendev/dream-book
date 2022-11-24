import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase';

export const mainContext = createContext()
const auth = getAuth(app);

const MainContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const gProvider = new GoogleAuthProvider()


    useEffect(() => {
        const unlink = onAuthStateChanged(auth, result => {
            if (result) {
                setUser(result)
            } else {
                setUser(null)
            }
        })
        return () => unlink();
    }, [])

    const emailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const withGoogle = () => {
        return signInWithPopup(auth, gProvider);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const value = { emailPassword, withGoogle, user, login }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;