import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function BelowLandingPage() {
    useEffect(() => {
        function addObserver(element, options) {
            // We are creating a new IntersectionObserver instance
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    //  If intersecting is true if element is visible
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target)
                    }
                }, options)
            });
            // Add the observer to the element                         
            observer.observe(element);
        }

        function scrollTrigger(selector, options = {}) {
            let elements = document.querySelectorAll(selector);

            elements = Array.from(elements);

            elements.forEach(el => {
                // attach the IntersectionObserver to the element
                addObserver(el, options);
            })
        }

        scrollTrigger('.bufferContent', {
            rootMargin: '-100px'
        });

        scrollTrigger('.artistList', {
            rootMargin: '-10px'
        });
    }, [])
    return (
        <div>
            <section className="parallax parallaxOne">
                <div className="overlay">
                    <div className="scrollEl">
                        <h1>Art Event Page 2023</h1>
                        <ion-icon id="scroll" name="chevron-down-outline"></ion-icon>
                    </div>
                </div>
            </section>

            <section className="buffer">
                <div className="bufferContent">
                    <img className="imgSmall animateImg" src="https://source.unsplash.com/WhVO1xKiDVw" alt="woman painting" />
                    <div className="bufferTxt">
                        <h2>Join us for our event!</h2>
                        <p>
                            Qui asperiores voluptates et reiciendis magni est iusto dignissimos. Est voluptas sunt ex quaerat sunt aut libero sunt et officiis omnis aut voluptates odit. Est aspernatur architecto in sunt autem eos delectus delectus et consequatur dolorum est nulla consequatur eos esse totam ex culpa dolores.
                        </p>
                        <p>
                            Non rerum dolores ea eligendi vitae quo temporibus alias. Non molestiae blanditiis id suscipit magnam aut pariatur galisum et velit vitae est reiciendis enim aut pariatur dolores.
                        </p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                </div>
            </section>

            <section className="parallax parallaxTwo">
                <div className="artistSection">
                    <h2>From The Blog</h2>

                    <div className="artistList">
                        <div className="artist">
                            <div className="image-preview">
                                <Image height={500} width={500} src={"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"} placeholder="blur" blurDataURL={"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"} />
                            </div>
                            <div className="artistInfo">
                                <h3>Backend Guide for Beginners</h3>
                                <p>
                                    Non rerum dolores ea eligendi vitae quo temporibus alias.
                                </p>
                                <div className=" text-center my-2 rounded-md  w-full flex justify-center">
                                    <Link href={"https://medium.com/the-programming-club-iit-indore/backend-guide-for-beginners-189a2d972182"} target={"_blank"} className="border-2 text-white p-2 rounded-md">Read More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="image-preview">
                                <Image height={500} width={500} src={"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"} placeholder="blur" blurDataURL="https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg" />
                            </div>
                            <div className="artistInfo">
                                <h3>Networking and Web Basics for Cybersecurity</h3>
                                <p>
                                    Non rerum dolores ea eligendi vitae quo temporibus alias.
                                </p>
                                <Link href={"https://medium.com/the-programming-club-iit-indore/backend-guide-for-beginners-189a2d972182"} target={"_blank"} className="border-2 text-white p-2 rounded-md">Read More</Link>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="image-preview">
                                <Image height={500} width={500} src="https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg" placeholder="blur" blurDataURL="https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg" />
                            </div>
                            <div className="artistInfo">
                                <h3>Merge Sort for Linked Lists and Arrays</h3>
                                <p>
                                    Non rerum dolores ea eligendi vitae quo temporibus alias.
                                </p>
                                <Link href={"https://medium.com/the-programming-club-iit-indore/backend-guide-for-beginners-189a2d972182"} target={"_blank"} className="border-2 text-white p-2 rounded-md">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <style jsx>
                {`
                    html body {
                        margin: 0;
                        height: 100%;
                        font-family: "Oxygen", san-serif;
                        color: #1b1b1b;
                      }
                      
                      /* Parallax Container Styles */
                      .parallaxOne {
                          background: url("https://source.unsplash.com/JNTSoyb_bbw") no-repeat;
                      }
                      
                      .parallaxTwo {
                        background: url("https://source.unsplash.com/b5HMwgoU2h4") no-repeat;
                      }
                      
                      .parallax {
                        background-size: cover;
                        background-position: center;
                        min-height: 100vh;
                        height: 100%;
                        width: 100%;
                        background-attachment: fixed;
                        z-index: -1;
                      }
                      .image-preview {
                        flex: 1;
                        min-height: fit-content;
                        width: 100%;
                        border-radius: 20px;
                        margin-bottom: 4px;
                      }
                      @media and screen (max-width: 1080px) {
                        .parallax {
                          background-attachment: scroll;
                        }
                      }
                      
                      .overlay {
                        background: rgba(1, 1, 1, 0.5);
                        height: 100vh;
                        width: 100%;
                      }
                      
                      /* Top Container */
                      .scrollEl {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                      }
                      
                      .scrollEl, h1, .ion-icon {
                        color: #fff;
                        text-align: center;
                        font-size: 72px;
                      }
                      
                      @keyframes bounce {
                        from { transform: translate3d(0, 0, 0);}
                        to { transform: translate3d(0, 50px, 0);}
                      }
                      
                      #scroll {
                        animation: bounce 0.5s cubic-bezier(0.5, 0.05, 1, 0.5);  
                        animation-direction: alternate;  
                        animation-iteration-count: infinite;
                      }
                      
                      /* Middle Section */
                      .buffer {
                        padding: 4rem 1rem; 
                        background: #F5F5F5;
                        height: fit-content;
                      }
                      
                      .bufferContent {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        gap: 2.5rem;
                        max-width: 1200px;
                        margin: auto;
                        transform: translateX(-200px);
                        opacity: 0;
                        transition: all 0.8s ease-in-out;
                      }
                      
                      .imgSmall {
                        height: 600px;
                        width: auto;
                      }
                      
                      .bufferContent.active {
                        transform: translateX(0);
                        opacity: 1;
                      }
                      
                      .btn {
                        text-decoration: none;
                        display: block;
                        margin: 1rem 0;
                        width: fit-content;
                        color: #1b1b1b;
                        border: 2px solid #1b1b1b;
                        padding: 8px 16px;
                        font-size: 16px;
                        margin: 3rem 0;
                        background: linear-gradient(to right, #1b1b1b 50%, #F5F5F5 50%);
                        background-size: 200% 100%;
                        background-position: right bottom;
                        transition: all 0.2s ease-out;
                      }
                      
                      .btn:hover {
                        background-position: left bottom;
                        color: #F5F5F5;
                      }
                      
                      /* artists Section */
                      
                      h2 {
                        font-size: 36px;
                      }
                      
                      .artistSection {
                        padding: 4rem 1rem;
                        max-width: 1200px;
                        text-align: center;
                        margin: auto;
                      }
                      
                      @keyframes rise {
                        from { 
                          transform: translateY(500px); 
                        }
                        
                        to {
                          transform: translateY(0);
                        }
                      }
                      
                      .artistList.active > .artist {
                        animation: rise 0.8s ease-in-out;
                      }
                      
                      .artistList {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        gap: 2rem;
                        justify-content: space-between;
                      }
                      
                      .artist {
                        position: relative;
                        height: fit-content;
                        width: 30%;
                        overflow: hidden;
                        border: 10px solid #f5f5f5;
                        display: flex;
                        align-items: center;
                      }
                      
                      .artist img {
                        width: 100%;
                        height: 100%;
                      }
                      
                      .artistInfo {
                        position: absolute;
                        left: 0;
                        bottom: 100%;
                        height: 0;
                        width: 100%;
                        overflow: hidden;
                        backdrop-filter: blur(8px) brightness(80%);
                        transition: all .3s ease-in-out;
                        z-index: 100;
                        background: rgba(27, 27, 27, .5);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #f5f5f5;
                      }
                      
                      .artistInfo a {
                        color: #f5f5f5 !important;
                      }
                      
                      .artist:hover .artistInfo {
                        bottom: 0;
                        height: 100%;
                      }
                `}
            </style>
        </div>
    )
}
