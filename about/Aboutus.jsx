import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import About from '../component/About';

function Aboutus() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <About />
    </div>
    <Footer />
    </>
  )
}

export default Aboutus
