import React from "react";
import { useParams } from "react-router-dom";
import "./item.css";
import Data from "../data.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import JustImageCard from "../../../components/justImageCard/justimagecard";

function DataFind(identifier) {
  return Data.find((x) => x.deweb_Id === identifier);
}

function RamdonListUnique(cantidad = 0, max) {
  var numbers = [];

  for (let i = 0; i < cantidad; i++) {
    let a = true,
      n;
    while (a) {
      n = Math.floor(Math.random() * max) + 1;
      a = numbers.includes(n);
    }
    numbers.push(n);
  }

  return numbers;
}
const Item = () => {
  const listDataImg = [];
  // console.log(RamdonListUnique(4,8))
  const arrayindice = RamdonListUnique(4, 7);
  arrayindice.map(function (x) {
    console.log(x);
    console.log(Data[parseInt(x)]);
    listDataImg.push(Data[parseInt(x)]);
  });

  const { id } = useParams();
  const dataSpecific = DataFind(id);
  return (
    <div id="item">
      <section className="container ">
        <div className="px-lg-5 px-lg-5">
          <div className="row py-5">
            <div className="col-md-12 col-lg-12 p-4 ">
              <div className="row justify-content-space-between">
                <div className="col">
                  <Link to="/DesarrolloWeb" className="w-100">
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="font-color-Moody-Blue fa-2x"
                    ></FontAwesomeIcon>
                  </Link>
                </div>
                <div className="w-auto">
                  <h3 title="title" className="font-color-Moody-Blue fw-bold">
                    {dataSpecific.deweb_Nombre}
                  </h3>
                </div>
              </div>

              <div className="d-flex rounded h-100 align-items-center  justify-content-center">
                <img src={dataSpecific.deweb_Imagen} className="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-12 p-4 font-color-gra ">
              <div className="flex-content">
                <p className="fs-4">{dataSpecific.deweb_Descripcion}</p>
                <ul className="list-style-style-none">
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
                      className="text-decoration-none text-muted"
                      title="Love"
                      href={dataSpecific.deweb_Modelo}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      className="text-decoration-none text-muted"
                      title="Share"
                      href={dataSpecific.deweb_Repositorio}
                      target="_blank"
                    >
                      Github
                    </a>
                    <a
                      className="text-decoration-none text-muted"
                      title="Comment"
                      href={dataSpecific.deweb_BaseDatos}
                      target="_blank"
                    >
                      Base de Datos
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-full p-4 "
        style={{ backgroundColor: "#b1b6f0" }}
      >
        <div className="row justify-content-space-between">
          <div className="col">Otros proyectos relacionados</div>
          <div className="w-auto">
            <Link
              to="/DesarrolloWeb"
              className="text-decoration-none font-color-red"
            >
              ver más
            </Link>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
         
          {listDataImg.map(({ deweb_Id, deweb_Imagen }) => (
            <JustImageCard
              id={deweb_Id}
              imagenSource={deweb_Imagen}
              urlRedirect={"/DesarrolloWeb/Item/"}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Item;
