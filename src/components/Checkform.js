import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Room from './Room';
import Loader from './Loader';
import Error from './Error';
import 'antd/dist/reset.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;


function Checkform() {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const [duplicaterooms, setDuplicaterooms] = useState([])
    const [checkIn, setCheckIn] = useState()
    const [checkOut, setCheckOut] = useState()
    const [place, setPlace] = useState()
    const [min, setMin] = useState()
    const [max, setMax] = useState()


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
                    ) {
                        if ((dates[0]).format('DD-MM-YYYY') !== booking.checkIn &&
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
            }

            if (availability === true || room.currentbookings.length === 0) {

                temprooms.push(room);
            }
            setRooms(temprooms)
        }
    }

    return (
        <div>
            < div className="container availability-form" >
                <div className="row">
                    <div className="col-lg-12 bg-white shadow p-4 rounded">
                        <h5 className="col-lg-3">Check Booking Availability</h5>
                        <form>
                            <div className="row align-items-end">
                                <div className="col-lg-2 mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>Destination</label>
                                    <input type="text" placeholder='Enter the Destination...' className="form-control shadow-none" />

                                </div>
                                <div className="col-lg-3 mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>Check-in</label>
                                    <label className="form-label" style={{ fontWeight: '500', marginLeft: '5rem' }}>Check-out</label>
                                    <Space >
                                        <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                                    </Space>
                                </div>

                                <div className="col-lg-2 mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>Max Person</label>
                                    <input type="number" className="form-control shadow-none me-auto" />
                                </div>
                                <div className="col-lg-2 mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>Min</label>
                                    <input type="text" placeholder='Price' className="form-control shadow-none"  onChange={(e) => setMin(e.target.value)}  />

                                </div>
                                <div className="col-lg-2 mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>Max</label>
                                    <input type="text" placeholder='Price' className="form-control shadow-none"   onChange={(e) => setMax(e.target.value)} />

                                </div>
                                <div className="col-lg-1 mb-lg-3 mt-2">
                                    <button type="submit" className="btn btn-primary ">Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkform