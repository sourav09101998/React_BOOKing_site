const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({

    room: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    totalamount: {
        type: Number,
        required: true
    },
    totaldays: {
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    },
}, { timestamps: true, }
)

const bookingModel =mongoose.model('bookings',bookingSchema)
module.exports=bookingModel