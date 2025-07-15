import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import pages
import Signup from '../auth/signup/Signup'
import Login from '../auth/login/Login'
import Profile from '../features/profile/Profile'
import Feeds from '../features/feeds/Feeds'
import LandingPage from '../pages/Landing/LandingPage'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feeds" element={<Feeds />} />
        </Routes>
    )
}

export default AppRouter