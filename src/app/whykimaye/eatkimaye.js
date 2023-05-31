import React from 'react';
import Image from 'next/image';

function Eatkimaye() {
  return (
    <div className='max-w-full flex flex-col gap-5 justify-center items-center py-10'>
          <Image src="/green-leaves.png" alt="green leaves" height={100} width={80} />
          <p className='text-4xl font-extrabold'>Every time you eat a Kimaye fruit,</p>
          <p className='text-2xl'>we want you to feel free of any worries related to fruit safety and hygiene.</p>
          <Image src="/why2.webp" alt='why2' height={200} width={800} />
          <Image className='absolute right-0 rotate-180' src="/why12.png" alt='why2' height={20} width={100} />
    </div>
  )
}

export default Eatkimaye