import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const LastTransation = (props) => {
    const { deleteTransactions } = useContext(GlobalContext);
    
    const sign = props.list.amount < 0 ? '-' : '+';

    // console.log(props);
    return (   
        <div>
             <li className={props.list.amount < 0 ? 'minus' : 'plus'}>
                {props.list.text} <span>{sign}${Math.abs(props.list.amount) }</span>
                <button onClick={() => deleteTransactions(props.list.id)} className="delete-btn" >x</button>
            </li>  
        </div>
    )
}
