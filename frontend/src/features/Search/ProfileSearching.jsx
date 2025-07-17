import React from 'react'

function ProfileNavbar() {
    return(
        <>
            <div className='bg-gray-50 h-12 border-t-0 border border-b-gray-200 flex items-center'>
                <input type="text" placeholder='Search' className='bg-gray-50 mx-3 border w-full border-gray-300 rounded-full px-3 py-1' />
            </div>
        </>
    )
}
function ProfileSearching() {
  return (
    // <div>ProfileSearching</div>
    <>
        <ProfileNavbar />
        <div>No profile found!</div>
    </>
  )
}

export default ProfileSearching