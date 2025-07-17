import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='flex border-b border-gray-200 justify-between items-center px-3 py-2'>
            <div>
                <span className='text-2xl rowdies-regular'>ChiChat</span>
            </div>
            <div className='flex gap-3'>
                <div>
                    {/* Notification icons */}
                    <Link to={'/notifications'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </Link>
                </div>
                <div>
                    {/* Chats icon */}
                    <Link to={'/chats'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokelinecap="round" strokelinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar