import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function NotificationNavbar() {
    return (
        <>
            <div className='bg-gray-50 h-12 border-t-0 border border-b-gray-200 flex items-center'>
                <div className='flex justify-between items-center px-3 py-2'>
                    <Link
                        to={'/home'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-5 md:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <div>
                    <span className=''>Notifications</span>
                </div>
            </div>
        </>
    )
}

function UserNotification() {
    const [isOpen, setIsOpen] = useState(false);
    const notificationRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    });
    const toggleMenu = () => {

        setIsOpen(!isOpen);
    }
    const handleDelete = () => {
        console.log('delete');
        setIsOpen(false);
    }
    return (
        <>
            <div className='bg-gray-50 mix-h-16 overflow-hidden border-t-0 border border-b-gray-200 flex justify-between items-center'>
                <div className='px-3 py-2 text-sm h-17 overflow-y-hidden'>
                    {/* For data to show in the notifications ,ex: messages */}
                    <span className='font-semibold'>Puja kujur</span> has sent you a follow request.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis optio corporis eligendi quam.
                </div>
                <div className='px-3 py-2 flex justify-end items-center'>
                    {/* This div is for delete the messages from the notification */}
                    <button onClick={toggleMenu} className='hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Showing conditional based model UI. */}
            {
                isOpen && (

                    <div className='absolute top-0 left-0 z-100 flex justify-center items-center h-[100vh] w-screen px-5'>
                        <div ref={notificationRef} className='border w-64 border-[#c5c5c5] h-30 rounded-2xl flex justify-center items-center p-3 gap-3 flex-col'>
                            <p className='text-sm text-center'>Are you sure want to delete the notification ?</p>
                            <div>
                                <button className='mx-2 bg-[#7257ff] text-sm rounded-full w-20 py-1 text-white hover:cursor-pointer' onClick={handleDelete}>delete</button>
                                <button className='mx-2 bg-[#9b9b9b] text-sm rounded-full w-20 py-1 text-white hover:cursor-pointer' onClick={toggleMenu}>No</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}


function Notification() {
    return (
        <>
            <NotificationNavbar />
            <UserNotification />
            {/* <UserNotification /> */}
        </>
    )
}

export default Notification;