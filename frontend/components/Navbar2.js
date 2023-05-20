import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo.png'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
    <div className = " z-[1000000] w-full nav">
      <div className='grid grid-cols-2 justify-between pr-10 pl-3 py-3 w-full absolute bg-backdrop text-white bg-white bg-opacity-10 '>
        <div className='w-10 h-10 my-auto '>
            <Image src={Logo} placeholder="blur" />
        </div>
        <ul className='lg:grid hidden grid-cols-5'>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/"><button className = "hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Home</button></Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/EventsPage"><button className = "hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Events</button></Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/ProjectPage"><button className = "hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Projects</button></Link>
            </li>
            <li className='p-2 m-2 text-center my-auto font-bold'>
                <Link href="/TeamPage"><button className = "hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Our Team</button></Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="#"><button className = "hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Alumni</button></Link>
            </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {
        `
          .nav{
            font-size: 17px;
          }
        `
      }
    </style>
    </>
  )
}
