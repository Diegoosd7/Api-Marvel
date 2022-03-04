import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../../img/logos/Logo Marvel.png';

const Header = () => {
  return (
    <header>
        <img className="logo" src={logo} alt="Logo Marvel" />
        <nav>
          <Link to="/personajes">PERSONAJES</Link>
          {' '}
          <Link to="/comics">COMICS</Link>
        </nav>
      </header>
  )
}

export default Header;