import React from 'react'
import { NextSeo } from 'next-seo'
import { QueryClient,dehydrate, useQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function TeamPage() {
  const AllTeamMembers = useQuery(["AllTeamMembers"],()=>{
    return fetchAllTeamMembers()
  })
  console.log(AllTeamMembers);
  return (
    <div>
      <NextSeo
      title="P;Club - Our Team"
      description="Teams Page - Programing Club Of IIT INDORE(IITI)"
    />
      {AllTeamMembers?.data?.map((team)=>{
        return (
          <div className='py-20 text-white' key={team.id}>
            <div>
              Name:{team.name}
              Email:{team.email}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const fetchAllTeamMembers = async () =>{
  return axios.get('http://127.0.0.1:8000/api/v1/team/').then((response)=>{
    return response.data
  })
}

export const getServerSideProps = async () =>{
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["AllTeamMembers"],()=>{
    return fetchAllTeamMembers()
  })
  return {
    props:{
      dehydratedState:dehydrate(queryClient)
    }
  }
}