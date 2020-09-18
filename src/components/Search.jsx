import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const main_tittle_text = '¿Que quieres ver hoy?';
const main_input_placeholder = 'Buscar...';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>{main_tittle_text}</h2>
      <input
        className={inputStyle}
        type='text'
        placeholder={main_input_placeholder}
      />
    </section>
  );
};

export default Search;
