import React from 'react';
import imagen from '../../img/comic.jpg';

function Content() {
  return (
    <div>
      <div className="separacion" />
      <img src={imagen} alt="Heroes Marvel Comic" className="heroes" />
    </div>
  );
}

export default Content;
