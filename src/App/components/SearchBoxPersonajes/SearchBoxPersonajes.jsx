import React, { useState } from 'react'
import './SearchBoxPersonajes.css';

function SearchBoxPersonajes({ search }) {
  const [text, setText] = useState('')
  const onSearch = (q) => {
    setText(q)
    search(q)
  }

  return (
      <center>
        <input id="search" type="search"
          placeholder="Busca un personaje 🔍                                                                                                     🔍"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text} />
        {/* <i class="bi bi-search" id="icono4"/> */}
      </center>
  )
}

export default SearchBoxPersonajes;
