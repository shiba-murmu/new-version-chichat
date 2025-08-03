import React from "react"
import { useNavigate } from "react-router-dom"

const LogoutButton = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/login')
    }
    return <button onClick={logout} className="hover:text-blue-500 pl-4 border-b border-gray-200 rounded-l-2xl text-sm md:text-md py-3 cursor-pointer">Logout</button>
}

export default LogoutButton