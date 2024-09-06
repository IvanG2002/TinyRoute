import '../App.css'

// import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"

import Github from "../components/icons/Github"
import { Link, Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// import { Suspense } from 'react'

function Dashboard() {

    return (
        <>
            <header className='flex p-2 header__dashboard mx-auto items-center justify-between'>
                <div className='flex gap-2 items-center justify-center'>
                    <span className="scroll-m-20 text-xs font-semibold tracking-tight">
                        <Link to="/">🔗TinyRoute</Link>
                    </span>
                    <div>
                        <Badge className='h-5 w-11' variant="outline"><span className='text-xs'>Beta</span></Badge>
                    </div>
                </div>
                <div className='gap-3 flex items-center'>
                    <Github className='h-5 w-5'></Github>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Avatar className='h-5 w-5 rounded-md'>
                            <AvatarImage src="./light.svg" />
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mr-6 p-1'>
                            <DropdownMenuLabel>Theme</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='cursor-pointer'>
                                <div className='flex items-center justify-between gap-2'>
                                    <img className='h-4 w-4' src="./light.svg" alt="" />
                                    <span>Light</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='cursor-pointer' >
                                <div className='flex items-center justify-between gap-2'>
                                    <img className='h-4 w-4' src="./dark.svg" alt="" />
                                    <span>Dark</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='cursor-pointer'>
                                <div className='flex items-center justify-between gap-2'>
                                    <img className='h-4 w-4' src="./system.svg" alt="" />
                                    <span>System</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Avatar className='h-5 w-5'>
                            <AvatarImage src="" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mr-6'>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <img className='h-4 w-4 mr-2' src="./home.svg" alt="home icon" />
                                    <span className='mx-auto'>Home</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex items-center justify-between'>
                                    <img className='h-4 w-4 mr-2' src="./dashboard.svg" alt="home icon" />
                                    <span className='mx-auto'>Dashboard</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex items-center justify-between'>
                                    <img className='h-4 w-4 mr-2' src="./settings.svg" alt="home icon" />
                                    <span className='mx-auto'>Settings</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex items-center justify-between'>
                                    <img className='h-4 w-4 mr-2' src="./bug.svg" alt="home icon" />
                                    <span className='mx-auto'>Report a bug</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex items-center justify-between'>
                                    <img className='h-4 w-4 mr-2' src="./contact.svg" alt="home icon" />
                                    <span className='mx-auto'>Contact</span>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <div className="container mx-auto w-full px-5">
                <div className="flex w-full items-center justify-between">
                    <div className="mt-0 flex flex-row space-x-0 text-sm font-medium rtl:space-x-reverse">
                        <div>
                            <div className="flex items-center space-x-8">
                                <NavLink className="group relative px-1 pb-4 pt-3 text-sm font-medium outline-2 outline-sky-400 transition-colors duration-100 hover:bg-transparent hover:text-neutral-900 focus-visible:outline dark:hover:text-white border-b border-neutral-800 dark:border-white dark:text-white" to="/dashboard">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-link2 duration-300 group-hover:rotate-6">
                                            <path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2">
                                            </path><line x1="8" x2="16" y1="12" y2="12"></line>
                                        </svg>
                                        <span>Links</span>
                                    </div>
                                </NavLink>
                                <NavLink className="group relative px-1 pb-4 pt-3 text-sm font-medium outline-2 outline-sky-400 transition-colors duration-100 hover:bg-transparent hover:text-neutral-900 focus-visible:outline dark:hover:text-white text-neutral-500" to="/dashboard/settings">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings duration-300 group-hover:rotate-6">
                                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                                            </path><circle cx="12" cy="12" r="3"></circle>
                                        </svg><span>Settings</span></div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className='flex p-5 flex-col'>
                <Outlet />
            </main>
        </>
    )
}

export default Dashboard