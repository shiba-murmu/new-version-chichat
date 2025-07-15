import React from 'react'

function LandingPage() {
  return (
    <>
        <div className='min-h-screen flex flex-col md:flex-row items-center justify-start'>
                <div className='flex flex-col items-center justify-end h-[76vh]'>
                    <div className='heading-style text-5xl'>
                        ChiChat
                    </div>
                    <div className='my-5'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiJzTL5OHDcZLcn_baEPsYI4CBg0UP3aivg&s" alt="" className='h-70 w-70 md:w-96' />
                    </div>
                    <div className='flex justify-center flex-col items-center gap-4'>
                        <div className='border px-4 py-2 rounded-full text-white bg-blue-600'>
                            Get started
                        </div>
                        <div className='border px-4 py-2 rounded-full'>
                            Already have an account
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default LandingPage