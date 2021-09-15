const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/expense-tracker`, {
            useNewUrlParser: true,
            // useFindAndModify: true,
            useUnifiedTopology: false
        });
        console.log(`DB connected...`.underline.cyan.bold);
    }catch(err){
        console.log(`Error: ${err.message} to DB`.red);
        process.exit(1);
    }
}

module.exports = connectDB;

// mongoose.connect(`mongodb://localhost:expenseTracker`, {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useUnifiedTopology: false
// }).then( () => console.log('DB connected...'.cyan.underline.bold))
//   .catch( err => console.log(`Error Connectded to DB '+' ${err.stack}`.red.bold));

// module.exports = mongoose;



// mongoose.connect(`mongodb://localhost:27017/expense-tracker`, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,  
//     // useFindAndModify: false 
// })
//     .then( () => console.log('DB Connected...'.cyan.underline.bold))
//     .catch( err => console.log(`Error Connected To DB '+' ${err.stack}`.red.bold));

// module.exports = mongoose; 