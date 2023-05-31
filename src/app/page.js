import Image from 'next/image';
import Header from './shared/header/Header';
import Navbar from './shared/navbar/Navbar';
import Carsousel from './HomeSec/Carsousel';
import Images from './HomeSec/Image';
import Card from './HomeSec/Card';
import Kima from './HomeSec/Kima';
import Secret from './HomeSec/Secret';
import Fruits from './HomeSec/Fruits';
import Footer from './shared/footer/Footer';

export default function Home() {
  const image = '/rec.png';
  const image1 = '/sectrate.png';
  const image3 = '/us-pic.png';
  const margin = 'my-8';
  return (
    <>
      <Header />
      <Navbar />
      <Carsousel />
      <Images height={80} width={400} image={ image} margin={margin} />
      <Card />
      <Kima />
      <Images height={80} width={400} image={image1} margin={margin}/>
      <Secret />
      <Fruits />
      <Images height={80} width={400} image={image3} margin={margin}/>
      <Footer/>
    </>
  )
}
