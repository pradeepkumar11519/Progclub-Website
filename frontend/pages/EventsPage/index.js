import React from 'react'
import { NextSeo } from 'next-seo'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import Card from '@/components/Card'
import CarouselSplide from '@/components/CarouselSplide'
import BoxCarousel from '@/components/BoxCarousel'

export default function EventsPage() {
  const AllEvents = useQuery(['AllEvents'], () => {
    return fetchAllEvents()
  },{
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })

  
  return (
    <div className='EventPage'>
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
        <>
          <div>
            <h1 className='text-5xl font-bold text-center text-white pt-32'>Upcoming Events</h1>
          </div>
          <BoxCarousel AllEvents={AllEvents}/>
          {/* <CarouselSplide AllEvents={AllEvents} /> */}
          <div className=''>
            <h1 className='text-white text-5xl text-center font-bold mb-24'>Ongoing And Past Events</h1>
            <Card AllEvents={AllEvents} />
          </div>
        </>
      )}


      <style jsx>
        {`
        .EventPage{
          background: radial-gradient(65% 100% at 50% 0%, #00FF94 0%, rgba(0, 255, 148, 0.25) 100%), linear-gradient(230deg, #000000 25%, #170059 100%), linear-gradient(215deg, #FFEBB9 10%, #19004E 80%), radial-gradient(100% 245% at 100% 100%, #FFFFFF 0%, #000353 100%), linear-gradient(125deg, #1400FF 0%, #3A0000 100%), linear-gradient(225deg, #00F0FF 30%, #000B6F 45%, #00EBFC 45%, #001676 65%, #00E1F6 65%, #001676 85%, #00ECFD 85%, #001676 100%), linear-gradient(135deg, #00F0FF 0%, #000B6F 15%, #00EBFC 15%, #001676 35%, #00E1F6 35%, #001676 55%, #00ECFD 55%, #001676 100%);
background-blend-mode: soft-light, screen, overlay, overlay, difference, overlay, normal;
        }
      `}
      </style>

    </div>
  )
}

const fetchAllEvents = async () => {
  return axios.get('https://progclub-iiti-backend.onrender.com/api/v1/events/').then((response) => {
    return response.data
  })
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['AllEvents'], () => {
    return fetchAllEvents()
  },{
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }

}


