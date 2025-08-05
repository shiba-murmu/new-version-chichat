import React from 'react'
import { Link } from 'react-router-dom'
import FollowFollowingPost_navbar from '../../components/Navbar/FollowFollowingPost_navbar'
function FollowingList() {
    return (
        <>
             <div  className='min-h-screen w-screen'>
                <FollowFollowingPost_navbar navbar_text={'Following'} />
            </div>
        </>
    )
}

export default FollowingList