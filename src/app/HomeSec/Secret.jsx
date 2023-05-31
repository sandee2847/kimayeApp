import React from 'react'
import Image from 'next/image'

function Secret() {
  return (
      <div style={{ backgroundColor: '#eee' }} className='container max-w-full pb-5'>
          <div className="carousel w-full ">
              <div id="item1" className="carousel-item w-full flex justify-center">
                  <Image src='/bottomslide1.png' alt="image" height={100} width={1200} className='max-w-full' />
              </div>
              <div id="item2" className="carousel-item w-full  flex justify-center">
                  <Image src='/bottom_slide2.png' alt="image" height={100} width={1200} className='max-w-full' />
              </div>
              <div id="item3" className="carousel-item w-full  flex justify-center">
                  <Image src="/bottom_slide3.png" alt="image" height={100} width={1200} className='max-w-full' />
              </div>
              <div id="item4" className="carousel-item w-full  flex justify-center">
                  <Image src="/bottom_slide4.png" alt="image" height={100} width={1200} className='max-w-full' />
              </div>
              <div id="item5" className="carousel-item w-full  flex justify-center">
                  <Image src="/bottom_slide5.png" alt="image" height={100} width={1200} className='max-w-full' />
              </div>
          </div>
          <div className="flex justify-center w-full py-8 gap-2">
              <a href="#item1" className="btn btn-md">1</a>
              <a href="#item2" className="btn btn-md">2</a>
              <a href="#item3" className="btn btn-md">3</a>
              <a href="#item4" className="btn btn-md">4</a>
              <a href="#item5" className="btn btn-md">5</a>
          </div>
    </div>
  )
}

export default Secret