"use client"
import React, { useReducer } from 'react';
import Image from 'next/image';

const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return { image: action.payload }
        default:
            return state
    }
};

function States() {
    const image1 = <Image src="/maha.webp" alt="image" height={200} width={400} />;
    const image2 = <Image src="/karnatak.webp" alt="image" height={200} width={400} />;
    const image3 = <Image src="/Andhra-Pradesh.webp" alt="image" height={200} width={400} />;
    const image4 = <Image src="/gujarat.webp" alt="image" height={200} width={400} />;
    const image5 = <Image src="/madhya-pradesh.webp" alt="image" height={200} width={400} />;
    const image6 = <Image src="/rajasthan.webp" alt="image" height={200} width={400} />;
    const image7 = <Image src="/kerala.webp" alt="image" height={200} width={400} />;
    const image8 = <Image src="/tamil-nadu.webp" alt="image" height={200} width={400} />;

    const initialValue = {
        image: image1
    }

    const [state, dispatch] = useReducer(reducer, initialValue);

    const changeImage = (value) => {
        dispatch({type:"update", payload:value})
    }

  return (
      <div className='w-full flex justify-center items-center gap-20 my-10'>
          <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-extrabold'>KNOW THE SOURCE</h1>
              <p>Our key fruit-growing locations include:</p>
              <ul>
                  <li onClick={()=> changeImage(image1)} className='hover:bg-yellow-500 hover:cursor-pointer'>Maharashtra</li>
                  <li onClick={()=> changeImage(image2)} className='hover:bg-yellow-500 hover:cursor-pointer'>Karnataka</li>
                  <li onClick={()=> changeImage(image3)} className='hover:bg-yellow-500 hover:cursor-pointer'>Andhra Pradesh</li>
                  <li onClick={()=> changeImage(image4)} className='hover:bg-yellow-500 hover:cursor-pointer'>Gujarat</li>
                  <li onClick={()=> changeImage(image5)} className='hover:bg-yellow-500 hover:cursor-pointer'>Madhya Pradesh</li>
                  <li onClick={()=> changeImage(image6)} className='hover:bg-yellow-500 hover:cursor-pointer'>Rajasthan</li>
                  <li onClick={()=> changeImage(image7)} className='hover:bg-yellow-500 hover:cursor-pointer'>Kerala</li>
                  <li onClick={()=> changeImage(image8)} className='hover:bg-yellow-500 hover:cursor-pointer'>Tamil Nadu</li>
              </ul>
          </div>
          <div>
              {state.image}
          </div>
    </div>
  )
}

export default States