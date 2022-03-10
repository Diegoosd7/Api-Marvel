import React from 'react';
import './SearchBoxComics.css';

function SearchBoxComics({ search }) {
  // const [text, setText] = useState('')
  // const onSearch = (q) => {
  //   setText(q)
  //   search(q)
  // }

  return (
    <center>
      <input id="search-comic" type="search"
        placeholder="Busca un comic"
        autoFocus/>
      {/* <i class="bi bi-search" id="icono4"/> */}
    </center>
  )
}

export default SearchBoxComics;
