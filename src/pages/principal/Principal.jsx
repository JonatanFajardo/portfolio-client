import React from 'react'
import About from './about/About'
import Service from './service/Service'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Portfolio from './portfolio/Portfolio'
import FreelancerAvailable from './freelancerAvailable/FreelancerAvailable'
import Home from './home/Home'


const Principal = () => {
  return (
    <>
        <Home />
        <About />
        <Service />
        <FreelancerAvailable />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default Principal