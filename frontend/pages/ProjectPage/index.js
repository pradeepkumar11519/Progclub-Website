import React from 'react'
import { NextSeo } from 'next-seo'

import { QueryClient,dehydrate, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProjectCard from '@/components/ProjectCard'
export default function ProductPage() {
  const AllProjects = useQuery(['AllProjects'],fetchprojects)
  return (
    <div className=' h-full  w-full !py-32'>
      <NextSeo
      title="P;Club - Projects"
      description="Projects Page - Programing Club Of IIT INDORE(IITI)"
    />
    <h1 className='text-center text-white text-4xl font-bold pt-20'>Projects Made By Pclub Of IITI</h1>
    <div className='!grid md:!grid-cols-2  grid-cols-1 xl:!grid-cols-3 md:w-full h-full !my-10 '>
      
      {AllProjects?.data?.map((ele,index)=>{
        return (
          <div className='sm:mx-2' key={ele.id}>
          <ProjectCard project={ele} />
          </div>
        )
        
      })}
      </div>
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