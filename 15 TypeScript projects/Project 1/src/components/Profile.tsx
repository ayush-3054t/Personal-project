import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {
    const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400")

    const [profileUrl, setProfileUrl] = useState("https://placehold.co/100")



    const handleBannerChange = (event: any) => {
        const file = event.target.files[0]

        if (file) {
            setBannerUrl(URL.createObjectURL(file));
        }
    }


    const handleProfileChange = (event: any) => {
        const file = event.target.files[0]

        if (file) {
            setProfileUrl(URL.createObjectURL(file))
        }
    }


    return (
        <div className='relative w-[96%] ml-[5rem]'>
            <div className='relative w-full'>
                <img src={bannerUrl} alt="backgorund image" className='w-full h-60 object-cover' />


                <button className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                    <label htmlFor="banner-upload" className='cursor-pointer'>
                        <FaCamera size={24} />
                    </label>
                    <input type="file" id="banner-upload" accept='image/*' className='hidden' onChange={handleBannerChange} />
                </button>


            </div>

            {/* channel logo */}


            <div className="flex items-center ml-4 mt-[2rem] relative">
                <img src={profileUrl} alt="channel logo" className='w-40 h-40 object-cover rounded-full border-white relative border-white' />


                <button className='absolute ml-[3.6rem] mt-[7.5rem] z-10 bg-gray-800 text-white p-2 rounded-full'>
                    <label htmlFor="profile-upload" className='cursor-pointer'>

                        <FaCamera size={24} />
                    </label>
                    <input type="file" id="profile-upload" accept='image/*' className='hidden' onChange={handleProfileChange} />

                </button>



                {/* channel content */}
                <div className="ml-4 mt-4">
                    <h1 className='text-2xl font-bold ml-[4rem]'>Huxn Webdev</h1>
                    <p className='ml-[4rem]'>1M views</p>
                    <p className="mt-2 ml-[4rem] ">
                        This is a short description of the Youtube Channel. It gives an overview of the content and what niews can expect.
                    </p>
                    <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
                </div>
            </div>


            <Tabs/>





        </div>
    )
}

export default Profile
