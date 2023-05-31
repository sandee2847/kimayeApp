import React from 'react';
import Image from 'next/image';
import styles from '../styles/styles.module.css'

function Section() {
    return (
        <div className='container max-w-full'>
            <div>
                <Image src="/ourstory.jpg" alt="our story" height={200} width={800} className="w-full" />
            </div>
            {/* scetion with text and image */}
            <div className='flex gap-10 px-40 my-10'>
                <div className='w-1/2'>
                    <Image src="/our1.webp" alt='our1' height={200} width={700} />
                </div>
                <div className='flex justify-center flex-col w-1/2'>
                    <h1 className='text-3xl py-10 font-extrabold leading-10'>
                        KIMAYE WANTS TO GIVE YOU ASSURANCE AND EARN YOUR TRUST
                    </h1>
                    <p className='leading-10 text-xl'>
                        by consistently delivering the safest and highest-quality fruits at your doorstep. Our roots lie in the principles of cooperation and partnership.

                        Since 2009, we have focused on building a brand that promises
                    </p>
                    <div className='flex gap-10 mt-5'>
                        <div>
                            <Image src="/our2.png" alt='our2' height={50} width={100} />
                            <p className='mt-5'>Unparalleled
                                safety</p>
                        </div>
                        <div>
                            <Image src="/our3.png" alt='our2' height={50} width={100} />
                            <p className='mt-5'>Benchmark
                                quality</p>
                        </div>
                        <div>
                            <Image src="/our4.png" alt='our2' height={50} width={100} />
                            <p className='mt-5'>Highest
                                consistency</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* yellow section */}
            <div className={`flex py-20 gap-10 px-40 justify-center items-center ${styles.yellowCover}`}>
                <div className='w-1/2'>
                    <Image src="/our5.webp" alt='our5' height={200} width={500} />
                </div>
                <p className='w-1/2 leading-10 text-xl'>
                    From being the largest exporter of pomegranates and bananas to stepping into the domestic retail market, we have come a long way by adding more colours to your plate.

                    We work with the farmers from the time they plant the seed. Our fruits meet international safety standards at every stage of growing, sourcing, packaging, and delivery. We have worked with farmers and innovated farming and delivery techniques for better shelf life and traceability while meeting the most stringent safety norms.

                    Our accolades are only a part of our journey. It is our mantra — safest fruits, always — that we wear as a badge of honour.
                </p>
            </div>
            {/* inspiring story */}
            <div className='flex px-40 py-10 justify-center items-center'>
                <div className='flex flex-col w-1/2 gap-2 relative'>
                    <h1 className='text-2xl font-extrabold'>AN INSPIRING SUCCESS STORY</h1>
                    <p className='text-blue-400'>The husband-wife duo who weaved a fruitful journey.</p>
                    <p className='text-xl leading-10 z-10'>Kimaye began as a collaborative effort by a husband-wife duo who left their cushy careers to start INI Farms. The result? Kimaye became India first brand to retail fresh fruits in the USA. While one looks after the operations, the other manages sales and marketing. Meet the founders of Kimaye: Purnima and Pankaj Khandelwal.</p>
                    <Image className='absolute top-60 left-96' src="/right-arrow.png" alt='right arrow' height={50} width={80}/>
                </div>
                <div className='fex w-1/2'>
                    <Image src="/our6.webp" alt="our6" height={200} width={500} />
                </div>
            </div>
            {/* inspiring story 2 */}
            <div className={`flex gap-10 px-40 justify-center items-center`}>
                <div className='w-1/2'>
                    <Image src="/our7.webp" alt='our5' height={200} width={500} />
                </div>
                <div className='relative w-1/2'>
                    <p className=' leading-10 text-xl z-0'>
                        An IIT/IIM/McKinsey Alumnus, Pankaj decided to pursue horticulture. He found this to be an ideal combination of art and science with an ability to make a real difference in the life of farmers. Purnima, an economics graduate and MBA comes from a business family. An entrepreneur at core, Purnima found her passion in building an Indian-origin Global Fruit Brand.
                    </p>
                    <Image className='absolute top-52 right-96' src="/left-arrow.png" alt='right arrow' height={50} width={80} />
                </div>
            </div>
            {/* inspiring story 3 */}
            <div className='flex justify-center gap-10 px-40 py-20 items-center'>
                <div className='flex flex-col w-1/2 gap-2 relative'>
                    <p className='text-xl leading-10 z-10'>Way back in 2009, both of them realized that the horticulture sector was highly fragmented and unorganised. The duo was firm about having an integrated value-chain approach with focus on quality over quantity. They chose the one fruit at a time approach over a whole fruit basket and began supplying pomegranates to domestic and international markets. Today, INI has become one of the largest exporter of pomegranates, bananas, and coconuts.</p>
                    <Image className='absolute top-60 left-96' src="/right-arrow.png" alt='right arrow' height={50} width={80} />
                </div>
                <div className='fex w-1/2'>
                    <Image src="/our8.webp" alt="our6" height={200} width={500} />
                </div>
            </div>
            {/* inspiring story 4 */}
            <div className={`flex gap-10 px-40 pb-20 justify-center items-center`}>
                <div className='w-1/2'>
                    <Image src="/our9.webp" alt='our5' height={200} width={500} />
                </div>
                <div className='relative w-1/2'>
                    <p className=' leading-10 text-xl z-0'>
                        Pankaj and Purnima sowed the seeds of quality and efficiency and reaped the fruits in the form of a loyal farmer and customer base. One thing has stayed consistent through the years — their promise of providing safe fruits.
                    </p>
                    <Image className='absolute top-28 right-96' src="/left-arrow.png" alt='right arrow' height={50} width={80} />
                </div>
            </div>
            {/* slider */}
            <div style={{ height: '600px' }} className={`carousel w-full ${styles.bgImg}`}>
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <Image src='/ourslide1.jpg' alt="image" height={200} width={1200} className='max-w-full' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                    <Image src='/ourslide2.jpg' alt="image" height={200} width={1200} className='max-w-full' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
                    <Image src='/ourslide3.jpg' alt="image" height={200} width={1200} className='max-w-full' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section