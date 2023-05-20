import Image from 'next/image'
import React from 'react'

export default function Card({ AllEvents }) {
  
    return (
        <div>
            <div className="md:!grid-cols-2 lg:!grid-cols-3 px-5 py-5 !w-full !grid !grid-cols-1   mx-auto">
                {AllEvents?.data?.map((ele) => {
                    return (
                        <div key={ele.id}>
                            {ele.type !== "Upcoming" && (
                                <div className='mx-auto flex justify-center py-10 md:my-auto'>
                                    <article className="card !w-[300px]">
                                        <div className="temporary_text">
                                          <div className="h-full w-full">
                                            <Image alt="Ongoing And Past Events" src={ele.image} className="h-full w-full" blurDataURL={ele.image} placeholder="blur" width="200" height="200" /></div>
                                        </div>
                                        <div className="card_content">
                                            <span className="card_title">{ele.title}</span>
                                            <span className="card_subtitle">{ele.subtitle}</span>
                                            <span className="card_subtitle">{ele.type}</span>
                                            <p className="card_description">{ele.description}</p>
                                            
                                        </div>
                                        
                                    </article>
                                </div>
                            )}

                        </div>
                    )
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
                  
                  .card_content {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                      /* edit the width to fit card */
                    width: 100%;
                    padding: 20px;
                    background: #f2f2f2;
                    border-top-left-radius: 20px;
                      /* edit here to change the height of the content box */
                    transform: translateY(80px);
                    transition: transform .25s;
                  }
                  
                  .card_content::before {
                    content: '';
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
                    color: #131313;
                    line-height: 15px;
                  }
                  
                  .card_subtitle {
                    display: block;
                    font-size: 12px;
                    margin-bottom: 10px;
                  }
                  
                  .card_description {
                    font-size: 14px;
                    opacity: 0;
                    transition: opacity .5s;
                  }
                  
                  .card:hover .card_content {
                    transform: translateY(0);
                    padding:20px;
                  }
                  
                  .card:hover .card_description {
                    opacity: 1;
                    transition-delay: .25s;
                    padding:20px;
                  }
                  .card {
                    width: 250px;
                    height: 250px;
                    
                    
                    background: #212121;
                    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                                -15px -15px 30px rgb(60, 60, 60);
                   }
                   
                   
                `}
            </style>
        </div>
    )
}
