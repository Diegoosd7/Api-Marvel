import React, { useState } from 'react'
import './SearchBoxComics.css';

function SearchBoxComics({search}) {
  const [text, setText] = useState('')
  const onSearch = (q) => {
    setText(q)
    search(q)
  }

  return (
      <center>
        <input id="search" type="search"
          placeholder="Busca un comic  🔍"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text} />
        {/* <i class="bi bi-search" id="icono4"/> */}
      </center>
  )
}

export default SearchBoxComics;
