import React from 'react'
import { NextSeo } from 'next-seo'
import Carousel_3D from '@/components/Carousel_3D'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'
import axios from 'axios'
import Card from '@/components/Card'
export default function EventsPage() {
  const AllEvents = useQuery(['AllEvents'],()=>{
    return fetchAllEvents()
  })
  return (
    <div>
      <NextSeo
      title="P;Club - Events"
      description="Events Page - Programing Club Of IIT INDORE(IITI)"
    />
    <Carousel_3D AllEvents={AllEvents} />
    {/* <Card AllEvents={AllEvents} /> */}
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