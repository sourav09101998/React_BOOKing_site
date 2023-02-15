import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import Swal from 'sweetalert2'

import StripeCheckout from 'react-stripe-checkout';

function BookingScreen({ match }) {
    const [room, setRoom] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    let { id, checkIn, checkOut } = useParams();

    const fromdate = moment(checkIn, 'DD-MM-YYYY')
    const todate = moment(checkOut, 'DD-MM-YYYY')
    const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1
    const [totalamount, setTotalamount] = useState()
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = (await axios.post('/api/rooms/getroombyid', { roomid: id })).data;
                setTotalamount(totaldays * response.rentperday)
                setRoom(response)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error)

            }
        }
        fetchData();

    }, []);



    async function onToken(token) {
        console.log(token)
        const bookingDetailes = {
            room,
            userid: JSON.parse(localStorage.getItem('user'))._id,
            checkIn,
            checkOut,
            totalamount,
            totaldays,
            token,

        }
        try {
            setLoading(true)
            const result = await axios.post('/api/bookings/bookroom', bookingDetailes)
            setLoading(false)
            Swal.fire('Cogratulations', 'Your Room Booked Successfully', 'success').then(result=>{window.location.href='/profile'})
            console.log(result)
        } catch (error) {
            setLoading(false)
            Swal.fire('Oops', 'Somthig went Wrong', 'error')

        }
    }

    // const makePayment = async () => {
    //     const stripe = await loadStripe("pk_test_51MNsLnSAnVYnzArXHuEoM20P9a4JYOvLzQT6LlbZcCP4pBLdXgY3nO19dQnRVMZb0Hq1PxucGgsp72KqRRuAiusR00ISMS49is");
    //     const headers = {
    //         "Content-Type": "application/json",
    //     };
    //     const bookingDetailes = {room,
    //         userid: JSON.parse(localStorage.getItem('user'))._id,
    //         checkIn,
    //         checkOut,
    //         totalamount,
    //         totaldays,
    //         headers,

    //     }

    //     try {

    //         const response = await axios.post('/api/bookings/bookroom', bookingDetailes)
    //         const session = await response.json();


    //         const result = stripe.redirectToCheckout({
    //             sessionId: session.id,
    //         });

    //         if (result.error) {
    //             console.log(result.error);
    //         }
    //     } catch (error) {

    //     }
    // };

    return (
        <div className='m-5'>
            {loading ? <Loader /> : room ? (<div>

                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-5'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' alt='img' />
                    </div>

                    <div className='col-md-5'>
                        <div style={{ textAlign: 'right' }}>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name :{JSON.parse(localStorage.getItem('user')).name} </p>
                                <p>From Date : {checkIn} </p>
                                <p>To Date : {checkOut} </p>
                                <p>Max Count : {room.maxcount}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total days :{totaldays} </p>
                                <p>Rent per day : ₹{room.rentperday} </p>
                                <p>Total Amount : ₹{totalamount}</p>
                            </b>

                        </div>

                        <div style={{ float: 'right' }}>

                            <StripeCheckout
                                amount={totalamount * 100}
                                token={onToken}
                                stripeKey="pk_test_51MNsLnSAnVYnzArXHuEoM20P9a4JYOvLzQT6LlbZcCP4pBLdXgY3nO19dQnRVMZb0Hq1PxucGgsp72KqRRuAiusR00ISMS49is"
                            >
                                <button className='btn btn-primary'>Pay Now</button>
                            </StripeCheckout>
                            {/* <Button variant="primary" onClick={makePayment}>
                                Pay Now
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>)
                : <Error />
            }
        </div>
    )
}

export default BookingScreen