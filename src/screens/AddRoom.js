import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import Swal from 'sweetalert2'

function AddRoom() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [maxcount, setMaxcount] = useState('')
  const [rentperday, setRentperday] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [URL1, setURL1] = useState('')
  const [URL2, setURL2] = useState('')
  const [URL3, setURL3] = useState('')

  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [success, setSuccess] = useState()

  async function register() {
    const room = {
      name,
      description,
      type,
      maxcount,
      rentperday,
      phonenumber,
      URLs: [URL1, URL2, URL3]

    }
    try {
      setLoading(true)
      const result = await axios.post('/api/rooms/addroom', room).data
      setLoading(false)

      setSuccess(true)
      Swal.fire('Congrats', 'Your new room added successfully', 'success').then(result => {
        window.location.href = '/admin'
      })
      console.log(result)
      setName('')
      setDescription('')
      setType('')
      setMaxcount('')
      setRentperday('')
      setPhonenumber('')
      setURL1('')
      setURL2('')
      setURL3('')
    }
    catch (error) {
      console.log(error)
      setLoading(false)
      Swal.fire('Oops', 'Something went wrong', 'error')
      // setError(true)
    }
  }



  return (
    <>
      {loading && (<Loader />)}
      {error && (<Error />)}
      <div className='container justify-content-center mt-5 bs'>
        <Form className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
          {success && (<Success message='Regestration success' />)}
          <div style={{ width: '35rem' }}>            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Room Name</Form.Label>
            <Form.Control type="text" placeholder="Room Name" value={name} onChange={(e) => [setName(e.target.value)]} />
          </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => [setDescription(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rent Per Day</Form.Label>
              <Form.Control type="text" placeholder="Rent Per Day" value={rentperday} onChange={(e) => [setRentperday(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Max person Count</Form.Label>
              <Form.Control type="text" placeholder="Max person Count" value={maxcount} onChange={(e) => [setMaxcount(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" value={phonenumber} onChange={(e) => [setPhonenumber(e.target.value)]} />
            </Form.Group>
          </div>
          <div style={{ width: '35rem' }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" placeholder="Type" value={type} onChange={(e) => [setType(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>First Image URL </Form.Label>
              <Form.Control type="text" placeholder="First Image URL" value={URL1} onChange={(e) => [setURL1(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Second Image URL</Form.Label>
              <Form.Control type="text" placeholder="Second Image URL" value={URL2} onChange={(e) => [setURL2(e.target.value)]} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Third Image URL</Form.Label>
              <Form.Control type="text" placeholder="Third Image URL" value={URL3} onChange={(e) => [setURL3(e.target.value)]} />
            </Form.Group>

            <Button variant="primary" onClick={register}>
              submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default AddRoom