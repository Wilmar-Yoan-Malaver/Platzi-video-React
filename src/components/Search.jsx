import React from 'react';
import '../assets/styles/components/Search.scss';

const main_tittle_text = '¿Que quieres ver hoy';
const main_input_placeholder = 'Buscar...';
const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{main_tittle_text}</h2>
    <input className='input' type='text' placeholder={main_input_placeholder} />
  </section>
);

export default Search;
