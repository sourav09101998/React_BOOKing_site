import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import AddRoom from './AddRoom';


function Adminscreen() {

    useEffect(() =>{
        if(!JSON.parse(localStorage.getItem('user')).isAdmin){
            window.location.href='/home'
        }
    },[])

    return (
        <div>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <Bookings />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Rooms />
                </Tab>
                <Tab eventKey="conact" title="Contact" >
                    <Users />
                </Tab>
                <Tab eventKey="addroom" title="AddRoom" >
                    <AddRoom />
                </Tab>
            </Tabs>

        </div>
    )
}

export default Adminscreen

export function Bookings() {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await (await axios.get('/api/bookings/getallbookings')).data
                console.log(result)
                setBookings(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h1>Bookings</h1>
                {loading && <Loader />}
                <table className='table table-bordered table-responsive'>
                    <thead className='bs'>
                        <th>Booking Id</th>
                        <th>User Id</th>
                        <th>Room</th>
                        <th>CheckIn Date</th>
                        <th>CheckOut Date</th>
                        <th>Status</th>
                    </thead>
                    <tbody className='bs'>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>

                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.room}</td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export function Rooms() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await (await axios.get('/api/rooms/getallrooms')).data
                console.log(result)
                setRooms(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h1>Rooms</h1>
                {loading && <Loader />}
                <table className='table table-bordered table-responsive'>
                    <thead className='bs'>
                        <th>Room Id</th>
                        <th>Name Id</th>
                        <th>Type</th>
                        <th>Rent per day</th>
                        <th>Max persons count</th>
                        <th>Phone no.</th>
                    </thead>
                    <tbody className='bs'>
                        {rooms.length && (rooms.map(room => {
                            return <tr>

                                <td>{room._id}</td>
                                <td>{room.name}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.maxcount}</td>
                                <td>{room.phonenumber}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await (await axios.get('/api/users/getallusers')).data
                console.log(result)
                setUsers(result)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(false)
            }
        }
        fetchData();
    }, [])

    return (
        <div className='row'>
            <div className='col-md-10'>
                <h1>Users</h1>
                {loading && <Loader />}
                <table className='table table-bordered table-responsive'>
                    <thead className='bs'>
                        <th>User Id</th>
                        <th>Name </th>
                        <th>Email</th>
                        <th>IsAdmin</th>
                        
                    </thead>
                    <tbody className='bs'>
                        {users.length && (users.map(user => {
                            return <tr>

                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}