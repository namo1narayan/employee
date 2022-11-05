const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://namo:mudda@cluster0.skuq5.mongodb.net/NodeJS?retryWrites=true&w=majority", { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');