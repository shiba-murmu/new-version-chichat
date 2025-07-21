import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='fixed bottom-0 left-0 right-0 z-50 bg-[#e0dfe4] border-t border-gray-200 shadow-md'>
            <div className='flex justify-around items-center py-4 md:py-5 md:w-[50vw] mx-auto'>

                {/* Home */}
                <section>
                    <Link to={'/home'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </section>

                {/* Search */}
                <section>
                    <Link to={'/search'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </Link>
                </section>

                {/* Add Post */}
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </section>

                {/* Profile */}
                <section>
                    <Link to={'/profile'}>
                        <img
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            className='h-7 w-7 rounded-full object-cover'
                            alt="Profile"
                        />
                    </Link>
                </section>

            </div>
        </div>
    )
}

export default Footer;
