import React from 'react'
import { Link } from 'react-router-dom'
import './landingStyle.css'

function ForSmallScreen() {
    return (
        <>
            <div className='rowdies-bold text-red-500 text-5xl'>
                ChiChat
            </div>
            <div className='my-5'>
                <img src="https://images.pexels.com/photos/8054835/pexels-photo-8054835.jpeg" alt="" className='h-70 w-50 rounded-xl md:w-96' />
            </div>
            <div className='flex justify-center flex-col items-center gap-4'>
                <Link to={'/signup'}>
                    <div className='border px-4 py-2 text-sm rounded-full text-white bg-blue-600'>
                        Get started
                    </div>
                </Link>
                <Link to={'/login'}>
                    <div className='border px-4 text-sm py-2 rounded-full'>
                        Already have an account
                    </div>
                </Link>
            </div>
        </>
    )
}


function ForLargeScreen() {
    return (
        <>
            {/* LEFT SIDE */}
            <div className=" flex flex-col justify-center items-center">
                <div>
                    <span className="text-9xl rowdies-regular text-amber-500">ChiChat</span>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="container-right bg-blue-900 flex items-center justify-center text-white">
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div>
                        <span className='font-extrabold text-4xl subheading-style text-amber-300'>ChiChat account</span>
                    </div>
                    <div className='border rounded-2xl px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer'>
                        <span className='text-md'>Get started</span>
                    </div>
                    <div className='border rounded-2xl px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer'>
                        <span>Already have an account</span>
                    </div>
                </div>
            </div>
        </>
    )
}

function LandingPage() {
    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row items-center justify-start'>
                <div className='md:hidden flex flex-col items-center justify-end h-[76vh]'>
                    {/* For small screen UI used  */}
                    <ForSmallScreen />
                </div>
                <div className="hidden md:grid grid-cols-[70%_30%] h-screen w-screen">
                    {/* For large screen UI used  */}
                    <ForLargeScreen />
                </div>
            </div>
        </>
    )
}

export default LandingPage