import React, { useEffect, useState } from 'react'
import SearchBoxComics from '../App/components/SearchBoxComics/SearchBoxComics';
import ComicList from '../App/components/ComicList/ComicList'
import './Comics.css';

export default function Comics() {
  const [items, setItems] = useState([])
  const[isLoading,setLoading] = useState(true)

  useEffect(() => {
    const apikey = "5b33ad8e93ea0469f88a0958a4eefc64";
    const privatekey = "f4b74dfbeace1544341c64b197c66da7283a90af";
    const ts = new Date().getTime();
    //const stringToHash = ts + privatekey + apikey
    //const hash = md5(stringToHash)
    const urlAPI = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apikey}&hash=b59d95b80ccbe627112fbb4c60d53954`;
    //const container = document.querySelector("#marvel-row");


    fetch(urlAPI)
      .then((res) => res.json())
      .then((comics) => {
        //console.log("Llego aqui");
        //console.log(comics)
        console.log(comics.data.results)
        setItems(comics.data.results)
        console.log(items)
        setLoading(false)

      })
      .catch(err => console.log(err));
  }, [])


  return (
    <main style={{ padding: '1rem 0' }}>
      <h2 className="titulo">COMICS</h2>
      <SearchBoxComics />
      <ComicList items={items} isLoading={isLoading} />
    </main>
  );
}




