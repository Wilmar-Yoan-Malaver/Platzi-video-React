import React from 'react';
import Carousel from './Carousel';
import '../assets/styles/components/CarouselItem.scss';
const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='' alt='photo1' />
    <div className='carousel-item__details'>
      <div>
        <img src='https://img.icons8.com/flat_round/64/000000/play--v1.png' />
        <img src='../assets/icons8-más.svg' alt='icon +' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16 11</p>
    </div>
  </div>
);

export default CarouselItem;
