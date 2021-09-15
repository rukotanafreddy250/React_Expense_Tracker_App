const TransactionModel = require('../models/Transaction');


exports.indexController = async (req, res) => {
    try {
        const transactions = await TransactionModel.find();
        return res.status(200).json({
            sucess: true,
            count: transactions.length,
            data: transactions
        });
    }catch(err) {
        return res.status(500).json({
            success:false,
            error: 'Server Error' 
        })
    }
}


exports.addTransaction = async (req, res) => {
    try{
        const { text, amount } = req.body;
        const transactions = await TransactionModel.create(req.body);
        return res.status(200).json({
            success: true,
            data: transactions
        }); 
    }catch(err) {
        console.log(err.errors);
        console.log(err.name);
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map( val => val.message);
            return res.status(404).json({
                success: false,
                error: messages
            });
        }else{
            return res.status(500).json({
                success: false,
                error: `Server Error ${err.message}`
            });
        }
    }
}



exports.deleteTransaction =async (req, res) => {
    try{
        const transaction = await TransactionModel.findById(req.params.id);
        if(!transaction){
            return res.status(400).json({
                success: false,
                error: 'No transaction found'
            });
        }else{
            await transaction.remove();
            return res.status(400).json({
                success: true,
                data: {
                    message: 'Transaction deleted...'
                }
            }); 
        }
    }catch(err) {
        return res.status(500).json({
            success: false,
            error: `Server Error ${err.message}` 
        }); 
    }
}
