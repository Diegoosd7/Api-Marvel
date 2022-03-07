import React from 'react';
import ComicItem from '../ComicItem/ComicItem';

function ComicList({ items, isLoading }) {
  return isLoading ? <h1 className="titulo">Loading...</h1>
    : (
      <section className="contents2">
        {
            items.map((item) => (
              <ComicItem key={item.id} item={item} />
            ))
        }
      </section>
    );
}

export default ComicList;
