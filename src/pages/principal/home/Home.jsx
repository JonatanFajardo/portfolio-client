import React from 'react'
import ProfileImage from '../../../assets/img/Profile.png'
import WaveWellcome from '../../../assets/img/wavesWellcome2.svg'
const Home = () => {
  return (
    
//  <!-- home section start -->
 <section class="home" id="wellcome">
    <div class="container">
        <div class="row align-items-center align-content-center">
            <div class="col-md-6 mt-5 mt-md-0">
               <div class="text-center">
                  <img src={ProfileImage} class="mw-100" alt="profile img"/>
               </div>
            </div>
            <div class="col-md-6 mt-5 mt-md-0 order-md-first">
               <div class="home-text">
                  <p class="mb-1">Bienvenido</p>
                  <h1 class="text-uppercase fs-1 fw-bold">Especialista en Software</h1>
                  <h2 class="fs-4">Jonatan Fajardo</h2>
                  {/* <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <a href="#portfolio" class="btn btn-red px-3 mt-3">Mis Trabajos</a>
               </div>
            </div>
        </div>
    </div>
        <div class="waves">
              <div class="waves-item">
                 <img src={WaveWellcome}>
                    
                 </img>
                {/* <svg
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  style={{ height: "100%", width: " 100%" }}
                >
                  <path
                    d="M0.00,49.98 C220.37,45.88 280.19,146.53 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style={{ fill: "#FFF" }}
                  ></path>
                </svg> */}
              </div>
            </div>
  
 </section>
//  <!-- home section end -->
  )
}

export default Home