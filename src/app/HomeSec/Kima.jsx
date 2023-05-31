import React from 'react'
import Image from 'next/image';
import styles from '../styles/styles.module.css'

function Kima() {
  return (
      <div className={`container px-40 flex content-center items-center h-100 max-w-full ${styles.bgImg}`} >
          <div className='w-6/12'>
              <Image src='/fruit23.png' alt="image" height={200} width={600} />
          </div>
          <div className='w-6/12'>
              <Image src='/hearFrom.png' alt="image" height={200} width={400} />
              <div className='text-white text-base'>

                  Many of us share common safety concerns about the food we eat.

                  When it comes to fruits, these concerns are even more serious in terms of the way they are grown and handled throughout their farm-to-home journey. We make eating fruits a worry-free and enjoyable experience for you.

                  Since 2009, we have set the benchmark for fruit safety and quality in 35 countries. Kimaye is now expanding its footprint in India, bringing you multiple varieties of fruit that are grown, packaged, and delivered in the safest and most socially responsible manner.
              </div>
              <Image className='mt-5' src='/safe.png' alt="image" height={200} width={400} />
              <button className='bg-gray-50 py-3 px-8 rounded-full'>Know More</button>
          </div>
    </div>
  )
}

export default Kima;
