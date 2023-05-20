import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Image from 'next/image';

const CARDS = 5;
const MAX_VISIBILITY = 2;

const Card = ({ title, subtitle, image, description,key }) => (
    <div key={key} className='boxcarouselcard'>
        <h2>{title}</h2>
        <Image alt="Upcoming Events" blurDataURL={image} placeholder='blur' height={400} width={400} className='w-full lg:h-[400px]' src={image} />
        <p className='text-sm text-center my-3 text-gray-900'>{subtitle}</p>
        <p className='text-xs text-center text-gray-700'>{description}</p>
    </div>
);

const Carousel = ({ children }) => {
    
    const count = React.Children.count(children);
    const [active, setActive] = useState(count>2?1:0);
    console.log(children)
    return (
        <div className='carousel !h-[400px] lg:!h-[600px]'>
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



export default function BoxCarousel({ AllEvents }) {
    

    return (
        <div className='boxcarousel'>
            <div className='app justify-center  mx-auto flex py-10 lg:py-20 ' >
                <Carousel>
                    {AllEvents?.data?.filter(x => {
        return x.type === "Upcoming"
    }).map((ele, index) => {
                        return (
                            <Card key={index} image={ele.image} title={ele.title} subtitle={ele.subtitle} description={ele.description} />
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
