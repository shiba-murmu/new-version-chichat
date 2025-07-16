import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './signup.css';

const images = [
    'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg',
    'https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg',
    'https://images.pexels.com/photos/33020362/pexels-photo-33020362.jpeg',
    // in this code i can add more images...as per needed
]

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // This sets a timer to change image every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency = only runs once after initial render
    return (
        <div className=' md:block h-[20vh] md:h-[100vh]'>
            <img src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`} className='h-[20vh] md:h-[100vh] md:object-cover md:w-[100%]'
            />
            <div className='absolute top-0 background-style-left-container w-1/2 left-0 transform  text-white text-2xl md:text-6xl font-bold h-[20vh] md:h-[100vh]'>
                <span className='text-3xl md:text-5xl m-4 text-center flex justify-center gap-4 items-center'>Chichat <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-20" style={{color: "#7257ff"}}>
                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
                </svg>
                </span>
            </div>
        </div>
    )
}
function Signup() {
    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row  items-center justify-start'>
                <div className='hidden md:block w-1/2'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} >
                        <ImageSlider images={images} />
                    </motion.div>
                </div>
                <div className='h-[41rem] md:w-1/2 w-full flex flex-col items-center justify-end gap-5'>
                    <div className='flex justify-center flex-col items-center  gap-2 md:gap-3'>
                        <span className='text-3xl md:text-5xl font-bold text-[#7257ff]'>
                            Sign up account
                        </span>
                        <span className='text-sm md:text-md text-center'>Welcome! Let’s get you set up. <br />It only takes a minute to get started.</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <form action="" className='flex flex-col gap-4 px-10 mb-3'>
                            <input type="text" placeholder='First name' className='border  md:w-80  text-sm md:text-md border-[#7257ff] w-[16rem] rounded p-2.5 focus:outline-[#7257ff]' />
                            <input type="text" placeholder='Last name' className='border  md:w-80  text-sm md:text-md border-[#7257ff] w-[16rem] rounded p-2.5 focus:outline-[#7257ff]' />
                            <div className='flex flex-col gap-0.5'>
                                <input type="text" placeholder='Username' className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' />
                                <label htmlFor="" className='text-xs text-[#7257ff]'>Username available</label>
                            </div>
                            <div className='flex flex-col gap-0.5'>
                                <input type="email" placeholder='Email address' className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' />
                                <label htmlFor="" className='text-xs text-[#7257ff]'>Email available</label>
                            </div>
                            <input type="password" placeholder='Password' className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' />
                            <input type="password" placeholder='Confirm password' className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' />
                            <button className='bg-[#7257ff] text-white  rounded p-2.5'>Sign up</button>
                            <Link to={'/login'} className='text-center'>
                                <p className='text-sm md:text-md'>Already have an account? <span className='text-[#7257ff]'>Log in</span></p>
                            </Link>
                        </form>
                        <p className='text-sm md:text-md text-center'>By signing up, you agree to our <br /><span className='text-[#7257ff]'>Terms of Service</span> and <span className='text-[#7257ff]'>Privacy Policy</span>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup