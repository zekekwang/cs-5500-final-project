// Intro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < introPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigate('/shopping'); // Navigate to the Shopping page
    }
  };

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
