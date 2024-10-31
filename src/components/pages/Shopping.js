import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import './Shopping.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./ShoppingImages', false, /\.(png|jpe?g|svg)$/));

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
            {/* Access the image source using src.default in case it’s a module */}
            <img src={src.default} alt={`Image ${index + 1}`} className="shopping-image" />
            <button className="like-button" onClick={() => handleLike(index)}>Like</button>
          </div>
        ))}
      </div>
      <div ref={loadMoreRef} className="load-more-trigger" />
    </div>
  );
};

export default Shopping;
