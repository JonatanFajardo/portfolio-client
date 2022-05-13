import React from "react";
import "./sobremi.css";
import WavesServices from "../../assets/img/WavesServicesvg.svg";
import FootAbaut from "../../assets/img/footAbaut.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import HorizontalCards from "../../components/horizontalCards/horizontalCards";
import image from "../../assets/img/about.png";
import imgCertificate from "../../assets/img/Certificate.png";

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
      {/* <!-- description section start --> */}
      <section className="description gray-100">
        {/* <div className="container">
          <div className="row mc">
            <div className="col-sm-12 col-md-6 text-center">
              <img
                alt="cargando..!"
                id="image-description"
                src={image}
                className="img-fluid border-radius "
              />
            </div>

            <div className="col-sm-12 col-md-6  ">
              <div className="container">
                <h3>Extracto profesional</h3>
                <p>
                  Hola, soy Jonatan Fajardo. Hace más de 3 años inicié en el
                  mundo de la tecnología, y desde entonces estudio intensamente
                  por cuenta propia mucho de las áreas que esta implica, soy un
                  multidisciplinario que actualmente realiza proyectos de
                  Escritorio, Desarrollo web y Diseño Gráfico por otro lado he
                  incursionado en el estudio de redes y ciberseguridad. Tambien
                  fui parte del proceso educativo de la
                  <a
                    className="link font-color-red text-decoration-none"
                    href="http://www.ahm-honduras.com/?p=4609"
                    target="_blank"
                  >
                    {" "}
                    AHM{" "}
                  </a>
                  siendo esta la cuarta generacion y en la cual me especialize
                  en Desarrollo de software.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <section className="p-5">
          {/* <!-- wellcome section start --> */}
          <section id="wellcome" className="card p-0 mb-3">
            <div className="card-body ">
              <div className="row ">
                <div className="col-2">
                  <img src={image}></img>
                </div>
                <div className="col-5 d-flex align-items-center">
                  <div>
                    <h6 className="fs-2 text-bold">Jonatan Fajardo</h6>
                    <a
                      class="text-decoration-none"
                      href="mailto:jonatanabimelecfajardo@gmail.com"
                    >
                      Jonatanabimelecfajardo@gmail.com
                    </a>
                    <br />
                    <a class="text-decoration-none">504 8932-2291</a>
                  </div>
                </div>
                <div className="col-5 d-flex align-items-end justify-content-end">
                  <a
                    class="btn btn-red"
                    href="https://drive.google.com/file/d/1GTLMXJTvhMQChjIgNt5Lgut1P0nPRTCb/view?usp=sharing"
                    className="btn btn-danger bg-red"
                    target="_blank"
                  >
                    Curriculum
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- wellcome section start --> */}
          <div className="row ">
            <div className="col-md-12 col-lg-4">
              <article className="row">
                <article className="col-12 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      {/* titulo */}
                      <h5 class="card-title">Habilidades Técnicas</h5>
                      <p>Desarrollo web</p>
                      <div class="lenguajes">
                        <ul>
                          <li>CSS</li>
                          <li>HTML</li>
                          <li>JavaScript</li>
                          <li>C#</li>
                          <li>PHP</li>
                          <li>SQL Server</li>
                        </ul>
                      </div>
                      <p>Diseño Creativo</p>
                      <div class="lenguajes">
                        <ul>
                          <li>Adobe Photoshop</li>
                          <li>Adobe Ilustrator</li>
                          <li>Adobe XD</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="col-12 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      {/* titulo */}
                      <h5 class="card-title">Servicios</h5>
                      <ul>
                        <li>Desarrollo Web</li>
                        <li>Diseño Creativo</li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article className="col-12 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      {/* titulo */}
                      <h5 class="card-title">Idiomas</h5>
                      <ul>
                        <li>Español - Nativo</li>
                        <li>Ingles - A1</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </article>
            </div>

            <div className="col-sx-12 col-lg-8">
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        {/* titulo */}
                        <h5 className="card-title">Extracto profesional</h5>
                        <p>
                          Hola, soy Jonatan Fajardo. Hace más de 3 años inicié
                          en el mundo de la tecnología, y desde entonces estudio
                          intensamente por cuenta propia mucho de las áreas que
                          esta implica, soy un multidisciplinario que
                          actualmente realiza proyectos de Escritorio,
                          Desarrollo web y Diseño Gráfico por otro lado he
                          incursionado en el estudio de redes y ciberseguridad.
                          Tambien fui parte del proceso educativo de laAHMsiendo
                          esta la cuarta generacion y en la cual me especialize
                          en Desarrollo de software.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        {/* titulo */}
                        <h5 className="card-title">Formación académica</h5>

                        <div className=" ">
                          <article className="education-item h-100">
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="education-icon font-color-red"
                            />
                            <h3 className="education-date font-color-red">
                              2019
                            </h3>
                            <h5 className="card-title">INTAE</h5>
                            <p className="text-muted fw-normal m-0">
                              Instituto Tecnologico De Administracion De
                              Empresas
                            </p>{" "}
                            <p className="card-text text-muted">2014 - 2019</p>
                          </article>
                        </div>
                        <div className="col-sx-12 col-lg-6 ">
                          <article className="education-item h-100">
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="education-icon font-color-red"
                            />
                            <h3 className="education-date font-color-red">
                              2021
                            </h3>
                            <h5 className="card-title">AHM</h5>
                            <p className="text-muted fw-normal m-0">
                              Academia Programadores
                            </p>{" "}
                            <p className="card-text text-muted">2020 - 2021</p>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="waves z-index mt-0 gray-100">
          <img className="waves-item" src={FootAbaut} alt="" />
        </div>
      </section>
      {/* <!-- description section start --> */}

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
                    <div className="col h-100">
                      <div className="card h-100">
                        <HorizontalCards
                          title={Nombre}
                          imagenSource={imgCertificate}
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
