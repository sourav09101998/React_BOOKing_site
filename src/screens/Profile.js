
import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])


    return (
        <>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                style={{ background: 'blue' }}
            >
                <Tab eventKey="home" title="Profile">

                    <h1>Profile</h1>
                    <div className='bs'>
                        <br />
                        <h1>Name: {user.name}</h1>
                        <h1>Email: {user.email}</h1>
                        <h1>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</h1>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Booking">
                    <h1>Booking</h1>
                    <MyBookings />
                </Tab>

            </Tabs>
        </>
    )
}

export default Profile

export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('user'))._id
    // let { id } = useParams()
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const rooms = await (await axios.post('/api/bookings/getbookingsbyuserid', { userid: user })).data;
                console.log(rooms)
                setBookings(rooms)
                setLoading(false)
            }
            catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    async function cancelbooking(bookingid, roomid) {
        try {
            setLoading(true)
            const result = await (await axios.post('/api/bookings/cancelbooking', { bookingid, roomid })).data;
            console.log(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && (<Loader />)}
                    {bookings && (bookings.map(booking => {
                        return <div className='bs'>
                            <h2>{booking.room}</h2>
                            <p><b>BookingId</b>: {booking._id}</p>
                            <p><b>checkIn</b>: {booking.checkIn}</p>
                            <p><b>checkOut</b>: {booking.checkOut}</p>
                            <p><b>Amount</b>: {booking.totalamount}</p>
                            <p><b>Status</b>: {booking.status === 'booked' ? 'CONFIRMED' : 'CANCELLED'}</p>
                            {booking.status !=='cancelled' && (<div className='text-right'>
                                <button className='btn btn-primary' onClick={() => { cancelbooking(booking._id, booking.roomid) }}>CANCLE BOOKING</button>
                            </div>)}
                        </div>
                    }))}
                </div>
            </div>

        </div>
    )
}