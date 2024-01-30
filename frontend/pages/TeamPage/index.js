import React from "react";
import { NextSeo } from "next-seo";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import axios from "axios";
import HeadCard from "@/components/HeadCard";
import TeamCard from "@/components/TeamCard";
import Loader from "@/components/Loader";
export default function TeamPage() {
    const AllTeamMembers = useQuery(
        ["AllTeamMembers"],
        () => {
            return fetchAllTeamMembers();
        },
        {
            refetchOnWindowFocus: false,
        },
    );
    if (AllTeamMembers.isLoading && !AllTeamMembers.isError) {
        return (
            <h1 className="py-20 text-white text-3xl text-center h-screen flex justify-center items-center">
                <Loader />
            </h1>
        );
    }
    let CPHead = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "aCompetitive Programming" &&
            ele.position == "aPresident",
    );
    let CPDiv = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "aCompetitive Programming" &&
            ele.position != "aPresident",
    );

    let SDHead = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "bSoftware Development" &&
            ele.position == "aPresident",
    );
    let SDDiv = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "bSoftware Development" &&
            ele.position != "aPresident",
    );

    let CCHead = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "cCyber Security" && ele.position == "aPresident",
    );
    let CCDiv = AllTeamMembers?.data?.filter(
        (ele) =>
            ele.division == "cCyber Security" && ele.position != "aPresident",
    );
    return (
        <div id="TeamsPage" className="!py-20 md:py-32 relative">
            <NextSeo
                title="P;Club - Our Team"
                description="Teams Page - Programing Club Of IIT INDORE(IITI)"
            />
            <canvas
                id="canvas"
                className="!z-[-100] !absolute !top-0 !h-full"
            ></canvas>

            <div
                className={`${
                    AllTeamMembers.isFetching ||
                    AllTeamMembers.isLoading ||
                    AllTeamMembers.isError ||
                    AllTeamMembers?.data?.length <= 3
                        ? "h-screen"
                        : "h-full"
                } `}
            >
                <div className=""></div>
                {(AllTeamMembers.isLoading && !AllTeamMembers.isError) ||
                    (AllTeamMembers.isFetching &&
                        AllTeamMembers?.data?.length !== 0 && (
                            <h1 className="py-20 text-white text-3xl text-center h-screen flex justify-center items-center">
                                <Loader />
                            </h1>
                        ))}
                {AllTeamMembers.isError &&
                    !AllTeamMembers.isLoading &&
                    !AllTeamMembers.isFetching &&
                    AllTeamMembers.data.length !== 0 && (
                        <h1 className="text-white text-center text-3xl my-10">
                            Some Error Occured
                        </h1>
                    )}
                {!AllTeamMembers.isError &&
                    !AllTeamMembers.isLoading &&
                    !AllTeamMembers.isFetching &&
                    AllTeamMembers.data.length === 0 && (
                        <h1 className="text-white text-center text-3xl my-10">
                            There Are No Team Members Registered Currently
                        </h1>
                    )}
                {!AllTeamMembers.isError &&
                    !AllTeamMembers.isLoading &&
                    !AllTeamMembers.isFetching &&
                    AllTeamMembers.data.length !== 0 && (
                        <div>
                            <h1 className="rounded-md mx-auto text-center font-bold text-xl lg:text-3xl mb-10 mt-10 text-white w-fit p-4 uppercase">
                                {"Presidents Of The Programming Club"}
                            </h1>
                            <div className="grid lg:grid-cols-3">
                                <div className="my-8 lg:my-auto">
                                    <HeadCard team={CPHead[0]} />
                                </div>
                                <div className="my-8 lg:my-auto">
                                    <HeadCard team={SDHead[0]} />
                                </div>
                                <div className="my-8 lg:my-auto">
                                    <HeadCard team={CCHead[0]} />
                                </div>
                            </div>
                            <h1 className="rounded-md mx-auto text-center font-bold text-xl lg:text-3xl   mt-10 text-white w-fit p-4 uppercase">
                                @Competitive Programming Division
                            </h1>
                            <div className=" z-[-10000] grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 px-4 sm:px-20  gap-10 mb-10 mt-10">
                                {CPDiv.map((team, index) => {
                                    return (
                                        <div key={team.id}>
                                            <div className="hidden md:block">
                                                <TeamCard team={team} />
                                            </div>
                                            <div className="md:hidden">
                                                <HeadCard team={team} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <h1 className="rounded-md mx-auto text-center font-bold text-xl lg:text-3xl    text-white w-fit p-4 uppercase">
                                @Software Development Division
                            </h1>
                            <div className=" z-[-10000] grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 px-4 sm:px-20  gap-10 mb-10 mt-10">
                                {SDDiv.map((team, index) => {
                                    return (
                                        <div key={team.id}>
                                            <div className="hidden md:block">
                                                <TeamCard team={team} />
                                            </div>
                                            <div className="md:hidden">
                                                <HeadCard team={team} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <h1 className="rounded-md mx-auto text-center font-bold text-xl lg:text-3xl  text-white w-fit p-4 uppercase">
                                @Cyber Security Division
                            </h1>
                            <div className=" z-[-10000]  grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 px-4 sm:px-20  gap-10 mb-10 mt-10">
                                {CCDiv.map((team, index) => {
                                    return (
                                        <div key={team.id}>
                                            <div className="hidden md:block">
                                                <TeamCard team={team} />
                                            </div>
                                            <div className="md:hidden">
                                                <HeadCard team={team} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
            </div>

            <style jsx>
                {`
                    html,
                    body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        font-family: "Montserrat", sans-serif;
                        text-shadow: 1px 1px 1px #000;
                    }

                    canvas {
                        position: absolute;
                        z-index: -1;
                        width: 100%;
                        height: 100%;
                    }

                    header {
                        position: absolute;
                        width: 100%;
                        text-align: center;
                    }

                    header h1 {
                        font-size: 2rem;
                        margin: 0.5em 0 0.2em;
                    }

                    a {
                        font-size: 0.9rem;
                        color: #bbb;
                        text-decoration: none;
                        border-bottom: 0.15rem solid transparent;
                        transition: all 0.4s;
                    }
                    a:hover {
                        color: #fff;
                        border-bottom-color: rgba(255, 255, 255, 0.7);
                    }
                `}
            </style>
        </div>
    );
}

export const fetchAllTeamMembers = async () => {
    return axios
        .get(`https://progclub-iiti-backend.onrender.com/api/v1/team/`)
        .then((response) => {
            return response.data;
        });
};

export const getServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["AllTeamMembers"],
        () => {
            return fetchAllTeamMembers();
        },
        {
            refetchOnWindowFocus: false,
        },
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
