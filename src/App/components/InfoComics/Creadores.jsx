import React from "react";

function Creadores({ creadores }) {
    return(
        <ul>
            {creadores.map(item =><li className="informacion__div__li">{item.name} ({item.role})</li>)}
   
       </ul>
       )

}

export default Creadores