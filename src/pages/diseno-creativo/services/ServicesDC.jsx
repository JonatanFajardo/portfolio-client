import React from "react";
import PlainCard from "../../../components/plaincard/plaincard";
import './servicesDC.css'
// import ddcm from "../datadc.js"

const data = [
  {
      degra_Id:"1",
      degra_Nombre:"Corona virus",
      degra_Imagen: "https://i.ibb.co/q1Tdr6q/Ilustracion-1.jpg",
      degra_Categoria: "Ilustrativo"
  },
  {
      degra_Id:"2",
      degra_Nombre:"Combo de hamburguesa",
      degra_Imagen: "https://i.ibb.co/F7jVWz9/Publicida-2-mockup.jpg",
      degra_Categoria: "Publicitario"
  },
  {
    degra_Id:"4",
    degra_Nombre:"Tarjeta de nutricionista",
    degra_Imagen: "https://i.ibb.co/wsjftdT/Tarjeta-1.jpg",
    degra_Categoria: "Tarjeta"
  },
  {
      degra_Id:"3",
      degra_Nombre:"Atardecer en faro",
      degra_Imagen: "https://i.ibb.co/GT6V9B5/Ilustracion-4-mockup.jpg",
      degra_Categoria: "Ilustrativo"
  },
  {
      degra_Id:"6",
      degra_Nombre:"Tarjeta para taxista",
      degra_Imagen: "https://i.ibb.co/dMczsPB/Tarjeta-2.jpg",
      degra_Categoria: "Tarjeta"
  },
  {
      degra_Id:"5",
      degra_Nombre:"Hamburguesa sobre mesa",
      degra_Imagen: "https://i.ibb.co/p05tG1Z/Publicida-1-mockup.jpg",
      degra_Categoria: "Publicitario"
  },
  {
      degra_Id:"7",
      degra_Nombre:"Festejo de cumpleaños",
      degra_Imagen: "https://i.ibb.co/LRcx9KB/Ilustracion-2.jpg",
      degra_Categoria: "Ilustrativo"
  },
  {
      degra_Id:"8",
      degra_Nombre:"Castaño",
      degra_Imagen: "https://i.ibb.co/C2S47yY/Ilustracion-3-mockup.jpg",
      degra_Categoria: "Ilustrativo"
  },
  {
      degra_Id:"9",
      degra_Nombre:"Tarjeta tienda de variedades",
      degra_Imagen: "https://i.ibb.co/wy8sVyf/Tarjeta-3.jpg",
      degra_Categoria: "Tarjeta"
  },
  {
    degra_Id:"10",
    degra_Nombre:"vaso de licuado",
    degra_Imagen: "https://i.ibb.co/GH2m6jb/Publicida-3.jpg",
    degra_Categoria: "Publicitario"
  },
  {
    degra_Id:"11",
    degra_Nombre:"Instahelp logo",
    degra_Imagen: "https://i.ibb.co/yQk7m2r/mockup.jpg",
    degra_Categoria: "Logo"
  },
  {
    degra_Id:"12",
    degra_Nombre:"Figuras Geometricas",
    degra_Imagen: "https://i.ibb.co/r7r1ZDK/mockup.jpg",
    degra_Categoria: "Icono"
  }
  
]

const ServicesDC = () => {
  return (
    
   <section className="container-full py-5 plaincard">
      <div class="">
      <div class="mx-4">
      <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center">
                <h2 class="fw-bold mb-5">Proyectos Realizados</h2>
              </div>
            </div>
          </div>

            {/* <div id="category-buttons">
                <button class="btn active" onclick="filter('all')"> Show all</button>
                <button class="btn" onclick="filter('Csharp')"> CSharp</button> */}
                {/* <!-- <button class="btn" onclick="filter('Php')">PHP</button>
                <button class="btn" onclick="filter('Maquetado')">Maquetado</button> --> */}
                {/* <button class="btn" onclick="filter('Otros')">Otros</button>
            </div> */}
            
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {data.map(
            ({
              degra_Id,
              degra_Nombre,
              degra_Imagen,
              degra_Categoria
            }) => (
              <PlainCard
                id={degra_Id}
                title={degra_Nombre}
                imagenSource={degra_Imagen}
                categoria={degra_Categoria}
              />
            )
          )}
        </div>
      </div>
    </div>
   </section>
    /* <!-- portfolio section end --> */
  );
};

export default ServicesDC;
