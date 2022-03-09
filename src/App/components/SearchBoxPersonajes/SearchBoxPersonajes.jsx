import React, {useState} from 'react'

function SearchBoxPersonajes({search}) {
  const[text,setText] = useState('')
  const onSearch= (q)=>{
    setText(q)
    search(q)
}

return (
  <section className="search">
      <form>
          <input type="text"
          placeholder="Busca un personaje"
          autoFocus
          onChange={(e)=>onSearch(e.target.value)}
          value={text}/>
      </form>
  </section>
)
}

export default SearchBoxPersonajes;
