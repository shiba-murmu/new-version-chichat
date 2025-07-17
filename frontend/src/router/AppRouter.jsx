import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import pages
import Signup from '../auth/signup/Signup'
import Login from '../auth/login/Login'
import Profile from '../features/profile/Profile'
import LandingPage from '../pages/Landing/LandingPage'
import ChatsList from '../features/chats/ChatsList'
import Notification from '../features/Notifications/Notification'
import Feeds from '../features/feeds/Feeds'
import ProfileSearching from '../features/Search/ProfileSearching'
import Footer from '../components/Footer/Footer'

function AppRouter() {
    const location = useLocation()
    // list of pages where don't want the footer
    const pages = ['/','/login', '/signup', '/chats']

    const shouldShowFooter = !pages.includes(location.pathname)
    return (
        <>
            {/* Conditional footer rendring */}
            {shouldShowFooter && <Footer />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/feeds" element={<Feeds />} /> */}
                <Route path="/feed" element={<Feeds />} />
                <Route path="/chats" element={<ChatsList />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/search" element={<ProfileSearching />} />
            </Routes>
        </>
    )
}

export default AppRouter