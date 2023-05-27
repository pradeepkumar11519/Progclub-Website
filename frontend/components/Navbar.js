import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo.png'
import Link from 'next/link'
import OffcanvasNavbar from './OffcanvasNavbar'
import { AiOutlineBars } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
export default function Navbar() {
	const ref = useRef(null)
	useEffect(() => {
		const handleClicKOutsideOffcanvas = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				document.querySelector('#offcanvas').classList.remove('smenu')
			}

		}
		document.addEventListener('click', handleClicKOutsideOffcanvas, true);
		return () => {
			document.removeEventListener('click', handleClicKOutsideOffcanvas, true)
		}
	}, [])
	const OpenOffCanvas = () => {

		if (document.getElementById('offcanvas').offsetLeft === -500) {
			document.querySelector('#offcanvas').classList.add('smenu')
		}
		else {
			document.querySelector('#offcanvas').classList.remove('smenu')
		}
	}
	useEffect(() => {
		console.log(window.scrollY)
	}, [])
	return (
		<div className='z-[10000000000] sticky top-0'>
			<div className='flex lg:grid grid-cols-2 justify-between md:pr-10 pr-3 pl-3 py-3 w-full absolute bg-backdrop shadow-[1px_1px_10px_1px]  text-white bg-white bg-opacity-30 '>
				<div className='w-10 h-10 my-auto '>
					<Image src={Logo} placeholder="blur" />
				</div>
				<ul className='lg:grid hidden grid-cols-5'>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/"><button className="hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Home</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/EventsPage"><button className="hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Events</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/ProjectPage"><button className="hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Projects</button></Link>
					</li>
					<li className='p-2 m-2 text-center my-auto font-bold'>
						<Link href="/TeamPage"><button className="hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Our Team</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="#"><button className="hover:bg-black hover:bg-opacity-50 px-4 py-1 rounded-full">Alumni</button></Link>
					</li>
				</ul>
				<button id="offcanvas-btn" className='offcanvas-btn lg:hidden !ml-auto' data-offcanvas-button onClick={() => {
					OpenOffCanvas()
				}}>
					<FaBars data-offcanvas-btn className='w-7 h-7 flex ' />
				</button>

			</div>
			<div ref={ref} className='lg:hidden overflow-hidden text-white'>
				<OffcanvasNavbar className="" />
			</div>

		</div>
	)
}
