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
import ProfileSearching from '../features/Search/ProfileSearching'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Followers_Profile from '../features/Followers/Followers_profile/Followers_Profile'

function AppRouter() {
    const location = useLocation()
    // list of pages where footer not visible
    const pages = ['/','/login', '/signup', '/chats']

    const shouldShowFooter = !pages.includes(location.pathname)
    return (
        <>
            {/* Conditional footer rendring */}
            {shouldShowFooter && <Footer />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<ChatsList />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/search" element={<ProfileSearching />} />
                <Route path="/user/:id" element={<Followers_Profile />} />
            </Routes>
        </>
    )
}

export default AppRouter