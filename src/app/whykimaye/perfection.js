import React from 'react'
import Image from 'next/image'
import styles from '../styles/styles.module.css';

function Perfection() {
  return (
      <div className={`max-w-full flex py-10 flex-col justify-center items-center gap-10 ${styles.bgImg}`}>
          <h1 className='text-5xl font-extrabold text-white my-10'>Four Steps to Perfection</h1>
          <div className='flex px-40 gap-20'>
              <div className='flex gap-10 flex-col justify-center items-center'>
                  <Image src="/why7.png" alt='image' height={200} width={200} />
                  <h1 className='text-2xl font-bold text-white'>Grow Responsibly</h1>
                  <p className='text-white'>We follow Global Good Agricultural Practices (G.A.P) and train our farmers to undertake activities that ensure the growth of healthy fruits. We test multiple lots in accredited labs for over 180 chemicals. This ensures that our fruits are 100% safe to consume.</p>
              </div>
              <div className='flex gap-10 flex-col justify-center items-center'>
                  <Image src="/why8.png" alt='image' height={200} width={200} />
                  <h1 className='text-2xl font-bold text-white'>Handpicked at farms</h1>
                  <p className='text-white'>Our trained Harvesting teams ensure only the best fruits are picked from the tree. Our fruits have no need to travel to the mandis! The fruit selection is done at the farm itself to deliver consistent freshness and taste.</p>
              </div>
          </div>
    </div>
  )
}

export default Perfection