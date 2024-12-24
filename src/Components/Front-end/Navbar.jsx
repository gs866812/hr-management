"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarClock, LuUsers } from "react-icons/lu";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { PiClipboardText } from "react-icons/pi";
import { IoSettingsOutline } from 'react-icons/io5';



export default function Navbar() {

    const pathname = usePathname();
    const [isOpenExpense, setIsOpenGeneral] = useState(false);

    const toggleDropdownGeneral = () => {
        setIsOpenGeneral(!isOpenExpense);
    };
    return (
        <div className='flex flex-col mb-[1px]'>
            {/* ********************************************************* */}
            <Link href='/' className={`mb-[1px] font-semibold p-2 rounded-md flex gap-2 items-center justify-start ${pathname === '/' ? 'bg-[#6E3FF3] text-white' : 'hover:bg-[#6E3FF3] hover:text-white'
                }`}>
                <MdOutlineDashboard />
                <span>Dashboard</span>
            </Link>
            {/* ********************************************************* */}

            <section className={`${isOpenExpense ? 'bg-gray-100' : ''} rounded-md mb-[1px]`}>
                <div
                    className={`flex items-center justify-between cursor-pointer p-2 w-full gap-2 hover:bg-gray-100 mb-[1px] rounded-md ${isOpenExpense ? 'hover:bg-gray-100' : ''}`}
                    onClick={toggleDropdownGeneral}
                >
                    <div className="flex items-center gap-2">
                        {/* <FcElectricity className="text-xl" /> */}
                        <span>General</span>
                    </div>
                    <span>{isOpenExpense ? <FaAngleUp /> : <FaAngleDown />}</span>
                </div>

                {isOpenExpense && (
                    <div className="rounded-md p-2 bg-gray-100">
                        {/* ************************************************* */}
                        <Link href='/noticeBoard' className={`mb-[1px] font-semibold p-2 rounded-md flex gap-2 items-center justify-start ${pathname === '/noticeBoard' ? 'bg-[#6E3FF3] text-white' : 'hover:bg-[#6E3FF3] hover:text-white'
                            }`}>
                            <PiClipboardText />
                            <span>Notice Board</span>
                        </Link>
                        {/* ************************************************* */}
                        <Link href='/employee' className={`mb-[1px] font-semibold p-2 rounded-md flex gap-2 items-center justify-start ${pathname === '/employee' ? 'bg-[#6E3FF3] text-white' : 'hover:bg-[#6E3FF3] hover:text-white'
                            }`}>
                            <LuUsers />
                            <span>Employee</span>
                        </Link>
                    </div>
                )}
            </section>
            {/* ********************************************************* */}

             <Link href='/settings' className={`mb-[1px] font-semibold p-2 rounded-md flex gap-2 items-center justify-start ${pathname === '/settings' ? 'bg-[#6E3FF3] text-white' : 'hover:bg-[#6E3FF3] hover:text-white'
                }`}>
                <IoSettingsOutline />
                <span>Setting</span>
            </Link>
            {/* ********************************************************* */}
             <Link href='/leave' className={`mb-[1px] font-semibold p-2 rounded-md flex gap-2 items-center justify-start ${pathname === '/leave' ? 'bg-[#6E3FF3] text-white' : 'hover:bg-[#6E3FF3] hover:text-white'
                }`}>
                <LuCalendarClock />
                <span>Leave</span>
            </Link>
            {/* ********************************************************* */}
            

        </div>
    )
}
