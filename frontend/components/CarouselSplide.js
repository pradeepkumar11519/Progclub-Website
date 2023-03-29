import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

export default function CarouselSplide({ AllEvents }) {

    const arrayIndex = AllEvents?.data?.findIndex(x => {
        return x.type === "Upcoming"
    });
    return (
        <div className='flex justify-center my-20'>
            {arrayIndex===0 ? (
                        <h1 className='text-center font-bold text-3xl text-white '>Currently no Upcoming Events</h1>
                    ):(
                        <Splide
                options={
                    {
                        
                        width: 1000,
                        rewind: true,
                        gap: '1rem',

                        wheel: true,

                        releaseWheel: true,
                        autoplay: true,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        interval: 2000
                    }}
                aria-label="My Favorite Images">
                    
                {AllEvents?.data?.slice(arrayIndex).map((ele, index) => {
                    return (
                        <>
                        <SplideSlide className='mx-4'>
                            <Image width={"1000"} height={"1000"} src={ele.image} alt="Image 1" style={{"width":"100% !important","height":"100% !important"}} />
                        </SplideSlide>
                        </>
                    )

                })}


            </Splide>
                    )}
            
        </div>
    )
}
