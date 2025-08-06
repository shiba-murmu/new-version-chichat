import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import api from '../../api/axiosInstance'
import { toast } from 'react-toastify';

function Users_profile_sidebar({ onClose }) {
    const SidebarRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (SidebarRef.current && !SidebarRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [onClose]);
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full sidebar-overlay-background'>
                {/* Sidebar/Menu Container */}
                <div ref={SidebarRef} className="fixed rounded-l-4xl right-0 top-0 w-64 h-full bg-white shadow-lg  z-60 animate-slide-in">
                    <div className='flex justify-end h-12 md:h-14 p-2 shadow-md bg-[#e0dfe4] rounded-tl-4xl border-gray-200 text-sm'>
                        {/* side bar header */}
                        <button onClick={onClose} className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="size-7 md:size-9">
                                <path fillRule="evenodd" strokeWidth={2} d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Home</li>
                        <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Profile</li>
                        <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Settings</li>
                        {/* <li className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Logout</li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}



function Users_profile() {
    const { user_id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [user, setUser] = useState([])


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenuToUnfollow = () => {
        api.get('api/following/unfollow_user/?user_id=' + user_id + '')
            .then((response) => {
                // console.log(response) // typeof first
                if (response.status == 200) {
                    toast.success(response.data.message);
                    setIsFollowing(!isFollowing)
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

    // useEffect(() => (
    //     api.get('api/following/check_if_user_is_following/' + user_id + '/')
    //     .then((res)=> console.log(res))
    //     .catch((err)=>console.log(err))
    // ), [user_id])

    const toggleMenuToFollow = () => {
        // setIsFollowing(!isFollowing);
        api.post(`api/following/new_user/`, { "user_id": user_id })
            .then((response) => {
                // console.log(response) // typeof first
                if (response.status == 201) {
                    toast.success(response.data.message);
                    setIsFollowing(!isFollowing)
                } else {
                    toast.error(response.data.message);
                }
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message);
                const errorData = error?.response?.data;
                const fallbackMsg =
                    errorData?.message ||
                    errorData?.detail ||
                    Object.values(errorData || {})[0] ||
                    "You cannot follow yourself.";
                toast.error(fallbackMsg);
            }, [])
    }

    useEffect(() => {
        // to fetch the user informations,
        api.get('api/user_info/' + user_id + '/')
            .then((res1) => {
                setUser(res1.data)
                return api.get('api/following/check_if_user_is_following/?user_id=' + user_id + '')
            })
            .then((res2) => {
                setIsFollowing(res2.data.is_following)
                // print(res2.data.is_following)
                // console.log(res2.data.is_following)
            })
            .catch((err) => console.log(err))
    }, [user_id])


    return (
        <>
            <div className='min-h-screen w-screen'>
                {/* profile picture container  */}
                <div className='flex flex-col h-120 md:h-[33rem] bg-[#e0dfe4] shadow-md shadow-gray-400 rounded-b-full md:rounded-br-4xl'>
                    {/* <button></button> */}
                    <div className='flex justify-between items-center h-12 md:h-14 p-2 pl-3 border-b border-[#c3c3c3] shadow shadow-gray-350 text-sm'>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6 md:size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <button onClick={toggleMenu} className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-7 md:size-9">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrkffbf5sBvycTlHcxVz2HIs1sKUsSvfzOaCmSjA6OK7s9hirzR9QC776Ca6FAjX_lNs&usqp=CAU" alt=""
                            className='h-32 md:h-45 w-32 md:w-45 rounded-full border-4 object-cover border-white mx-auto mt-10' />
                    </div>
                    <div className='text-sm md:text-md text-center '>
                        {/* profile details container */}
                        <section>

                            <h1 className='text-2xl md:text-4xl font-bold text-center'>
                                {
                                    user ? user.first_name + ' ' + user.last_name : 'John Doe'
                                }</h1>
                            <p className='text-center text-xs md:text-sm text-gray-700'>@
                                {
                                    user ? user.username : 'johndoe'
                                }
                            </p>
                            {/* <p className='text-center'>UI/UX Designer</p> */}
                        </section>
                        {
                            isFollowing ?
                                <>

                                    <section className='flex mt-2 justify-evenly md:justify-center-safe md:gap-40'>
                                        {/* this section is hidden for sometimes/ */}
                                        <section className='flex flex-col justify-center'>
                                            <section className=''>299</section>
                                            <section>Followers</section>
                                        </section>
                                        <section className='flex flex-col justify-center'>
                                            <section>400</section>
                                            <section>Following</section>
                                        </section>
                                    </section>
                                    <section  className='flex  justify-center mt-2'>
                                        {/* There will be add a function to unfollow */}
                                        <button type='button' onClick={toggleMenuToUnfollow} className='bg-[#7257ff] text-sm hover:cursor-pointer  rounded-full text-white font-bold py-2 px-4'>Unfollow</button>
                                    </section>
                                </>
                                // Here one ui posts ui is missing.. this wil be designed as in future..
                                :
                                <section className='flex justify-center mt-2'>
                                    <button type='button' onClick={toggleMenuToFollow} className='bg-[#7257ff] text-sm  rounded-full hover:cursor-pointer text-white font-bold py-2 px-4'>Follow</button>
                                </section>
                        }
                    </div>
                </div>

                {/* profile details container  */}
                <div>
                    {/* profile details container */}
                </div>

                {/* OverLap manu */}
                {
                    isOpen && (
                        <Users_profile_sidebar onClose={toggleMenu} />
                    )
                }
            </div>
        </>
    )
}

export default Users_profile