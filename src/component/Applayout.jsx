import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Applayout = () => {
  return (
    <div className='app-container'>
    <Header />
   
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Applayout