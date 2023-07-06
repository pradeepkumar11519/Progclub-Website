import React from 'react'
import { NextSeo } from 'next-seo'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import Card from '@/components/Card'

import * as THREE from 'three'
import BoxCarousel from '@/components/BoxCarousel'
import { useEffect } from 'react'

export default function EventsPage() {
  const AllEvents = useQuery(['AllEvents'], () => {
    return fetchAllEvents()
  }, {
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
  let UpcomingEvents = AllEvents.data?.filter((ele)=>ele.type=="aUpcoming")
  let OngoingEvents = AllEvents.data?.filter((ele)=>ele.type=="bOngoing")
  let PastEvents = AllEvents.data?.filter((ele)=>ele.type=="cPast")
  return (
    <div id="EventsPage" className='EventPage h-ful'>
      
      <NextSeo
        title="P;Club - Events"
        description="Events Page - Programing Club Of IIT INDORE(IITI)"
      />
      
      {((AllEvents.isFetching || AllEvents.isLoading) && !AllEvents.isError && AllEvents?.data?.length !== 0) && (
        <h1 className='text-center h-screen py-32 text-3xl font-bold text-white'>Loading...</h1>
      )}
      {(!AllEvents.isFetching && !AllEvents.isLoading && AllEvents.isError) && (
        <h1 className='text-center h-screen py-32 text-3xl font-bold text-white'>Some Error Occured</h1>
      )}
      {(!(AllEvents.isFetching || AllEvents.isLoading) && !AllEvents.isError && !AllEvents?.data?.length !== 0) && (
        <div  className='z-[100000]'>
          <div>
            <h1 className='text-3xl md:text-5xl font-bold text-center text-black pt-32 '>Upcoming Events</h1>
          </div>
          {UpcomingEvents?.length === 0 ? (
              <h1 className='text-center  py-32 text-3xl font-bold text-white'>No Upcoming Events Currently</h1>
            ):(
              <BoxCarousel Events={UpcomingEvents} />
            )}
          
          
          <div className=' h-full w-full'>
            <h1 className='text-white text-3xl md:text-5xl text-center font-bold py-10 md:py-20 mx-5 '>Ongoing Events</h1>
            {OngoingEvents?.length === 0 ? (
              <h1 className='text-center  py-32 text-3xl font-bold text-white'>No Ongoing Events Currently</h1>
            ):(
              <Card Events={OngoingEvents} />
            )}
            
          </div>
          <div className=' h-full w-full'>
            <h1 className='text-white text-3xl md:text-5xl text-center font-bold py-10 md:py-20 mx-5'>Past Events</h1>
            {PastEvents?.length === 0 ? (
              <h1 className='text-center  py-32 text-3xl font-bold text-white'>No Past Events Currently</h1>
            ):(
              <Card Events={PastEvents} />
            )}
            
          </div>
        </div>
      )}


      <style jsx>
        {`
        
        #EventsPage{
          background: radial-gradient(100% 225% at 100% 0%, #FF0000 0%, #000000 100%), linear-gradient(236deg, #00C2FF 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 0%, #CDFFEB 36%, #009F9D 36%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);
background-blend-mode: overlay, hard-light, normal;
        }

      `}
      </style>

    </div>
  )
}

const fetchAllEvents = async () => {
  return axios.get('https://progclub-website.vercel.app/api/v1/events/').then((response) => {
    return response.data
  })
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['AllEvents'], () => {
    return fetchAllEvents()
  }, {
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }

}


