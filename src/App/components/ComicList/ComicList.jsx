import React from 'react';
import PropTypes from "prop-types";
import ComicItem from '../ComicItem/ComicItem';
import SearchBoxComics from '../SearchBoxComics/SearchBoxComics';
import escudo from '../../img/loading2.gif'

function ComicList({ items, isLoading, search }) {
  return isLoading
    ?
    <center>
      <div className="separacion" />
      <h1 className='titulosPrincipales'>CARGANDO...</h1>
      <img src={escudo} alt="Escudo Capitán América girando" />
    </center>
    : (
      <div>
        <h2 className="titulosPrincipales">COMICS</h2>
        <br />
        <SearchBoxComics search={search}/>
        <div className="separacion" />
        <section className="listado">
          {
            items.map((item) => (
              <ComicItem key={item.id} item={item} />
            ))
          }
        </section>
      </div>
    );
}

ComicList.propType = {
  isLoading: PropTypes.bool,
  search: PropTypes.func,
  /* NO PONGO EL PROPTYPE DE ITEMS PORQUE EL ARRAY TIENE MUCHOS DATOS */
}

export default ComicList;
