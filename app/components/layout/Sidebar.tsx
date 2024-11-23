"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

interface Props {
    list?: string[];
}

export const Sidebar: React.FC<Props> = ({list}) => {
    const [navList, setNavList] = useState(list && list.length > 0 ? list : [""])

    useEffect(() => {
        if( list )
            setNavList(list);
    }, [list]);

    useEffect(() => {
        console.log("navList", navList);
    }, [navList]);

    return (
        <nav className="fixed z-40 lg:z-auto w-0 -left-full lg:w-[420px] !lg:left-0 lg:top-[var(--header-height)] lg:sticky h-screen lg:h-[calc(100vh-var(--header-height))] lg:left-0 transition-all top-0 bottom-0 flex flex-col ml-0 border-r lg:overflow-y-auto">
            <div className="top-0 lg:top-[var(--header-height)] relative lg:sticky w-full lg:w-auto h-fit lg:h-screen overflow-y-scroll lg:overflow-auto [overscroll-behavior:contain] backdrop-blur backdrop-filter bg-background flex flex-col flex-grow">
                <div className="transition-all ease-out duration-200 absolute left-0 right-0 px-5 pl-5 pt-6 pb-16 bg-background lg:relative lg:left-0 lg:pb-10 lg:px-10 lg:flex lg:opacity-100 lg:visible">
                    <div className="transition-all duration-150 ease-out opacity-100 ml-0 delay-150" data-orientation="vertical">
                        <div className="flex flex-col gap-2">
                            {navList.map((item, index) => (
                                <Link href="#" key={index}>{item}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}