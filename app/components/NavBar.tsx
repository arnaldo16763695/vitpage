'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LinkMobileNavbar, LinkNavbar } from './LinkNavbars';


const NavBar = () => {
    const [scroll, setScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenuMobile = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // here we detect scroll to change de nav's background color
    const detectScroll = () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setScroll(true);
                setIsMenuOpen(false)
            } else {
                setScroll(false);
            }
        });
    };



    useEffect(() => {
        detectScroll();
    }, [])

    return (
        <nav className={`${scroll ? 'bg-white' : 'bg-transparent'} fixed z-10  w-full p-2 md:p-6`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={openMenuMobile}
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                            <svg
                                className="block h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                            <svg
                                className="hidden h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <Image
                                className="h-8 w-auto"
                                src="/images/logo-on.png"
                                alt="Logo de Vit"
                                height={800}
                                width={800}
                            />

                            


                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                                <LinkNavbar />

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-slate-400 `} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <LinkMobileNavbar onClickButton={openMenuMobile} />
                </div>
            </div>
        </nav>

    )
}

export default NavBar