import React from 'react'
import Image from 'next/image'

function Journey() {
  return (
      <div className='max-w-full flex justify-center items-center gap-20 px-60 py-20'>
          <div className='w-1/2'>
              <Image src="/traceability3.webp" height={200} width={400} alt="image" />
          </div>
          <div className='w-1/2 flex flex-col'>
              <Image src="/left-arrow.png" height={200} width={100} alt="image" />
              <h1 className='text-4xl font-extrabold'>KNOW THE JOURNEY</h1>
              <p>You can now unveil the entire journey of a fruit just by scanning a QR code. </p>
          </div>
    </div>
  )
}

export default Journey