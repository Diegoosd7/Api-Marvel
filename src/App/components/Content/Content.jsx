import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen1 from '../../img/imagenes/comic.jpg';
import imagen2 from '../../img/imagenes/personajesComics.jpg';
import imagen3 from '../../img/imagenes/personajesComics2.jpg';

function Content() {
  return (
    <div>
      <div className="separacion" />
      <Carousel>
        <Carousel.Item>
          <img src={imagen1} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen2} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen3} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
      </Carousel>
      <div className="separacion" />
    </div>
  );
}

export default Content;
