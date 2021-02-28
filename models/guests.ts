const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    amountOfGuests: Number,
    willArrive: String
})

module.exports = mongoose.model('Guests', schema);




