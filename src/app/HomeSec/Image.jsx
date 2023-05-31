import React from 'react'
import Image from 'next/image'

function Images({height, width, image, margin}) {
  return (
      <div style={{backgroundColor:'#eee'}} className=' container h-100 max-w-full flex justify-center items-center'>
      <Image src={image} alt="image" height={height} width={width} className={`max-w-full ${margin}`} />
    </div>
  )
}

export default Images;