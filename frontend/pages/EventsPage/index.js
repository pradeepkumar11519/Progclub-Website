import React from "react";
import { NextSeo } from "next-seo";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import axios from "axios";
import Card from "@/components/Card";

import * as THREE from "three";
import BoxCarousel from "@/components/BoxCarousel";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export default function EventsPage() {
    const AllEvents = useQuery(
        ["AllEvents"],
        () => {
            return fetchAllEvents();
        },
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    );
    if (AllEvents.isLoading && !AllProjects.isError) {
        return (
            <h1 className="py-20 text-white text-3xl text-center h-screen flex justify-center items-center">
                <Loader />
            </h1>
        );
    }
    let UpcomingEvents = AllEvents.data?.filter(
        (ele) => ele.type == "aUpcoming",
    );
    let OngoingEvents = AllEvents.data?.filter((ele) => ele.type == "bOngoing");
    let PastEvents = AllEvents.data?.filter((ele) => ele.type == "cPast");
    return (
        <div id="EventsPage" className="EventPage h-full bg-cover bg-no-repeat">
            <NextSeo
                title="P;Club - Events"
                description="Events Page - Programing Club Of IIT INDORE(IITI)"
            />

            {(AllEvents.isLoading && !AllEvents.isError) ||
                (AllEvents.isFetching && AllEvents?.data?.length !== 0 && (
                    <h1 className="py-20 text-white text-3xl text-center h-screen flex justify-center items-center">
                        <Loader />
                    </h1>
                ))}
            {!AllEvents.isFetching &&
                !AllEvents.isLoading &&
                AllEvents.isError && (
                    <h1 className="text-center h-screen py-32 text-3xl font-bold text-white">
                        SOME ERROR OCCURED
                    </h1>
                )}
            {!(AllEvents.isFetching || AllEvents.isLoading) &&
                !AllEvents.isError &&
                !AllEvents?.data?.length !== 0 && (
                    <div className="z-[100000]">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-center text-white pt-32 lg:pt-32 ">
                                UPCOMING EVENTS
                            </h1>
                        </div>
                        {UpcomingEvents?.length === 0 ? (
                            <h1 className="text-center  py-32 text-3xl font-bold text-white">
                                NO UPCOMING EVENTS CURRENTLY
                            </h1>
                        ) : (
                            <BoxCarousel Events={UpcomingEvents} />
                        )}

                        <div className=" h-full w-full">
                            {OngoingEvents?.length === 0 ? null : (
                                <>
                                    <h1 className="text-white text-3xl md:text-5xl text-center font-bold py-10 md:py-20 mx-5 ">
                                        ONGOING EVENTS
                                    </h1>
                                    <Card Events={OngoingEvents} />
                                </>
                            )}
                        </div>
                        <div className=" h-full w-full">
                            <h1 className="text-white text-3xl md:text-5xl text-center font-bold py-10 md:py-20 mx-5">
                                PAST EVENTS
                            </h1>
                            {PastEvents?.length === 0 ? (
                                <h1 className="text-center  py-32 text-3xl font-bold text-white">
                                    NO PAST EVENTS CURRENTLY
                                </h1>
                            ) : (
                                <Card Events={PastEvents} />
                            )}
                        </div>
                    </div>
                )}

            <style jsx>{``}</style>
        </div>
    );
}

const fetchAllEvents = async () => {
    return axios
        .get(`https://progclub-iiti-backend.onrender.com/api/v1/events/`)
        .then((response) => {
            return response.data;
        });
};

export const getServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        ["AllEvents"],
        () => {
            return fetchAllEvents();
        },
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
