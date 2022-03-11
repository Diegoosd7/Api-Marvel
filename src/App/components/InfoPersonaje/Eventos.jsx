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

export default Eventos