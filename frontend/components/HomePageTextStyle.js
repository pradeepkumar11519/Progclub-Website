import React from 'react'
import { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import PromotionIcons from './PromotionIcons';
export default function HomePageTextStyle() {
    useEffect(() => {
        for (var i = 1; i <= 10; i++) {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var iterations = 0;
            let element = document.querySelector(`#h${i}`);
            console.log(element.innerText);
            const interval = setInterval(() => {
                element.innerText = element.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return element.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                if (iterations >= element.dataset.value.length) clearInterval(interval);
                iterations = iterations + 1 / 220;
            }, 30 + i);
        }
    }, [])
    return (
        <div>
            <div className=' text-center absolute w-full h-full'>
                <div id="canvas" className='bg-cover bg-center bg-no-repeat text-center my-auto flex justify-center items-center font-bold lg:text-5xl  text-white text-xl sm:text-3xl md:text-4xl  h-screen'>
                    <div className='grid grid-rows-3 text-center  my-auto items-center'>
                        <div className='max-w-full break-all  h-full flex items-center justify-center'>
                            <TypeAnimation
                                sequence={[
                                    'The Programming Club',
                                    10,
                                    'IIT Indore',
                                    10,
                                    'The Programming Club',



                                ]}
                                wrapper="div"
                                cursor={false}
                                repeat={false}
                                style={{ fontSize: '1.5em' }}
                            />
                        </div>
                        <div className=' pb-5 text-xs flex-wrap md:text-2xl flex justify-center  max-w-full break-all h-full'>

                            <div className='grid grid-cols-5 md:flex mx-5 text-center justify-between'>
                                <h1 className='md:mb-5 md:mt-10 my-5 mx-2' id="h1" data-value="TO">TO</h1>
                                <h1 className='md:mb-5 md:mt-10 my-5 mx-2' id="h2" data-value="BE">BE</h1>
                                <h1 className='md:mb-5 md:mt-10 my-5 mx-2' id="h3" data-value="THE">THE</h1>
                                <h1 className='md:mb-5 md:mt-10 my-5 mx-2' id="h4" data-value="VERY">VERY</h1>
                                <h1 className='md:mb-5 md:mt-10 my-5 mx-2' id="h5" data-value="BEST">BEST</h1>
                                <h1 className='md:mb-5 md:mt-10 mx-2' id="h6" data-value="LIKE">LIKE</h1>
                                <h1 className='md:mb-5 md:mt-10 mx-2' id="h7" data-value="NO">NO</h1>
                                <h1 className='md:mb-5 md:mt-10 mx-2' id="h8" data-value="ONE">ONE</h1>
                                <h1 className='md:mb-5 md:mt-10 mx-2' id="h9" data-value="EVER">EVER</h1>
                                <h1 className='md:mb-5 md:mt-10 mx-2' id="h10" data-value="WAS">WAS</h1>
                            </div>
                        </div>
                        <div className='max-w-full break-all  '>
                            <PromotionIcons />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
