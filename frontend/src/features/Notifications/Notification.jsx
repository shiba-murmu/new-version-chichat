import React from 'react'
import { Link } from 'react-router-dom'


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
                    <span className='font-bold'>Notifications</span>
                </div>
            </div>
        </>
    )
}


function Notification() {
    return (
        <>
            <NotificationNavbar />
            <div>
                Notification
            </div>
        </>
    )
}

export default Notification