import './App.css'
import { Button } from "@/components/ui/button"
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

import Github from "./components/icons/Github"
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <header className='flex p-2 header mx-auto items-center justify-between'>
        <div className='flex gap-2 items-center justify-center'>
          <span className="scroll-m-20 text-xs font-semibold tracking-tight">
            🔗TinyRoute
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
      <div className='sub__header'>
        <div className='flex items-center justify-center gap-3'>
          <img src="./issue.svg" alt="" height={15} width={15} />
          <p className="text-sm">
            Welcome to the TinyRoute beta. If you detect any problem or bug, feel free to <span className='issue'>create an issue</span> on Github.
          </p>
        </div>
      </div>
      <main className='flex items-center justify-center main mx-32 lg:mx-80'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className='flex flex-col mb-auto m-16 gap-5'>
          <div className="text-4xl font-bold lg:text-6xl text-center">Organize and Optimize Your Links</div>
          <div className="text-xs font-semibold lg:text-lg text-center">TinyRoute is a user-friendly, open-source platform for creating, managing, and sharing compact links. It’s quick, secure, and optimized for seamless navigation.</div>
          <div className='flex gap-2 lg:items-center lg:justify-center'>
            <Link to="dashboard"><Button><img className='mr-1 text-white' src="./link.svg" alt="link icon" height={20} width={20} />Get Started</Button></Link>
            <Button variant={'outline'}> <img className='mr-1' src="./github.svg" alt="git hub" height={20} width={20} /><a href="">Start on Github</a></Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
