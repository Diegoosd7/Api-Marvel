import React, { useEffect, useState } from "react";
import Header from "../App/components/Header/Header.jsx";
import { useParams } from "react-router-dom";
import "./PersonajeSelect.css"; 

var titulo;
var description ;
var img;


export default function ComicSelect() {
  let params = useParams();
  let idcomic = parseInt(params.idcomic, 10);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const hash = "79b39bc45ede5e3689d0b2c12862b630";
    const publicKey = "1928dbc9bba11631437d27c1258a8e7a";
    const urlAPI = `http://gateway.marvel.com/v1/public/comics/${idcomic}?ts=1&apikey=${publicKey}&hash=${hash}`;
    console.log(urlAPI);
    fetch(urlAPI)
      .then((res) => res.json())
      .then((comic) => {
        console.log(comic.data.results);
        setItems(comic.data.results);
        console.log(items);
      })
      .catch((err) => console.log(err));
  }, []);
  {
    items.map((item) => {
      //<div className="titulo">{item.description}</div>;
      /*console.log(item.name);
      console.log(item.description);
      console.log(item.comics);
      console.log(item.stories);
      console.log(item.events);
      console.log(item.series); */
      titulo = item.title ;
      img = `${item.thumbnail.path}.jpg`;
      description = item.description ;
    });
  }

  console.log(titulo);
  return (
    <div>
      <Header />
      <div className="cajaFoto">
        <img src={img} className="fotoSelect" alt="" />
      </div>
      <div className="cajaTexto">
        <h1 className="tituloP">{titulo}</h1>
        <div>{description}</div>
      </div>
    </div>
  );
}