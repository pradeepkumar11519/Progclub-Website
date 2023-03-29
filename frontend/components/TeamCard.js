import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import { SiCodeforces } from 'react-icons/si'
export default function TeamCard({ team }) {
	const [onClickOutside, setOnClickOutside] = useState(true)
	const ref = useRef(null)
	useEffect(() => {
		const handleCliclOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				document.getElementById(`teamcard${team.id}`).classList.add('absolute')
				
				document.getElementById(`teamcard${team.id}`).classList.remove('bottom-[-100px]')
				
			}
		}
		document.addEventListener('click', handleCliclOutside, true);
		return () => {
			document.removeEventListener('click', handleCliclOutside, true)
		}
	}, [team])
	const handleReadMore = () => {
		document.getElementById(`teamcard${team.id}`).classList.remove('absolute')		
		document.getElementById(`teamcard${team.id}`).classList.add('bottom-[-100px]')
		
		


	}
	return (
		<div ref={ref} className='sm:mx-5 relative my-5'>

			<div className="card rounded-[2em] !transition-all !fade-in-out overflow-hidden">
				<center>
					<div className="profileimage rounded-full w-full h-full ">
						<Image src={team.image} className="rounded-full w-full h-full" width={"100"} height={"100"} />
					</div>
					<div className="Name">
						<p className='break-all'>{team.position}</p>
						<p className='break-all'>Name : {team.name}</p>
						<p className='break-all'>Email : {team.email}</p>

						<button onClick={handleReadMore} className='mt-5 bg-white w-fit text-black p-2 rounded-2xl font-semibold hover:bg-gray-200 !transition-all !fade-in-out'>Read More</button>

					</div>
					<div className="socialbar !flex justify-center items-center">
						<Link target={"_blank"} href={team.github} id="github">
							<AiFillGithub className='w-7 h-7' />
						</Link>
						&nbsp;
						&nbsp;
						&nbsp;
						<Link target={"_blank"} href={team.codeforces} id="instagram">
							<SiCodeforces className='w-7 h-7' />
						</Link>
						&nbsp;
						&nbsp;
						&nbsp;
						<Link target={"_blank"} href={team.linkedin} id="facebook">
							<AiFillLinkedin className='w-7 h-7' />
						</Link>
					</div></center>

			</div>
			<div className=''>
				<div id={`teamcard${team.id}`} className={` overflow:hidden absolute  bottom-[80px] bg-white w-full left-0 rounded-[2em] !transition-all  text-black text-center font-bold !fade-in-out py-5 z-[-10]`}>
					<p className='break-all'>Divsion : {team.division}</p>
					<p className='break-all'>Year : {team.year} Year</p>
				</div>
			</div>

			<style jsx>
				{`
                    .card {
						width: 100%;
						height: 100%;
						
						padding: 10px;
						
						background-color: #191919;
						box-shadow: 5px 5px 30px rgb(4, 4, 4),
										 -5px -5px 30px rgb(57, 57, 57);
					  }
					  
					  .profileimage {
						background-color: transparent;
						border: 3px solid white;
						margin-top: 20px;
						border-radius: 50%;
						width: 100px;
						height: 100px;
					  }
					  
					  .Name {
						color: white;
						padding: 15px;
						font-size: 20px;
						margin-top: 10px;
					  }
					  
					  .socialbar {
						background-color: #191919;
						border-radius: 3em;
						width: 90%;
						padding: 14px;
						margin-top: 15px;
						color: white;
						box-shadow: 3px 3px 15px rgb(0, 0, 0),
										 -3px -3px 15px rgb(58, 58, 58);
					  }
					  
					  .card a {
						transition: 0.4s;
						color: white
					  }
					  
					  #github:hover {
						color: #c9510c;
					  }
					  
					  #instagram:hover {
						color: #d62976;
					  }
					  
					  #facebook:hover {
						color: #3b5998;
					  }
					  
					  #twitter:hover {
						color: #00acee;
					  }
                      
                `}
			</style>
		</div>
	)
}
