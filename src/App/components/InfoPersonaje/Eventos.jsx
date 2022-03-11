import React from "react";

function Eventos({ eventos }) {
    return(
        <ul>
            {eventos.map(item =><li className="titulo">{item.name}</li>)}
   
       </ul>
       )

}

export default Eventos