import React from 'react';
import Image from 'next/image';

function Experience() {
  return (
      <div className='max-w-full flex flex-col justify-center items-center gap-10 mb-10'>
          <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-extrabold'>ENHANCING THE KIMAYE EXPERIENCE</h1>
              <p>Fulfilling your local and exotic fruit cravings</p>
          </div>
          <div className='flex justify-center items-center gap-20 px-40'>
              <div className='flex flex-col justify-center items-center gap-10'>
                  <h1 className='text-2xl font-semibold'>KEMAYE-GROWN FRUITS</h1>
                  <div className='flex justify-center items-center gap-10'>
                    <Image src="/traceability4.png" alt="image" height={50} width={100}/>
                      <p>These fruits are grown with the help of our farmer partners. We train the farmers and hone their technical know-how to grow quality fruits. </p>
                  </div >
                  <div className='flex justify-center items-center gap-10'>
                    <Image src="/traceability5.png" alt="image" height={50} width={100}/>
                      <p>The supply chain is handled by Kimaye, ensuring that only quality fruits earn the Kimaye badge. </p>
                  </div >
                  <div className='flex justify-center items-center gap-10'>
                    <Image src="/traceability6.avif" alt="image" height={50} width={100}/>
                      <p>We partner with more than 5,000 farmers across 8 states to grow fruits that meet export quality standards. </p>
                  </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-10' >
                  <h1 className='text-2xl font-semibold'>KIMAYE-FULFILLED FRUITS</h1>
                  <div className='flex justify-center items-center gap-10'>
                      <Image src="/traceability7.png" alt="image" height={50} width={100} />
                      <p>Local Jewels - Kimaye partners with either a large farmer or an FPO to manage the farmer relationship. The guidance is provided to these partners who further implement quality standards on farms. </p>
                  </div>
                  <div className='flex justify-center items-center gap-10'>
                      <Image src="/traceability8.png" alt="image" height={50} width={100} />
                      <p>Kimaye Global - Only the best Global companies who adhere to our standards of fruit safety and quality become our partners for imported fruits. </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Experience