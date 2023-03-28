import React from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo.png'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='z-[10000000000]'>
      <div className='grid grid-cols-2 justify-between pr-10 pl-3 py-5 w-full absolute text-white bg-blur  backdrop-blur-lg '>
        <div className='w-10 h-10 my-auto '>
            <Image alt="PCLUB_LOGO_LOADING" src={Logo} placeholder="blur" />
        </div>
        <ul className='lg:grid hidden grid-cols-5'>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/">Home</Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/EventsPage">Events</Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="/ProjectPage">Projects</Link>
            </li>
            <li className='p-2 m-2 text-center my-auto font-bold'>
                <Link href="/TeamPage">Our Team</Link>
            </li>
            <li className=' p-2 m-2 text-center my-auto font-bold'>
                <Link href="#">Contact Us</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}
