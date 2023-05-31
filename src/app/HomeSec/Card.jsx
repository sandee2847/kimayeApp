import React from 'react'
import Image from 'next/image';

function Card() {
  return (
      
      <>
          <div style={{ backgroundColor: '#eee' }} className='container max-w-full flex justify-center items-center flex-row gap-20 pt-20'>
              <div className="card w-96 bg-base-100 shadow-xl ">
                  <Image src="/e0c74e05ba4b05097e90bb82141d140a_570x.webp" className='max-w-full rounded-2xl hover:border-2' height={40} width={450} alt="Shoes" />
                  <div className="card-body">
                      <h1 className="card-title">
                          ALL FRUITS
                          <div className="badge badge-secondary">NEW</div>
                      </h1>
                      <div>Pick and choose from a wide range of delicious fruits</div>
                      <div className="card-actions justify-end">
                          <div className="badge badge-outline bg-purple-600 text-white text-base p-4">Shop Now</div>
                      </div>
                  </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                  <Image src="/204d73294996a9240088f1a27d44fe0a_570x.webp" className='max-w-full rounded-2xl hover:border-2' height={40} width={450} alt="Shoes" />
                  <div className="card-body">
                      <h2 className="card-title">
                          FRESH CUTS
                          <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <div>We want to spoon-feed you… quite literally</div>
                      <div className="card-actions justify-end">
                          <div className="badge badge-outline bg-purple-600 text-white text-base p-4">Shop Now</div>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{backgroundColor:'#eee'}} className='flex justify-center items-center flex-row gap-20 py-20'>
              <div className="card w-96 bg-base-100 shadow-xl">
                  <Image src="/2bcaf12e866a7a0baf63bd5b0dd950c9_570x.webp" className='max-w-full rounded-2xl hover:border-2' height={40} width={450} alt="Shoes" />
                  <div className="card-body">
                      <h2 className="card-title">
                          FRUIT COMBOS
                          <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <div>Indulge in fruit combinations created by us</div>
                      <div className="card-actions justify-end">
                          <div className="badge badge-outline bg-purple-600 text-white text-base p-4">Shop Now</div>
                      </div>
                  </div>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
                  <Image src="/2I8A6078_570x.webp" className='max-w-full rounded-2xl hover:border-2' height={40} width={450} alt="Shoes" />
                  <div className="card-body">
                      <h2 className="card-title">
                          GIFTS BY KIMAYE
                          <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <div>Healthy & memorable gifts for your loved ones</div>
                      <div className="card-actions justify-end">
                          <div className="badge badge-outline bg-purple-600 text-white text-base p-4">Shop Now</div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Card;