import React from 'react'
// import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar1 from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from '../screens/Register';
import Login from '../screens/Login';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        // setUser({});
        // setUsername("");
        // setPassword("");
        localStorage.removeItem('user');
        window.location.href = './'
    };
    return (
        <div>

            {/* <Navbar1 variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar1.Brand href="#home">BOOKing</Navbar1.Brand>
                    <Navbar1.Toggle aria-controls="navbar1-dark-example" />
                    <Navbar1.Collapse id="navbar1-dark-example" className='justify-content-end'>
                        <Nav>
                            {user ? (<><NavDropdown id="nav-dropdown-dark-example" title={user.name} menuVariant="dark" >
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown></>) : (<>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={'/register'} >Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/login'}>Login</Link>
                                </li>
                            </>)}
                        </Nav>
                    </Navbar1.Collapse>
                </Container>
            </Navbar1> */}
            <nav className="navbar navbar-expand-lg bg-dark px-lg-3 py-lg-2 shadow-sm sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand me-5 fw-bold fs-3 h-font" href="/">BOOKing</a>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="/home">Rooms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="/">Facilities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="/about">About</a>
                            </li>

                        </ul>
                        <div className="d-flex" role="search">
                            {user ? (<><NavDropdown id="nav-dropdown-dark-example" title={user.name} menuVariant="dark" >
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown></>) : (<>
                                <li className="nav-item">
                                    {/* <Link className="nav-link active" aria-current="page" to={'/register'} >Register</Link> */}
                                    <button type="button" className="btn btn-outline-dark shadow-none me-lg-3 me-2 nav-link" data-bs-toggle="modal" data-bs-target="#loginModel">Login	</button>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={'/login'}>Login</Link> */}
                                    <button type="button" className="btn btn-outline-dark shadow-none nav-link" data-bs-toggle="modal" data-bs-target="#registerModel">Register	</button>
                                </li>
                            </>)}
                        </div>

                    </div>
                </div>
            </nav>
            <Login />
            <Register />

        </div>

    )
}

export default Navbar