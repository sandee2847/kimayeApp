import React from 'react'
import { data } from '../grow/db'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

function Cardpage2() {
    return (
        <>
            <div className={`container max-w-full flex gap-5 py-10 px-20 ${styles.section}`}>
                <div className='w-8/12 flex justify-center items-center flex-wrap gap-14'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className="card w-96 glass">
                                {item.image}
                                <div className="card-body">
                                    <h2 className="card-title">{item.heading}</h2>
                                    <div>{item.para}</div>
                                    <div className="card-actions justify-end">
                                        <button className="bg-orange-500 py-2 px-3 text-white rounded-3xl hover:bg-orange-700">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

                <div className='w-2/6 flex flex-col gap-5'>
                    <p className='text-2xl'>SEARCH</p>
                    <div className='flex gap-2'>
                        <input className='border h-9 w-30 px-3' type="search" placeholder="search for post" />
                        <button className='bg-green-400 px-4 focus:ring hover:bg-green-800 hover:text-white hover:ring'>SEARCH</button>
                    </div>
                    <p className='text-2xl'>CATEGORIES</p>
                    <p>Pick a link list to show here in your under Blog sidebar &gt; Quick links link list. </p>
                    <p className='text-2xl'>RECENT POST</p>
                    <div className='flex flex-col gap-3 px-10'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-3'>
                                <Image src="/img1.jpg" alt="img1" height={20} width={60} />
                                <p className='text-sm text-gray-400'>Jul 24, 2021</p>
                            </div>
                            <div>
                                <Link className='text-sm' href="#"><p>Top Fruit Safety Tips You Should Be Swearing By Every Time You Consume </p></Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-3'>
                                <Image src="/img2.jpg" alt="img2" height={20} width={60} />
                                <p className='text-sm text-gray-400'>Jul 19, 2021</p>
                            </div>
                            <div>
                                <Link className='text-sm' href="#"><p>Fruits Rich In Vitamin C That You Should Be Eating Everyday</p></Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-3'>
                                <Image src="/img3.jpg" alt="img3" height={20} width={60} />
                                <p className='text-sm text-gray-400'>Jul 07, 2021</p>
                            </div>
                            <div>
                                <Link className='text-sm' href="#"><p>How To Remove And Clean Harmful Pesticides From Fruits</p></Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-3'>
                                <Image src="/img4.jpg" alt="img4" height={20} width={60} />
                                <p className='text-sm text-gray-400'>Jul 01, 2021</p>
                            </div>
                            <div>
                                <Link className='text-sm' href="#"><p>Why Should You Eat Fruits More Often?</p></Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-3'>
                                <Image src="/img5.jpg" alt="img5" height={20} width={60} />
                                <p className='text-sm text-gray-400'>Feb 12, 2021</p>
                            </div>
                            <div>
                                <Link className='text-sm' href="#"><p>Grapes: How they reached India, types and health benefits</p></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cardpage2



