import React from "react";

function Series({ series }) {
    return(
     <ul>
         {series.map(item =><li className="titulo">{item.name}</li>)}

    </ul>
    )

}

export default Series