"use client"

import Image from "next/image";
import Link from "next/link";

import SearchBar from "@/app/components/widget/SearchBar";
import OkiDokiLogotype from "@/app/components/OkiDokiLogotype";


export const Header = () => {

    return (
        <div className="hidden lg:sticky w-full lg:flex top-0 left-0 right-0 z-50">
            <nav className="w-full z-40 flex flex-col border-b backdrop-blur backdrop-filter bg bg-opacity-75">
                <div className="w-full px-5 lg:pl-10 flex justify-between h-[var(--header-height)] py-3 gap-3">
                    <div className="hidden lg:flex h-full items-center justify-center gap-2">
                        <Link href="/">
                            <OkiDokiLogotype width={30} height={35} />
                        </Link>
                        { /** todo Horisontal Menu */ }
                    </div>
                    <div className="w-full grow lg:w-auto flex gap-3 justify-between lg:justify-end items-center h-full">
                        <SearchBar />
                    </div>
                    <div className="hidden lg:flex items-center justify-end gap-3">
                        { /** todo Profile */ }
                    </div>
                </div>
            </nav>
        </div>
    )
}