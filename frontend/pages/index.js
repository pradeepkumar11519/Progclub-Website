import { NextSeo } from "next-seo";
import React, { useRef, useEffect } from "react";

import HomePage3 from "@/components/HomePage3";

import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import OurCommunity from "@/components/OurCommunity";

export default function Home() {
	return (
		<div>
			<NextSeo
				title="P;Club - IIT INDORE"
				description="Programing Club Of IIT INDORE(IITI)"
			/>
			<div className="border-2 border-black overflow-hidden">
				<HomePage3 />
			</div>
			<div id="content">
				<div id="BlogPage" className="px-10 bg-cover bg-no-repeat py-10">
					<h1 className="text-center text-white font-bold text-3xl sm:text-5xl   pb-5">
						From The Blog
					</h1>
					<div className="grid lg:grid-cols-3 justify-center">
						<BlogCard
							title={"Backend Guide for Beginners"}
							image={require('../public/images/BlogPage/blog1.jpg')}
							link={
								"https://medium.com/the-programming-club-iit-indore/backend-guide-for-beginners-189a2d972182"
							}
						/>
						<BlogCard
							title={"Networking and Web Basics for Cybersecurity"}
							image={require('../public/images/BlogPage/blog2.jpg')}
							link={
								"https://medium.com/the-programming-club-iit-indore/networking-and-web-basics-for-cybersecurity-c499e69696ae"
							}
						/>
						<BlogCard
							title={"Merge Sort for Linked Lists and Arrays"}
							image={require('../public/images/BlogPage/blog3.png')}
							link={
								"https://medium.com/the-programming-club-iit-indore/merge-sort-for-linked-lists-and-arrays-9d0641cfc541?source=rss----d6377ad9ffee---4"
							}
						/>
					</div>
					<div className="w-full flex justify-center pt-5">
						<div className="border-2 text-black p-4 rounded-md bg-white hover:bg-blue-600 hover:text-white hover:border-white transition-all fade-in-out duration-500">
							<Link href="https://medium.com/the-programming-club-iit-indore">
								See More
							</Link>
						</div>
					</div>

				</div>
				<div id="OurCommunity" className="">
					<OurCommunity />
				</div>

			</div>
			{/* #BlogPage{
					background: linear-gradient(180deg, #0C003C 0%, #BFFFAF 100%), linear-gradient(165deg, #480045 25%, #E9EAAF 100%), linear-gradient(145deg, #480045 25%, #E9EAAF 100%), linear-gradient(300deg, rgba(233, 223, 255, 0) 0%, #AF89FF 100%), linear-gradient(90deg, #45EBA5 0%, #45EBA5 30%, #21ABA5 30%, #21ABA5 60%, #1D566E 60%, #1D566E 70%, #163A5F 70%, #163A5F 100%);
background-blend-mode: overlay, overlay, overlay, multiply, normal;
					
				} */}
			<style jsx>
				{`
				
				
					
				`}
			</style>
		</div>
	);
}
