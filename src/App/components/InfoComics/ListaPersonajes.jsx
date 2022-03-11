import React from "react";
import { Link } from "react-router-dom";

function ListaPersonajes({ personajes }) {
    return (
        <ul>
            {personajes.map(item => {
                let url = item.resourceURI
                console.log(url)
                url = url.slice(47, 54)
                console.log(url)

                return (
                    <Link to={`/personajeseleccionado/${url}`}>
                        <li className="info__div__li--link informacion__div__li">{item.name}</li>
                    </Link>
                )
            })}

        </ul>
    )

}

export default ListaPersonajes