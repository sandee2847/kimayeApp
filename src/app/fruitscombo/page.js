import React from 'react'
import FruitCombo from './FruitCombo';
import Header from '../shared/header/Header';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

function page() {
  return (
      <>
          <Header/>
          <Navbar/>
          <FruitCombo />
          <Footer/>
      </>
  )
}

export default page;