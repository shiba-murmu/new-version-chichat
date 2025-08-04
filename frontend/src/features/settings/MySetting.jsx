import React, { Profiler } from 'react'
import { useState } from 'react';
function MySetting() {
    const [imageUrl, setImageUrl] = useState(
        {
            profile_image: ''
        }
    )

    const handleChange = (e) => {
        setImageUrl({
            ...imageUrl,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <section className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-xl w-full max-w-md mx-auto">
                <span className="text-lg font-semibold text-gray-700">
                    Change Profile Picture
                </span>

                <div className="relative border border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50 hover:border-blue-400 transition duration-200">
                    <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept="image/*"
                        name='profile_image'
                        onChange={handleChange}
                        value={imageUrl.profile_image}
                    />
                    <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG</p>
                </div>
                <p className='text-xs text-blue-600'>{imageUrl.profile_image}</p>
                <button type='submit' className='text-sm bg-[#7257ff] text-white hover:cursor-pointer p-2 rounded-md'>Change profile picture</button>
                <div class="mb-5">
                    <label class="block mb-2 text-base font-medium text-gray-600">Message</label>
                    <textarea
                        class="w-full p-4 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200 resize-none"
                        rows="6"
                        placeholder="Write your message here..."
                    ></textarea>
                    <p class="mt-1 text-xs text-gray-500">Max 500 characters</p>
                </div>
            </section>
        </div>
    )
}

export default MySetting;