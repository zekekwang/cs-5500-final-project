// Intro.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { ref, update } from 'firebase/database';
import './Intro.css';

import arabica from './ShoppingImages/arabica.png';
import excelsa from './ShoppingImages/excelsa.png';
import liberica from './ShoppingImages/liberica.png';
import robusta from './ShoppingImages/robusta.png';

const introPages = [
  { image: arabica, title: "Our Heritage", text: "Introduction to Arabica coffee. Known for its smooth, slightly acidic taste." },
  { image: excelsa, title: "Excelsa Coffee", text: "Excelsa coffee: Unique in flavor, often described as fruity and tart." },
  { image: liberica, title: "Liberica Coffee", text: "Liberica coffee: Bold and smoky, with floral and fruity undertones." },
  { image: robusta, title: "Robusta Coffee", text: "Robusta coffee: Strong and bitter, perfect for espresso lovers." }
];

const Intro = ({visitorId}) => {

  

  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(Date.now());
  const [stayTimes, setStayTimes] = useState([0, 0, 0, 0]); 

  const handleNext = async() => {

    console.log('handle next row triggered');

      const userstaytime = Date.now() - startTime;
      const newStayTimes = [...stayTimes];
      newStayTimes[currentPage] = userstaytime;
      setStayTimes(newStayTimes);

    if (currentPage < introPages.length - 1) {
      if(visitorId){
        const visitorRef = ref(db, 'visitors/' + visitorId);
      try {
        await update(visitorRef, { userstaytime : newStayTimes });
        console.log("User stay time updated:", newStayTimes);
      } catch (error) {
        console.error("Error updating user stay time:", error);
      }
      }else{
        console.error("Visitor ID is missing, cannot update Firestore.");
      }

      setStayTimes(newStayTimes);
      setCurrentPage(currentPage + 1);
    } else {
      const userstaytime = Date.now() - startTime;
      const newStayTimes = [...stayTimes];
      newStayTimes[currentPage] = userstaytime;
      setStayTimes(newStayTimes);

      if(visitorId){
        const visitorRef = ref(db, 'visitors/' + visitorId);
      try {
        await update(visitorRef, { userstaytime : newStayTimes});
        console.log("User stay time updated:", newStayTimes);
      } catch (error) {
        console.error("Error updating user stay time:", error);
      }
      }else{
        console.error("Visitor ID is missing, cannot update Firestore.");
      }
      navigate('/shopping'); // Navigate to the Shopping page
    }
  };

      
  useEffect(() => {
    if (!visitorId) {
      console.error("Visitor ID is missing in Intro component.");
    } else {
      setStartTime(Date.now());
      console.log("Visitor ID in Intro component:", visitorId);
    }
  }, [currentPage]);


  return (
    <div className="intro-container">
      <div className="image-section">
        <img src={introPages[currentPage].image} alt={introPages[currentPage].title} className="intro-image" />
      </div>
      <div className="text-section">
        <h2 className="intro-title">{introPages[currentPage].title}</h2>
        <p className="intro-text">{introPages[currentPage].text}</p>
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Intro;
