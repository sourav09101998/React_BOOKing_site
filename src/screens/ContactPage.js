import React from 'react'

function ContactPage() {
    return (
        <>
            <div class="container">
                <div class="my-5 px-4">
                    <h2 class="fw-bold h-font text-center">CONTACT US</h2>

                    <div class="h-line bg-dark"></div>
                    <p class="text-center mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 mb-5 px-4">
                        <div class="bg-white rounded shadow p-4">

                            <h5>Address</h5>
                            <a href="https://goo.gl/maps/jFdoRUnTvq314zJy6" class="d-inline-block text-decoration-none text-dark mb-2" >
                                <i class="bi bi-geo-alt-fill"></i> XYZ, Ancient City, Polonnaruwa.
                            </a>
                            <h5 class="mt-4">Call us</h5>
                            <a href="tel: +94768799665" class="d-inline-block mb-2 text-decoration-none text-dark"><i class="bi bi-telephone-fill"></i> +94 768799665</a>
                            <br />
                            <a href="tel: +94768799665" class="d-inline-block mb-2 text-decoration-none text-dark"><i class="bi bi-telephone-fill"></i> +94 768799665</a>
                            <h5 class="mt-4">Email</h5>
                            <a href="mailto: dineshslweb@gmail.com" class="d-inline-block mb-2 text-decoration-none text-dark"><i class="bi bi-envelope-fill"></i> dineshslweb@gmail.com</a>

                            <h5 class="mt-4">Follow us</h5>
                            <a href="/" class="d-inline-block text-dark fs-5 me-2">
                                <i class="bi bi-twitter me-1"></i>
                            </a>

                            <a href="/" class="d-inline-block text-dark fs-5 me-2">
                                <i class="bi bi-facebook me-1"></i>
                            </a>

                            <a href="/" class="d-inline-block text-dark fs-5">
                                <i class="bi bi-instagram me-1"></i>

                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-5 px-4">
                        <div class="bg-white rounded shadow p-4">
                            <form>
                                <h5>Send a message</h5>
                                <div class="mb-3">
                                    <label class="form-label" style={{ fontWeight: 500 }}>Name</label>
                                    <input type="text" className="form-control shadow-none" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style={{ fontWeight: 500 }}>Email</label>
                                    <input type="email" class="form-control shadow-none" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style={{ fontWeight: 500 }}>Subject</label>
                                    <input type="text" class="form-control shadow-none" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style={{ fontWeight: 500 }}>Message</label>
                                    <textarea class="form-control shadow-none" rows="5" style={{ resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" class="btn text-white custom-bg mt-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage