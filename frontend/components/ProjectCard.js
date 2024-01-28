import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect,useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';
const options = {
  reverse: true,
  max: 20,
  speed: 100,
  scale: 1.02,
  glare: true,
  reset: true,
  perspective: 10000,
  transition: true,
  "max-glare": 0.4,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45
}
export default function ProjectCard({ ele }) {
  function Tilt(props) {
		const { children, options, ...rest } = props;
		const tilt = useRef(null);

		useEffect(() => {
			VanillaTilt.init(tilt.current, options);
		}, [options]);

		return (<div ref={tilt} {...rest} >{children}</div>);
	}
	return (
		<div id="ProjectPage" className='justify-center flex !mb-32  '>
			<Tilt className="card  max-w-[500px] md:w-[500px] rounded-lg" options={options} >
				<div className=''>
					<div className="">
						{/* <div className="circle"></div> */}
						{/* <div className="circle"></div> */}
						<div className="card-inner ">
							<div className='grid grid-rows-[auto_auto]  '>
								<div className='md:grid md:grid-cols-[auto_auto] px-10 py-5 w-full flex flex-col justify-center items-center'>
									<div id="ProjectsImage" className='w-full h-full md:w-full md:h-full  rounded-xl md:rounded-[0px] flex bg-white items-center justify-center mb-5 md:mb-0 px-5 mx-auto'>
										<Image src={ele.image}
											width={97} height={96} placeholder='blur' className='w-fit h-fit ' blurDataURL={ele.image} />
									</div>
									<div className='w-fit md:w-full h-full ml-5'>
										<div className='my-2  border-2 border-white bg-white text-black rounded-lg text-center break-all p-2  font-bold'>{ele.title}</div>
										<div className='my-2  border-2 border-white bg-white text-black rounded-lg text-center break-all p-2 '>{ele.subtitle}</div>
										<div className='my-2  border-2 border-white bg-white text-black rounded-lg text-center break-all p-2 '>{ele.category}</div>
										<button></button>
										<button></button>
									</div>
								</div>
								<hr className='border-2 max-w-[400px]' />
								<div className='h-full w-full  text-white text-center p-5'>
									{ele.description}
									<div className='my-5 flex'>
										<Link target={"_blank"} href={ele.github} className='border-2 border-black bg-white p-2 rounded-full w-full text-black font-bold hover:underline hover:bg-black hover:text-white transition-all fade-in-out duration-500'>Github</Link>
										{ele.domain!=="None" && (
											<Link target={"_blank"} href={ele.domain} className='border-2 border-black bg-white p-2 rounded-full w-full text-black font-bold hover:underline hover:bg-black hover:text-white transition-all fade-in-out duration-500'>Website Link</Link>
										)}
										
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</Tilt>


			<style jsx>
				{`
        .card {
          
          height: fit-content;
          transition: all 0.2s;
          position: relative;
          cursor: pointer;
        }
        
        .card-inner {
          width: inherit;
          height: inherit;
          background: rgba(255,255,255,.2);
          box-shadow: 0 0 10px rgba(0,0,0,0.25);
          backdrop-filter: blur(10px);
          border-radius: 8px;
        }
        
        .card:hover {
          transform: scale(1.04) rotate(1deg);
        }
        
        .circle {
          width: 100px;
          height: 100px;
          background: radial-gradient(#3f33e6, #535def);
          border-radius: 50%;
          position: absolute;
          animation: move-up6 2s ease-in infinite alternate-reverse;
        }
        
        .circle:nth-child(1) {
          top: -25px;
          left: -25px;
        }
        
        .circle:nth-child(2) {
          bottom: -25px;
          right: -25px;
          animation-name: move-down1;
        }
        
        @keyframes move-up6 {
          to {
            transform: translateY(-10px);
          }
        }
        
        @keyframes move-down1 {
          to {
            transform: translateY(10px);
          }
        }
        `}
			</style>
		</div>
	)
}
