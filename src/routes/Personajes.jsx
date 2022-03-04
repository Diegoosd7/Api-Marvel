// import SearchBox from "../components/SearchBox/SearchBox";
import React from 'react';
export default function Personajes() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2 className="titulo">PERSONAJES</h2>
      {/* <SearchBox/> */}
    </main>
  );
}

// const publicKey = '1928dbc9bba11631437d27c1258a8e7a'
// const hash = '79b39bc45ede5e3689d0b2c12862b630'
// const URLPersonajes = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;

// //función que devuelve todos los personajes de la api
// export async function getPersonajes(){
//   let data = await fetch(URLPersonajes);
//   let personajes = await data.json()

//   return personajes.results;

// }
