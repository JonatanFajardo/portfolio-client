import React from "react";
import WorkImage from "../../../assets/img/work-working.gif";
// import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    
    //  <!-- about section start -->
    <section className="App about py-5" id="about">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Sobre mis</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h3 className="fs-4 mb-3">Conoceme un poco...</h3>
              <p className="text-muted">
                Hola, soy Jonatan Fajardo. 
                Hace más de 3 años inicié en el mundo de la tecnología, y desde entonces 
                estudio intensamente por cuenta propia mucho de las áreas que esta implica, 
                soy un multidisciplinario que actualmente realiza proyectos de Escritorio, 
                Desarrollo web y Diseño Gráfico por otro lado he incursionado en el estudio de 
                redes y ciberseguridad. Tambien fui parte del proceso educativo de la 
                <a
                  className="link font-color-red text-decoration-none"
                  href="http://www.ahm-honduras.com/?p=4609"
                  target="_blank"
                > AHM </a> 
                siendo esta la cuarta generacion y en la cual me especialize en Desarrollo de software.
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold font-color-red">8</h4>
                  <p className="text-muted">Proyectos Web</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold font-color-red">10</h4>
                  <p className="text-muted">Ilustraciones Graficas</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold font-color-red">2</h4>
                  <p className="text-muted">Positive Reviews</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12 d-flex align-items-center">
                <a href="#" className="btn btn-danger px-3 bg-red me-5">
                  Download CV
                </a>
                {/* <div className="social-links">
                  <a href="#" className="text-dark me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-dark me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-dark me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-dark me-2">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
             <img src={WorkImage} className="rounded-3"></img>
          </div>
          {/* <div className="col-md-6 mt-5 mt-md-0">
            <div className="skill-item mb-4">
              <h3 className="fs-6">Html</h3>
              <div className="progress" style="height: 5px;">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Css</h3>
              <div className="progress" style="height: 5px;">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 50%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Javascript</h3>
              <div className="progress" style="height: 5px;">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 75%;"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="fs-6">Bootstrap</h3>
              <div className="progress" style="height: 5px;">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 100%;"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    //  <!-- about section end -->
  );
};
export default About;
