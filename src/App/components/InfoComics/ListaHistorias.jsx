import React from "react";

function ListaHistorias({ historias }) {
    return(
        <ul>
            {historias.map(item =><li className="informacion__div__li">{item.name}</li>)}
   
       </ul>
       )

}

export default ListaHistorias