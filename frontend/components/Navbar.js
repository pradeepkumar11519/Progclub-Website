import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo.png'
import Link from 'next/link'
import OffcanvasNavbar from './OffcanvasNavbar'
import { AiOutlineBars } from 'react-icons/ai'
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
		document.querySelector('#offcanvas').classList.toggle('smenu')
		// if (document.getElementById('offcanvas').offsetLeft === -500) {
		// 	document.querySelector('#offcanvas').classList.add('smenu')
		// }
		// else {
		// 	document.querySelector('#offcanvas').classList.remove('smenu')
		// }
	}
	return (
		<div className='z-[10000000000] '>
			<div className='lg:grid flex justify-between lg:grid-cols-2  pr-10 pl-3 py-5 w-full absolute text-white bg-blur bg-black bg-opacity-30  backdrop-blur-lg'>
				<div className='w-10 ml-4 h-10 my-auto '>
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
						<Link href="#">Alumni</Link>
					</li>
				</ul>
				<div id="offcanvasbtn" className='my-auto mx-0 cursor-pointer md:hidden' onClick={OpenOffCanvas} >
					<AiOutlineBars className='w-7 h-7  my-auto text-white' />
				</div>
			</div>
			<div ref={ref} className='md:hidden overflow-hidden text-white'>
				<OffcanvasNavbar className="" />
			</div>
		</div>
	)
}
