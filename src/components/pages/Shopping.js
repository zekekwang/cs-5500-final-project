import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './Shopping.css';
import img1 from './ShoppingImages/1.png';
import img2 from './ShoppingImages/2.png';
import img3 from './ShoppingImages/3.png';
import img4 from './ShoppingImages/4.png';
import img5 from './ShoppingImages/5.png';
import img6 from './ShoppingImages/6.png';
import img7 from './ShoppingImages/7.png';
import img8 from './ShoppingImages/8.png';
import img9 from './ShoppingImages/9.png';
import img10 from './ShoppingImages/10.png';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
]

const Shopping = () => {
    const [visibleImages, setVisibleImages] = useState(4);
    const loadMoreRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setVisibleImages((prev) => Math.min(prev + 4, images.length));
        }
      });
  
      if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    const handleLike = (index) => {
      console.log(`Image ${index + 1} liked!`);
    };
  
    return (
      <div className="shopping-container">
        <div className="image-grid">
          {images.slice(0, visibleImages).map((src, index) => (
            <div className="image-card" key={index}>
              <img src={src} alt={`Image ${index + 1}`} className="shopping-image" />
              <button className="like-button" onClick={() => handleLike(index)}>Like</button>
            </div>
          ))}
        </div>
        <div ref={loadMoreRef} className="load-more-trigger" />
      </div>
    );
  };
  
  export default Shopping;