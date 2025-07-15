import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages
import Profile from '../features/profile/Profile'
import Feeds from '../features/feeds/Feeds'
import Login from '../auth/login/login'
import Signup from '../auth/signup/Signup'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feeds" element={<Feeds />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
