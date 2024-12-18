import React from 'react'
import { TbMessageDots } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
    return (
        <div className='m-auto max-w-screen-2xl'>
            <div className='lg:mx-8 px-2 rounded-md border flex justify-between items-center'>
                <div>
                    <span className='text-xl'>Logo</span>
                </div>

                <div className='flex justify-center items-center gap-3 py-2'>
                    <span><TbMessageDots className='text-2xl' /></span>
                    <div className='relative'>
                        <div className='absolute w-2 h-2 rounded-full bg-green-600 right-0 top-0'></div>
                        <IoNotificationsOutline className='text-2xl' />
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-10 h-10'>
                            <img
                                className='rounded-full border'
                                alt="Tailwind CSS Navbar component"
                                src="https://iili.io/2BqJhuf.png" />
                        </div>
                        <div>
                            <h2 className='font-bold'>Name</h2>
                            <p className='text-gray-500 text-sm'>Designation</p>
                        </div>

                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} className=" m-1"><FaAngleDown/></div>
                            <ul tabIndex={0} className="dropdown-content menu z-[1] w-40 p-2 pt-5">
                                <li className='bg-red-500 text-white rounded-md hover:bg-red-700'><a>Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
