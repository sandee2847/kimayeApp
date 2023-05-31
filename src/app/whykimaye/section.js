import React from 'react'
import Image from 'next/image'
import styles from '../styles/styles.module.css';

function Section() {
  return (
      <div className={`container h-auto py-10 max-w-full grid lg:grid-rows-1 grid-rows-2 grid-cols-1 lg:grid-cols-2 grid-flow-col justify-items-center items-center ${styles.why}`}>
          <div className='grid grid-flow-row gap-5 w-full justify-center items-center'>
              <p className='text-white text-4xl'>Fruits Grown with Passion</p>
              <div className={`h-20 relative' ${styles.whybg}`}><p className='text-white text-5xl px-24 py-5'>and Delivered with Care</p></div>
              <p className='text-white text-3xl'>Kimaye is synonymous with fruit safety</p>
          </div>
          <div className='grid justify-center items-center'>
              <Image src="/why1.webp" alt="sction image" height={600} width={800}/>
          </div>
      </div>
        

  )
}

export default Section