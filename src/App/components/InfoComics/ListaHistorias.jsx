import React from "react";

function ListaHistorias({ historias }) {
    return(
        <ul>
            {historias.map(item =><li className="titulo">{item.name}</li>)}
   
       </ul>
       )

}

export default ListaHistorias