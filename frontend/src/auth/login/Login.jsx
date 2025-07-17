import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from '../../assets/images/conversation.png';

function UnlockIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#7257ff" }} className="size-4">
                <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
            </svg>
        </>
    )
}
function LockIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#7257ff" }} className="size-4">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
        </>
    )
}

function Login() {
    const [lock, setLock] = useState(true);
    const [unlock, setUnlock] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setLock((prev) => !prev);
            setUnlock((prev) => !prev);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('Runs one time.')
    })
    return (
        <>
            <div className='min-h-screen  flex flex-col items-center justify-start md:justify-center'>
                <div className='md:h-[100vh]  md:w-full md:flex'>
                    <div className='hidden md:block md:w-1/2  '>
                        <img src='https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg' alt="" className='h-[20vh] object-cover md:h-[100vh] md:w-[100%]' />
                    </div>
                    <div className='h-[75vh] md:h-[85vh] md:w-1/2 flex justify-center items-center '>
                        <div className='flex flex-col items-center gap-5 md:gap-6'>
                            <div className='hidden md:flex justify-center flex-col items-center'>
                                <span className=' text-3xl  md:text-5xl font-bold mb-1 text-[#7257ff]'>Welcome back !</span>
                                <p className='text-sm md:text-md text-center'>Stay close with the people who matter. Because<br />Because life’s better when you stay connected.</p>
                            </div>
                            <div className='md:hidden flex flex-col justify-center items-center'>
                                <span className='text-3xl font-bold text-[#7257ff]'>Welcome back !</span>
                                <span className='flex justify-center items-center gap-1'>Get access to your account
                                    {
                                        lock && (
                                            <motion.div
                                                key="lock"
                                                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                                exit={{ opacity: 0, rotate: 0, scale: 0.9 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <LockIcon />
                                            </motion.div>
                                        )
                                    }
                                    {
                                        unlock && (
                                            <motion.div
                                                key="unlock"
                                                initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                                exit={{ opacity: 0, rotate: 0, scale: 0.9 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <UnlockIcon />
                                            </motion.div>
                                        )
                                    }
                                </span>
                            </div>
                            <form action="" className='flex flex-col justify-center items-center md:justify-center md:items-center gap-4 w-60'>
                                <input type="text" placeholder='Email or username' className='border input-style md:w-80   text-sm md:text-md border-[#7257ff] rounded w-[16rem] p-2.5 focus:outline-[#7257ff]' />
                                <input type="password" placeholder='Password' className='rounded md:w-80  text-sm input-style  border-[#7257ff] focus:outline-[#7257ff] w-[16rem] border p-2.5 ' />
                                <Link to={'/profile'}>
                                    <button type='submit' className='custom-background hover:bg-blue-600 md:w-80 text-sm md:text-md hover:cursor-pointer w-[16rem] text-white p-2.5 rounded '>Sign in</button>

                                </Link>
                                {/* Desktop view */}
                                <p className='hidden md:block text-md md:text-md text-[#7257ff] my-2 hover:cursor-pointer'>Forgot your password ?</p>
                                <Link to={'/signup'} className='hidden md:block md:w-80 text-center '>
                                    <p className='text-md'>Don't have an account ? <span className='text-[#7257ff] hover:cursor-pointer'>Sign up</span></p>
                                </Link>
                            </form>
                            {/* Mobile view */}
                            <p className='md:hidden text-sm text-[#7257ff] hover:cursor-pointer'>Forgot your password ?</p>
                            <Link to={'/signup'} className='md:hidden'>
                                <p className='text-sm'>Don't have an account ? <span className='text-[#7257ff] hover:cursor-pointer'>Sign up</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login