import React from 'react'
import Image from 'next/image'

function Worldmap() {
  return (
      <div className='mt-20 max-w-full flex flex-col gap-14 justify-center items-center my-10'>
          <h1 className='text-4xl font-extrabold'>We’ve Made it to the World Map</h1>
          <p className='text-base'>35 countries | Delivering 40,000 tons of fruit annually</p>
          <Image src="/why9.png" alt="why9" height={200} width={800} className='w-full' />
    </div>
  )
}

export default Worldmap