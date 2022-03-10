import React, { useEffect, useState } from 'react';
import CharacterList from '../App/components/CharacterList/CharacterList';
import { accedePersonajes, buscarPersonajes } from '../services/personajes';
import SearchBoxPersonajes from '../App/components/SearchBoxPersonajes/SearchBoxPersonajes';
import './Personajes.css';
import "babel-polyfill"; //Lo tienes que añadir para que funcione las funciones asíncronas

const hash = '79b39bc45ede5e3689d0b2c12862b630';
const publicKey = '1928dbc9bba11631437d27c1258a8e7a';

export default function Personajes() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState('');

  useEffect(() => {

    if (buscar === '') {
      // const urlAPI = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

      // fetch(urlAPI)
      //   .then((res) => res.json())
      //   .then((personajes) => {
      //     // console.log("Llego aqui");
      //     console.log(personajes);
      //     console.log(personajes.data.results);
      //     setItems(personajes.data.results);
      //     // console.log(items);
      //     setLoading(false);
      //   })
      //   .catch((err) => console.log(err));

      //   declaramos la función asíncrona que llama al servicio  
      async function fetchPersonajes() {
        let personajes = await accedePersonajes();
        console.log(personajes);
        setItems(personajes);
        console.log(items)
        setLoading(false);
      }
      //llamamos a la función
      fetchPersonajes();

    } else {
      // const busqueda = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${buscar}&ts=1&apikey=${publicKey}&hash=${hash}&limit=100`;
      // fetch(busqueda)
      //   .then((respuesta) => respuesta.json())
      //   .then((personajeBuscado) => {
      //     console.log(personajeBuscado.data.results);
      //     setItems(personajeBuscado.data.results);
      //     setLoading(false);
      //   });

      async function fetchBuscarPersonajes(buscar) {
        let personajes = await buscarPersonajes(buscar);
        setItems(personajes);
        setLoading(false);
      }

      fetchBuscarPersonajes(buscar);
    }
  }, [buscar]); // Le pasamos el input del buscador como parámetro para que cada vez que se actualice, haga una llamada a la API

  return (
    <main style={{ padding: '1rem 0' }}>
      {/* <SearchBoxPersonajes search={(q) => setBuscar(q)} /> */}
      <CharacterList items={items} isLoading={isLoading} search={(q) => setBuscar(q)} />
    </main>
  );
}
