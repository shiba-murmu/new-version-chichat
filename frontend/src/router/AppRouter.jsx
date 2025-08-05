import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
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
import MySetting from '../features/settings/MySetting'
import Followers_Profile from '../features/Followers/Followers_profile/Followers_Profile'
import Inbox_message from '../features/inbox/Inbox_message'
import ProtectedRoute from '../utils/ProtectedRoute'
function AppRouter() {
    const location = useLocation()
    // list of pages where footer not visible
    const pages = ['/','/login', '/signup', '/chats', '/inbox']

    // match the entire exact path or sub - path (with /) or '/inbox/:id'
    const shouldShowFooter = !pages.some(
        route => location.pathname === route || location.pathname.startsWith(route + '/')
    )
    return (
        <>
            {/* Conditional footer rendring */}
            {shouldShowFooter && <Footer />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<ProtectedRoute><Home /> </ProtectedRoute>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<ProtectedRoute><Profile /> </ProtectedRoute>} />
                <Route path="/chats" element={<ProtectedRoute><ChatsList /> </ProtectedRoute>} />
                <Route path="/notifications" element={<ProtectedRoute><Notification /> </ProtectedRoute>} />
                <Route path="/search" element={<ProtectedRoute><ProfileSearching /> </ProtectedRoute>} />
                <Route path="/user/:user_id/profile" element={<ProtectedRoute><Followers_Profile /> </ProtectedRoute>} />
                <Route path="/inbox/:id" element={<ProtectedRoute><Inbox_message /> </ProtectedRoute>} />
                <Route path='/setting' element={<ProtectedRoute><MySetting /> </ProtectedRoute>} />
            </Routes>
        </>
    )
}

export default AppRouter