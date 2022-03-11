import React from "react";
import { Link } from "react-router-dom";

function ListaComics({ comics }) {
    return (
        <ul>
            {comics.map(item => {
                let url = item.resourceURI
                console.log(url)
                url = url.slice(43, 48)
                console.log(url)

                return (
                <Link to={`/comicseleccionado/${url}`}>
                    <li className="titulo">{item.name}</li>
                </Link>)

            }
            )}

        </ul>
    )

}

export default ListaComics
