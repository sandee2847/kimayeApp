import React from 'react'
import Header from '../shared/header/Header'
import Navbar from '../shared/navbar/Navbar'
import Footer from '../shared/footer/Footer'
import Section from './section'
import Images from '../HomeSec/Image'
import GrowWithKimaye from './gorwWithKimaye'
import CardImages from './CardImages'

const image = '/grow_by_kimaye.webp';
const margin="my-0"

function page() {
  return (
    <>
      <Header />
      <Navbar />
      <Images height={200} width={1600} image={image} margin={margin} />
      <GrowWithKimaye />
      <CardImages/>
      <Footer />
    </>
  )
}

export default page