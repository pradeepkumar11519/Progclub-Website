import React from 'react'
import Link from 'next/link'
import {AiOutlineClose} from 'react-icons/ai'
export default function OffcanvasNavbar() {
    return (
        <div className=''>
             <div className='overflow-hidden '>
                
            <div id="offcanvas" className='absolute left-[-500px] bg-black h-[500px] w-[300px] overflow-hidden transition-all fade-in-out z-[10000000000000]'>
                <button className='text-white mx-10 mt-10 cursour-pointer'>
<AiOutlineClose onClick={()=>{
    document.querySelector('#offcanvas').classList.remove('smenu')
}} className='' /></button>
                <h1 className='text-center text-white font-bold mx-10  text-3xl my-10'>P;Club - IITI</h1>
                <ul className=' w-fit mx-auto '>
                    <Link className='h-fit' href="/"><li className='my-2 mx-auto border-2 p-2 rounded-md hover:invert transition-all fade-in-out focus:invert text-center  w-[200px] bg-black text-white'>Home</li></Link>
                    <Link className='' href="/EventsPage"><li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white'>Events</li></Link>
                    <Link className='' href="/ProjectPage"><li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white'>Projects</li></Link>
                    <Link className='' href="/TeamPage"><li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white'>Our Team</li></Link>
                    <Link className='' href="#"><li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white'>Alumni</li></Link>
                    
                </ul>
            </div>
        </div>
        </div>
    )
}
