import React from "react";
import "./desarrolloWeb.css";
import Services from "../services/Services";
import Image from "../../../assets/img/Desarrollo_web Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import FootAbaut from "../../../assets/img/footAbaut.svg";
import WavesServices from '../../../assets/img/WavesServicesvg.svg';
import { Link } from "react-router-dom";
const desarrolloWeb = () => {
  return (
    <>
      {/* <!-- wellcome section start --> */}
      <section id="wellcome">
        <div class="container-fluid">
          <div class="row">
            <div class="col text-center">
              <h1 class="text-uppercase fw-bold">DESARROLLO WEB</h1>
              <p>
                <Link to="/"  className="font-color-red">
                  Home
                </Link>{" "}
                / Desarrollo web
              </p>
            </div>

          </div>
        </div>
            <div class="waves">
              <div class="waves-item">
                {/* <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  style={{ height: "100%", width: " 100%" }}
                >
                  <path
                    d="M0.00,49.98 C220.37,45.88 280.19,146.53 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    className="gray-100"
                    style={{ fill: "#F3F6F9" }}
                  ></path>
                </svg> */}
                <img src={WavesServices} ></img>
              </div>
            </div>
      </section>
      {/* <!-- wellcome section start --> */}

      {/* <!-- description section start --> */}
      <section class="description gray-100 pt-5">
        <div class="container">
          <div class="row mc">
            <div class="col-sm-12 col-md-4 text-center">
              <img
                alt="cargando..!"
                id="image-description"
                src={Image}
                class="img-fluid border-radius "
              />
            </div>

            <div class="col-sm-12 col-md-8  ">
              <div class="container">
                {/* <h3>Desarrollo web</h3> */}
                <p>
                  Especializado en el Diseño y Desarrollo Web Back-End.
                  Maquetando bajo los estándares de la W3C que proporcionan una
                  mejor estructura de la pagina y sobre todo siempre mejorando
                  la User Experience y User Interface (UX-UI) para que captes la
                  atención de tu cliente con una interfaz bonita y una
                  experiencia agradable ya sea desde una laptop o un smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div class="waves z-index mt-0 gray-100 mt-5">
            <img class="waves-item" src={FootAbaut} alt="" />
          </div>
      </section>
      {/* <!-- description section start --> */}

      {/* <!-- experience section start --> */}
      <section id="experience" className="container pb-5">
        <div className="row d-flex">
          {/* titulo */}
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <h2 class="fw-bold mb-5">Mi experiencia</h2>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-sm-12 col-md-6 mt-3">
            <div className="card card-body h-100 bg-light">
              <div class="row">
                <div class="col-12">
                  <div class="text-center">
                    <h3 class="fw-bold mb-5">Desarrollo front-end</h3>
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>HTML</h4>
                    <p className="text-secondary">Experimentado</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>CSS</h4>
                    <p className="text-secondary">Experimentado</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>Bootstrap</h4>
                    <p className="text-secondary">Experimentado</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>JavaScript</h4>
                    <p className="text-secondary">Intermedio</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>Razor</h4>
                    <p className="text-secondary">Intermedio</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>React</h4>
                    <p className="text-secondary">Basico</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="col-sm-12 col-md-6 tp-xs-3 mt-3">
            <div className="card card-body h-100 bg-light">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="section-title text-center">
                    <h3 class="fw-bold mb-5">Desarrollo back-end</h3>
                  </div>
                </div>
              </div>
              <div className="experience-content">
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>CSharp</h4>
                    <p className="text-secondary">Experimentado</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>PHP</h4>
                    <p className="text-secondary">Intermedio</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>MySql</h4>
                    <p className="text-secondary">Basico</p>
                  </div>
                </article>
                <article className="d-flex gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="font-color-red mt-1"
                  />
                  <div>
                    <h4>Microsoft SQL Server</h4>
                    <p className="text-secondary">Intermedio</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- experience section start --> */}

      <Services />

      {/* // <!-- freelancer available section start --> */}
      <section class="freelancer-available py-5 bg-Moody-Blue">
        <div class="container-lg py-4">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                  <p class="text-light fs-5">Échale un vistazo a mi apartado ilustrativo</p>
                  <h2 class="fs-1 text-white mb-4">No esperes más para crear tu anuncio</h2>
                  <Link to="/DisenoCreativo" class="btn btn-outline-light">
                      Hacerlo
                  </Link>
              </div>
            </div>
        </div>
      </section>
      {/* // <!-- freelancer available section end --> */}
    </>
  );
};

export default desarrolloWeb;
