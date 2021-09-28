import React, { createContext, useContext, useReducer } from "react";
import axios from 'axios'
import AppReducer from "../components/AppReducer";


//  asldkfjlkasdjflkadjsflkajsdfasd

   

const initialState = {
    transactions : [],
        // [
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
        // ],
    error : null,
    loading: true
}
// create context this is like to create a state for the global level component
export const GlobalContext = createContext(initialState);

  
// for other component to access our strore is to create a global provider which provides the state for the whole applications
   
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // useReducer manipules the state that is in use through AppReducer
   
    //get transactions    
    async function getTransactions () {
        // const transactions = await axios.get("/api/v1/transactions");
        try{      
            const transactions = await axios.get("/api/v1/transactions");
            dispatch({
                type: 'GET_TRANSACTIONS',        
                payload : transactions.data.data   
            });

        } catch(err) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload : ""/*err.data.error*/
            });
        }
    }


    // action 
    async function deleteTransactions (id) {
        // const transactions = await axios.delete(`/api/v1/transactions/${id}`);
       try{
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type : 'DELETE_TRANSACTION',
                payload: id
            })
       }catch(err) {
        dispatch({
            type : 'TRANSACTIONS_ERROR',
            error: ""/*err.response.data.error*/
        })
       }
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
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransactions,
            addTransactionz
        }
    }>
            {children}
        </GlobalContext.Provider>)
}   

