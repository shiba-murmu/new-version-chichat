import React from 'react'
import { Link } from 'react-router-dom'
export default function FollowFollowingPost_navbar({ navbar_text , item_count }) {
    return (
        <>
            <div className='flex justify-between items-center h-12 md:h-14 p-2 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                <Link to={'/profile'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6 md:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                <div className='flex  justify-between items-center gap-2'>
                    <span className='text-lg font-extrabold'>{navbar_text}</span>
                    <div className='flex justify-center w-[2rem] items-center'>
                        <div className='bg-[#7257ff] px-1.5 py-1 text-white text-xs md:text-xs md:px-2 md:py-1.5  rounded-full'>
                            {item_count}
                        </div>
                    </div>
                </div>
                {/* This is triple lines buttons it will be used in the future */}
                {/* <button onClick={''} className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-7 md:size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button> */}
            </div>
        </>
    )
}
