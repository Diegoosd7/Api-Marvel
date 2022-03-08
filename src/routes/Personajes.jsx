import React, { useEffect, useState } from 'react';
import CharacterList from '../App/components/CharacterList/CharacterList';
import { accedePersonajes } from '../services/personajes'
import './Personajes.css';

export default function Personajes() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const hash = '79b39bc45ede5e3689d0b2c12862b630';
    const publicKey = '1928dbc9bba11631437d27c1258a8e7a';
    const urlAPI = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

    fetch(urlAPI)
      .then((res) => res.json())
      .then((comics) => {
        // console.log("Llego aqui");
        // console.log(comics)
        console.log(comics.data.results);
        setItems(comics.data.results);
        console.log(items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    
    // function fetchPersonajes() {
    //   let personajess = accedePersonajes()
    //   console.log(personajess)
    //   setItems(personajess);
    // }

    // fetchPersonajes()

  }, []);

  return (
    <main style={{ padding: '1rem 0' }}>
      <CharacterList items={items} isLoading={isLoading} />
    </main>
  );
}
