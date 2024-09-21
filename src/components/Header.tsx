"use client"

import { navigation } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Header() {

    const [openNavigation, setOpenNavigation] = useState(false);

    return (
            <header className="w-full fixed z-50 backdrop-blur shadow">
                <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8
                flex flex-row justify-between items-center">
                    <h1 className="text-lg font-bold leading-tight">Arnoldas</h1>
                    
                    <div>

                        <button 
                        onClick={() => setOpenNavigation(!openNavigation)}
                        className="flex flex-col items-end space-y-1 md:hidden">
                            <span className="w-7 h-[3px] bg-custom-gray-900 block rounded"></span>
                            <span className="w-4 h-[3px] bg-custom-gray-900 block rounded"></span>
                            <span className="w-6 h-[3px] bg-custom-gray-900 block rounded"></span>
                        </button>

                        <nav className={` 
                            ${!openNavigation && 'hidden'} md:hidden`}>
                            <a href="#" className="">Ho2me</a>
                            <a href="#" className="">Dashboard</a>
                        </nav>

                        <nav className="hidden md:flex">
                            {navigation.map((nav) => (
                                <Link className="py-2 rounded px-4 hover:bg-slate-200 transform duration-300" href={nav.link} key={nav.id}>{nav.title}</Link>
                            ))}
                            <Link className="flex rounded items-center gap-1 hover:bg-slate-200 px-4 transform duration-300" href="/resume">Resume <BsArrowUpRight /></Link>
                        </nav>
                    </div>
                </div>
            </header>
    );
}