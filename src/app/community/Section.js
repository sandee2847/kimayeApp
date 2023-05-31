"use client"
import React, { useState } from 'react'
import Image from 'next/image'

function Section() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [societyAddress, setSocietyAddress] = useState("");

    const handleData = (event) => {
        event.preventDefault();
        if(name=="" || contact=="" || email=="" || societyAddress=="")
        {
            alert("All fields are required");
        }
        else {
            alert("Data Submit Successfully");
        }
    }

    return (
        <div className='conatiner max-w-full'>
            <div>
                <Image src="/Community-Buying_3112.webp" alt="section image" height={200} width={800} className='w-full' />
            </div>
            <div className='flex flex-row px-32 gap-20 my-10'>
                <div className='w-1/2'>
                    <p>
                        We understand the power of community and want to pass on the benefits to you. <br /><br />

                        To achieve this, we are now catering to community orders from your society. With our community buying option, not only will you get access to our assorted selection of fruits at a better price, you also get to share the joy with your neighbors and co-residents of your society. <br /><br />

                        All you need to do is fill out the enquiry form and we will get in touch with you. We will take your individual orders and deliver them to your society at a specified date and time every week.
                    </p>
                    <h1 className='text-2xl font-extrabold my-5'>Kimaye is #allSafe#allGood</h1>
                </div>
                <div className='w-1/2'>
                    <h1 className='text-xl font-bold my-5'>WANT US TO VISIT YOUR SOCIETY?</h1>
                    <p>Please fill the form below and we will reach out to you </p>
                    <form onSubmit={handleData} className='flex flex-col gap-5 mt-10'>
                        <input className='border-2 px-5 h-10 focus:ring-4' type='text' placeholder='enter name here...' onChange={(event) => setName(event.target.value)} />
                        <input className='border-2 px-5 h-10 focus:ring-4' type='text' placeholder='enter contact here...' onChange={(event) => setContact(event.target.value)} />
                        <input className='border-2 px-5 h-10 focus:ring-4' type='text' placeholder='enter email here...' onChange={(event) => setEmail(event.target.value)} />
                        <input className='border-2 px-5 h-10 focus:ring-4' type='text' placeholder='enter name and address of your society here...' onChange={(event) => setSocietyAddress(event.target.value)} />
                        <button className='bg-blue-200 h-12 w-32 rounded-xl text-xl hover:ring-4' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Section