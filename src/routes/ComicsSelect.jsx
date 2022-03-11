import React, { useEffect, useState } from "react";
import Header from "../App/components/Header/Header.jsx";
import { useParams } from "react-router-dom";
import "./ComicsSelect.css";
import Precio from '../App/components/InfoComics/Precio'
import ListaPersonajes from '../App/components/InfoComics/ListaPersonajes'
import Creadores from '../App/components/InfoComics/Creadores'
import ListaHistorias from '../App/components/InfoComics/ListaHistorias'
import URL from '../App/components/InfoComics/URL'
import { infoComic } from '../services/comics';


export default function ComicSelect() {
  let params = useParams();
  let idcomic = parseInt(params.idcomic, 10);

  const [items, setItems] = useState([]);

  useEffect(() => {
    // const hash = "79b39bc45ede5e3689d0b2c12862b630";
    // const publicKey = "1928dbc9bba11631437d27c1258a8e7a";
    // const urlAPI = `http://gateway.marvel.com/v1/public/comics/${idcomic}?ts=1&apikey=${publicKey}&hash=${hash}`;
    // console.log(urlAPI);
    // fetch(urlAPI)
    //   .then((res) => res.json())
    //   .then((comic) => {
    //     console.log(comic.data.results);
    //     setItems(comic.data.results);
    //   })
    //   .catch((err) => console.log(err));

    async function fetchInfoComic(idcomic) {
      let comic = await infoComic(idcomic);
      console.log(comic)
      setItems(comic);
      setLoading(false);
    }

    fetchInfoComic(idcomic);

  }, []);

  return (
    <div>
      <Header />
      {
        items.map(comic =>
          <div className="infoComic">
            <div className="informacion">
              <img src={`${comic.thumbnail.path}.jpg`} className="informacion__img" alt="Portada Comic" />
              <div>
                <h1 className="informacion__div__h1">{comic.title}</h1>
                <p className="informacion__div__p">{comic.description}</p><br />
                <p className="informacion__div__p--titulo">SERIE A LA QUE PERTENECE: <span className="blanco">{comic.series.name}</span></p><br />
                <p className="informacion__div__p--titulo">PÁGINAS: <span className="blanco">{comic.pageCount}</span></p><br />
                <p className="informacion__div__p--titulo">PRECIO:</p><br />
                <Precio precios={comic.prices} />
              </div>
            </div>

            <div className="separacion"></div>

            <div className="informacion2">
              <div>
                <p className="informacion__div__p--titulo">PERSONAJES QUE APARECEN</p>
                <ListaPersonajes personajes={comic.characters.items} />
              </div>
              <div>
                <p className="informacion__div__p--titulo">CREADORES</p>
                <Creadores creadores={comic.creators.items} />
              </div>
              <div>
                <p className="informacion__div__p--titulo">HISTORIAS RELACIONADAS CON EL COMIC</p>
                <ListaHistorias historias={comic.stories.items} />
              </div>

            </div>

            <p className="informacion__div__p--titulo informacion__div__p--centrado">ENLACES DE INFORMACIÓN</p>
            <URL enlaces={comic.urls} />
          </div>
        )
      }
    </div>
  );
}