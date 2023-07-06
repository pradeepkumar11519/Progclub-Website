import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Logo from '../public/images/Logo.png'
import Link from 'next/link'
import OffcanvasNavbar from './OffcanvasNavbar'
import { AiOutlineBars } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router'
export default function Navbar() {
	const router = useRouter();
	const [val, setVal] = useState(router.pathname==="/"?0.1:1);

	const change = () => {
		if(router.pathname==="/") setVal(window.scrollY / 200);
	}

	useEffect(() => {
		window.addEventListener("scroll", change);
		return () => window.removeEventListener("scroll", change);
	});

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
	return (
		<div className={`z-[10000000000] sticky top-0`}>
			<div className='flex lg:grid grid-cols-2 justify-between md:pr-10 pr-3 pl-3 py-3 w-full absolute bg-backdrop shadow-[1px_1px_10px_1px]  text-white nav'>
				<div className='w-10 h-10 my-auto '>
					<Image src={Logo} placeholder="blur" />
				</div>
				<ul className='lg:grid hidden grid-cols-5'>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/"><button className="btn  px-4 py-1 rounded-2xl">Home</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/EventsPage"><button className="btn  px-4 py-1 rounded-2xl">Events</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="/ProjectPage"><button className="btn  px-4 py-1 rounded-2xl">Projects</button></Link>
					</li>
					<li className='p-2 m-2 text-center my-auto font-bold'>
						<Link href="/TeamPage"><button className="btn  px-4 py-1 rounded-2xl">Our Team</button></Link>
					</li>
					<li className=' p-2 m-2 text-center my-auto font-bold'>
						<Link href="#"><button className="btn  px-4 py-1 rounded-2xl">Alumni</button></Link>
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

			<style jsx>
				{
					`
						.nav{
							font-size: 17px;
							background-color: rgba(28, 39, 76, ${router.pathname==="/"?val:1});
						}

						.btn{
							cursor: pointer;
							background: linear-gradient(to right, rgba(28, 39, 76, ${router.pathname==="/"?val:1}) 50%, white 50%);
							background-size: 200% 100%;
							transition: background-position 0.3s;
						}

						.btn:hover{
							background-position: -100% 0;
							color: rgba(28, 39, 76, 1);
							box-shadow: 0 0 5px rgb(0,140,255),
										0 0 25px rgb(0,140,255),
										0 0 50px rgb(0,140,255),
										0 0 100px rgb(0,140,255);
							transition: 0.3s;
						}
					`
				}
			</style>

		</div>
	)
}
