import React from 'react'
import { Link } from 'react-router-dom'
import FollowFollowingPost_navbar from '../../components/Navbar/FollowFollowingPost_navbar'
function FollowerList() {
    return (
        <>
            <div className='min-h-screen w-screen'>
                <FollowFollowingPost_navbar navbar_text={'Followers'} item_count={12} />
                <div>

                </div>
                <div>
                    <div className='flex justify-start items-center px-2 py-2 border-b border-gray-200 bg-neutral-100'>
                        <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='w-14 h-14 rounded-full md:h-[4rem] md:w-[4rem] object-center' alt="" />
                        <div className='flex flex-col ml-2'>
                            <span className='font-semibold text-sm'>name</span>
                            <span className='text-xs text-gray-500'>@username</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowerList