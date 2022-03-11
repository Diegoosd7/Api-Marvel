import React from "react";

function Precio({ precios }) {
    return (precios.map(item => {
        let url = item.type
        let enlace = url.toUpperCase()
        return (<p className="informacion__div__p">- {enlace}: {item.price} €</p>)
    }))
}

export default Precio