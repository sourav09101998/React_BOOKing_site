const express = require("express")
const router = express.Router();
const Room = require('../models/room')
const Booking = require('../models/booking')
// const { v4: uuidv4 } = require('uuid')
const stripe = require('stripe')('sk_test_51MNsLnSAnVYnzArXqq0HfamY712prlkmiM7Y9MpZn7g00glt3EYPjOEHT9sW0n3oEQt4x56uu9xGiIoiigMLkvUl00Tfas2dGJ')


router.post("/bookroom", async (req, res) => {
    const { room, userid, checkIn, checkOut, totalamount, totaldays } =
        req.body

    try {
        // const customer = await stripe.customers.create({
        //     email: token.email,
        //     source: token.id,
        // })
        // const payment = await stripe.charges.create(
        //     {
        //         amount: totalamount * 100,
        //         customer: customer.id,
        //         currency: "inr",
        //         receipt_email: token.email,
        //     }
        // )

        // const { product } = req.body;
        const session = await stripe.checkout.sessions.create({
            
            // customer: customer.id,
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: room.name,
                        },
                        unit_amount: totalamount * 100,
                    },
                    quantity: "1", 
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });
        
        res.json({ id: session.id });
        
        if (session) {

            const newbooking = new Booking({
                room: room.name,
                roomid: room._id,
                userid,
                // checkIn : moment(checkIn).format('DD-MM-YYYY'),
                // checkOut : moment(checkOut).format('DD-MM-YYYY'),
                checkIn,
                checkOut,
                totalamount,
                totaldays,
                transactionId: '1234',
            })
            const booking = await newbooking.save()
            const roomtemp = await Room.findOne({ _id: room._id })
            roomtemp.currentbookings.push({
                bookinkid: booking._id,
                checkIn: checkIn,
                checkOut: checkOut,
                userid: userid,
                status: booking.status,
            })
            await roomtemp.save()
            res.send("room booked")
            
        }
        res.send('Payment successfull, Your Room is booked')
        
    } catch (error) {
        return res.status(400).send({
            error: {
                message: error.message,
            },
        });
    }

});

router.post("/getbookingsbyuserid",async(req,res) =>{
    const userid =req.body.userid
    try {
        const bookings = await Booking.find({userid:userid})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({error})
    }
})

router.post('/cancelbooking',async(req,res)=>{
    const {bookingid, roomid} =req.body
    try {
        const bookingitem =await Booking.findOne({_id : bookingid})

        bookingitem.status='cancelled'
        await bookingitem.save()

        const room =await Room.findOne({_id : roomid})
        const bookings =room.currentbookings
        const temp =bookings.filter(booking=> booking.bookingid.toString()!==bookingid)
        room.currentbookings =temp

        await room.save()

        res.send('your booling cancelled successfully')

    } catch (error) {
        return res.status(400).json({error: {
            message: error.message,
        },})
    }
})

router.get('/getallbookings',async(req,res)=>{
    try {
        const booking =await Booking.find()
        res.send(booking)        
    } catch (error) {
        return res.status(400).json({error: {
            message: error.message,
        },})
    }
} )



module.exports = router