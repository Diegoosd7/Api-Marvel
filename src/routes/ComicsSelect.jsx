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

    async function fetchInfoComic(idcomic){
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
          <div>
            <img src={`${comic.thumbnail.path}.jpg`} alt="" />
            <h1 className="titulo">{comic.title}</h1>
            <p className="titulo">{comic.description}</p>
            <br/>
            <p className="titulo">SERIE A LA QUE PERTENECE: {comic.series.name}</p>
            <br/>
            <p className="titulo">PRECIO</p>
            <Precio precios={comic.prices}/>
            <br/>
            <p className="titulo">PÁGINAS: {comic.pageCount}</p>
            <br/>
            <p className="titulo">PERSONAJES QUE APARECEN</p>
            <ListaPersonajes personajes ={comic.characters.items}/>
            <br/>
            <p className="titulo">CREADORES</p>
            <Creadores creadores={comic.creators.items}/>
            <br/>
            <p className="titulo">HISTORIAS RELACIONADAS CON EL COMIC</p>
            <ListaHistorias historias={comic.stories.items}/>
            <br/>
            <p className="titulo">URL </p>
            <URL enlaces={comic.urls}/>
          </div>
        )
      }
    </div>
  );
}