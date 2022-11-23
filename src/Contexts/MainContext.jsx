import React, { createContext } from 'react';

export const mainContext = createContext()
const MainContext = ({ children }) => {
    const value = {}

    
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;