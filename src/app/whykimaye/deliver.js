import React from 'react'
import Image from 'next/image';
import styles from '../styles/styles.module.css';

function Deliver() {
  return (
      <div className={`max-w-full flex flex-col gap-5 justify-center items-center py-10 ${styles.yellowCover}`}>
          <Image src="/green-leaves.png" alt="green leaves" height={100} width={80} />
          <p className='text-4xl font-black'>We Always Deliver</p>
          <p className='text-2xl'>Kimaye stands tall on three essential pillars</p>
          <div className='flex gap-10'>
              <div className="card w-96 bg-base-100 shadow-xl ">
                  <Image src="/why3.webp" className='w-full' height={40} width={500} alt="Shoes" />
                  <div className="card-body">
                      <h1 className="card-title">
                          Safety
                      </h1>
                      <div className='text-gray-400'>We have set stringent standards for all our
                          fruits throughout the entire farm to home
                          journey.
                      </div>
                  </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl ">
                  <Image src="/why4.webp" className='w-full' height={40} width={500} alt="Shoes" />
                  <div className="card-body">
                      <h1 className="card-title">
                          Technology
                      </h1>
                      <div className='text-gray-400'>Our innovations enabling 100% product
                          traceability and longer shelf life keeping the
                          fruits fresh.
                      </div>
                  </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl ">
                  <Image src="/why5.webp" className='w-full' height={40} width={500} alt="Shoes" />
                  <div className="card-body">
                      <h1 className="card-title">
                          Social Impact
                      </h1>
                      <div className='text-gray-400'>We do good for our farmers, create rural
                          jobs, drive gender equality and protect the
                          environment.
                      </div>
                  </div>
              </div>
         </div>
      </div>
  )
}

export default Deliver;