import React, { Component } from 'react';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Link to='/'>
          <img className='header__img' src={logo} alt='Platzi Video' />
        </Link>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={userIcon} alt='' />
            <p>Perfil</p>
          </div>
          <ul>
            <li><a href='/'>Cuenta</a></li>
            <li><Link to='/login'>Iniciar Sesión</Link></li>
          </ul>
        </div>
      </header>
    );
  }

}
export default Header;