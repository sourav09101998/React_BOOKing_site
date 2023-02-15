import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
// import Success from '../components/Success';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    // const [success, setSuccess] = useState()

    // async function login() {
    //     const user = {

    //         email,
    //         password,
    //     }
    //     try {
    //         setLoading(true)
    //         const result = await axios.post('/api/users/login', user).data
    //         // setSuccess(true)
    //         setLoading(false)
    //         console.log(result)
    //         localStorage.setItem('currentUser', JSON.stringify(result))
    //         window.location.href = './home'
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //         setError(true)
    //     }
    //     console.log(user)
    // }
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { email, password };
        // send the email and password to the server
        setLoading(true)
        const response = await axios.post('/api/users/login', user);
        // set the state of the user
        setUser(response.data)
        setLoading(false)
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(response.data))
        window.location.href = './'
        console.log(response.data)
    };

    return (
        <>
            {loading && (<Loader />)}
            {/* <div className='container justify-content-center mt-5 bs'>
                <Form onSubmit={handleSubmit}>
                    {error && (<Error message='invalid' />)}
                    {success && (<Success message='Regestration success' />)}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </div> */}
            <div className="modal fade" id="loginModel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title d-flex align-items-center">
                                    <i className="bi bi-person-circle fs-3 me-2">User Login</i>
                                </h5>
                                <button type="reset" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control shadow-none" placeholder="Enter email" value={email} onChange={({ target }) => setEmail(target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control shadow-none" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <button type="submit" className="btn btn-dark shadow-none">LOGIN</button>
                                    <a href="JavaScript: void(0)" className="text-secondary text-decoration-none" >Forgot Password</a>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login