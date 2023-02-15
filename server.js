const express =require('express');

const app =express();

const  dbConfig = require('./db')

const roomRoute = require('./routes/roomRoute')
const userRoute = require('./routes/userRoute')
const bookingRoute = require('./routes/bookingRoute')

app.use(express.json())
app.use('/api/rooms', roomRoute)
app.use('/api/users', userRoute)
app.use('/api/bookings', bookingRoute)
const port =process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port} 🔥🔥🔥`)); 