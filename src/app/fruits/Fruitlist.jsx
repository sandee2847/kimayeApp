import React from 'react'
import { data } from './db'
import Link from 'next/link'
import {FaHome} from 'react-icons/fa'

function Fruitlist() {
    return (
        <div className='container max-w-full my-10'>
            <div className='flex flex-row h-20 gap-10 justify-center items-center pb-10'>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>ALL FRUITS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>FRESH CUTS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>FRUIT COMBOS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>GIFTS BY KIMAYE</h2></Link>
            </div>
            <div className='px-40 flex flex-row gap-3 items-center'>
                <span><FaHome /></span>
                <p>  Home/ All Fruits</p>
            </div>
            <div className='flex flex-row gap-10 flex-wrap justify-center items-center'>
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                {item.image}
                                <div className="card-body">
                                    <p>{item.para}</p>
                                    <div className="card-actions justify-end">
                                        <div className="px-3 py-1 bg-blue-300 rounded-3xl">{ item.price}</div>
                                        {item.btn}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-10 flex flex-row h-20 gap-10 justify-center items-center'>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>ALL FRUITS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>FRESH CUTS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>FRUIT COMBOS</h2></Link>
                <Link className='hover:border-b-2 hover:border-gray-600' href="#"><h2>GIFTS BY KIMAYE</h2></Link>
            </div>

        </div>
    )
}

export default Fruitlist