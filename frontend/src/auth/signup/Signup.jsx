import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './signup.css';
import validator from 'validator';
import { toast } from 'react-toastify';


const images = [
    'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg',
    'https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg',
    'https://images.pexels.com/photos/33020362/pexels-photo-33020362.jpeg',
    // in this code i can add more images...as per needed
]

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // This sets a timer to change image every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency = only runs once after initial render
    return (
        <div className=' md:block h-[20vh] md:h-[100vh]'>
            <img src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`} className='h-[20vh] md:h-[100vh] md:object-cover md:w-[100%]'
            />
            <div className='absolute top-0 background-style-left-container w-1/2 left-0 transform  text-white text-2xl md:text-6xl font-bold h-[20vh] md:h-[100vh]'>
                <span className='text-3xl md:text-5xl m-4 text-center flex justify-center gap-4 items-center'>Chichat <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20" style={{ color: "#7257ff" }}>
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                </svg>
                </span>
            </div>
        </div>
    )
}
function Signup() {
    const [isEyeOpened, setIsEyeOpened] = useState(false); // for toggle eye
    const [isEyeOpenedConfirmPassword, setIsEyeOpenedConfirmPassword] = useState(false);

    ///////////////Email validator //////////////
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailError, setEmailError] = useState('');

    // /////////// username validator ///////////
    const [isUsernameValid, setIsUsernameValid] = useState(false);
    const [usernameError, setUsernameError] = useState('');



    const toggleEyeConfirmPassword = () => {
        // for password confirm password ....
        setIsEyeOpenedConfirmPassword(!isEyeOpenedConfirmPassword);
    }
    const toggleEye = () => {
        // for password
        setIsEyeOpened(!isEyeOpened);
    }

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    // for email validations.
    useEffect(() => {
        if (formData.email == '') {
            setEmailError('Enter valid email address');
            setIsEmailValid(false);
        } else if (!validator.isEmail(formData.email)) {
            setEmailError('Invalid email address');
            setIsEmailValid(false);
        } else if (!formData.email.endsWith('@gmail.com')) {
            setEmailError('Only Gmail emails are allowed');
            setIsEmailValid(false);
        } else {
            setEmailError('Email is valid');
            // Here one api will send to the backend to check the email is already exist or not
            setIsEmailValid(true);
        }
    }, [formData.email])

    useEffect(() => {
        if (formData.username == '') {
            setUsernameError('Enter valid username');
            setIsUsernameValid(false);
        } else if (formData.username.length <= 4) {
            setUsernameError('Invalid username');
            setIsUsernameValid(false);
        } else if (formData.username.length >= 15) {
            setUsernameError('Invalid username');
            setIsUsernameValid(false);
        } else if (!/^[a-z0-9_]+$/.test(formData.username)) {
            setUsernameError('Invalid username');
            setIsUsernameValid(false);
        } else if (/^[0-9]/.test(formData.username)) {
            setUsernameError('Invalid username');
            setIsUsernameValid(false);
        } else if (/\s/.test(formData.username)) {
            setEmailError('Invalid username');
            setIsUsernameValid(false);
        } else {
            setUsernameError('Username is valid');
            // Here one api will send to the backend to check the username is already exist or not
            setIsUsernameValid(true);
        }
    }, [formData.username])

   

    // Update form values
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password >= 8 && formData.password.length <= 15) {
            // Password is valid
            if (formData.password === formData.confirm_password) {
                // Passwords match
                // Do something with the form data, e.g., send it to the server
                // some other code 
                try {
                    console.log(formData)
                }
                catch (error) {
                    console.log(error)
                }
            } else {
                toast.error('Passwords do not match.');
            }

        } else {
            // Password is invalid
            toast.error('Password must be between 8 and 15 characters long.');
        }

    }
    return (
        <>
            <div className='min-h-screen flex flex-col md:flex-row  items-center justify-start'>
                <div className='hidden md:block w-1/2'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} >
                        <ImageSlider images={images} />
                    </motion.div>
                </div>
                <div className='h-[41rem] md:w-1/2 w-full flex flex-col items-center justify-end gap-5'>
                    <div className='flex justify-center flex-col items-center  gap-2 md:gap-3'>
                        <span className='text-3xl md:text-5xl font-bold text-[#7257ff]'>
                            Sign up account
                        </span>
                        <span className='text-sm md:text-md text-center'>Welcome! Let’s get you set up. <br />It only takes a minute to get started.</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 px-10 mb-3'>
                            <input type="text" name='first_name'
                                onChange={handleChange}
                                value={formData.first_name}
                                placeholder='First name' className='border  md:w-80 required  text-sm md:text-md border-[#7257ff] w-[16rem] rounded p-2.5 focus:outline-[#7257ff]' required />
                            <input type="text" name='last_name'
                                onChange={handleChange}
                                value={formData.last_name}
                                placeholder='Last name' className='border required  md:w-80  text-sm md:text-md border-[#7257ff] w-[16rem] rounded p-2.5 focus:outline-[#7257ff]' required />
                            <div className='flex flex-col gap-0.5'>
                                <input type="text" placeholder='Username' name='username'
                                    onChange={handleChange}
                                    value={formData.username}
                                    className='border required  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' required/>
                                {/* Here username validations will be done. Where username is already exist or not */}
                                {
                                    isUsernameValid ? <label htmlFor="" className='text-xs text-[#7257ff] flex gap-1 items-center'>{usernameError}
                                    </label> : <label htmlFor="" className='text-xs text-[#ff0000] flex gap-1 items-center'>{usernameError}
                                    </label>
                                }
                            </div>
                            <div className='flex flex-col gap-0.5'>
                                <input type="email" name='email'
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder='Email address'
                                    className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' required />
                                {
                                    isEmailValid ? <label htmlFor="" className='text-xs text-[#7257ff] flex gap-1 items-center'>{emailError}
                                    </label> : <label htmlFor="" className='text-xs text-red-500 flex gap-1 items-center'>{emailError}
                                    </label>
                                }

                            </div>
                            <div className='relative w-fit md:w-80'>
                                <input type={isEyeOpened ? 'text' : 'password'}
                                    name='password'
                                    onChange={handleChange}
                                    value={formData.password}
                                    placeholder='Password' className='rounded  md:w-80  text-sm input-style  border-[#7257ff] focus:outline-[#7257ff] w-[16rem] border p-2.5' required />
                                <div className='absolute inset-y-0 right-3 flex items-center'>
                                    {
                                        isEyeOpened ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEye}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-5 md:size-6 hover:cursor-pointer" style={{ color: '#7257ff' }} onClick={toggleEye}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    }
                                </div>
                            </div>

                            <div className='relative w-fit md:w-80'>
                                <input type={isEyeOpenedConfirmPassword ? 'text' : 'password'}
                                    name='confirm_password' onChange={handleChange} value={formData.confirm_password}
                                    placeholder='Confirm Password' className=' required rounded md:w-80  text-sm input-style  border-[#7257ff] focus:outline-[#7257ff] w-[16rem] border p-2.5' required />
                                
                                <div className='absolute inset-y-0 right-3 flex items-center'>
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
                            {/* <input type="password" placeholder='Confirm password' className='border  md:w-80  text-sm md:text-md border-[#7257ff] rounded p-2.5 focus:outline-[#7257ff]' /> */}


                            <button type='submit' className='bg-[#7257ff] text-white hover:cursor-pointer text-sm md:text-md rounded p-2.5'>Sign up</button>
                            <Link to={'/login'} className='text-center'>
                                <p className='text-sm md:text-md'>Already have an account? <span className='text-[#7257ff]'>Log in</span></p>
                            </Link>
                        </form>
                        <p className='text-sm md:text-md text-center'>By signing up, you agree to our <br /><span className='text-[#7257ff]'>Terms of Service</span> and <span className='text-[#7257ff]'>Privacy Policy</span>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;