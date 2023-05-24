import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as THREE from 'three'
import ProjectCard from "@/components/ProjectCard";
export default function ProductPage() {
  const AllProjects = useQuery(["AllProjects"], fetchprojects);

  
  return (
    <div id="ProjectsPage" className={`${(AllProjects.isLoading || AllProjects.isFetching || AllProjects.isError)?"h-screen":"h-full"} w-full  !py-32`}>
      <NextSeo
        title="P;Club - Projects"
        description="Projects Page - Programing Club Of IIT INDORE(IITI)"
      />

      <h1 className="text-center text-white text-4xl font-bold pt-20">
        Projects Made By Pclub Of IITI
      </h1>
      <div className="!grid md:!grid-cols-2  grid-cols-1 xl:!grid-cols-3 md:w-full h-full  ">
        {AllProjects?.data?.map((ele, index) => {
          return (
            <div className="sm:mx-2" key={ele.id}>
              <ProjectCard project={ele} />
            </div>
          );
        })}
      </div>

      <style jsx>
        {`
					#ProjectsPage{
            background: linear-gradient(123deg, #FFFFFF 0%, #00B2FF 100%), linear-gradient(236deg, #BAFF99 0%, #005E64 100%), linear-gradient(180deg, #FFFFFF 0%, #002A5A 100%), linear-gradient(225deg, #0094FF 20%, #BFF4ED 45%, #280F34 45%, #280F34 70%, #FF004E 70%, #E41655 85%, #B30753 85%, #B30753 100%), linear-gradient(135deg, #0E0220 15%, #0E0220 35%, #E40475 35%, #E40475 60%, #48E0E4 60%, #48E0E4 68%, #D7FBF6 68%, #D7FBF6 100%);
background-blend-mode: overlay, overlay, overlay, darken, normal;
          }
				`}
      </style>
    </div>
  );
}

const fetchprojects = async () => {
  return axios
    .get("https://progclub-website.vercel.app/api/v1/projects/")
    .then((response) => {
      return response.data;
    });
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["AllProjects"], fetchprojects);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
