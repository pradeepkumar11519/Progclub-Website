import Navbar from '@/components/Navbar'
import { ContextProvider } from '@/context/Context'
import React from 'react'
import '@/styles/globals.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	QueryClientProvider, useQuery,
	useMutation,
	Hydrate,
	useQueryClient,
	QueryClient,
} from '@tanstack/react-query'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
	const router = useRouter()
	
	const [queryClient] = React.useState(() => new QueryClient())
	const [progress, setProgress] = useState(0)
	React.useEffect(() => {

		router.events.on('routeChangeStart', () => {
			document.querySelector('#offcanvas').classList.remove('smenu')
			setProgress(40)
			

		})
		router.events.on('routeChangeComplete', () => {
			setProgress(100)
			

		})

	}, [router])
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ContextProvider>


					<Navbar />
					<LoadingBar
						color='blue'
						shadowStyle={{'height':'3px','width':'20px'}}
						height={3}
						waitingTime={200}
						progress={progress}
						onLoaderFinished={() => setProgress(0)}
					/>
					
					<div className='!text-black z-[-10] '>
						<Component {...pageProps} />
					</div>
				</ContextProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
