import React from "react";
import '../../App.css';
import './Shopping.css';

const coffeeBeans = [
  { name: "Arabica", image: require("./ShoppingImages/arabica.png")},
  { name: "Robusta", image: require("./ShoppingImages/robusta.jpg")},
  { name: "Liberica", image: require("./ShoppingImages/liberica.jpg")},
  { name: "Excelsa", image: require("./ShoppingImages/excelsa.png")}
];

const Shopping = () => {
  return (
    <div id="coffee-container">
      {coffeeBeans.map((bean, index) => (
        <div className="bean-card" key={index}>
          <img src={bean.image} alt={bean.name} className="bean-image" />
          <h3>{bean.name}</h3>
          <button className="buy-button">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
