import React from "react";
//import CharacterSelect from "../CharacterSelec/CharacterSelect";
//import PersonajesSelect from "../../../routes/PersonajeSelect";
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
  console.log(item);
  return (
    <div className="content">
      <div className="container">
        <Link to={`/personajeseleccionado/${item.id}`}>
          <img className="image" src={`${item.thumbnail.path}.jpg`} alt="" />
          <div className="titulo overlay">{item.name}</div>
        </Link>
      </div>
    </div>
  );
}

export default CharacterItem;
