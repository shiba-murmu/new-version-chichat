import React from 'react'
import './profile.css'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../../components/Logout/LogoutButton'
import api from '../../api/axiosInstance'

function Sidebar({ onClose }) {
    const SidebarRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (SidebarRef.current && !SidebarRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [onClose]);
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full sidebar-overlay-background'>
                {/* Sidebar/Menu Container */}
                <div ref={SidebarRef} className="fixed rounded-l-4xl right-0 top-0 w-64 h-full bg-white shadow-lg  z-60 animate-slide-in">
                    <div className='flex justify-end h-12 md:h-14 p-2 shadow-md bg-[#e0dfe4] rounded-tl-4xl border-gray-200 text-sm'>
                        {/* side bar header */}
                        <button onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="size-7 md:size-9">
                                <path fillRule="evenodd" strokeWidth={2} d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Home</li>
                        <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Profile</li>
                        <Link to={'/setting'}>

                            <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Settings</li>
                        </Link>
                        <LogoutButton />
                    </ul>
                </div>
            </div>
        </>
    )
}


function Profile() {
    const [isOpen, setIsOpen] = useState(false);

    // to read user data.
    const [data, setData] = useState(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // here it is fetching the data of the user.
        // with the use of axiosInstance.js
        api.get('api/user_info/')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className='min-h-screen w-screen'>
                {/* profile picture container  */}
                <div className='flex flex-col h-120 md:h-[33rem] bg-[#e0dfe4] shadow-md shadow-gray-400 rounded-b-full md:rounded-br-4xl'>
                    {/* <button></button> */}
                    <div className='flex justify-between items-center h-12 md:h-14 p-2 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6 md:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <button onClick={toggleMenu} className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-7 md:size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/31978812/pexels-photo-31978812.jpeg" alt=""
                            className='h-32 md:h-45 w-32 md:w-45 rounded-full border-4 object-cover border-white mx-auto mt-10' />
                    </div>
                    <div className='text-sm md:text-md text-center'>
                        {/* profile details container */}
                        <section>
                            <h1 className='text-2xl md:text-4xl font-bold text-center'>
                                {data ? data.first_name + ' ' + data.last_name : 'Loading...'}
                            </h1>
                            <p className='text-center text-xs md:text-sm text-gray-700'>@
                                {data ? data.username : 'Loading...'}
                            </p>
                            <p className='text-center'>UI/UX Designer</p>
                        </section>
                        <section className='flex mt-2 justify-evenly md:justify-center-safe md:gap-40'>
                            <section className='flex flex-col justify-center'>
                                <section className=''>299</section>
                                <section>Followers</section>
                            </section>
                            <section className='flex flex-col justify-center'>
                                <section>400</section>
                                <section>Following</section>
                            </section>
                        </section>
                        <section>
                            <section>30</section>
                            <section>Posts</section>
                        </section>
                    </div>
                </div>

                {/* profile details container  */}
                <div>
                    {/* profile details container */}
                </div>
            </div>

            {/* OverLap manu */}
            {
                isOpen && (
                    <Sidebar onClose={toggleMenu} />
                )
            }
        </>
    )
}

export default Profile