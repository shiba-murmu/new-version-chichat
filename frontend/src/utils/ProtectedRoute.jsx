
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const accessToken = localStorage.getItem('access')
    // if token is not present then redirect to login page
    if (!accessToken) {
        return <Navigate to="/login" replace />
    }

  return children;  // user is authenticated access is allowed
}

export default ProtectedRoute;