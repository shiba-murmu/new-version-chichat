import React, { use } from 'react'
import { Link } from 'react-router-dom'
import FollowFollowingPost_navbar from '../../components/Navbar/FollowFollowingPost_navbar'
import api from '../../api/axiosInstance'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
function FollowingList() {
    const [users, setUsers] = useState([])
    let [message, setMessage] = useState('')
    const user_id = users[0]?.id
    // next coding from here..
    // this function is the ID's you are following..

    const toggleMenuToUnfollow = () => {
        api.get('api/following/unfollow_user/?user_id=' + user_id + '')
            .then((response) => {
                // console.log(response) // typeof first
                if (response.status == 200) {
                    toast.success(response.data.message);
                    // setIsFollowing(!isFollowing)
                    setUsers([])
                    setMessage('You are not following any user.')
                    // toast.success('You have unfollowed this user.');
                }
            })
            .catch((error) => {
                const errorData = error?.response?.data;
                const fallbackMsg =
                    errorData?.message ||
                    errorData?.detail ||
                    Object.values(errorData || {})[0] ||
                    "Something went wrong";
                toast.error(fallbackMsg);
            })
    }
    useEffect(() => {
        api.get('api/following/following_users_list/').then((res) => {
            // data will be response here 
            // console.log(res.data)
            if(Array.isArray(res.data)) {
                // this will check if the data is an array or not 
                setUsers(res.data)
            } else {
                message = res.data.message
                // catch the data message
                setUsers([])
                setMessage(message)
            }
        }).catch((err) => {
            setUsers([])
        })
    }, [])
    return (
        <>
            <div className='min-h-screen w-screen'>
                <FollowFollowingPost_navbar navbar_text={'Following'} item_count={users.length} />
                <div>

                </div>
                <div>
                    {
                        users.length === 0 ? (
                            <div className='flex justify-center items-center'>
                                <span className='text-xs text-gray-500'>{message}</span>
                            </div>
                        ) : (
                            users.map((user) => {
                                return (
                                    <div key={user.id} className='flex justify-between items-center px-2 py-2 border-b border-gray-200'>
                                        <div className='flex justify-start items-center px-2'>
                                            <Link to={'/user/' + user.id + '/profile'} className='flex justify-start items-center'>
                                                <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='w-14 h-14 rounded-full md:h-[4rem] md:w-[4rem] object-center' alt="" />
                                                <div className='flex flex-col ml-2'>
                                                    <span className='font-semibold text-sm'>
                                                        {user.first_name} {user.last_name}
                                                    </span>
                                                    <span className='text-xs text-gray-500'>@
                                                        {user.username}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <section className='flex justify-center hover:cursor-pointer'>
                                                {/* There will be add a function to unfollow */}
                                                <button type='button'  onClick={toggleMenuToUnfollow}  className='bg-[#7257ff] text-xs hover:cursor-pointer  rounded-full text-white font-normal py-2 px-4'>Unfollow</button>
                                            </section>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FollowingList