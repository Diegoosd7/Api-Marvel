import React from "react";

function Precio({ precios }) {
    return (precios.map(item => <p className="titulo">{item.price} €</p>))
}

export default Precio