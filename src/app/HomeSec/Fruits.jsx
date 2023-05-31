import React from 'react'
import Image from 'next/image';
import styles from '../styles/styles.module.css'

function Fruits() {
  return (
      <div className={`container max-w-full ${styles.yellowCover}`}>
          <div className='flex justify-center items-center'>
              <Image src='/yellow - Copy.png' alt="image" height={200} width={500} className='max-w-full pt-10' />
          </div>
          <div style={{ height: '500px' }} className="carousel w-full">
              <div id="slide10" className="carousel-item relative w-full flex justify-center items-center">
                  <Image src='/slider1.png' alt="image" height={200} width={1200} className='max-w-full' />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide40" className="btn btn-circle">❮</a>
                      <a href="#slide20" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide20" className="carousel-item relative w-full flex justify-center items-center">
                  <Image src='/slider2.png' alt="image" height={200} width={1200} className='max-w-full' />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide10" className="btn btn-circle">❮</a>
                      <a href="#slide30" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide30" className="carousel-item relative w-full flex justify-center items-center">
                  <Image src='/slider3.png' alt="image" height={200} width={1200} className='max-w-full' />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide20" className="btn btn-circle">❮</a>
                      <a href="#slide40" className="btn btn-circle">❯</a>
                  </div>
              </div>
              <div id="slide40" className="carousel-item relative w-full flex justify-center items-center">
                  <Image src='/slider4.png' alt="image" height={200} width={1200} className='max-w-full' />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide30" className="btn btn-circle">❮</a>
                      <a href="#slide10" className="btn btn-circle">❯</a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Fruits