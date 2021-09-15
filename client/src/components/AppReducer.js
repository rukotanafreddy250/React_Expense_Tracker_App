// const 

export default (state, action) => {
    switch(action.type) {
        case 'TRANSACTIONS_ERROR' :
            return {   
                ...state,
                transactions: action.payload
            }       
        case 'GET_TRANSACTIONS' :
            return {   
                ...state,
                transactions: action.payload
            }       
        case 'DELETE_TRANSACTION' :
            return {   
                ...state,
                transactions: state.transactions.filter( transaction => transaction._id !== action.payload)
                // transactions: action.payload 
            }       
        case 'ADD_TRANSACTION' :  
            return {   
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default: 
            return state;     
    }
}    