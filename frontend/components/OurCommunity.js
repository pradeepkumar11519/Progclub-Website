import React from 'react'

export default function OurCommunity() {
    return (
        <div id="CommunityPage" className='p-20 mt-20'>
            <div>
                <h1 className='text-center md:text-center text-3xl md:text-6xl font-bold text-white'>Our Community</h1>
                <div className='text-white  text-md md:text-2xl my-16'>
                    The Programming Club aims to develop a positive programming culture in the IITI community. We try our best to help students explore all programming disciplines and choose what they like the most. We organize workshops, provide mentorship, share resources, and arrange alumni talks to aid their journey.
                </div>
                <div className='text-white text-md md:text-2xl my-16'>
                    For students to gain experience by working on real-life projects, we take on good projects and organise various events and hackathons by collaborating with institutes, professors, clubs and industries.</div>
                <div className='text-white text-md md:text-2xl my-16'>
                    Most importantly, we stand by our motto, by enabling students to unlock their true potential and become their best selves.
                </div>
            </div>
            <style jsx>
                {`
        #CommunityPage{
            background: linear-gradient(235deg, #FFFFFF 0%, #000F25 100%), linear-gradient(180deg, #6100FF 0%, #000000 100%), linear-gradient(235deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%), linear-gradient(125deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%);
background-blend-mode: soft-light, screen, darken, normal;
        }
        `}
            </style>
        </div>
    )
}
