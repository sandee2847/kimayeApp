import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
      <div className='container max-w-full bg-green-200 py-4'>
          <div className='flex justify-between items-center px-36'>
              <div>
                  <ul>
                      <li><p>FAQS</p></li>
                      <li><p>Contact Us</p></li>
                      <li><p>shipping & return policy</p></li>
                      <li><p>terms and condition</p></li>
                      <li><p>privacy policy</p></li>
                  </ul>
              </div>
              <div>
                  <p><b>Follow us on</b></p>
                  <div className='flex gap-2'>
                      <Image src="/insta-icon.png" alt="image" height={20} width={40} className='max-w-full' />
                      <Image src="/twitter-icon.webp" alt="image" height={20} width={40} className='max-w-full' />
                      <Image src="/fb-icon.png" alt="image" height={20} width={40} className='max-w-full' />
                  </div>
              </div>
          </div>
          <hr className=' my-3 h-0.5 bg-gray-400'/>
          <div className='flex justify-between items-center px-36'>
              <p>copyright {new Date().getFullYear()} All rights reserved</p>
              <Image src="/ting.webp" alt="image" height={50} width={100} className='max-w-full' />
          </div>
    </div>
  )
}

export default Footer;