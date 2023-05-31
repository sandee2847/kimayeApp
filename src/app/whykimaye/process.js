import React from 'react'
import Image from 'next/image'

function Process() {
  return (
      <div className='max-w-full relative'>
          <Image src="/why6.webp" alt='why6' height={200} width={800} className='w-full' />
          <div className='absolute top-72 pt-48 px-60'>
              <div className='relative flex justify-center items-center mb-5'>
                  <Image src="/why10.png" alt="why10" height={200} width={600} />
                  <p className='absolute top-10 text-2xl p-3 text-white'>Our Processes Ensure We Keep Our Promise</p>
              </div>
              <p>To ensure safety, our products go through multiple quality checks that adhere to global standards. Our supply chain is contamination-free, with minimum handling and maximum hygiene of our produce.
                  We don’t stop there. All our fruits are impeccable storytellers through our 100% traceability feature. Just flip the fruit, and find a QR code affixed to it. Once you scan the code, you will find the entire journey of the fruit from farm to home. You can get to know where your fruit was grown, who was the farmer, and how your fruit reached you. We believe in being 100% transparent with our consumers.
              </p>
          </div>
    </div>
  )
}

export default Process