"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ********************************************************************************************

    const handleAdminEmailLogin = async (e) => {
        e.preventDefault();
        
    };
    // ********************************************************************************************
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className="text-center border p-10 rounded-md w-96 mx-auto mt-20">
                <h2>Admin Login</h2>

                <form className="flex flex-col gap-5 mt-5" onSubmit={handleAdminEmailLogin}>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 relative">
                        <RiLockPasswordLine />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pr-5"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 cursor-pointer"
                        >
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </span>
                    </label>

                    <button className="py-2 px-5 rounded-md w-full custom-button bg-[#6E3FF3] text-white">
                        Login
                    </button>
                    <div className='text-sm flex justify-between'>
                        <Link href='/'>Forgot password</Link>
                        <Link href="/client-login">Login as Client</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
