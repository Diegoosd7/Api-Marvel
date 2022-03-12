import React from 'react';
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
  return (
      <div className="cartas--hover">
        <Link to={`/personajeseleccionado/${item.id}`}>
          <img className="cartas--hover__img" src={`${item.thumbnail.path}.jpg`} alt="" />
          <div className="cartas--hover__p">{item.name}</div>
        </Link>
      </div>
  );
}

export default CharacterItem;
