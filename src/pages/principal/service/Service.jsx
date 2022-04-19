import React from 'react';
import ImageCard from '../../../components/imageCard/imageCard'
import DataD from './services'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {faBezierCurve} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
 

const Service = () => {
  return (
    // <!-- service section start -->
    <section class="services py-5 gray-100" id="services">
       <div class="container-lg">
          <div class="row justify-content-center">
               <div class="col-lg-8">
                   <div class="section-title text-center">
                       <h2 class="fw-bold mb-5">Servicios</h2>
                   </div>
               </div>
           </div>
           <div class="row text-center">
               <div class="col-md-6 col-lg-6 mb-4">
                           <Link to="DesarrolloWeb"  className='font-color-red text-decoration-none'>
                   <div class="service-item shadow-sm p-4 rounded bg-white">
                       <div class="icon my-3 font-color-red fs-2">
                       <FontAwesomeIcon icon={faCode} />
                       </div>
                       <h3 class="fs-5 py-2">
                                Desarrollo Web
                        </h3>
                       <p class="text-muted">Realiza tu pagina web o aplicacion desktop.</p>
                   </div>
                           </Link>
               </div>
               <div class="col-md-6 col-lg-6 mb-4">
                           <Link to="DisenoCreativo" className='font-color-red text-decoration-none'>
                   <div class="service-item shadow-sm p-4 rounded bg-white">
                       <div class="icon my-3 font-color-red fs-2">
                       <FontAwesomeIcon icon={faBezierCurve} />
                       </div>
                       <h3 class="fs-5 py-2">
                                Diseño Creativo
                        </h3>
                       <p class="text-muted">Crea tu logo profesional o tu anuncio publicitario.</p>
                   </div>
                           </Link>
               </div>
           </div>
       </div>
    </section>
    // <!-- service section end -->
  )
}

export default Service