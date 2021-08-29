import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "../components/AppReducer";


const initialState = {
    transactions : 
        [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}
// create context this is like to create a state for the global level component
export const GlobalContext = createContext(initialState);


// for other component to access our strore is to create a global provider which provides the state for the whole applications

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // useReducer manipules the state that is in use through AppReducer

    // action 
    function deleteTransactions (id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload: id
        })
    }
  
    function addTransactionz (transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransactions,
            addTransactionz
        }
    }>
            {children}
        </GlobalContext.Provider>)
}   

