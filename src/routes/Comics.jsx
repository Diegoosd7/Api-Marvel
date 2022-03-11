import React from "react";
import { useState, useEffect } from "react";
import ComicList from "../App/components/ComicList/ComicList";
import "./Comics.css";
import { accedeComics, buscarComics } from '../services/comics';

const hash = "79b39bc45ede5e3689d0b2c12862b630";
const publicKey = "1928dbc9bba11631437d27c1258a8e7a";

export default function Comics() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    if (buscar === "") {
      // const urlAPI = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;

      // fetch(urlAPI)
      //   .then((res) => res.json())
      //   .then((comics) => {
      //     console.log(comics.data.results);
      //     setItems(comics.data.results);
      //     console.log(items);
      //     setLoading(false);
      //   })
      //   .catch((err) => console.log(err));
      async function fetchComics() {
        let comics = await accedeComics();
        console.log(comics);
        setItems(comics);
        setLoading(false);
      }
      //llamamos a la función
      fetchComics();
    } else {
        //https://gateway.marvel.com/v1/public/comics?titleStartsWith=M&apikey=95dbec166642b5741431e2484a3fc734
      // const busqueda = `http://gateway.marvel.com/v1/public/comics?titleStartsWith=${buscar}&ts=1&apikey=${publicKey}&hash=${hash}`;
      // fetch(busqueda)
      //   .then((respuesta) => respuesta.json())
      //   .then((comicsBuscado) => {
      //     console.log(comicsBuscado.data.results);
      //     setItems(comicsBuscado.data.results);
      //     setLoading(false);
      //   });

      async function fetchBuscarComics(buscar){
        let comics = await buscarComics(buscar);
        setItems(comics);
        setLoading(false);
      }

      fetchBuscarComics(buscar);

    }
  }, [buscar]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <ComicList
        items={items}
        isLoading={isLoading}
        search={(q) => setBuscar(q)}
      />
    </main>
  );
}
