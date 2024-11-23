"use client"

import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {

    return (
        <div className="flex gap-2 items-center">
            <button 
                className="px-4 py-2 whitespace-nowrap border-input text-sm font-medium hover:bg-accent hover:text-accent-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group flex-grow md:w-44 xl:w-56 h-[30px] rounded-md pl-1.5 md:pl-2 pr-1 flex items-center justify-between bg-surface-100/75 text-foreground-lighter border hover:bg-opacity-100 hover:border-strong focus-visible:!outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600 transition" aria-haspopup="dialog" aria-expanded="false" aria-controls="command-menu-dialog-content">
                    <div className="flex items-center space-x-2 text-foreground-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <p className="flex text-sm pr-2">Search
                            <span className="hidden xl:inline ml-1"> docs...</span>
                        </p>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <div aria-hidden="true" className="md:flex items-center justify-center h-full px-1 border rounded bg-surface-300 gap-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-command">
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                            </svg>
                            <span className="text-[12px]">K</span>
                        </div>
                    </div>
            </button>
            <button
                title="Menu dropdown button"
                className="relative justify-center cursor-pointer items-center space-x-2 text-center font-regular ease-out duration-200 outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border dark:bg-muted hover:bg-selection hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover flex lg:hidden border-default bg-surface-100/75 text-foreground-light rounded-md min-w-[30px] w-[30px] h-[30px] data-[state=open]:bg-overlay-hover/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
        </div>  
    );
}

export default SearchBar;