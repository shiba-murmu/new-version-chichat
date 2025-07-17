import React from 'react'
import './profile.css'

function Profile() {
    return (
        <>
            <div className='min-h-screen w-screen'>
                {/* profile picture container  */}
                <div className='flex flex-col h-90 bg-[#e0dfe4] shadow-md shadow-gray-400 rounded-b-full'>
                    <div>
                        <img src="https://images.pexels.com/photos/31978812/pexels-photo-31978812.jpeg" alt="" 
                        className='h-32 w-32 rounded-full border-4 object-cover border-white mx-auto mt-10'/>
                    </div>
                    <div className='text-sm text-center'>
                        {/* profile details container */}
                        <section>
                            <h1 className='text-2xl font-bold text-center'>John Doe</h1>
                            <p className='text-center text-xs text-gray-700'>@johndoe</p>
                            <p className='text-center'>UI/UX Designer</p>
                        </section>
                        <section className='flex mt-2 justify-evenly'>
                            <section className='flex flex-col justify-center'>
                                <section className=''>299</section>
                                <section>Followers</section>
                            </section>
                            <section className='flex flex-col justify-center'>
                                <section>400</section>
                                <section>Following</section>
                            </section>
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

export default Profile