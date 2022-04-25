import React from 'react'
import './plaincard.css'
// import { SRLWrapper } from "simple-react-lightbox";

const plaincard = ({title, imagenSource, categoria, subcategoria = ''}) => {
  /* Indicamos el tipo informacion que mostrara en el apartado de categoria*/
  let infoCategoricard;
  if (subcategoria == ""){
    infoCategoricard = <p class="mb-0 font-color-red mt-2 text-decoration-none">{categoria}</p>
    
  }else{
    infoCategoricard = <p class="mb-0 font-color-red mt-2"><a href={categoria.replace(/ /g, "").replace("ñ", "n")} class="font-color-red">{categoria}</a>, {subcategoria}</p>
  }

  return (
    // <SRLWrapper>
    <div id='plaincard' class="col-md-6 col-lg-4 py-2">
      <div class="portfolio-item">
          <div className='image img-thumbnail shadow text-center overflow-hidden'>

          {/* <img src={imagenSource} class="position-absolute w-100" alt="portfolio item"/> */}
          <img src={imagenSource} class="expand " alt="portfolio item"/>
          </div>
          {infoCategoricard}
          {/* <p class="mb-0 font-color-red mt-2 text-decoration-none"><a href={categoria.replace(/ /g, "").replace("ñ", "n")} class="font-color-red">{categoria}</a>, {subcategoria}</p> */}
          {
            (() => {
             
          })()}
          <h3 class="text-capitalize fs-5 ">{title}</h3>
      </div>
    </div>
    // </SRLWrapper>
  )
}

export default plaincard