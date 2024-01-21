import Image from 'next/image'
import React, { useEffect } from 'react'
import { SiCodeforces } from 'react-icons/si'
export default function TeamCard({ team }) {

	return (
		<div className='w-full h-full flex justify-center items-center '>
			<div className="profile-cards ">

				<div className="card card-1  ">

					<div className="card-description !m-0 md:!m-auto">

						<h2 className="card-description-title ">{team.name}</h2>


						<div id="About">
							<h2 className="card-description-professione text-center md:text-start !m-0 !p-0 ">ABOUT</h2>
							<span className="card-description-profession  text-center md:text-start">{team.position.slice(1)}</span>
							<span className="card-description-profession  text-center md:text-start">{team.year} Year</span>

							<span className="card-description-company  text-center md:text-start">@{team.division.slice(1)}</span>
						</div>
						<div id="Contact" className=''>
							<h2 className="card-description-professione text-center md:text-start !m-0 !p-0 ">CONTACT</h2>
							<span className="card-description-profession text-center md:text-start md:!px-0 !px-10  break-all">{team.email}</span>
							<span className="card-description-profession text-center md:text-start">Phone Number</span>
							
						</div>


						<div className="card-description-social !mt-10 !mb-0 md:mt-0 justify-center md:justify-start py-5 md:py-auto mx-auto flex w-full md:w-auto left-0 !relative ">



							<ul>
								<li><a href="#">
									<SiCodeforces className='' />
								</a></li>
								<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
									<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
								</svg></a></li>
								<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
								</svg></a></li>
								<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
									<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
								</svg></a></li>
							</ul>

						</div>

					</div>

					<Image width={200} height={200} src={team.image} className="card-image !mt-0 mx-auto md:mx-3 rounded-lg mb-7 md:mb-0" />

				</div>

			</div>
			<style jsx>
				{`
					@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
				   }
					body {
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: white;
						font-family: "Poppins", sans-serif;
				   }
					.profile-cards {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-wrap: wrap;
						
						
				   }
				   @media screen and (min-width: 760px) {
					.profile-cards .card {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 670px;
						height: 400px;
						position: relative;
						color: #2d2d2d;
						background-color: white;
						letter-spacing: 1px;
						border: 25px solid rgba(0, 0, 0, 0.1);
						border-radius: 25px;
						overflow: hidden;
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
				   }
				   .profile-cards .card .card-description {
					display: flex;
					flex-direction: column;
					gap: 20px;
					padding: 20px 0px 0px 0px;
					width: auto;
					height: 100%;
			   }
				  }
					
				   //media query for mobile version
				   @media screen and (max-width: 760px) {
					.profile-cards .card {
						
						align-items: center;
						justify-content: space-between;
						width: 95%;
						height: 100%;
						position: relative;
						color: #2d2d2d;
						background-color: white;
						letter-spacing: 1px;
						border: 25px solid rgba(0, 0, 0, 0.1);
						border-radius: 25px;
						overflow: hidden;
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
				   }
				   .profile-cards .card .card-description {
					display: flex;
					flex-direction: column;
					gap:20px;
					padding:10px 1px 0px 0px;
					
					width: 100%;
					height: 100%;
			   }
				  }
					
					.profile-cards .card .card-description .card-description-title {
						color: black;
						font-size: 18px;
				   }
					.profile-cards .card .card-description .card-description-profession {
						display: block;
						font-size: 16px;
				   }
					.profile-cards .card .card-description .card-description-company {
						display: block;
						font-size: 14px;
						cursor: pointer;
				   }
					.profile-cards .card .card-description .card-description-company:hover {
						text-decoration: underline;
				   }
					.profile-cards .card .card-description .card-description-social {
						position: absolute;
						bottom: 40px;
				   }
					.profile-cards .card .card-description .card-description-social .card-description-social-follow {
						display: block;
						margin-bottom: 8px;
						color: #555572;
						font-size: 14px;
				   }
					.profile-cards .card .card-description .card-description-social ul {
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 10px;
				   }
					.profile-cards .card .card-description .card-description-social ul li {
						list-style-type: none;
				   }
					.profile-cards .card .card-description .card-description-social ul li a {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 40px;
						height: 40px;
						color: #121212;
						border-radius: 50%;
						box-shadow: 6px 6px 12px #97c3c4, -6px -6px 12px #cdffff;
						transition: all 0.4s;
				   }
					.profile-cards .card .card-description .card-description-social ul li a:hover {
						color: white;
						transform: translate(0, -7px);
				   }
					.profile-cards .card .card-description .card-description-social ul li a svg {
						width: calc(100% - 15px);
						height: calc(100% - 15px);
				   }
					.profile-cards .card .card-description .card-description-social ul li:nth-child(1) a:hover {
						background-color: #1da1f2;
				   }
					.profile-cards .card .card-description .card-description-social ul li:nth-child(2) a:hover {
						background-color: #3f729b;
				   }
					.profile-cards .card .card-description .card-description-social ul li:nth-child(3) a:hover {
						background-color: #00405d;
				   }
					.profile-cards .card .card-description .card-description-social ul li:nth-child(4) a:hover {
						background-color: #0a66c2;
				   }
					.profile-cards .card .card-image {
						width: 250px;
						height: 100%;
						object-fit: cover;
				   }
					
				`}
			</style>
		</div>
	)
}
