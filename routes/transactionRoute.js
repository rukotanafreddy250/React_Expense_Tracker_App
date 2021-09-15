const express = require('express');
const router = express.Router();

const { connectDB } = require('../config/db');

const {indexController, addTransaction, deleteTransaction} = require('../controllers/transactionController');


router
    .route('/')
    .get(indexController)
    .post(addTransaction);

router
    .route('/:id')
    .delete(deleteTransaction);



module.exports = router;