import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'

// initial state
const initialState = {
    // vidoessa transactions, tässä refuels
    refuels: [
        
    ]
}

// create context
export const GlobalContext = createContext(initialState);

//  provider compononent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteRefueling(id) {
        dispatch({
            type: 'DELETE_REFUELING',
            payload: id
        })
    }

    function addRefueling(refueling) {
        dispatch({
            type: 'ADD_REFUELING',
            payload: refueling
        })
    }


    return ( <GlobalContext.Provider value={{
        refuels: state.refuels,
        deleteRefueling,
        addRefueling
    }}>
        {children}
    </GlobalContext.Provider>);
}