import Image from "next/image";
import React from "react";
import Modal from "react-modal";

export default function Card({ Events }) {
    const [modalisOpen, setIsOpen] = React.useState(false);
    const [event, setEvent] = React.useState({});
    const customStyles = {
        overlay: {
            position: "fixed",
            zIndex: 1020,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "scroll",
            background: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px",
            padding: "0px",
        },
        content: {
            border: "10px",
            top: "50%",
            left: "51%",
            height: "100%",
            transform: "translate(-50%, -30%)",
            background: "transparent",
            border: "0px",
            margin: "0px",
        },
    };
    return (
        <div>
            <Modal
                isOpen={modalisOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
            >
                <div className="bg-white px-10 py-10 ">
                    <Image
                        src={event.image}
                        width={300}
                        height={300}
                        placeholder="blur"
                        className="w-full h-full "
                        blurDataURL={event.image}
                    />
                    <div className="text-black font-bold text-center text-3xl my-10">
                        {event.title}
                    </div>
                    <div className="text-black my-10 text-center">
                        <span className="card_title">{event.title}</span>
                    </div>
                    <div className="text-black my-10 text-center ">
                        {event.description}
                    </div>
                </div>
            </Modal>
            <div className="md:!grid-cols-2 lg:!grid-cols-3 px-5 py-5 !w-full !grid !grid-cols-1   mx-auto">
                {Events?.map((ele) => {
                    return (
                        <div key={ele.id}>
                            {ele.type !== "Upcoming" && (
                                <div
                                    onClick={() => {
                                        setEvent(ele);
                                        setIsOpen(true);
                                    }}
                                    className="mx-auto flex justify-center py-10 md:my-auto"
                                >
                                    <article className="card !w-[300px]">
                                        <div className="temporary_text">
                                            <div className="h-full w-full">
                                                <Image
                                                    alt="Ongoing And Past Events"
                                                    src={ele.image}
                                                    className="h-full w-full"
                                                    blurDataURL={ele.image}
                                                    placeholder="blur"
                                                    width="200"
                                                    height="200"
                                                />
                                            </div>
                                        </div>
                                        <div className="card_content">
                                            <span className="card_title">
                                                {ele.title}
                                            </span>
                                            <span className="card_subtitle">
                                                {ele.subtitle}
                                            </span>
                                            <span className="card_subtitle">
                                                {ele.type}
                                            </span>
                                            <p className="card_description">
                                                {ele.description}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <style jsx>
                {`
                    .card {
                        position: relative;

                        color: #2e2d31;
                        background: #131313;
                        overflow: hidden;
                    }

                    .temporary_text {
                        font-weight: bold;
                        font-size: 24px;
                        padding: 6px 12px;
                        color: #f8f8f8;
                    }

                    .card_title {
                        font-weight: bold;
                    }

                    .card_status {
                        font-weight: medium;
                        font-size: large;
                        transition: ease-in 100ms;
                    }
                    .card_content {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        /* edit the width to fit card */
                        width: 100%;
                        padding: 20px;
                        padding-top: 27px;
                        background: #f2f2f2;
                        border-top-left-radius: 20px;
                        /* edit here to change the height of the content box */
                        transform: translateY(80px);
                        transition: transform 0.25s;
                    }

                    .card_content::before {
                        content: "";
                        position: absolute;
                        top: -47px;

                        right: -45px;
                        width: 100px;
                        height: 100px;
                        transform: rotate(-175deg);
                        border-radius: 50%;
                        box-shadow: inset 48px 48px #f2f2f2;
                    }

                    .card_title {
                        font-size: 24px;
                        color: #131313;
                        line-height: 10px;
                    }

                    .card_subtitle {
                        display: block;
                        font-size: 18px;
                        margin-bottom: 10px;
                    }

                    .card_description {
                        font-size: 15px;
                        opacity: 0;
                        transition: opacity 0.5s;
                    }

                    .card:hover .card_content {
                        transform: translateY(0);
                        padding: 24px;
                        .card_status {
                            color: #25257c;
                            font-weight: bold;
                        }
                    }

                    .card:hover .card_description {
                        opacity: 1;
                        transition-delay: 0.25s;
                        padding: 20px;
                    }
                    .card {
                        width: 300px;
                        height: 280px;

                        background: #212121;
                        box-shadow:
                            15px 15px 30px rgb(25, 25, 25),
                            -15px -15px 30px rgb(60, 60, 60);
                    }
                `}
            </style>
        </div>
    );
}
