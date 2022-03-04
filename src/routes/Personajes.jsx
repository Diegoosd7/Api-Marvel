import React, { useEffect } from 'react';
import SearchBoxPersonajes from '../App/components/SearchBoxPersonajes/SearchBocPersonajes';
//import { accedePersonajes } from '../services/personajes'

export default function Personajes() {
  const hash = '79b39bc45ede5e3689d0b2c12862b630';
  const publicKey = '1928dbc9bba11631437d27c1258a8e7a';
  const URLPersonajes = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

  async function accedePersonajes() {
    let response = await fetch(URLPersonajes);
    let personajes = await response.json();
    return personajes;
  }


  return (
    <main style={{ padding: '1rem 0' }}>
      <h2 className="titulo">PERSONAJES</h2>
      <SearchBoxPersonajes />
    </main>
  );
}
