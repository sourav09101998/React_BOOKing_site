import React from 'react'
import Banner from '../components/Banner';
import Checkform from '../components/Checkform';



function LandingPage() {
    return (
        <>
            {/* Carousel Banner */}

            <Banner />

            {/* <!-- check avilability form--> */}

            <Checkform/>

            {/* <!-- Our Rooms --> */}
            <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font" > OUR ROOMS</h2 >
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card border-0 shadow" style={{ maxWidth: '350px', margin: 'auto' }}>
                            <img src="https://cdn.pixabay.com/photo/2016/11/14/02/29/apartment-1822410_960_720.jpg" className="card-img-top" alt='img'/>
                            <div className="card-body">
                                <h5 className="card-title">Simple Room Name</h5>
                                <h6 className="mb-4">₹2000 per night </h6>
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
                                <div className="Facilities mb-4">
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

                                <div className="guests mb-4">
                                    <h6 className="mb-1">Guests</h6>
                                    <span className="badge rounded-pill bg-light text-dark text-wrap">
                                        5 Adults
                                    </span>
                                    <span className="badge rounded-pill bg-light text-dark text-wrap">
                                        4 Children
                                    </span>
                                </div>
                                <div className="rating mb-4">

                                    <h6 className="mb-1">Rating</h6>
                                    <span className="badge rounded-pill bg-light">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                    </span>
                                </div>
                                <div className="d-flex justify-content-evenly mb-2">
                                    <a href="/" className="btn btn-sm btn-outline-dark shadow-none">Book Now</a>
                                    <a href="/" className="btn btn-sm btn-outline-dark shadow-none">More details</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card border-0 shadow" style={{ maxWidth: '350px', margin: 'auto' }}>
                            <img src="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_960_720.jpg" className="card-img-top"  alt='img'/>
                            <div className="card-body">
                                <h5 className="card-title">Simple Room Name</h5>
                                <h6 className="mb-4">₹2000 per night </h6>
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
                                <div className="Facilities mb-4">
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
                                    <div className="guests mb-4">
                                        <h6 className="mb-1">Guests</h6>
                                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                                            5 Adults
                                        </span>
                                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                                            4 Children
                                        </span>

                                    </div>
                                    <div className="rating mb-4">

                                        <h6 className="mb-1">Rating</h6>
                                        <span className="badge rounded-pill bg-light">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-evenly mb-2">
                                        <a href="/" className="btn btn-sm btn-outline-dark shadow-none">Book Now</a>
                                        <a href="/" className="btn btn-sm btn-outline-dark shadow-none">More details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 my-3">
                        <div className="card border-0 shadow" style={{ maxWidth: '350px', margin: 'auto' }}>
                            <img src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg" className="card-img-top" alt='img'/>
                            <div className="card-body">
                                <h5 className="card-title">Simple Room Name</h5>
                                <h6 className="mb-4">₹2000 per night </h6>
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
                                <div className="Facilities mb-4">
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

                                    <div className="guests mb-4">
                                        <h6 className="mb-1">Guests</h6>
                                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                                            5 Adults
                                        </span>
                                        <span className="badge rounded-pill bg-light text-dark text-wrap">
                                            4 Children
                                        </span>
                                    </div>

                                    <div className="rating mb-4">

                                        <h6 className="mb-1">Rating</h6>
                                        <span className="badge rounded-pill bg-light">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-evenly mb-2">
                                        <a href="/" className="btn btn-sm btn-outline-dark shadow-none">Book Now</a>
                                        <a href="/" className="btn btn-sm btn-outline-dark shadow-none">More details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-12 text-center mt-5">
                        <a href="/home" className="btn btn-sm btn-outline-dark rounded-0 fw-bold shadow-none">More Rooms</a>
                    </div>
                </div>
            </div>

            {/* <!-- Our Facilities--> */}

            <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">OUR FACILITIES</h2>

            <div className="container">
                <div className="row justify-content-evenly px-lg-0 px-md-0 px-5">
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                        <img src="./images/Facilities/wifi.svg" width="80px" alt='img'/>
                        <h5 className="mt-3">Wifi</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                        <img src="./images/Facilities/wifi.svg" width="80px" alt='img'/>
                        <h5 className="mt-3">Wifi</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                        <img src="./images/Facilities/wifi.svg" width="80px" alt='img'/>
                        <h5 className="mt-3">Wifi</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                        <img src="./images/Facilities/wifi.svg" width="80px" alt='img'/>
                        <h5 className="mt-3">Wifi</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 text-center bg-white rounded shadow py-4 my-3">
                        <img src="./images/Facilities/wifi.svg" width="80px" alt='img'/>
                        <h5 className="mt-3">Wifi</h5>
                    </div>
                    <div className="col-lg-12 text-center mt-5">
                        <a href="/" className="btn btn-sm btn-outline-dark rounded rounded-0 fw-bold shadow-none">More Facilities >>></a>
                    </div>
                </div>
            </div>

            {/* <!-- Testimonials --> */}

            <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">TESTIMONIALS</h2>

            <div className="container mt-5">
                {/* <!-- Swiper -->  */}
                <div className="swiper swiper-testimonials">
                    <div className="swiper-wrapper mb-5">

                        <div className="swiper-slide bg-white p-4">
                            <div className="profile d-flex align-items-center mb-3">
                                <img src="https://cdn.pixabay.com/photo/2016/11/14/02/29/apartment-1822410_960_720.jpg" width="30px" alt='img'/>
                                <h6 className="m-0 ms-2">Random user1</h6>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="rating">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                            </div>
                        </div>

                        <div className="swiper-slide bg-white p-4">
                            <div className="profile d-flex align-items-center mb-3">
                                <img src="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_960_720.jpg" width="30px" alt='img'/>
                                <h6 className="m-0 ms-2">Random user1</h6>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="rating">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                            </div>
                        </div>

                        <div className="swiper-slide bg-white p-4">
                            <div className="profile d-flex align-items-center mb-3">
                                <img src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg" width="30px" alt='img'/>
                                <h6 className="m-0 ms-2">Random user1</h6>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="rating">
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                                <i className="bi bi-star-fill text-warning"></i>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

            {/* <!-- REach us--> */}

            <h2 className="mt-5 pt-4 mb-4 text-center fw-bold h-font">OUR ROOMS</h2>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
                        <iframe className="w-100 rounded" height="320px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63225.996807740055!2d80.97815907936754!3d7.934196847392783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb456e05e5a4c9%3A0x72cd1cfea9d4d0a9!2sPolonnaruwa%20Ancient%20City!5e0!3m2!1sen!2slk!4v1659525623039!5m2!1sen!2slk" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="col-lg-4 col-md-4 ">
                        <div className="bg-white p-4 rounded">
                            <h5>Call us</h5>
                            <a href="tel: +94768799665" className="d-inline-block mb-2 text-decoration-none text-dark"><i className="bi bi-telephone-fill"></i> +94 768799665</a>
                            <br />
                            <a href="tel: +94768799665" className="d-inline-block mb-2 text-decoration-none text-dark"><i className="bi bi-telephone-fill"></i> +94 768799665</a>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h5>Follow us</h5>
                            <a href="/" className="d-inline-block mb-3" />
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-twitter me-1"></i>Twitter
                            </span>

                            <br />
                            <a href="/" className="d-inline-block mb-3" />
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-facebook me-1"></i>Facebook
                            </span>

                            <br />
                            <a href="/" className="d-inline-block" />
                            <span className="badge bg-light text-dark fs-6 p-2">
                                <i className="bi bi-instagram me-1"></i>Instagram
                            </span>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LandingPage