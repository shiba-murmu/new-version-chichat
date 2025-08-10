import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Forgot_password() {

    const [isEyeOpenedPassword, setIsEyeOpenedPassword] = useState(false);
    const [isEyeOpenedConfirmPassword, setIsEyeOpenedConfirmPassword] = useState(false);
    const [otpPopUp, setOtpPopUp] = useState(false);

    const Otp_verify = ({ closeUi }) => {

        return (
            <>
                <div className='flex absolute z-20 left-0 right-0 items-center justify-end flex-col h-[65vh]'>
                    <div className='flex flex-col gap-2 items-center justify-center w-[90%] rounded-lg bg-[#7257ff] h-80'>
                        <div>
                            <span className='text-2xl font-bold text-yellow-300'>Verify your OTP.
                            </span>
                        </div>
                        <div>
                            <p className='text-md text-white text-center px-4'>Please enter the OTP sent to your email.
                                After confirming the OTP, your password will be reset.
                            </p>
                        </div>
                        <div className='w-[80%]'>
                            <input type='password' id='password' name='password' required className='input-style border border-[#e1e1e1]  rounded-md text-white
                        px-3 py-2 w-full focus:outline-[#c8c8c8]' placeholder='Password' />
                        </div>
                        <div className='w-[80%]'>
                            <button type='submit' className='w-full hover:cursor-pointer bg-[#fcfcfc] text-[#7257ff]  py-2 rounded-md'>
                                Recovery password
                            </button>
                        </div>
                        <div className='w-[80%]'>
                            <button type='submit' onClick={closeUi} className='w-full hover:cursor-pointer bg-[#fcfcfc] text-[#7257ff]  py-2 rounded-md'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending data : ', formData)
    }

    const toggleEyePassword = () => {
        // for password
        setIsEyeOpenedPassword(!isEyeOpenedPassword);
    }
    const toggleEyeConfirmPassword = () => {
        // for password confirm password ....
        setIsEyeOpenedConfirmPassword(!isEyeOpenedConfirmPassword);
    }
    const closePopup = () => {
        // setOtpPop(false);
        setOtpPopUp(false);
    }

    useEffect(() => {

    })

    return (
        <>
            {
                otpPopUp && <Otp_verify closeUi={closePopup} />
            }
            {/* <Otp_verify /> */}
            <div className='text-center p-2 bg-[#7257ff] text-white'>
                <span className='text-xl font-SemiBold'>Password Recovery</span>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-1'>
                    <div className='my-2 px-4'>
                        <label htmlFor="email" className='text-sm'>Enter registered email address</label>
                    </div>
                    <div className='px-5'>
                        <input type="email" id='email' onChange={handleChange} value={formData.email} name='email' required className='text-sm border border-[#7257ff] rounded-md
                        px-3 py-2 w-full focus:outline-[#7257ff]' placeholder='Email address' />
                    </div>
                    <div className='my-2 px-4'>
                        <label htmlFor="password" className='text-sm'>Enter new password!</label>
                    </div>
                    <div className=' relative w-full px-5'>
                        <input type={isEyeOpenedPassword ? 'text' : 'password'} id='password' onChange={handleChange} value={formData.password} name='password' required className='input-style border text-sm border-[#7257ff] rounded-md
                        px-3 py-2 w-full focus:outline-[#7257ff]' placeholder='Password' />
                        <div className='absolute inset-y-0 right-7 flex items-center'>
                            {
                                isEyeOpenedPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEyePassword}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEyePassword}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </div>
                    </div>
                    <div className='my-2 px-4'>
                        <label htmlFor="confirm-password" className='text-sm'>Confirm password!</label>
                    </div>
                    <div className=' relative w-full px-5'>
                        <input type={`${isEyeOpenedConfirmPassword ? 'text' : 'password'}`} id='confirm-password' name='confirm_password' onChange={handleChange} value={formData.confirm_password} required className='input-style text-sm border border-[#7257ff] rounded-md
                        px-3 py-2 w-full focus:outline-[#7257ff]' placeholder='Confirm password' />
                        <div className='absolute inset-y-0 right-7 flex items-center'>
                            {
                                isEyeOpenedConfirmPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEyeConfirmPassword}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEyeConfirmPassword}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            }
                        </div>
                    </div>
                    <div className='px-5 my-2'>
                        <button type='submit' className='w-full text-sm hover:cursor-pointer bg-[#7257ff] text-white py-2 rounded-md'>
                            Recovery password
                        </button>
                    </div>
                    <div className='flex items-center justify-center text-sm'>
                        <span>Already have an account?
                            <Link to={'/login'} className='text-[#5d3dff] hover:text-[#7257ff]'> Sign in</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Forgot_password;