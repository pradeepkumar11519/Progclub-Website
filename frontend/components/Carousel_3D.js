import React from 'react'
import { useEffect, useMemo } from 'react'
import { gsap } from "gsap";
import { useRef } from 'react';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carousel_3D({ AllEvents }) {
	let arrayIndex = AllEvents?.data?.findIndex(x => {
		return x.type !== "Upcoming"
	})
	console.log(arrayIndex);

	return (
		<div className='mx-auto flex justify-center !w-full  '>
			<div className='!flex !justify-center m-32'>
				<Carousel showArrows={true} showThumbs={true} className='w-[300px] sm:w-full' autoPlay={true} infiniteLoop={true} interval={2000}>
					{AllEvents?.data?.slice(0, arrayIndex).map((event) => {
						return (
							<div className='' key={event.id}>
								<img className={`  !z-[-1] !bg-black !bg-opacity-50 !w-[300px] sm:!w-full max-h-[600px] mx-auto`} src={event.image} />
								<div className='legend'>
									<div>
										{event.title} - {event.subtitle}
									</div>
									<div>
										{event.description}
									</div>
								</div>
							</div>
						)

					})}
				</Carousel>
			</div>

		</div>
	)
}
