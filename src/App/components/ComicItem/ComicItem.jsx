import React from "react";
import { Link } from "react-router-dom";

function ComicItem({ item }) {
  return (
    <div className="content2">
      <div className="container2">
        <Link to={`/comicseleccionado/${item.id}`}>
          <img className="image2" src={`${item.thumbnail.path}.jpg`} alt="" />
          <div className="overlay2 titulo">{item.title}</div>
        </Link>
      </div>
    </div>
  );
}

export default ComicItem;
