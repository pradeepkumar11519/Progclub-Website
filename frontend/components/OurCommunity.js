import React from "react";
import Image from "next/image";
import terminal from "../public/images/terminal.png";

export default function OurCommunity() {
    return (
        <div
            id="CommunityPage"
            className="py-10  px-5 text-white md:text-xl backdrop-blur-md  bg-black bg-opacity-20"
        >
            <div className="font-bold text-2xl py-2 mx-auto md:mx-10 md:text-6xl">
                {">"} Our Community_
            </div>
            <div className="md:grid md:grid-cols-2 md:grid-rows-1">
                <div className="my-auto px-8">
                    The Programming Club aims to develop a positive programming
                    culture in the IITI community. We try our best to help
                    students explore all programming disciplines and choose what
                    they like the most. We organize workshops, provide
                    mentorship, share resources, and arrange alumni talks to aid
                    their journey.
                </div>

                <div className="md:px-8">
                    <Image src={terminal} className="img w-full"></Image>
                </div>
            </div>

            <div className="my-auto px-8">
                For students to gain experience by working on real-life
                projects, we take on good projects and organise various events
                and hackathons by collaborating with institutes, professors,
                clubs and industries.
            </div>

            <div className="px-8 my-6">
                Most importantly, we stand by our motto, by enabling students to{" "}
                <b>unlock their true potential and become their best selves.</b>
            </div>
            {/* <style jsx>
                {`
                    #CommunityPage{
						background: linear-gradient(235deg, #FFFFFF 0%, #000F25 100%), linear-gradient(180deg, #6100FF 0%, #000000 100%), linear-gradient(235deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%), linear-gradient(125deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%);
            background-blend-mode: soft-light, screen, darken, normal;
                    }
        
                `}

            </style> */}
        </div>
    );
}
