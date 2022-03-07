import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logos/Logo Marvel.png';

function Header() {
  return (
    <header>
      <NavLink to="/home"><a href=""><img className="logo" src={logo} alt="Logo Marvel" /></a></NavLink>
      <nav>
        <Link to="/home">INICIO</Link>
        <i class="glyphicon glyphicon-home" id="icono1"></i>
        {' '}
        <Link to="/personajes">PERSONAJES</Link>
        <i class="glyphicon glyphicon-user" id="icono2"></i>
        {' '}
        <Link to="/comics">COMICS</Link>
        <i class="glyphicon glyphicon-book" id="icono3"></i>
      </nav>
    </header>
  );
}

export default Header;
