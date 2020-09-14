import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia Sesión</h2>
      <form className='login__container--form' action=''>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar Sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' name='' id='cbox1' value='checlbox' /> Recuerdame
          </label>
          <a href='#'>Olvide mi Contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia Sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          Inicia Sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta <a href='../registro/register.html'>Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
