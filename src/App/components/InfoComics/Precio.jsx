import React from "react";

function Precio({ precios }) {
    return (precios.map(item => <p className="informacion__div__p">{item.price} €</p>))
}

export default Precio