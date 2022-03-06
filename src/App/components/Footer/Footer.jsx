import React from 'react';
import {Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../img/logos/fb.png';
import twitter from '../../img/logos/tw.png';
import instagram from '../../img/logos/inst.png';
import youtube from '../../img/logos/youtube.png';



const Footer = () => {
    return (
        <footer>
            <center>
                    <a href="https://www.facebook.com/marvel" target="_blank" rel="noopener noreferrer">
                        <img className="img" src={facebook} alt="facebook" width="50px" height="50px" />
                </a>
                <a href="https://www.twitter.com/marvel" target="_blank" rel="noopener noreferrer">
                        <img className="img" src={twitter} alt="facebook" width="50px" height="50px" />
                </a>
                <a href="https://www.instagram.com/marvel" target="_blank" rel="noopener noreferrer">
                        <img className="img ig" src={instagram} alt="facebook" width="50px" height="50px" />
                </a>
                <a href="https://www.youtube.com/marvel" target="_blank" rel="noopener noreferrer">
                        <img className="img" src={youtube} alt="facebook" width="50px" height="50px" />
                </a>
                <p>@2022 Marvel, Inc. All Rights Reserved. </p>
            </center>
        </footer>
    )
}

export default Footer;