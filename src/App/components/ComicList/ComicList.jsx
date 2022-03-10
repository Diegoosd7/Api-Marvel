import React from 'react';
import ComicItem from '../ComicItem/ComicItem';
import SearchBoxComics from '../SearchBoxComics/SearchBoxComics';
import escudo from '../../img/loading2.gif'

function ComicList({ items, isLoading, search }) {
  return isLoading
    ?
    <center>
      <div className="separacion" />
      <h1 className='titulo'>CARGANDO...</h1>
      <img src={escudo} alt="Escudo Capitán América girando" />
    </center>
    : (
      <div>
        <h2 className="titulo">COMICS</h2>
        <br />
        <SearchBoxComics search={search}/>
        <div className="separacion" />
        <section className="contents2">
          {
            items.map((item) => (
              <ComicItem key={item.id} item={item} />
            ))
          }
        </section>
      </div>
    );
}

export default ComicList;
