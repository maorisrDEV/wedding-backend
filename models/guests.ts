const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    amountOfGuests: Number,
    willArrive: String,
    message: String
})

module.exports = mongoose.model('Guests', schema);




