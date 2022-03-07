import React from 'react';
import ComicItem from '../ComicItem/ComicItem';
import escudo from '../../img/loading.gif'

function ComicList({ items, isLoading }) {
  return isLoading ? <center><img src={escudo} alt="Escudo Capitán América girando" /></center>
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
