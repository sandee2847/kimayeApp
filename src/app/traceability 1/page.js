import React from 'react'
import Header from '../shared/header/Header'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Section from './Section'
import Farmer from './Farmer'
import States from './States'
import Journey from './Journey'
import Experience from './Experience'

function page() {
  return (
      <>
          <Header/>
          <Navbar />
          <Section />
          <Farmer />
          <States />
          <Journey />
          <Experience/>
          <Footer/>
      </>
  )
}

export default page