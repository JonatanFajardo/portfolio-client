import React from "react";
import Services from "../services/ServicesDC";
import Image from "../../../assets/img/Desarrollo_web Logo.png";
import FootAbaut from "../../../assets/img/footAbaut.svg";
import WavesServices from '../../../assets/img/WavesServicesvg.svg';
import { Link } from "react-router-dom";



const disenoCreativo = () => {
  return (
    <>
      {/* <!-- wellcome section start --> */}
      <section id="wellcome">
        <div class="container-fluid">
          <div class="row">
            <div class="col text-center">
              <h1 class="text-uppercase fw-bold">Diseño Gráfico</h1>
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
      <section class="description gray-100">
        <div class="container">
          <div class="row mc">
            <div class="col-sm-12 col-md-6 text-center">
              <img
                alt="cargando..!"
                id="image-description"
                src={Image}
                class="img-fluid border-radius "
              />
            </div>

            <div class="col-sm-12 col-md-6  ">
              <div class="container">
                <h3>Diseño Gráfico</h3>
                <p>
                    Ilustrador gráfico entusiasta por la creación 
                    y visualización de imágenes digitales en las
                    cuales me desenvuelvo de manera creativa,
                    auténtica y flexible, con la capacidad de comunicar
                    mensajes visuales a través de mis diseños con
                    el objetivo de consolidar las relaciones entre
                    marca y cliente. Con un enfoque en el desarrollo
                    de interfaces de usuario para entornos web, de
                    aplicación, social media e ilustración conceptual.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div class="waves z-index mt-0 gray-100">
            <img class="waves-item" src={FootAbaut} alt="" />
          </div>
      </section>
      {/* <!-- description section start --> */}

      <Services />

      {/* // <!-- freelancer available section start --> */}
    <section class="freelancer-available py-5 bg-Moody-Blue">
       <div class="container-lg py-4">
          <div class="row justify-content-center">
             <div class="col-lg-8 text-center">
                 <p class="text-light fs-5">Echale un vistazo a mi apartado ilustrativo</p>
                 <h2 class="fs-1 text-white mb-4">No esperes mas para crear tu anuncio</h2>
                 <Link to="/" class="btn btn-outline-light">
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

export default disenoCreativo;
