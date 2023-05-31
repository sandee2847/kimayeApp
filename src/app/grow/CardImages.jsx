"use client"
import React, { useState } from 'react'
import Cardpage1 from './Cardpage1';
import Cardpage2 from './Cardpage2';

function CardImages() {
    const [element, setElement] = useState(true);
    const [color, setColor] = useState("bg-gray-950")
    const value = () => {
        setElement(true)
    };
    const value1 = () => {
        setElement(false)
    };
    return (
        <>
            {
                element?(<Cardpage1/>):(<Cardpage2/>)
            }
            <div className='my-4 flex max-w-full gap-8 justify-center items-center'>
                <button onClick={value} className={`h-8 w-14 text-white ${element ? color : "bg-gray-400"}`}>1</button>
                <button onClick={value1} className={`h-8 w-14 text-white ${element ? "bg-gray-400" : color}`}>2</button>
            </div>
        </>
    )
}

export default CardImages



