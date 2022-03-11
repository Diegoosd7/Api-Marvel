import React from "react";

function ListaComics({ comics }) {
    return(
        <ul>
            {comics.map(item =><li className="titulo">{item.name}</li>)}
   
       </ul>
       )

}

export default ListaComics
