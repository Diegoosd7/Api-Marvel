import React, { useEffect, useState } from 'react';
import SearchBoxComics from '../App/components/SearchBoxComics/SearchBoxComics';
import ComicList from '../App/components/ComicList/ComicList';
import './Comics.css';

export default function Comics() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const hash = '79b39bc45ede5e3689d0b2c12862b630';
    const publicKey = '1928dbc9bba11631437d27c1258a8e7a';
    const urlAPI = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`;

    fetch(urlAPI)
      .then((res) => res.json())
      .then((comics) => {
        console.log(comics.data.results);
        setItems(comics.data.results);
        console.log(items);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2 className="titulo">COMICS</h2>
      <br />
      <SearchBoxComics />
      <div className="separacion" />
      <ComicList items={items} isLoading={isLoading} />
    </main>
  );
}
