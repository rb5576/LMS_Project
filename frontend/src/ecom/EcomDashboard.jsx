import React from 'react'
import Navbar from '../components/pages/Navbar';
import DisplayProduct from './DisplayProduct';
import Footer from '../components/pages/Footer';

function EcomDashboard() {
  return (
    <div>
      <Navbar/>
     <div className='pt-20 pb-10 pl-10 pr-10 flex flex-wrap justify-between gap-10'>
     <DisplayProduct/>
     </div>

      <Footer/>
    </div>
  )
}

export default EcomDashboard;
