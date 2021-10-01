const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');


dotenv.config({ path: './config/config.env'});

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

const TransactionRoute = require('./routes/transactionRoute');
const connectDB  = require('./config/db');

connectDB();
fgkldfkd 

app.use(express.json());
   
app.use('/api/v1/transactions', TransactionRoute);

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
    

const PORT = process.env.PORT || 5000;   
// Mongoose.connect();
app.listen(PORT, () => {
    console.log(`Server Running in ${ process.env.NODE_ENV} On Port ${process.env.PORT}`.underline.yellow.bold);
});
   
      