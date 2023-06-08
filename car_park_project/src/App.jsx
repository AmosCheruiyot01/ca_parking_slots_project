import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Authentification from './pages/authentification'
import Dashboard from './pages/dashboard';
import Booking_form from './pages/booking_form';
import Payment from './pages/payment';
import NavBar from './components/navBar';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
<Route path='/dashboard' element={<Dashboard/>}/>
<Route path='/login' element={<Authentification/>}/>
<Route path='/booking_form' element={<Booking_form/>}/>
<Route path='/payment' element={<Payment/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
