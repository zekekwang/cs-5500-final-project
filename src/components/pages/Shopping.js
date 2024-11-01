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
import img11 from './ShoppingImages/11.png';
import img12 from './ShoppingImages/12.png';
import img13 from './ShoppingImages/13.png';
import img14 from './ShoppingImages/14.png';
import img15 from './ShoppingImages/15.png';
import img16 from './ShoppingImages/16.png';
import img17 from './ShoppingImages/17.png';
import img18 from './ShoppingImages/18.png';
import img19 from './ShoppingImages/19.png';
import img20 from './ShoppingImages/20.png';
import img21 from './ShoppingImages/21.png';

const coffeeProducts = [
  { image: img1, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img2, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img3, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img4, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img5, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img6, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img7, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img8, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img9, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img10, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img11, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img12, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img13, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img14, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img15, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img16, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img17, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img18, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
  { image: img19, title: 'Coffee 1', description: 'Description 1', price: '$25.56' },
  { image: img20, title: 'Coffee 2', description: 'Description 1', price: '$25.56' },
  { image: img21, title: 'Coffee 3', description: 'Description 1', price: '$25.56' },
];


const Shopping = () => {
    const [currentRow, setCurrentRow] = useState(0);
  
    const handleNextRow = () => {
      setCurrentRow(currentRow + 1);
    };
  
    const displayProducts = coffeeProducts.slice(currentRow * 3, currentRow * 3 + 3);
  
    return (
      <div className="shopping-page">
        <div className="product-row">
          {displayProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="button-container">
          {currentRow < 3 ? (
            <>
              <button className="thumbs-up-button" onClick={handleNextRow}>👍</button>
              <button className="no-button" onClick={handleNextRow}>👎</button>
            </>
          ) : currentRow < 6 ? (
            <button className="another-batch-button" onClick={handleNextRow}>Another Batch</button>
          ) : null}
        </div>
      </div>
    );
  };
  
  export default Shopping;