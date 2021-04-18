const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    amountOfInvited: Number,
    amountOfGuests: Number,
    willArrive: String,
    message: String,
    visits: Number,

}, { timestamps: true })

module.exports = mongoose.model('Guests', schema);




