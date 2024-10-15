import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What you will experience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coffee-plant.jpg'
              text='You will learn all basics about the coffee beans'
              label='Knowledge'
              path='/booking'
            />
            <CardItem
              src='images/roasting.jpg'
              text='Roast your first batch with careful guidance'
              label='Roasting'
              path='/booking'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tasting1.jpg'
              text='Make your own drink with your roasted beans'
              label='Tasting'
              path='/booking'
            />
            <CardItem
              src='images/packaging1.jpg'
              text='Pack and bring your beans home'
              label='Packaging'
              path='/booking'
            />
            <CardItem
              src='images/couple1.JPG'
              text='A moment you will never forget'
              label='Memory'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;