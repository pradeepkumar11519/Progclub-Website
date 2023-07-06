import React from 'react'
import Image from 'next/image'
import terminal from '../public/images/terminal.png'

export default function OurCommunity() {
    return (
        <div id="CommunityPage" className='py-10 mt-10 px-5 text-white md:text-xl'>
            <div className = 'font-bold text-2xl py-2 mx-auto md:mx-10 md:text-6xl'>
                {'>'} Our Community_
            </div>
            <div className = 'md:grid md:grid-cols-2 md:grid-rows-1'>
                <div className = 'my-auto px-8'>
                The Programming Club aims to develop a positive programming culture in the IITI community. We try our best to help students explore all programming disciplines and choose what they like the most. We organize workshops, provide mentorship, share resources, and arrange alumni talks to aid their journey.

                </div>

                <div className = 'md:px-8'>
                    <Image src = { terminal } className = 'img w-full'></Image>
                </div>
            </div>

            <div className = 'my-auto px-8'>
            For students to gain experience by working on real-life projects, we take on good projects and organise various events and hackathons by collaborating with institutes, professors, clubs and industries.

            </div>

            <div className = 'px-8 my-6'>
            Most importantly, we stand by our motto, by enabling students to <b>unlock their true potential and become their best selves.</b>
            </div>
            <style jsx>
                {`
                #CommunityPage{
                background: radial-gradient(100% 225% at 100% 0%, #FF0000 0%, #000000 100%), linear-gradient(236deg, #00C2FF 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 0%, #CDFFEB 36%, #009F9D 36%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);
                background-blend-mode: overlay, hard-light, normal;
        }
        `}
                
            </style>
        </div>
    )
}
