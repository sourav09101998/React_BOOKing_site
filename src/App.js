import './App.css';
import Navbar from './components/Navbar';
import BookingScreen from './screens/BookingScreen';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Success from './screens/Success';
import Cancel from './screens/Cancel';
import Profile from './screens/Profile';
import Adminscreen from './screens/Adminscreen';
import LandingPage from './screens/LandingPage';
import ContactPage from './screens/ContactPage';
import AboutUsPage from './screens/AboutUsPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      {/* <Homescreen /> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Homescreen />} />
          <Route path='/book/:id/:checkIn/:checkOut' element={<BookingScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/success" element={<Success />} /> 
          <Route path="/cancel" element={<Cancel />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/admin" element={<Adminscreen />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/about" element={<AboutUsPage />} /> 

        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
