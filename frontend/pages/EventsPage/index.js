import React from 'react'
import { NextSeo } from 'next-seo'
import Carousel from '@/components/Carousel'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { dehydrate } from '@tanstack/react-query'
import axios from 'axios'
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
    <Carousel AllEvents={AllEvents} />
     
    </div>
  )
}

const fetchAllEvents = async () =>{
  return axios.get('http://127.0.0.1:8000/api/v1/events/').then((response)=>{
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