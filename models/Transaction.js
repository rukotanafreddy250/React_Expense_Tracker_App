const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount : {
        type: Number,
        required: [true, 'Please add a posite or a negative number']
    },
    creatAt : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transaction', transactionSchema);