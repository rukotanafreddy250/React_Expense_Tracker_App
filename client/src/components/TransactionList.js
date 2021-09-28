import React from 'react';  
import { useContext, useReducer, useEffect } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

import { LastTransation } from './LastTransation';

                 asdfa
   
export const TransactionList = () => {    
    const { transactions, getTransactions }  = useContext(GlobalContext);
    const reducer = useReducer(GlobalProvider);
    
    console.log(transactions);
    useEffect( () => {      
        getTransactions();       
        //eslint-diasable-next-line react-hoocks/exhaustive
    }, []);
       
    return (     
        <div>       
            {        
                transactions.map( (list) => (   
                    <ul id= "list" className="list">
                        <LastTransation key={list._id} list={list} />
                    </ul>
                ))
            }
        </div>
    )
}
