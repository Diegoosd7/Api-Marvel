import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PersonajesSelect.css';
import Header from '../App/components/Header/Header'
import ListaComics from '../App/components/InfoPersonaje/ListaComics'
import Series from '../App/components/InfoPersonaje/Series'
import Eventos from '../App/components/InfoPersonaje/Eventos.jsx'
import URL from '../App/components/InfoComics/URL'
import { infoPersonaje } from '../services/personajes';


export default function PersonajesSelect() {
  let params = useParams();
  let idpersonaje = parseInt(params.idpersonaje, 10);

  const [items, setItems] = useState([]);

  useEffect(() => {
    // const hash = "79b39bc45ede5e3689d0b2c12862b630";
    // const publicKey = "1928dbc9bba11631437d27c1258a8e7a";
    // const urlAPI = `http://gateway.marvel.com/v1/public/characters/${idpersonaje}?ts=1&apikey=${publicKey}&hash=${hash}`;
    // console.log(urlAPI);
    // fetch(urlAPI)
    //   .then((res) => res.json())
    //   .then((personaje) => {
    //     console.log(personaje.data.results);
    //     setItems(personaje.data.results);
    //     //console.log(items);
    //   })
    //   .catch((err) => console.log(err));

    async function fetchInfoPersonajes(idpersonaje) {
      let personajes = await infoPersonaje(idpersonaje);
      console.log(personajes);
      setItems(personajes);
      setLoading(false);
    }

    fetchInfoPersonajes(idpersonaje);
  }, []);

  return (
    <div>
      <Header />
      {
        items.map(personaje =>
          <div className="infoPersonaje">
            <div className="info">
              <img src={`${personaje.thumbnail.path}.jpg`} className="info__img" alt="Foto Personaje" />
              <div>
                <h1 className="info__div__h1">{personaje.name}</h1>
                <div className="separacion"></div>
                <p className="info__div__p">{personaje.description}</p>
              </div>
              <div>
                <p className="info__div__p--titulo">COMICS DONDE APARECE:</p>
                <ListaComics comics={personaje.comics.items} />
              </div>
              <div>
                <p className="info__div__p--titulo">SERIES DONDE APARECE:</p>
                <Series series={personaje.series.items} />
              </div>
            </div>

            <div className="separacion"></div>
            <div className="separacion"></div>
            <p className="info__div__p--titulo">EVENTOS EN LOS QUE HA PARTICIPADO:</p>
            <Eventos eventos={personaje.events.items} />
            <div className="separacion"></div>
            {/* REUTILIZAMOS EL COMPONENTE DE LAS URL DE LOS COMICS */}
            <p className="info__div__p--titulo">URLS</p>
            <URL enlaces={personaje.urls} />

          </div>
        )
      }
    </div>
  );
}
