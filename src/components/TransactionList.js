import React from 'react';  
import { useContext, useReducer } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

import { LastTransation } from './LastTransation';

   

export const TransactionList = () => {    
    const {transactions}  = useContext(GlobalContext);
    const reducer = useReducer(GlobalProvider);
    console.log(transactions);
    return (     
        <div>       
            {        
                transactions.map( (list) => (   
                    <ul id= "list" className="list">
                        <LastTransation key={list.id} list={list} />
                    </ul>
                ))
            }
        </div>
    )
}
