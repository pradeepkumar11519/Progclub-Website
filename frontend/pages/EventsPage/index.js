import React from 'react'
import { NextSeo } from 'next-seo'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import Card from '@/components/Card'
import CarouselSplide from '@/components/CarouselSplide'
export default function EventsPage() {
  const AllEvents = useQuery(['AllEvents'],()=>{
    return fetchAllEvents()
  })
 
  if((AllEvents.isFetching || AllEvents.isLoading ) && !AllEvents.isError && AllEvents?.data?.length!==0){
    return <h1 className='text-center h-screen py-32 text-3xl font-bold'>Loading...</h1>
  }
  if(!AllEvents.isFetching && !AllEvents.isLoading  && AllEvents.isError){
    return <h1 className='text-center h-screen py-32 text-3xl font-bold'>Some Error Occured</h1>
  }
  return (
    <div className=''>
      <NextSeo
      title="P;Club - Events"
      description="Events Page - Programing Club Of IIT INDORE(IITI)"
    />
    <div>
      <h1 className='text-5xl font-bold text-center text-white pt-32'>Upcoming Events</h1>
    </div>
    <CarouselSplide AllEvents={AllEvents}/>
    <div className=''>
      <h1 className='text-white text-5xl text-center font-bold mb-24'>Ongoing And Past Events</h1>
    <Card AllEvents={AllEvents} />
    </div>
    </div>
  )
}

const fetchAllEvents = async () =>{
  return axios.get('https://progclub-iiti-backend.onrender.com/api/v1/events/').then((response)=>{
    return response.data
  })
}

export const getServerSideProps = async () =>{
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['AllEvents'],()=>{
    return fetchAllEvents()
  })
  return {
    props:{
      dehydratedState:dehydrate(queryClient)
    }
  }

}