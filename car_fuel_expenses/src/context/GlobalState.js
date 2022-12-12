import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js'

// initial state
const initialState = {
    // vidoessa transactions, tässä refuels
    refuels: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
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


    return ( <GlobalContext.Provider value={{
        refuels: state.refuels,
        deleteRefueling
    }}>
        {children}
    </GlobalContext.Provider>);
}