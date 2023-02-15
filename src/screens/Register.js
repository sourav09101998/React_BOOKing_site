import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [DOB, setDOB] = useState('')

  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
        phoneNumber,
        address,
        pinCode,
        DOB
      }
      try {
        setLoading(true)
        const result = await axios.post('/api/users/register', user).data
        console.log(result)
        setLoading(false)
        setSuccess(true)

        setName('')
        setEmail('')
        setPassword('')
        setCpassword('')
        setPhoneNumber('')
        setAddress('')
        setPinCode('')
        setDOB('')
      }
      catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    else {
      alert('password not matched')
    }
  }

  return (
    <>
      {loading && (<Loader />)}
      {error && (<Error />)}
      {/* <div className='container justify-content-center mt-5 bs'>
        <Form>
          {success && (<Success message='Regestration success' />)}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => [setName(e.target.value)]} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => [setEmail(e.target.value)]} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => [setPassword(e.target.value)]} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => [setCpassword(e.target.value)]} />
          </Form.Group>

          <Button variant="primary" onClick={register}>
            Register
          </Button>
        </Form>

      </div> */}
      <div className="modal fade" id="registerModel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form>
              {success && (<Success message='Regestration success' />)}
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-lines-fill fs-3 me-2">User Registration</i>
                </h5>
                <button type="reset" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <span className="badge rounded-pill bg-light text-dark mb-3 text-wrap lh-base">Note: Your details must match with your ID (Aadhaar card, passport, driving license, etc.) that will be required during check-in.
                </span>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control shadow-none" value={name} onChange={(e) => [setName(e.target.value)]} />
                    </div>
                    <div className="col-md-6 p-0">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control shadow-none" value={email} onChange={(e) => [setEmail(e.target.value)]} />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Phone Number</label>
                      <input type="number" className="form-control shadow-none" value={phoneNumber} onChange={(e) => [setPhoneNumber(e.target.value)]} />
                    </div>
                    {/* <div className="col-md-6 p-0">
                      <label className="form-label">Picture</label>
                      <input type="file" className="form-control shadow-none" />
                    </div> */}
                    <div className="col-md-12 p-0">
                      <label className="form-label">Address</label>
                      <textarea className="form-control shadow-none" rows="1" value={address} onChange={(e) => [setAddress(e.target.value)]}></textarea>
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Pin Code</label>
                      <input type="number" className="form-control shadow-none" value={pinCode} onChange={(e) => [setPinCode(e.target.value)]} />
                    </div>
                    <div className="col-md-6 p-0">
                      <label className="form-label" >Date of Birth</label>
                      <input type="date" className="form-control shadow-none" value={DOB} onChange={(e) => [setDOB(e.target.value)]} />
                    </div>
                    <div className="col-md-6 ps-0 mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control shadow-none" value={password} onChange={(e) => [setPassword(e.target.value)]} />
                    </div>
                    <div className="col-md-6 p-0">
                      <label className="form-label">Confirm Password</label>
                      <input type="password" className="form-control shadow-none" value={cpassword} onChange={(e) => [setCpassword(e.target.value)]} />
                    </div>
                    <div className="text-center my-1">
                      <button onClick={register} className="btn btn-dark shadow-none">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register