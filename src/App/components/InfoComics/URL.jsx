import React from "react";

function URL({ enlaces }) {
    return(enlaces.map(item =><a href={item.url} target="_blank" className="titulo">Enlace a la web ({item.type})<br/></a>))
}

export default URL