import React from 'react';
import Image from 'next/image';

function Carsousel() {
  return (
      <div className="container max-w-full carousel">
          <div id="slide1" className="carousel-item relative w-full">
              <Image src="/Delhi-launch-banner copy.jpg" alt="image" height={30} width={1600} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
              <Image src="/Indian-plum-and-peach-banner copy.jpg" alt="image" height={30}  width={1600} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
              <Image src="/kiwi_bannerArtboard_1.webp" alt="image" height={30} width={1600} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
              <Image src="/firstpagw.jpg" alt="image" height={30} width={1600} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
              <Image src="/kiwi_bannerAssured_safety_1.webp" alt="image" height={30} width={1600} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide6" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
              <Image src="/kiwi_bannerWe_serve_you_1.webp" alt="image" height={30} width={1600} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
          </div>
      </div>
  )
}

export default Carsousel