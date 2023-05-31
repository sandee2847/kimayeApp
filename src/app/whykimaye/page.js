import React from 'react'
import Section from './section'
import Header from '../shared/header/Header'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Eatkimaye from './eatkimaye'
import Deliver from './deliver'
import Process from './process'
import Perfection from './perfection'
import Worldmap from './worldmap'

function page() {
  return (
    <>
      <Header />
      <Navbar />
      <Section />
      <Eatkimaye />
      <Deliver />
      <Process />
      <Perfection />
      <Worldmap />
      <Footer />
    </>
  )
}

export default page