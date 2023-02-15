import React, { useState } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Room({ room, checkIn, checkOut }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row'>
            {/* <div className='col-md-4'>
                <img src={room.imageurls[0]
                } className='smallimg' alt='img' />
            </div>
            <div className='col-md-7'>
                <h1>{room.name}</h1>
                <b>
                    {" "}
                    <p>Max count : {room.maxcount}</p>
                    <p>Phone Number : {room.phonenumber}</p>
                    <p>Type : {room.type}</p>
                </b>

                <div style={{ float: "right" }}>
                    {(checkIn && checkOut) &&
                        <Link to={`/book/${room._id}/${checkIn}/${checkOut}`}>
                            <Button className='btn btn-primary m-2' >Book Now</Button>
                        </Link>}
                    <Button className='btn btn-primary' onClick={handleShow}>View Details</Button>
                </div>
            </div> */}
            <div className="card mb-4 border-0 shadow">
                <h5 className="mt-2">{room.name}</h5>
                <div className="row g-0 p-3 align-items-center">
                    <div className="col-md-5 mb-lg-0 mb-md-0 mb-3">
                        <img src={room.imageurls[0]} className="img-fluid rounded" alt='img' />
                    </div>
                    <div className="col-md-5 px-lg-3 px-md-3 px-0">
                        <div className="features mb-4">
                            <h6 className="mb-1">Features</h6>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                2 Rooms
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                1 Bathroom
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                1 Balcony
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                3 Sofa
                            </span>
                        </div>
                        <div className="Facilities mb-3">
                            <h6 className="mb-1">Facilities</h6>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                Wifi
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                Television
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                AC
                            </span>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                Room Heater
                            </span>
                        </div>
                        <div className="guests">
                            <h6 className="mb-1">Max Person</h6>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                2 Adults
                            </span>

                        </div>
                    </div>
                    <div className="col-md-2 mt-lg-0 mt-md-0 mt-4 text-center">
                        <div className='place' style={{marginBottom: '2rem'}}>
                            <h6 className="mb-1">Place</h6>
                            <span className="badge rounded-pill bg-light text-dark text-wrap">
                                {room.place}
                            </span>
                        </div>
                        <div className='buttons'>

                            <h6 className="mb-4">₹{room.rentperday} per night </h6>
                            {(checkIn && checkOut) &&
                                <Link to={`/book/${room._id}/${checkIn}/${checkOut}`}>
                                    <Button className="btn btn-sm w-100 text-white custom-bg shadow-none mb-2" >Book Now</Button>
                                </Link>}
                            <Button className="btn btn-sm w-100 btn-outline-dark shadow-none" onClick={handleShow}>View Details</Button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose} size='lg' backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel controls={false}>
                        {room.imageurls?.map(url => {
                            return <Carousel.Item key={room._id}>
                                <img
                                    className="d-block w-100 bgimg"
                                    src={url}
                                    alt="slide"
                                />

                            </Carousel.Item>
                        })}

                    </Carousel>
                    <p>{room.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Room