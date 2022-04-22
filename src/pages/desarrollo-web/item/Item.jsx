import React from "react";
import { useParams } from "react-router-dom";
import "./item.css";
import Data from "../data.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function DataFind(identifier) {
  return Data.find((x) => x.deweb_Id === identifier);
}

const Item = () => {
  const { id } = useParams();
  const dataSpecific = DataFind(id);
  console.log(dataSpecific);
  return (
    <div id="item" className="container vh-100">
      <div className="card">
        <div className="row">
          <div className="col-md-12 col-lg-6 p-4 ">
            <Link to="/DesarrolloWeb" className="w-100">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="font-color-Moody-Blue"
              ></FontAwesomeIcon>
            </Link>
            <div className="d-flex h-100 align-items-center  justify-content-center">
            <img src={dataSpecific.deweb_Imagen} className=""></img>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 p-4 gray-100">
            <h3 title="title" className="font-color-Moody-Blue fw-bold">
              {dataSpecific.deweb_Nombre}
            </h3>
            <div className="flex-content">
              <ul className="list-style-style-none">
              <p>{dataSpecific.deweb_Descripcion}</p>

                {/* <li>
                  <strong title="Id">Id:</strong>
                  {dataSpecific.deweb_Id}
                </li> */}
                <li>
                  <strong title="NombreDesarrollo">
                    Nombre de Desarrollo:
                  </strong>
                  {dataSpecific.deweb_NombreDesarrollo}
                </li>
                <li>
                  <strong title="Portal">Portal:</strong>
                  {dataSpecific.deweb_Portal}
                </li>
                <li>
                  <strong title="Participacion">Participacion:</strong>
                  {dataSpecific.deweb_Participacion}
                </li>
                <li>
                  <strong title="Categoria">Categoria:</strong>
                  {dataSpecific.deweb_Categoria}
                </li>
                <li>
                  <strong title="Estado">Estado:</strong>
                  {dataSpecific.deweb_Estado}
                </li>
                <li>
                  <strong title="Nota">Nota:</strong>
                  {dataSpecific.deweb_Nota}
                </li>
                <li>
                  <strong title="ExtraLink">ExtraLink:</strong>
                  {dataSpecific.deweb_ExtraLink}
                </li>
                {/* <li><strong title="availability">Color:</strong> Red/Orange/Black/Blue</li>
                        <li><strong title="Shipping">Shipping:</strong> Free</li> */}
              </ul>

              <footer>
                <p>
                  <a
                    class="text-decoration-none text-muted"
                    title="Love"
                    href={dataSpecific.deweb_Modelo}
                  >
                    Live Demo
                  </a>
                  <a
                    class="text-decoration-none text-muted"
                    title="Share"
                    href={dataSpecific.deweb_Repositorio}
                  >
                    Github
                  </a>
                  <a
                    class="text-decoration-none text-muted"
                    title="Comment"
                    href={dataSpecific.deweb_BaseDatos}
                  >
                    Base de Datos
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
