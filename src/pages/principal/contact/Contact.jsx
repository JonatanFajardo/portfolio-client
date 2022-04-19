import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from 'react'

const Contact = () => {
  return (
    // <!-- contact section start -->
    <section class="contact py-5" id="contact">
       <div class="container-lg">
           <div class="row justify-content-center">
               <div class="col-lg-8">
                   <div class="section-title text-center">
                       <h2 class="fw-bold mb-5">Contactame</h2>
                   </div>
               </div>
           </div>
           <div class="row">
               <div class="col-md-5">
                   <div class="contact-item d-flex mb-3 gray-100 p-3 rounded-3">
                      <div class="icon fs-4 font-color-red">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </div>
                      <div class="text ms-3">
                         <h3 class="fs-5">Correo</h3>
                         <a class="text-muted text-decoration-none" href='mailto:jonatanabimelecfajardo@gmail.com'>Jonatanabimelecfajardo@gmail.com</a>
                         <p ></p>
                      </div>
                   </div>
                   <div class="contact-item d-flex mb-3 gray-100 p-3 rounded-3">
                      <div class="icon fs-4 font-color-red">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                      </div>
                      <div class="text ms-3">
                         <h3 class="fs-5">Teléfono</h3>
                         <p class="text-muted">+504 8932 2291</p>
                      </div>
                   </div>
               </div>
               <div class="col-md-7">
                   <div class="contact-form">
                      <form>
                         <div class="row">
                            <div class="col-lg-6 mb-4">
                               <input type="text" placeholder="Nombre" class="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                            </div>
                            <div class="col-lg-6 mb-4">
                              <input type="text" placeholder="Correo" class="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                            </div>
                         </div>
                         <div class="row">
                             <div class="col-lg-12 mb-4">
                                 <input type="text" placeholder="Subject" class="form-control form-control-lg fs-6 border-0 shadow-sm"/>
                             </div>
                         </div>
                         <div class="row">
                             <div class="col-lg-12 mb-4">
                                 <textarea rows="5" placeholder="Tu Mensaje" class="form-control form-control-lg fs-6 border-0 shadow-sm"></textarea>
                             </div>
                         </div>
                         <div class="row">
                            <div class="col-lg-12">
                               <button type="submit" class="btn btn-danger px-3">Enviar Mensaje</button>
                            </div>
                         </div>
                      </form>
                   </div>
               </div>
           </div>
       </div>
    </section>
   //  <!-- contact section end -->
  )
}

export default Contact