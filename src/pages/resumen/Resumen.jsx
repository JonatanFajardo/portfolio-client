import React from "react";
import "./resumen.css";
import WavesServices from "../../assets/img/WavesServicesvg.svg";
import FootAbaut from "../../assets/img/footAbaut.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import HorizontalCards from "../../components/horizontalCards/horizontalCards";
import image from "../../assets/img/Certificate.png";

const dataResumen = [
  {
    Id: "1",
    Nombre: "Aseguramientos de Calidad",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "120 hrs",
  },
  {
    Id: "2",
    Nombre: "Ciclo de Vida de Desarrollo de Software (ISO 29148-2011)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "20 hrs",
  },
  {
    Id: "3",
    Nombre: "Desarrollo de aplicaciones en HTML5-CSS3 y PHP",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "4",
    Nombre: "Desarrollo de aplicaciones web MVC",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "20 hrs",
  },
  {
    Id: "5",
    Nombre: "Desarrollo en C#",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "6",
    Nombre: "Desarrollo en C# (lenguaje de programación)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "7",
    Nombre: "Fundamentos de desarrollo de software",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "8",
    Nombre: "Fundamentos del desarrollo de aplicaciones HTML5",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "9",
    Nombre: "SQL Reporting Services",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "10",
    Nombre: "Transact-SQL",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "80 hrs",
  },
  {
    Id: "11",
    Nombre: "Confiabilidad y Seguridad I (Proyecto)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "20 hrs",
  },
  {
    Id: "12",
    Nombre: "Implementación (Proyecto)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "60 hrs",
  },
  {
    Id: "13",
    Nombre: "Diseño y Desarrollo de Software (Proyecto)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "140 hrs",
  },
  {
    Id: "14",
    Nombre: "Análisis de Requerimientos de Aplicación de Software (Proyecto)",
    Institución: "AHM",
    Instructor: "Magdaly Zuniga",
    Categoria: "Desarrollo Web",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "15",
    Nombre: "Routing and Switching - CCNA",
    Institución: "Cisco",
    Instructor: "Ariel",
    Categoria: "Networking",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "16",
    Nombre: "Base de Datos",
    Institución: "INFOP",
    Instructor: "Unknown",
    Categoria: "Otros",
    Fecha: "Unknown",
    Horas: "20 hrs",
  },
  {
    Id: "17",
    Nombre: "JavaScript Full-Curso desde Principiante hasta Profesional",
    Institución: "Udemy",
    Instructor: "Unknown",
    Categoria: "Otros",
    Fecha: "Unknown",
    Horas: "15.5 hrs",
  },
  {
    Id: "18",
    Nombre: "Programa de Emprendimiento",
    Institución: "AHM",
    Instructor: "Jenny Blanco y mas",
    Categoria: "Unknown",
    Fecha: "Unknown",
    Horas: "53 hrs",
  },
  {
    Id: "19",
    Nombre: "Cybersecurity Essentials",
    Institución: "Cisco",
    Instructor: "Ariel",
    Categoria: "Seguridad Cibernética",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
  {
    Id: "20",
    Nombre: "Introducción a la Seguridad Cibernética",
    Institución: "Cisco",
    Instructor: "Unknown",
    Categoria: "Seguridad Cibernética",
    Fecha: "Unknown",
    Horas: "40 hrs",
  },
];

const Resumen = () => {
  return (
    <>
      {/* <!-- wellcome section start --> */}
      <section id="wellcome">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h1 className="text-uppercase fw-bold">Resumen</h1>
              <p>
                <Link to="/" className="font-color-red">
                  Home
                </Link>{" "}
                / Resumen
              </p>
            </div>
          </div>
        </div>
        <div className="waves">
          <div className="waves-item">
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
            <img src={WavesServices}/>
          </div>
        </div>
      </section>
      {/* <!-- wellcome section start --> */}

      {/* <!-- description section start --> */}
      <section className="description gray-100">
        <div className="container">
          <div className="row mc">
            <div className="col-sm-12 col-md-6 text-center">
              <img
                alt="cargando..!"
                id="image-description"
                src={Image}
                className="img-fluid border-radius "
              />
            </div>

            <div className="col-sm-12 col-md-6  ">
              <div className="container">
                <h3>Desarrollo web</h3>
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
        <div className="waves z-index mt-0 gray-100">
          <img className="waves-item" src={FootAbaut} alt="" />
        </div>
      </section>
      {/* <!-- description section start --> */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* titulo */}
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h2 className="fw-bold mb-5">Educación</h2>
                </div>
              </div>
            </div>

            <div className="col-sx-12 col-lg-6 ">
              <article className="education-item">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="education-icon font-color-red"
                />
                <h3 className="education-date font-color-red">2019</h3>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">INTAE</h5>

                    <h6 className="card-subtitle">
                      <a href="">link to website</a>{" "}
                    </h6>
                    <p className="card-text text-muted">2014 - 2019</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sx-12 col-lg-6 ">
              <article className="education-item">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="education-icon font-color-red"
                />
                <h3 className="education-date font-color-red">2021</h3>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Academia Programadores</h5>

                    <h6 className="card-subtitle">
                      {" "}
                      <a href="">link to website</a>{" "}
                    </h6>
                    <p className="card-text text-muted">2020 - 2021</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-md-full px-3">
          {/* titulo */}
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="fw-bold mb-5">Certificados</h2>
              </div>
            </div>
          </div>

          {/* <div className="isotope-nav">
            <ul>
              <li className="nav-item active" data-filter="*">
                All
              </li>
              <li className="nav-item" data-filter=".DesarrolloWeb">
                desarrollo software
              </li>
              <li className="nav-item" data-filter=".mockup">
                Mockup
              </li>
              <li className="nav-item" data-filter=".app-ui">
                App UI
              </li>
            </ul>
          </div> */}

          <div className="isotope-content">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {dataResumen.map(
                ({
                  Id,
                  Nombre,
                  Institución,
                  Instructor,
                  Categoria,
                  Fecha,
                  Horas,
                }) => (
                  <div className="isotope-item">
                    <div className="col">
                      <div className="card h-100">
                        <HorizontalCards
                          title={Nombre}
                          imagenSource={image}
                          institución={Institución}
                          instructor={Instructor}
                          categoria={Categoria}
                          fecha={Fecha}
                          horas={Horas}
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resumen;
