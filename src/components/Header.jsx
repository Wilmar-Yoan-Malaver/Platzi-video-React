import React from 'react';
import '../assets/styles/components/Header.scss';
const Header = () => (
  <header className='header'>
    <img className='header__img' src='../assets/logo-platzi.png' alt='image logo' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='../assets/user-icon.png' alt='Image  perfil' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='#'>Cuenta</a>
        </li>
        <li>
          <a href='#'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;