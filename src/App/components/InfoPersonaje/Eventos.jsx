import React from "react";

function Eventos({ eventos }) {
    return (
        <div className="centrar">
            <ul>
                {eventos.map(item =><li className="info__div__li--sinPunto">{item.name}</li>)}

            </ul>
        </div>

    )

}

/* NO PONGO EL PROPTYPE DE EVENTOS PORQUE EL ARRAY TIENE MUCHOS DATOS */

export default Eventos