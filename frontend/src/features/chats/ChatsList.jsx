import React from 'react'
import { Link } from 'react-router-dom'

function Message_update() {
    return (
        <>
            <div className='flex justify-between items-center border-gray-200 border-b gap-2 px-3 p-0.5'>
                <div>
                    <span className='font-semibold text-blue-500'>Message</span>
                </div>
                <div>
                    <span className='text-xs text-blue-600 bg-amber-200 px-1.5 py-0.5 rounded-full'>3</span>
                </div>
            </div>
        </>
    )
}


function Chats_card() {
    return (
        <>
            <Link to={'/inbox/1'}>
                <div className='flex justify-between items-center border-gray-200 border-b gap-2 p-2 hover:bg-gray-100 hover:cursor-pointer'>
                    <div className='flex gap-2 items-center'>
                        <img src="https://images.pexels.com/photos/31978812/pexels-photo-31978812.jpeg" alt="" className='w-13 h-13 rounded-full' />
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>John Doe</span>
                            <span className='text-xs text-gray-500'>johndoe</span>
                        </div>
                    </div>
                    <div>
                        <span className='text-xs text-gray-500'>2:30 PM</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

function ChatsList() {
    return (
        <>
            <div>
                <section>
                    <div className='flex justify-start items-center gap-2 h-12 md:h-14 p-2 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-5 md:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <div>
                            <span className='font-normal'>Chats</span>
                        </div>
                    </div>
                </section>
                <section>
                    {/* chats list */}
                    <section>
                        <Message_update />
                    </section>
                    <section>
                        {/* <Chats_card /> */}
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                        <Chats_card />
                    </section>
                </section>
            </div>
        </>
    )
}

export default ChatsList