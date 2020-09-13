import React from 'react';

import '../assets/styles/components/CarouselItem.scss';
// import playIcon from '../assets/static/logo-platzi.png';
import plusIcon from '../assets/static/icons8-mas.svg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img src='https://img.icons8.com/flat_round/64/000000/play--v1.png' />
        <img src={plusIcon} alt='icon +' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
