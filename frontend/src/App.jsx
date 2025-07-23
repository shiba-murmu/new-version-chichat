import React from 'react'
import AppRouter from './router/AppRouter'
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <AppRouter />
        </>
    )
}

export default App