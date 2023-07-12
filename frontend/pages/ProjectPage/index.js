import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as THREE from 'three'
import ProjectCard from "@/components/ProjectCard";

export default function ProductPage() {
  const AllProjects = useQuery(["AllProjects"], fetchprojects);


  return (
    <div id="ProjectsPage" className={`${AllProjects.isFetching ||
      AllProjects.isLoading ||
      AllProjects.isError ||
      AllProjects?.data?.length === 0
      ? "h-screen"
      : "h-full"
      } pb-20`}>
      <NextSeo
        title="P;Club - Projects"
        description="Projects Page - Programing Club Of IIT INDORE(IITI)"
      />

     
        <div
          className={`${AllProjects.isFetching ||
            AllProjects.isLoading ||
            AllProjects.isError ||
            AllProjects?.data?.length === 0
            ? "h-screen"
            : "h-full"
            } `}
        >
          <div className="">
          <h1 className='text-3xl md:text-5xl font-bold text-center text-white py-32 lg:py-32 '>OUR PROJECTS</h1>
          </div>
          {(AllProjects.isLoading && !AllProjects.isError) ||
            (AllProjects.isFetching && (
              <h1 className="text-white text-center text-3xl my-10">
                Loading...
              </h1>
            ))}
          {AllProjects.isError &&
            !AllProjects.isLoading &&
            !AllProjects.isFetching &&
            AllProjects.data.length !== 0 && (
              <h1 className="text-white text-center text-3xl my-10">
                Some Error Occured
              </h1>
            )}
          {!AllProjects.isError &&
            !AllProjects.isLoading &&
            !AllProjects.isFetching &&
            AllProjects.data.length === 0 && (
              <h1 className="text-white text-center text-3xl my-10">
                There Are No Projects Currently
              </h1>
            )}
          {!AllProjects.isError &&
            !AllProjects.isLoading &&
            !AllProjects.isFetching &&
            AllProjects.data.length !== 0 && (
              <div className="grid lg:grid-cols-2 md:grid grid-cols-1">
                {AllProjects?.data?.map((ele, index) => {
                  return (
                    <>
                    <ProjectCard ele={ele} />
                    </>
                  )
                })}
              </div>




            )}
        </div>

        <style jsx>
          {`
					
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
