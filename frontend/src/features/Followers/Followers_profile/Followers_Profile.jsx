import React from 'react'
import { useParams } from 'react-router-dom'
function Followers_Profile() {
    const { id } = useParams();
    return (
        <>
            <div className='min-h-screen w-screen'>
                {/* profile picture container  */}
                <div className='flex flex-col h-120 md:h-[33rem] bg-[#e0dfe4] shadow-md shadow-gray-400 rounded-b-full md:rounded-br-4xl'>
                    {/* <button></button> */}
                    <div className='flex justify-end h-12 md:h-14 p-2 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                        <button  className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7 md:size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            id : {id}
                        </button>
                        
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/31978812/pexels-photo-31978812.jpeg" alt=""
                            className='h-32 md:h-45 w-32 md:w-45 rounded-full border-4 object-cover border-white mx-auto mt-10' />
                    </div>
                    <div className='text-sm md:text-md text-center'>
                        {/* profile details container */}
                        <section>
                            <h1 className='text-2xl md:text-4xl font-bold text-center'>John Doe</h1>
                            <p className='text-center text-xs md:text-sm text-gray-700'>@johndoe</p>
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
        </>
    )
}

export default Followers_Profile