import React from "react";
import { Link } from "react-router-dom";

function ComicItem({ item }) {
  return (
      <div className="listado--hover">
        <Link to={`/comicseleccionado/${item.id}`}>
          <img className="listado--hover__img" src={`${item.thumbnail.path}.jpg`} alt="Portada Comic" />
          <div className="listado--hover__p">{item.title}</div>
        </Link>
      </div>
  );
}

export default ComicItem;
