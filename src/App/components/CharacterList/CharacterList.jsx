import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import escudo from '../../img/loading.gif'

function CharacterList({ items, isLoading }) {
  return isLoading ? <center><img src={escudo} alt="Escudo Capitán América girando" /></center>
    : (
      <section className="contents">
        {
          items.map((item) => (
            <CharacterItem key={item.id} item={item} />
          ))
        }
      </section>
    );
}

export default CharacterList;
