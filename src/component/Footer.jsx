import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return<div class="container-fluid bg-black">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="" class="nav-link px-2 text-white">Home</Link></li>
      <li class="nav-item"><Link to="about" class="nav-link px-2 text-white">About</Link></li>
      <li class="nav-item"><Link to="country" class="nav-link px-2 text-white">Country</Link></li>
      <li class="nav-item"><Link to="contact" class="nav-link px-2 text-white">Contact</Link></li>
    </ul>
    <p class="text-center text-white">© 2024 Company, All right reserved to @Azmat alli khan</p>
  </footer>
</div>
}

export default Footer