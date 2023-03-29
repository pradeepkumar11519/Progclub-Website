import React from 'react'
import { NextSeo } from 'next-seo'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProjectCard from '@/components/ProjectCard'
import TeamCard from '@/components/TeamCard'
import LoadingBar from 'react-top-loading-bar'
export default function TeamPage() {
	const AllTeamMembers = useQuery(["AllTeamMembers"], () => {
		return fetchAllTeamMembers()
	},{
		refetchOnWindowFocus:false,

	})
	if (AllTeamMembers.isLoading && !AllTeamMembers.isError) {
		return <h1 className='my-20 text-white text-3xl text-center'>Loading...</h1>
	}
	
	return (
		<div >
			<NextSeo
				title="P;Club - Our Team"
				description="Teams Page - Programing Club Of IIT INDORE(IITI)"
			/>

			<div className={`${(AllTeamMembers.isFetching || AllTeamMembers.isLoading || AllTeamMembers.isError || AllTeamMembers?.data?.length <= 3) ? "h-screen" : "h-full"} `}>
				<h1 className='py-32 text-white text-4xl font-bold text-center'>Our Team</h1>
				{(AllTeamMembers.isLoading && !AllTeamMembers.isError) || AllTeamMembers.isFetching && (
					<h1 className='text-white text-center text-3xl my-10'>Loading...</h1>
				)}
				{AllTeamMembers.isError && !AllTeamMembers.isLoading && !AllTeamMembers.isFetching && AllTeamMembers.data.length !== 0 && (
					<h1 className='text-white text-center text-3xl my-10'>Some Error Occured</h1>
				)}
				{!AllTeamMembers.isError && !AllTeamMembers.isLoading && !AllTeamMembers.isFetching && AllTeamMembers.data.length === 0 && (
					<h1 className='text-white text-center text-3xl my-10'>There Are No Team Members Registered Currently</h1>
				)}
				{!AllTeamMembers.isError && !AllTeamMembers.isLoading && !AllTeamMembers.isFetching && AllTeamMembers.data.length !== 0 && (
					<div className=' z-[-10000] grid xl:grid-cols-3 lg;grid-cols-3 sm:grid-cols-2 px-4 sm:px-20  '>


						{AllTeamMembers?.data?.map((team, index) => {
							return (
								<div key={team.id}>
									<TeamCard team={team} />
								</div>
							)
						})}

					</div>
				)}

			</div>

		</div>
	)
}

export const fetchAllTeamMembers = async () => {
	return axios.get('https://progclub-iiti-backend.onrender.com/api/v1/team/').then((response) => {
		return response.data
	})
}

export const getServerSideProps = async () => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery(["AllTeamMembers"], () => {
		return fetchAllTeamMembers()
	},{
		refetchOnWindowFocus:false,
	})
	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	}
}