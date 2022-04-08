import React from "react";
import ImageCard from "../../../components/imageCard/imageCard";
import data from "../data";

let pathImage = "../../assets/img/desarrollo-web/";

const Services = () => {
  return (
    // <!-- portfolio section start -->
    //     <section class="portfolio py-5" id="portfolio">
    //        <div class="container-lg py-4">
    //           <div class="row justify-content-center">
    //                <div class="col-lg-8">
    //                    <div class="section-title text-center">
    //                        <h2 class="fw-bold mb-5">Latest Works</h2>
    //                    </div>
    //                </div>
    //           </div>
    //           <div class="row">
    //         //    <ImageCard imagenSource={data.find(p => p.id === 2).image} nameRedirect={'Detalle'}/>

    //           </div>
    //        </div>
    //     </section>

   <section className="container-full py-5">
      <div class="cards-2 ">
      <div class="container">
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
            
        <div class="row g-4">
          {data.map(
            ({
              deweb_Id,
              deweb_Nombre,
              deweb_Descripcion,
              deweb_Imagen,
              deweb_Categoria,
            }) => (
              <ImageCard
                id={deweb_Id}
                title={deweb_Nombre}
                information={deweb_Descripcion}
                imagenSource={deweb_Imagen}
                nameRedirect={"Detalle"}
                urlRedirect={"./Item/"}
                categoria={deweb_Categoria}
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

export default Services;
