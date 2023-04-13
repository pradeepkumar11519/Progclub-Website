
import { NextSeo } from 'next-seo';
import React, { useRef, useEffect } from "react";

import HomePage3 from '@/components/HomePage3';

export default function Home() {
	
	  
	return (
		<>
			<NextSeo
				title="P;Club - IIT INDORE"
				description="Programing Club Of IIT INDORE(IITI)"
			/>
			<div className='border-2 border-black '>
				<HomePage3/>
			</div>
		</>
	)
}
