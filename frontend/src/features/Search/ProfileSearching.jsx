import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api/axiosInstance'

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


function ProfileSearchBar() {
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

    const [users, setUsers] = useState([])



    useEffect(() => {
        api.get('api/all_users/')
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }, [])

    const Account_Card_UI = ({ name, username, id }) => {
        return (
            <>
                <Link to={'/user/' + id + '/profile'}>
                    <div className='flex justify-start items-center px-2 py-2 border-b border-gray-200 '>
                        <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='w-14 h-14 rounded-full md:h-[4rem] md:w-[4rem] object-center' alt="" />
                        <div className='flex flex-col ml-2'>
                            <span className='font-semibold text-sm'>{name}</span>
                            <span className='text-xs text-gray-500'>@{username}</span>
                        </div>
                    </div>
                    {/* Here i want to render the api id's so that it will be called from the frontend */}
                </Link>
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
            <ProfileSearchBar />
            <div>
                <section className='flex justify-around py-2 border-b border-gray-200'>
                    <button onClick={() => setIsUiShowing('account')} className={` text-sm rounded-md w-20 border-gray-500 hover:cursor-pointer ${isUiShowing === 'account' ? "bg-[#7257ff] text-white" : "bg-none text-gray-500 border"}`}>
                        account
                    </button>
                    <button onClick={() => setIsUiShowing('posts')} className={` text-sm rounded-md w-20 border-gray-500 hover:cursor-pointer ${isUiShowing === 'posts' ? "bg-[#7257ff] text-white" : "bg-none text-gray-500 border"}`}>
                        posts
                    </button>
                    <button onClick={() => setIsUiShowing('photos')} className={` text-sm rounded-md w-20 border-gray-500 hover:cursor-pointer ${isUiShowing === 'photos' ? "bg-[#7257ff] text-white" : "bg-none text-gray-500 border"}`}>
                        photos
                    </button>
                </section>
            </div>
            <div>
                {/* Conditional based rendering UI. */}
                {
                    isUiShowing === 'account' &&
                    <div className='flex flex-col max-h-[67.5vh] overflow-y-auto'>
                        {
                            users.map(user => (

                                <Account_Card_UI key={user.id} id={user.id} name={user.first_name + ' ' + user.last_name} username={user.username} />
                            ))
                        }
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