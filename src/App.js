import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import Shopping from './components/pages/Shopping';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import Intro from './components/pages/Intro';
import { db, ref, set, remove, serverTimestamp } from './components/pages/firebase';


function App() {
    useEffect(() => {
      console.log("useEffect has been triggered");  
      const visitorId = `visitor_${Date.now()}`;
      const visitorRef = ref(db, 'visitors/' + visitorId);

      set(visitorRef, {
        id: visitorId,
        createdAt: serverTimestamp(),
        status: "active",
      })
      .then(() => {
        console.log("Visitor data set successfully");
      })
      .catch((error) => {
        console.error("Error setting visitor data: ", error);
      });

       // Remove the visitor document on page unload
      const handleUnload = () => {
        remove(visitorRef).then(() => {
          console.log("Visitor data removed successfully");
        }).catch((error) => {
          console.error("Error removing visitor data: ", error);
        });
      };

    
      window.addEventListener("beforeunload", handleUnload);

      return () => {
        window.removeEventListener("beforeunload", handleUnload);
        handleUnload();  // Ensure removal in case of React unmounting
      };
    }, []);

      return (
        <>
          <Router>

            <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='booking' element={<Booking />} />
              <Route path='shopping' element={<Shopping />} />
              <Route path='intro' element={<Intro />} />
              <Route path='coffee-basics' element={<CoffeeBasics />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='gallery' element={<Gallery />} />
            </Routes>
          </Router>
        </>
      )
}

export default App;