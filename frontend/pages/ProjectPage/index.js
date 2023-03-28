import React from 'react'
import { NextSeo } from 'next-seo'
import Carousel from '@/components/Carousel_3D'
import { QueryClient,dehydrate } from '@tanstack/react-query'
import axios from 'axios'
export default function index() {
  const AllProjects = QueryClient(['AllProjects'],fetchprojects)
  return (
    <div className='bg-[url()] bg-cover bg-center bg-no-repeat'>
      <NextSeo
      title="P;Club - Projects"
      description="Projects Page - Programing Club Of IIT INDORE(IITI)"
    />
      
    </div>
  )
}


const fetchprojects = async () =>{
  return axios.get('https://progclub-iiti-backend.onrender.com/api/v1/projects/').then((response)=>{
    return response.data
  })
}

export const getServerSideProps = async () =>{
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['AllProjects'],fetchprojects)
  return {
    props:{
      dehydratedState:dehydrate(queryClient)
    }
  }
}