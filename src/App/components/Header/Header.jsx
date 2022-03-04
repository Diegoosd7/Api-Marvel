import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logos/Logo Marvel.png';

const Header = () => {
    return (
        <header>
            <NavLink to="/home"><a href=""><img className="logo" src={logo} alt="Logo Marvel" /></a></NavLink>
            <nav>
                <Link to="/home">INICIO</Link> {' '}
                <Link to="/personajes">PERSONAJES</Link> {' '}
                <Link to="/comics">COMICS</Link>
            </nav>
        </header>
    )
}

export default Header;