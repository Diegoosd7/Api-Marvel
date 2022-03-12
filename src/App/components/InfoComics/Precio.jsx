import React from "react";
import PropTypes from "prop-types";

function Precio({ precios }) {
    return (precios.map(item => {
        let url = item.type
        let enlace = url.toUpperCase()
        return (<p className="informacion__div__p">- {enlace}: {item.price} €</p>)
    }))
}

Precio.propTypes = {
    precios: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        price: PropTypes.number,
    }))
}

export default Precio