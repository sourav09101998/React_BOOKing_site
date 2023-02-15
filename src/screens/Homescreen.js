import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import 'antd/dist/reset.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function Homescreen() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [duplicaterooms, setDuplicaterooms] = useState([])
    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [place, setPlace] = useState()
    const [min, setMin] = useState()
    const [max, setMax] = useState()

    // useEffect(() => {
    //     try {
    //         async function fetchData() {
    //             setLoading(true)
    //             const response = await axios.get('/api/rooms/getallrooms');
    //             setRooms(response.data)
    //             console.log(response.data)
    //             setDuplicaterooms(response.data)
    //             setLoading(false)
    //         }
    //         fetchData();
    //     } catch (error) {
    //         setError(true)
    //         console.log(error)
    //         setLoading(false)

    //     }
    // }, []);

    useEffect(() => {
        try {
            async function fetchData() {
                try {
                    setLoading(true)
                    const response = await (await axios.get('/api/rooms/getallrooms')).data

                    console.log(response)
                    setRooms(response)
                    setDuplicaterooms(response)
                    console.log(response)
                    setLoading(false)
                } catch (error) {
                    console.log(error)
                    setLoading(false)
                    setError(false)
                }
            }
            fetchData();
        }
        catch (error) {
            setError(true)
            console.log(error)
            setLoading(false)

        }
    }, [])

    function filterByPlace() {

    }

    function filterByDate(dates) {
        console.log((dates[0]).format('DD-MM-YYYY'))
        console.log((dates[1]).format('DD-MM-YYYY'))
        setCheckIn((dates[0]).format('DD-MM-YYYY'))
        setCheckOut((dates[1]).format('DD-MM-YYYY'))

        var temprooms = [];
        var availability = false;
        for (const room of duplicaterooms) {
            if (room.currentbookings.length > 0) {
                for (const booking of room.currentbookings) {
                    if (!moment(moment((dates[0]).format('DD-MM-YYYY')).isBetween(booking.checkIn, booking.checkOut)) && !moment(moment((dates[1]).format('DD-MM-YYYY')).isBetween(booking.checkIn, booking.checkOut))
                        && (dates[0]).format('DD-MM-YYYY') !== booking.checkIn &&
                        (dates[0]).format('DD-MM-YYYY') !== booking.checkOut &&
                        (dates[1]).format('DD-MM-YYYY') !== booking.checkIn &&
                        (dates[1]).format('DD-MM-YYYY') !== booking.checkOut
                    ) {
                        console.log((dates[1]).format('DD-MM-YYYY'))
                        console.log(booking.checkOut)
                        availability = true;
                    }
                }

            }

            if (availability === true || room.currentbookings.length === 0) {

                temprooms.push(room);
            }
            setRooms(temprooms)
        }
    }


    return (
        <>
            <div class="my-5 px-4">
                <h2 class="fw-bold h-font text-center">OUR ROOMS</h2>

                <div class="h-line bg-dark"></div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-lg-0 mb-4 px-0">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded shadow">
                            <div className="container-fluid flex-lg-column align-items-stretch">
                                <h4 className="mt-2">FILTERS</h4>
                                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#filterDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse flex-column align-items-stretch mt-2" id="filterDropdown">
                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontSize: '18px' }}>CHECK AVAILABILITY</h5>
                                        <label className="form-label">Destination</label>
                                        <input type="text" className="form-control shadow-none" onChange={filterByPlace} />
                                        <label className="form-label" style={{ marginRight: '5rem' }}>Check-in</label>
                                        <label className="form-label">Check-out</label>
                                        <Space>
                                            <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                                        </Space>

                                    </div>
                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontSize: '18px' }}>PRICE</h5>
                                        <div className='d-flex'>
                                            <div className="mb-2">
                                                <label className="form-check-label" htmlFor="f1">Min</label>
                                                <input type="text" id="f1" className="form-control shadow-none me-1" onChange={(e) => setMin(e.target.value)} />
                                            </div>
                                            <div className="mb-2">
                                                <label className="form-check-label" htmlFor="f2">Max</label>
                                                <input type="text" id="f1" className="form-control shadow-none me-1" onChange={(e) => setMax(e.target.value)} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="border bg-light p-3 rounded mb-3">
                                        <h5 className="mb-3" style={{ fontSize: '18px' }}>Max Person</h5>
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <label className="form-label">Count</label>
                                                <input type="number" className="form-control shadow-none me-auto" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="col-lg-9 col-md-12 px-4">
                        {/* <div className='container'>
                            <div className='row mt-5'>
                                <div className='col-md-3'>
                                    <Space>
                                        <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                                    </Space>

                                </div>
                            </div>
                        </div> */}
                        <div className='row justify-content-center'>
                            {loading ? <Loader /> : rooms.length > 1 ? (rooms.map((room) => {
                                return <div className='col-md-9' key={room._id}>
                                    <Room room={room} checkIn={checkIn} checkOut={checkOut} />
                                </div>
                            })) : <Error />}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Homescreen