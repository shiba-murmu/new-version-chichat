import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
// import PostingCard from '../../components/PostingCard/PostingCard'
// import { useLocation } from 'react-rout
function PostingCard() {
    // Mbile version home.
    return (
        <>
            <div>
                {/* post card */}
                <div className='flex items-center px-1 py-1 gap-3'>
                    <section>
                        <Link to='/user/1'>
                            <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                className='w-10 h-10 rounded-full' alt="" />
                        </Link>
                    </section>
                    <section className='flex flex-col'>
                        {/* <h1>John Doe</h1> */}
                        <span className='font-semibold text-sm'>John Doe</span>
                        {/* <p>@johndoe</p> */}
                        <span className='text-xs text-gray-500'>johndoe</span>
                    </section>
                    <section className='ml-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </section>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        className='w-full h-96 object-cover' alt="" />
                </div>
                <div>
                    <p className='px-2 py-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
                    <p className='px-2 text-sm'>Posted : <span className='text-gray-500'>1 hour ago</span></p>
                </div>
            </div>
        </>
    )
}

function Home() {

    return (
        <>
            <div className='max-h-[40.4rem] md:max-h-[30.5rem]
             md:w-full overflow-scroll'>
                    <Navbar />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
                    <PostingCard />
            </div>
        </>
    )
}

export default Home