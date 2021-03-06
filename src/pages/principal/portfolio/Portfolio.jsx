import React from "react";
// import datapf from "./datapf";
import PlainCard from "../../../components/plaincard/plaincard";
const datapf =[
   {
       Nombre: "Gestión Colegial Web",
       Url: "https://i.ibb.co/LSkQS3q/GESTION-COLEGIAL-ADM-MOCKUP.jpg",
       Categoria: "Desarrollo Web",
       SubCategoria: "CSharp"
   },
   {
       Nombre: "PetsHome",
       Url: "https://i.ibb.co/0snqhG6/Pets-Home-MOCKUP.jpg",
       Categoria: "Desarrollo Web",
       SubCategoria: "CSharp"
   },
   {
       Nombre: "PIZZADELY",
       Url: "https://i.ibb.co/x7s53qR/PIZZADELY-MOCKUP.jpg",
       Categoria: "Desarrollo Web",
       SubCategoria: "HTML"
   },
   {
       Nombre: "Atardecer en faro",
       Url: "https://i.ibb.co/HqcKFBQ/Ilustracion-4.jpg",
       Categoria: "Diseño Creativo",
       SubCategoria: "Ilustrativo"
   },
   {
       Nombre: "Tarjeta de nutricionista",
       Url: "https://i.ibb.co/wsjftdT/Tarjeta-1.jpg",
       Categoria: "Diseño Creativo",
       SubCategoria: "Tarjeta"
   },
   {
       Nombre: "Hamburguesa sobre mesa",
       Url: "https://i.ibb.co/0twyCCn/Publicida-1-mockup.jpg",
       Categoria: "Diseño Creativo",
       SubCategoria: "Publicitario"
   },
]
const Portfolio = () => {
  return (
    // <!-- portfolio section start -->
    <section className="portfolio py-5 gray-100" id="portfolio">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Algunos trabajos realizados</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {datapf.map(({ Nombre, Url, Categoria, SubCategoria }) => (
           <PlainCard
              title={Nombre}
              imagenSource={Url}
              categoria={Categoria}
              subcategoria={SubCategoria}
            />
          ))}
        </div>
      </div>
    </section>
    // <!-- portfolio section end -->
  );
};

export default Portfolio;
