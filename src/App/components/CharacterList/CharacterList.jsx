import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import escudo from '../../img/loading2.gif';
import SearchBoxPersonajes from '../SearchBoxPersonajes/SearchBoxPersonajes';

function CharacterList({ items, isLoading, search }) {
  return isLoading
    ? (
      <center>
        <div className="separacion" />
        <h1 className="titulosPrincipales">CARGANDO...</h1>
        <img src={escudo} alt="Escudo Capitán América girando" />
      </center>
    )
    : (
      <div>
        <h2 className="titulosPrincipales">PERSONAJES</h2>
        <br />
        <SearchBoxPersonajes search={search} />
        <div className="separacion" />
        <section className="cartas">
          {
            items.map((item) => (
              <CharacterItem key={item.id} item={item} />
            ))
          }
        </section>
        <div className="separacion" />
        <div className="separacion" />
        <div className="separacion" />
        <div className="separacion" />
      </div>
    );
}

export default CharacterList;
