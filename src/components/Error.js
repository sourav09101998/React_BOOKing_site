import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Error({message}) {
  return (
    <div>
         <Alert variant="danger">
          Something Error {message}
        </Alert>
    </div>
  )
}

export default Error