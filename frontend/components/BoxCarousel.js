import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Image from 'next/image';

const CARDS = 5;
const MAX_VISIBILITY = 2;

const CarouselCard = ({ title, subtitle, image, description,key }) => (
    <div key={key} className='boxcarouselcard xl:w-10/12 mx-auto'>
        <h2 className='lg:text-3xl text-stone-800 lg:pb-3 m-0 pb-2 pt-3'>{title}</h2>
        <Image alt="Upcoming Events" blurDataURL={image} placeholder='blur' height={400} width={400} className='w-full  xl:h-[320px] lg:h-[280px] mx-auto rounded-2xl' src={image} />
        <p className='text-sm lg:text-xl text-center my-3 text-gray-900 font-medium'>{subtitle}</p>
        <p className='text-xs lg:text-sm text-center text-gray-700'>{description}</p>
    </div>
);

const Carousel = ({ children }) => {
    
    const count = React.Children.count(children);
    const [active, setActive] = useState(count>2?1:0);
    console.log(children)
    return (
        <div className='carousel !h-[400px] lg:!h-[520px] mt-0 pt-0'>
            {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline /></button>}
            {React.Children.map(children, (child, i) => (
                <div key={i} className='card-container' style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline /></button>}
        </div>
    );
};



export default function BoxCarousel({ Events }) {
    

    return (
        <div className='boxcarousel'>
            <div className='app justify-center  mx-auto flex py-10 lg:py-20 ' >
                <Carousel>
                    {Events?.map((ele, index) => {
                        return (
                            <CarouselCard key={index} image={ele.image} title={ele.title} subtitle={ele.subtitle} description={ele.description} />
                        )
                        
                            
                        

                    })}
                </Carousel>
            </div>


            <style jsx>
                {`
                  
                   
                `}
            </style>
        </div>
    )
}
