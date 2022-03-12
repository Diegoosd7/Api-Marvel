import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
  return (
    <div className="content">
      <div className="cartas--hover">
        <Link to={`/personajeseleccionado/${item.id}`}>
          <img className="cartas--hover__img" src={`${item.thumbnail.path}.jpg`} alt="" />
          <div className="titulo cartas--hover__p">{item.name}</div>
        </Link>
      </div>
    </div>
  );
}

/* NO PONGO EL PROPTYPE DE ITEM PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default CharacterItem;

