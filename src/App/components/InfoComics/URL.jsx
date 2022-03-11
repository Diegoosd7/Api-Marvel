import React from "react";

function URL({ enlaces }) {
    return(enlaces.map(item =>
    <center><a href={item.url} target="_blank" className="info__a">Enlace a la web ({item.type})<br/><br/></a></center>))
}

export default URL