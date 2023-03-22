import React from 'react'
import { useEffect, useMemo } from 'react'
import { gsap } from "gsap";
import { useRef } from 'react';
import { useState } from 'react';
export default function Carousel({ AllEvents }) {
	const tl = useRef()
	const el = useRef()
	const q = gsap.utils.selector(el)

	var length_of_events = AllEvents?.data?.length
	console.log('length of events', length_of_events);


	useEffect(() => {
		// Slider(all Slides in a container)
		const slider = document.querySelector(".slider")
		// All trails 
		const trail = document.querySelector(".trail").querySelectorAll("div")
		console.log('trail length', slider.childNodes.length)
		// Transform value
		let value = 0
		// trail index number
		let trailValue = 0
		console.log(trailValue)
		// interval (Duration)
		let interval = 4000

		// Function to slide forward
		const slide = (condition) => {
			// CLear interval
			clearInterval(start)
			// update value and trailValue
			condition === "increase" ? initiateINC() : initiateDEC()
			// move slide
			move(value, trailValue)
			// Restart Animation
			animate()
			// start interal for slides back 
			start = setInterval(() => slide("increase"), interval);
		}

		// function for increase(forward, next) configuration
		const initiateINC = () => {
			console.log('before', trailValue)
			// Remove active from all trails
			trail.forEach(cur => cur.classList.remove("active"))
			// increase transform value
			value >= 100 * (length_of_events - 1) / length_of_events ? value = 0 : value += 100 / length_of_events
			// update trailValue based on value
			trailValue >= length_of_events - 1 ? trailValue = 0 : trailValue += 1
			console.log('after', trailValue)
			console.log('datalength', length_of_events - 1)
		}

		// function for decrease(backward, previous) configuration
		const initiateDEC = () => {
			// Remove active from all trails
			trail.forEach(cur => cur.classList.remove("active"))
			// decrease transform value
			value <= 0 ? value = 100 * (length_of_events - 1) / (length_of_events) : value -= 100 / (length_of_events)
			trailValue < 0 ? trailValue = length_of_events - 1 : trailValue -= 1
			// update trailValue based on value



		}

		// function to transform slide 
		const move = (S, T) => {
			console.log("T", T)
			if (length_of_events !== 1) {
				// transform slider
				slider.style.transform = `translateX(-${S}%)`
				//add active class to the current trail
				if (trail[T]) {
					trail[T].classList.add('active')
				}
			}
			else {

			}

		}

		const new_Timeline = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.inOut" } })


		// function to restart animation
		const animate = () => new_Timeline.restart()

		// function to update trailValue based on slide value
		const trailUpdate = () => {
			for (var i = 0; i < length_of_events; i++) {
				if (value === 100 * i / length_of_events) {
					trailValue = i
					break
				}
				else if (i == length_of_events - 1 && value !== 100 * (length_of_events - 1) / length_of_events) {
					trailValue = i
					break
				}
			}

		}


		// Start interval for slides
		let start = setInterval(() => slide("increase"), interval)

		// Next  and  Previous button function (SVG icon with different classes)
		document.querySelectorAll("svg").forEach(cur => {
			// Assign function based on the class Name("next" and "prev")
			cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
		})

		// function to slide when trail is clicked
		const clickCheck = (e) => {
			// CLear interval
			clearInterval(start)
			// remove active class from all trails
			trail.forEach(cur => cur.classList.remove("active"))
			// Get selected trail
			const check = e.target
			// add active class
			check.classList.add("active")

			// Update slide value based on the selected trail
			for (var i = 0; i < length_of_events; i++) {
				if (check.classList.contains(`box${i + 1}`)) {
					value = 100 * i / length_of_events
					trailValue = i
					break
				}


			}
			// update trail based on value

			// transfrom slide
			move(value, trailValue)
			// start animation
			animate()
			// start interval
			start = setInterval(() => slide("increase"), interval)
		}

		// Add function to all trails
		trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

		// Mobile touch Slide Section
		const touchSlide = (() => {
			let start, move, change, sliderWidth

			// Do this on initial touch on screen
			slider.addEventListener("touchstart", (e) => {
				// get the touche position of X on the screen
				start = e.touches[0].clientX
				// (each slide with) the width of the slider container divided by the number of slides
				sliderWidth = slider.clientWidth / length_of_events
			})

			// Do this on touchDrag on screen
			slider.addEventListener("touchmove", (e) => {
				// prevent default function
				e.preventDefault()
				// get the touche position of X on the screen when dragging stops
				move = e.touches[0].clientX
				// Subtract initial position from end position and save to change variabla
				change = start - move
			})

			const mobile = (e) => {
				// if change is greater than a quarter of sliderWidth, next else Do NOTHING
				change > (sliderWidth / (length_of_events - 1)) ? slide("increase") : null;
				// if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
				(change * -1) > (sliderWidth / (length_of_events - 1)) ? slide("decrease") : null;
				// reset all variable to 0
				[start, move, change, sliderWidth] = [0, 0, 0, 0]
			}
			// call mobile on touch end
			slider.addEventListener("touchend", mobile)
		})()

	}, [])
	return (
		<div className='mx-auto flex justify-center  '>
			<div className="container !my-32 md:!mx-32  ">
				<div className={`slider !mb-32 relative   !text-white`} style={{ "width": `${length_of_events * 100}%` }}>
					{AllEvents?.data?.map((event, index) => {
						return (
							<div key={event.id} >

								{event.type === "Upcoming" && (
									<div className={`box${index + 1} box `} >
										<img alt="PLUB_EVENTS_LOADING" src={event.image} className=" opacity-100 h-full w-full" />
										<div className='absolute group !z-[10000]  bg-black  bg-opacity-50 hover:bg-opacity-0 transition-all fade-in-out h-full w-full flex flex-col items-center justify-center text-center'>				<div className=''>
											<div className="bg !z-[-10]"></div>
											<div className="details  transition-all fade-in-out flex-col child justify-center mx-auto w-fit h-fit">
												<h1 className='!text-white  z-[100000]'>{event.title} - {event.subtitle}</h1>

												<p className='!text-white  z-[100000]'>
													{event.description}
												</p>
												<div className=' justify-center mx-auto flex z-[100000]'>
													<button className='!z-[1000] w-fit mx-auto' >Check Now</button>
												</div>
											</div>
										</div>
										</div>


									</div>
								)}
							</div>
						)
					})}


				</div>

				<svg xmlns="http://www.w3.org/2000/svg" className={`prev ${length_of_events == 1 ? "hidden" : ""}`} width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" /></svg>

				<svg xmlns="http://www.w3.org/2000/svg" className={`next ${length_of_events == 1 ? "hidden" : ""}`} width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" /></svg>

				<div id="trail" className="trail  flex-wrap  !mt-32 absolute  text-white">
					{AllEvents?.data?.map((item, index) => {
						return (

							<div key={index} className={`box${index + 1} ${(index + 1) == 1 ? "active" : ""} !m-1 !p-3 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  md:p-5`}>{index + 1}</div>

						)
					})}



				</div>
			</div>
			<style jsx>
				{`
                *,
                *:before,
                *:after {
                  margin: 0;
                  padding: 0;
                  box-sizing: inherit;
                }
                
                html {
                  box-sizing: border-box;
                  font-family: "Roboto", sans-serif;
                  font-size: 62.5%;
                }
                @media only screen and (max-width: 800px) {
                  html {
                    font-size: 57%;
                  }
                }
                
                body {
                  background-color: #180148;
                  color: #fff;
                  padding: 8rem;
                }
                @media only screen and (max-width: 1000px) {
                  body {
                    padding: 0;
                  }
                }
                
                .container {
                  position: relative;
                  overflow: hidden;
                  border-radius: 5rem;
                }
                @media only screen and (max-width: 1000px) {
                  .container {
                    border-radius: 0;
                  }
                }
                
                .slider {
                  display: flex;
                  
                  height:100%;
                  transition: all 0.25s ease-in;
                  transform: translateX(0);
                }
                @media only screen and (max-width: 1000px) {
                  .slider {
                    height:100%;
                    
                  }
                }
                .slider .box {
                  height: 100%;
                  width: 100%;
                  display: grid;
                  grid-template-columns: repeat(1, 1fr);
                  align-items: center;
                  overflow: hidden;
                  position: relative;
                }
                @media only screen and (max-width: 650px) {
                  .slider .box {
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(1, 1fr);
                  }
                }
                .slider .box .bg {
                  padding: 2rem;
                  background-color: rgba(0, 0, 0, 0.2);
                  width: 55%;
                  transform: skewX(7deg);
                  position: absolute;
                  height: 100%;
                  left: -10%;
                  padding-left: 20rem;
                  transform-origin: 0 100%;
                }
                @media only screen and (max-width: 800px) {
                  .slider .box .bg {
                    width: 65%;
                  }
                }
                @media only screen and (max-width: 650px) {
                  .slider .box .bg {
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    height: 54%;
                    transform: skewX(0deg);
                  }
                }
                .slider .box .bg::before {
                  content: "";
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  background-color: inherit;
                  pointer-events: none;
                  transform: skewX(10deg);
                }
                @media only screen and (max-width: 650px) {
                  .slider .box .bg::before {
                    width: 120%;
                    bottom: 0;
                    transform: skewX(0deg);
                  }
                }
                .slider .box .details {
                  padding: 5rem;
                  padding-left: 10rem;
                  z-index: 100;
                  grid-column: 1/span 1;
                  grid-row: 1/-1;
                }
                @media only screen and (max-width: 650px) {
                  .slider .box .details {
                    grid-row: 2/span 1;
                    grid-column: 1/-1;
                    text-align: center;
                    padding: 2rem;
                    transform: translateY(-9rem);
                  }
                }
                .slider .box .details h1 {
                  font-size: 3.5rem;
                  font-weight: 500;
                  margin-bottom: 0.5rem;
                }
                .slider .box .details p {
                  display: inline-block;
                  font-size: 1.3rem;
                  color: #B5B4B4;
                  margin-bottom: 2rem;
                  margin-right: 5rem;
                }
                @media only screen and (max-width: 800px) {
                  .slider .box .details p {
                    margin-right: 0;
                  }
                }
                .slider .box .details button {
                  padding: 1rem 3rem;
                  color: #fff;
                  border-radius: 2rem;
                  outline: none;
                  border: none;
                  cursor: pointer;
                  transition: all 0.3s ease;
                }
                .slider .box .details button:hover {
                  opacity: 0.8;
                }
                .slider .box .details button:focus {
                  outline: none;
                  border: none;
                }
                




                .slider .box1 button {
                  background-color: #FF0077;
                }
                .slider .box2 {
                  background-color: #000050;
                }
                .slider .box2 .illustration .inner {
                  background-color: #0033FF;
                }
                .slider .box2 .illustration .inner::after, .slider .box2 .illustration .inner::before {
                  background-color: rgba(0, 51, 255, 0.4);
                }
                .slider .box2 button {
                  background-color: #0033FF;
                }
                .slider .box3 {
                  background-color: #00501D;
                }
                .slider .box3 .illustration .inner {
                  background-color: #00FF44;
                }
                .slider .box3 .illustration .inner::after, .slider .box3 .illustration .inner::before {
                  background-color: rgba(0, 255, 68, 0.4);
                }
                .slider .box3 button {
                  background-color: #00FF44;
                }
                .slider .box4 {
                  background-color: #554D00;
                }
                .slider .box4 .illustration .inner {
                  background-color: #FF4E00;
                }
                .slider .box4 .illustration .inner::after, .slider .box4 .illustration .inner::before {
                  background-color: rgba(255, 78, 0, 0.4);
                }
                .slider .box4 button {
                  background-color: #FF4E00;
                }
                .slider .box5 {
                  background-color: #300050;
                }
                .slider .box5 .illustration .inner {
                  background-color: #8000FF;
                }
                .slider .box5 .illustration .inner::after, .slider .box5 .illustration .inner::before {
                  background-color: rgba(128, 0, 255, 0.4);
                }
                .slider .box5 button {
                  background-color: #8000FF;
                }
                .slider .illustration {
                  grid-column: 2/-1;
                  grid-row: 1/-1;
                  justify-self: center;
                }
                @media only screen and (max-width: 650px) {
                  .slider .illustration {
                    grid-row: 1/span 1;
                    grid-column: 1/-1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
                .slider .illustration div {
                  height: 25rem;
                  width: 18rem;
                  border-radius: 3rem;
                  background-color: #FF0077;
                  position: relative;
                  transform: skewX(-10deg);
                }
                @media only screen and (max-width: 800px) {
                  .slider .illustration div {
                    height: 20rem;
                    width: 15rem;
                  }
                }
                .slider .illustration div::after, .slider .illustration div::before {
                  content: "";
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  border-radius: 3rem;
                  top: 0;
                  left: 0;
                }
                .slider .illustration div::after {
                  transform: translate(4rem, -1rem);
                }
                .slider .illustration div::before {
                  transform: translate(2rem, -2rem);
                }
                
                .prev,
                .next,
                .trail {
                  z-index: 10000;
                  position: absolute;
                }
                
                .prev,
                .next {
                  width: 4rem;
                  cursor: pointer;
                  opacity: 0.2;
                  transition: all 0.3s ease;
                }
                @media only screen and (max-width: 650px) {
                  .prev,
                .next {
                    display: none;
                  }
                }
                .prev:hover,
                .next:hover {
                  opacity: 1;
                }
                
                .prev {
                  top: 50%;
                  left: 2%;
                  transform: translateY(-50%);
                }
                
                .next {
                  top: 50%;
                  right: 2%;
                  transform: translateY(-50%);
                }
                
                .trail {
                bottom:0px;
                  left: 50%;
                  transform: translateX(-50%);
                  width: 60%;
                  display: flex;
                 justify-content:center;
                  gap: 1rem;
                  text-align: center;
                  font-size: 1.5rem;
                }
                @media only screen and (max-width: 650px) {
                  .trail {
                    width: 90%;
                    bottom:0px;
                    
                  }
                }
                .trail div {
                  padding: 2rem;
                  border-top: 3px solid #fff;
                  cursor: pointer;
                  opacity: 0.3;
                  transition: all 0.3s ease;
                }
                .trail div:hover {
                  opacity: 0.6;
                }
                @media only screen and (max-width: 650px) {
                  .trail div {
                    padding: 1rem;
                  }
                }
                
                .active {
                  opacity: 1 !important;
                }
            `}
			</style>
		</div>
	)
}
