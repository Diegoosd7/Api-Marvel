import React from "react";

function ListaPersonajes({ personajes }) {
    return(
        <ul>
            {personajes.map(item =><li className="titulo">{item.name}</li>)}
   
       </ul>
       )

}

export default ListaPersonajes