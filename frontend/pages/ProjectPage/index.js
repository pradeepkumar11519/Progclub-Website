import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import axios from "axios";
import * as THREE from 'three'
import ProjectCard from "@/components/ProjectCard";
import Loader from "@/components/Loader";

export default function ProductPage() {
  const AllProjects = useQuery(["AllProjects"], fetchprojects);
  if ((AllProjects.isLoading && !AllProjects.isError)) {
    return (
      <h1 className="py-20 text-white text-3xl text-center h-screen flex justify-center items-center">
        <Loader />
      </h1>
    );
  }

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

        {(AllProjects.isLoading && !AllProjects.isError) ||
          (AllProjects.isFetching && AllProjects?.data?.length !== 0 && (
            <h1 className="text-white  flex justify-center items-center text-center text-3xl my-10">
              <Loader />
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
            <>
              <div className="">
                <h1 className='text-3xl md:text-5xl font-bold text-center text-white py-32 lg:py-32 '>OUR PROJECTS</h1>
              </div>

              <div className="grid lg:grid-cols-2 md:grid grid-cols-1">
                {AllProjects?.data?.map((ele, index) => {
                  return (
                    <>
                      <ProjectCard ele={ele} />
                    </>
                  )
                })}
              </div>
            </>



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
