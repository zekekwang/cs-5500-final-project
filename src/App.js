import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import Shopping from './components/pages/Shopping';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';


function App() {
  return (

    <>
      <Router>

        <Navbar />
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='shopping' element={<Shopping />} />
          <Route path='coffee-basics' element={<CoffeeBasics />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='quiz' element={<Quiz />} />
          
        </Routes>




      </Router>
    </>

  )
}

export default App;