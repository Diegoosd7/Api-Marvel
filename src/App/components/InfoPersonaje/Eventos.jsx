import React from "react";

function Eventos({ eventos }) {
    return (eventos.map((item =><p className="titulo">{item.name}</p>
    )))

}

export default Eventos