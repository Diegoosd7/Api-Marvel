import React from 'react';
import imagen from '../../img/comic.jpg';
import { Carousel } from "react-bootstrap";

function Content() {
  return (
    <div>
      <div className="separacion" />
      <Carousel>
        <Carousel.Item>
          <img src={imagen} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={imagen} alt="Heroes Marvel Comic" className="heroes" />
        </Carousel.Item>
      </Carousel>
      <div className="separacion" />
    </div>
  );
}

export default Content;
