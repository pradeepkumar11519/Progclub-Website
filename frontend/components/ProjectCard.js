import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function ProjectCard({ project }) {
    return (
        <div id="ProjectPage" className='justify-center flex !mt-10 md:mx-20 '>

            <div className="card !mx-10 md:!mx-20 max-w-[500px] md:w-full">
                <div className="infos !block sm:!flex !mx-auto !w-full sm:!h-[130px] ">
                    <div className=' sm:w-fit flex justify-center items-center !h-full  my-auto'>
                        <div className="image !bg-white flex justify-center mx-auto my-auto p-2   h-full">
                          <div className='!max-w-20 !max-h-20 !mx-auto'>
                            <Image alt="Projects" blurDataURL={project.image}  src={project.image} width={'80'} height={"7"} placeholder="blur" /></div>
                        </div>
                    </div>
                    <div className="info !mt-3 sm:!mt-0 !w-full !text-center ">
                        <div>
                            <p className="name !text-sm md:!text-lg">
                                {project.title}
                            </p>
                            <p className="function !text-xs sm:!text-xs !mt-1">
                                {project.subtitle}
                            </p>
                        </div>
                        <div className="stats mt-5 sm:mt-2 ">
                            <p className="flex flex-col w-full text-center font-bold !text-[10px] !m-0 sm:!text-xs !p-0">
                                {project.category}
                            </p>
                        </div>
                        <div className="stats mt-5 sm:mt-2">
                            <p className="flex flex-col w-full !text-[10px] !m-0 !p-0 sm:!text-xs">
                                <Link href={project.github} target={"_blank"} className="text-center flex justify-center  font-bold">Github Repo</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="request !mt-10 sm:!mt-0 !text-white md:!h-[100px] xl:!h-[150px] overflow-y-scroll ">
                    {project.description}
                </div>
            </div>

            <style jsx>
                {`
        .card {
            
            border-radius: 1rem;
            background-color: rgba(31, 41, 55, 1);
            padding: 1rem;
          }
          
          .infos {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            grid-gap: 1rem;
            gap: 1rem;
          }
          
          .image {
            height: 7rem;
            width: 7rem;
            border-radius: 0.5rem;
          }
          
          .info {
            height: 7rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .name {
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
          
          .function {
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(156, 163, 175, 1);
          }
          
          .stats {
            width: 100%;
            border-radius: 0.5rem;
            background-color: rgba(255, 255, 255, 1);
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(0, 0, 0, 1);
          }
          
          .flex {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 4px;
          }
          
          .state-value {
            font-weight: 700;
            color: rgb(118, 36, 194);
          }
          
          .request {
            margin-top: 1.5rem;
            width: 100%;
            border: 1px solid transparent;
            border-radius: 0.5rem;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            line-height: 1.5rem;
            transition: all .3s ease;
          }
          
          
          
        `}
            </style>
        </div>
    )
}
