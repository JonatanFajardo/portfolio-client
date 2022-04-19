import React from "react";

const horizontalcards = ({
  title,
  imagenSource,
  institución,
  instructor,
  categoria,
  fecha,
  horas,
}) => {
  return (
    // <div className={categoria}>
      <div className="row h-100 g-0 ">
        <div
          className="col-sm-4 col-md-4 d-flex align-items-center"
          style={{ backgroundColor: "#727ad6" }}
        >
          <img
            src={imagenSource}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-sm-8 col-md-8">
          <div className="card-body">
            <h5 className="card-title text-truncate">{title}</h5>
            <ul className="list-style-none">
              <li>Nombre: {title}</li>
              <li>Institución: {institución}</li>
              <li>Instructor: {instructor}</li>
              <li>Categoria: {categoria}</li>
              {/* <li>Fecha: {fecha}</li> */}
              <li>Horas: {horas}</li>
            </ul>
          </div>
        </div>
      </div>
    // {/* </div> */}
  );
};

export default horizontalcards;
