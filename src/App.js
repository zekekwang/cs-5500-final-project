import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { db } from './components/pages/firebase';
import { ref, set, remove, serverTimestamp } from 'firebase/database';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking';
import Shopping from './components/pages/Shopping';
import CoffeeBasics from './components/pages/CoffeeBasics';
import SignUp from './components/pages/SignUp';
import Gallery from './components/pages/Gallery';
import Intro from './components/pages/Intro';



function App() {
    const [visitorId, setVisitorID] = useState(null)
    
    useEffect(() => {
      console.log("useEffect has been triggered");  
      let storedVisitorId = localStorage.getItem("visitorId");
      

    if (!storedVisitorId) {
      const storedVisitorId = `visitor_${Date.now()}`;
      localStorage.setItem("visitorId", storedVisitorId); // Save it to local storage

      const visitorRef = ref(db, 'visitors/' + storedVisitorId);

      set(visitorRef, {
        id: storedVisitorId,
        createdAt: serverTimestamp(),
        userstaytime: [0, 0, 0, 0], // Initialize userstaytime as a 4-element array
        status: "active",
      })
      .then(() => {
        console.log("Visitor data set successfully in Realtime Database");
      })
      .catch((error) => {
        console.error("Error setting visitor data in Realtime Database:", error);
      });
    }

    setVisitorID(storedVisitorId);

       // Remove the visitor document on page unload
       const handleUnload = () => {
        const visitorRef = ref(db, 'visitors/' + storedVisitorId);
        remove(visitorRef)
          .then(() => {
            console.log("Visitor data removed successfully from Realtime Database");
          })
          .catch((error) => {
            console.error("Error removing visitor data from Realtime Database:", error);
          });
      };
  
      window.addEventListener("beforeunload", handleUnload);

      return () => {
        window.removeEventListener("beforeunload", handleUnload);
        handleUnload();  // Ensure removal in case of React unmounting
      };
    }, [visitorId]);

    if (!visitorId) {
      console.log('waiting');
      return <div>Loading...</div>; // Display a loading screen until visitorId is ready
    }

    console.log("Final visitorId in App.js before rendering:", visitorId);

      return (
        <>
          <Router>

            <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='booking' element={<Booking />} />
              <Route path='shopping' element={<Shopping visitorId={visitorId} />} />
              <Route path="intro" element={<Intro visitorId={visitorId} />} />
              <Route path='coffee-basics' element={<CoffeeBasics />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='gallery' element={<Gallery />} />
            </Routes>
          </Router>
        </>
      )
}

export default App;