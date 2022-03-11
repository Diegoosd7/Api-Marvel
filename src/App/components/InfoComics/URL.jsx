import React from "react";

function URL({ enlaces }) {
    return (enlaces.map(item => {
        let url = item.type
        let enlace = url.toUpperCase()
        return (
            <center><a href={item.url} target="_blank" className="informacion__div__li info__a">{enlace}<br /><br /></a></center>
        )
    }
    ))
}

export default URL