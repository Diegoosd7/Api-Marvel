import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import escudo from '../../img/loading2.gif'
import SearchBoxPersonajes from '../SearchBoxPersonajes/SearchBoxPersonajes';

function CharacterList({ items, isLoading }) {
  return isLoading
    ?
    <center>
      <div className="separacion" />
      <h1 className='titulo'>CARGANDO...</h1>
      <img src={escudo} alt="Escudo Capitán América girando" />
    </center>
    : (
      <div>
        <h2 className="titulo">PERSONAJES</h2>
        <br />
        {/* <SearchBoxPersonajes /> */}
        <div className="separacion" />
        <section className="contents">
          {
            items.map((item) => (
              <CharacterItem key={item.id} item={item} />
            ))
          }
        </section>
      </div>

    );
}

export default CharacterList;
