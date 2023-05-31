import React from 'react'
import Image from 'next/image'

function Farmer() {
  return (
      <div className='mx-w-full flex justify-center items-center gap-20 py-20'>
          <div>
              <Image src="/traceability2.webp" alt='image' height={200} width={400} />
          </div>
          <div className='flex flex-col'>
              <h1 className='text'>KNOW THE FARMER</h1>
              <p>Meet the ones who toiled hard to deliver quality fruits to you.</p>
              <Image src="/left-arrow.png" alt='image' height={50} width={100} />
          </div>
    </div>
  )
}

export default Farmer