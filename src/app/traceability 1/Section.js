import React from 'react'
import Image from 'next/image'

function Section() {
  return (
      <div className='flex max-w-full'>
          <Image src="/traceability1.jpg" alt="trace Image" height={200} width={800} className='w-full'/>
    </div>
  )
}

export default Section