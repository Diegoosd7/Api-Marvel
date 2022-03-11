import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PersonajesSelect.css';
import Header from '../App/components/Header/Header'
import ListaComics from '../App/components/InfoPersonaje/ListaComics'
import Series from '../App/components/InfoPersonaje/Series'
import Eventos from '../App/components/InfoPersonaje/Eventos.jsx'

var nombre;
var description;
var img;
var comics = [];
var titulo;

export default function PersonajesSelect() {
  let params = useParams();
  let idpersonaje = parseInt(params.idpersonaje, 10);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const hash = "79b39bc45ede5e3689d0b2c12862b630";
    const publicKey = "1928dbc9bba11631437d27c1258a8e7a";
    const urlAPI = `http://gateway.marvel.com/v1/public/characters/${idpersonaje}?ts=1&apikey=${publicKey}&hash=${hash}`;
    console.log(urlAPI);
    fetch(urlAPI)
      .then((res) => res.json())
      .then((personaje) => {
        console.log(personaje.data.results);
        setItems(personaje.data.results);
        //console.log(items);
      })
      .catch((err) => console.log(err));
  }, []);
  // {
  //   items.map((item) => {
  //     nombre = item.name;
  //     img = `${item.thumbnail.path}.jpg`;
  //     description = item.description;

  //     // item.comics.items.map((item=>{
  //     //   console.log(item.name)
  //     //   return comics=item.name
  //     // }))
  //     comics = item.comics.items

  //     //console.log(item.comics.items)
  //     // console.log(item.comics.items[0].name)

  //   });
  // }

  return (
    <div>
      <Header />
      {
        items.map((personaje =>
          <div>
            <img src={`${personaje.thumbnail.path}.jpg`} alt="" />
            <h1 className="titulo">{personaje.name}</h1>
            <p className="titulo">{personaje.description}</p>
            <br />
            <p className="titulo">COMICS DONDE APARECE:</p>
            <ListaComics comics={personaje.comics.items} />
            <br />
            <p className="titulo">SERIES DONDE APARECE:</p>
            <Series series={personaje.series.items} />
            <br />
            <p className="titulo">EVENTOS EN LOS QUE HA PARTICIPADO:</p>
            <Eventos eventos={personaje.events.items}/>
          </div>
        ))
      }
      {/* comics.map((item => <p className="titulo">{item.name}</p>)) */}
    </div>
  );
}
