import React from 'react'
import { Link } from 'react-router-dom'
import './landingStyle.css'
import Image from '../../assets/images/conversation.gif'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function ForSmallScreen() {
    

    return (
        <>
            <div className='rowdies-bold text-[#7257ff] text-6xl'>
                ChiChat
            </div>
            <div className='text-center'>
                <span className='text-sm'>Stay close with the people who matter.<br />Because life’s better when <br /> you stay  <span className='text-[#7257ff] border-l px-1 rounded-r bg-blue-100'>connected</span></span>
            </div>
            <div className='my-5'>
                <img src={Image} alt="" className='h-60 w-56 rounded-xl md:w-96' />
            </div>
            <div className='flex justify-center flex-col items-center gap-2'>
                <Link to={'/signup'}>
                    <div className='border  py-2 w-3xs flex justify-center text-sm rounded-full text-white bg-[#7257ff]'>
                        Get started
                    </div>
                </Link>
                <Link to={'/login'}>
                    <div className='border text-[#7257ff] border-[#7257ff] px-4 w-3xs flex justify-center text-sm py-2 rounded-full'>
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
            <div className="container-right bg-[#7257ff]  flex items-center justify-center text-white">
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div>
                        <span className='font-extrabold text-4xl subheading-style text-amber-300'>ChiChat account</span>
                    </div>
                    <Link to={'/signup'}>
                        <div className='border rounded-2xl px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer'>
                            <span className='text-md'>Get started</span>
                        </div>
                    </Link>
                    <Link to={'/login'}>
                        <div className='border rounded-2xl px-4 py-2 hover:bg-white hover:text-black hover:cursor-pointer'>
                            <span className='text-md'>Already have an account</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

function LandingPage() {
    const navigate = useNavigate()

    useEffect(() => {
        // this will redirect to the home page if the user is already logged in
        const token = localStorage.getItem('access')
        if (token) {
            navigate('/home')
        }
    }, []);

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