import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BackToHome() {
    return (
        <>
            <div className='flex justify-between items-center h-12 md:h-14 p-2 pl-3 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                <Link to={'/home'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6 md:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
        </>
    )
}


function ProfileNavbar() {
    return (
        <>
            <div className='bg-gray-50 h-12 border-t-0 border border-b-gray-200 flex items-center'>
                <input type="text" placeholder='Search' className='bg-gray-50 focus:outline-[#727272] mx-3 border w-full border-gray-300 rounded-full px-3 py-1' />
            </div>
        </>
    )
}
function ProfileSearching() {
    const [isUiShowing, setIsUiShowing] = useState('account');


    const Account_Card_UI = () => {
        
        return (
            <>
                <div className='flex justify-start items-center px-2 py-2 border-b border-gray-200 bg-neutral-100'>
                    <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='w-14 h-14 rounded-full md:h-[4rem] md:w-[4rem] object-center' alt="" />
                    <div className='flex flex-col ml-2'>
                        <span className='font-semibold text-sm'>Shiba Murmu</span>
                        <span className='text-xs text-gray-500'>@shibamurmu</span>
                    </div>
                </div>
            </>
        )
    }

    const Posts_Card_UI = () => {
        return (
            <>
                <div>
                    post !
                </div>
            </>
        )
    }

    const Photos_Card_UI = () => {
        return (
            <>
                <div>
                    photos !
                </div>
            </>
        )
    }
    return (
        // <div>ProfileSearching</div>
        <>
            <BackToHome />
            <ProfileNavbar />
            <div>
                <section className='flex justify-around py-2 border-b border-gray-200'>
                    <button onClick={() => setIsUiShowing('account')} className='border text-sm rounded-md w-20 border-gray-500 text-gray-600'>
                        account
                    </button>
                    <button onClick={() => setIsUiShowing('posts')} className='border text-sm rounded-md w-20 border-gray-500 text-gray-600'>
                        posts 
                    </button>
                    <button onClick={() => setIsUiShowing('photos')} className='border text-sm rounded-md w-20 border-gray-500 text-gray-600'>
                        photos 
                    </button>
                </section>
            </div>
            <div>
                {/* Conditional based rendering UI. */}
                {
                    isUiShowing === 'account' &&
                    <div className='flex flex-col max-h-[67.5vh] overflow-y-auto'>
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                        <Account_Card_UI />
                    </div>
                }
                {
                    isUiShowing === 'posts' &&
                    <div className='flex  justify-center items-center max-h-[67.5vh] overflow-y-auto'>
                        <Posts_Card_UI />
                    </div>
                }
                {
                    isUiShowing === 'photos' &&
                    <div className='flex  justify-center items-center max-h-[67.5vh] overflow-y-auto'>
                        <Photos_Card_UI />
                    </div>
                }
            </div>

        </>
    )
}

export default ProfileSearching