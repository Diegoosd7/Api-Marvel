import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import logo from './img/comic.jpg';
import logo2 from './img/logos/Logo Marvel.png';

export default function App() {
  return (
    <div>
      <header>
        <img className="logo" src={logo2} alt="Logo Marvel" />
        <nav>
          <Link to="/personajes">PERSONAJES</Link>
          {' '}
          <Link to="/comics">COMICS</Link>
        </nav>
      </header>
      <div className="separacion" />
      <img src={logo} alt="Heroes Marvel Comic" className="heroes" />
      <Outlet />
    </div>
  );
}
