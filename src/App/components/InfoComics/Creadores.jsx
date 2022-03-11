import React from "react";

function Creadores({ creadores }) {
    return(
        <ul>
            {creadores.map(item =><li className="titulo">{item.name} ({item.role})</li>)}
   
       </ul>
       )

}

export default Creadores