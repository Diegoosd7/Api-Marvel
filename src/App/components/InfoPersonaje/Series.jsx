import React from "react";

function Series({ series }) {
    return(
     <ul>
         {series.map(item =><li className="info__div__li">{item.name}</li>)}

    </ul>
    )

}

export default Series