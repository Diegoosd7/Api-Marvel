import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';

function CharacterList({ items, isLoading }) {
  return isLoading ? <h1 className="titulo">Loading...</h1>
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
