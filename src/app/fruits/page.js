import React from 'react'
import Header from '../shared/header/Header'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Fruitlist from './Fruitlist'

function page() {
  return (
      <>
          <Header />
          <Navbar />
          <Fruitlist/>
          <Footer/>
      </>
  )
}

export default page