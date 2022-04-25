import React from "react";
import { Link } from "react-router-dom";

const justimagecard = ({ id = "", imagenSource, urlRedirect = "" }) => {
  return (
    <>
      <div className="col">
          <Link to={urlRedirect + id} replace="true">
            <img
              src={imagenSource}
              className="card-img-top"
              alt={imagenSource}
            />
          </Link>
       
      </div>
    </>
  );
};

export default justimagecard;
