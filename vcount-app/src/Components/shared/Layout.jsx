import React from 'react'
import { Outlet } from 'react-router-dom'


import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout() {
  

 
  return (
    <div>
      <Navbar />
    <div className='outlet'>
      {<Outlet />}
    </div>
      <Footer/>
  </div>

  )
}
