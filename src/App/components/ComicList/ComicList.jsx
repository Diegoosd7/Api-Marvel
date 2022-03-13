import React from 'react';
import PropTypes from 'prop-types';
import ComicItem from '../ComicItem/ComicItem';
import SearchBoxComics from '../SearchBoxComics/SearchBoxComics';
import escudo from '../../img/loading2.gif';

function ComicList({ items, isLoading, search }) {
  return isLoading
    ? SI TODAVÍA NO HA CARGADO LA PÁGINA SE MUESTRA ESA PÁGINA (
    <center>
      <div className="separacion" />
      <h1 className='titulosPrincipales'>CARGANDO...</h1>
      <img src={escudo} alt="Escudo Capitán América girando" />
    </center>
  )
    : (// CUANDO CARGUE SE MUESTRAN LOS COMICS
      <div>
        <h2 className="titulosPrincipales">COMICS</h2>
        <br />
        <SearchBoxComics search={search} /> 
{' '}
{/*Le pasamos como prop la funcion que nos pasaron antes*/}
        <div className="separacion" />
        <section className="listado">
          {
            items.map((item) => (
              // Recorremos el array. Le pasamos cada comic al componente y este nos lo va a pintar
              <ComicItem key={item.id} item={item} />
            ))
          }
        </section>
      </div>
    );
}

// LE METEMOS UNA "VALIDACIÓN" A LAS PROPS QUE NOS PASAN
ComicList.propType = {
  isLoading: PropTypes.bool,
  search: PropTypes.func,
  /* NO PONGO EL PROPTYPE DE ITEMS PORQUE EL ARRAY TIENE MUCHOS DATOS */
};

export default ComicList;
