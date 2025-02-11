import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return <div className="container-fluid text-center home-container min-h-screen w-full">
  <div className="hero-sec">
    <div className="hero-heading "><h1>Explore the world</h1></div>
    <div className="hero-detail">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
      dolorem perferendis nihil debitis voluptatem,
    </div>
    {/* Fix: Use className instead of class */}
    <Link to="about" className="mybutton">
      Explore   <FaArrowRight color="white" className="ms-3"/>
    </Link>
  </div>
</div>
}

export default Hero