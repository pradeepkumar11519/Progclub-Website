import React from 'react'
import { useEffect } from 'react'

export default function Carousel2() {
	useEffect(() => {
		let cube = document.querySelector(".image-cube");
		let btnNext = document.getElementById("next");
		let btnPrev = document.getElementById("prev");
		let pos = 0;
		btnNext.addEventListener("click", () => {
			pos -= 90;
			cube.style.transform = `rotateY(${pos}deg)`;
		});
		btnPrev.addEventListener("click", () => {
			pos += 90;
			cube.style.transform = `rotateY(${pos}deg)`;
		});
	}, [])
	return (
		<div className='!bg-black'>
			<div className="wrapper">
				<div className="container">
					<div className="image-cube">
						<div className="front">
							<img src="image-1.jpg" />
						</div>
						<div className="right">
							<img src="image-2.jpg" />
						</div>
						<div className="back">
							<img src="image-3.jpg" />
						</div>
						<div className="left">
							<img src="image-4.jpg" />
						</div>
					</div>
				</div>
				<div className="btns">
					<button id="prev">
						<i className="fas fa-arrow-left"></i>
					</button>
					<button id="next">
						<i className="fas fa-arrow-right"></i>
					</button>
				</div>
			</div>
			<style jsx>
				{`
            
			  .wrapper {
				border: 1px solid #ffffff;
				height: 300px;
				width: 300px;
				position: absolute;
				margin: auto;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
			  }
			  .container {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				perspective: 800px;
				perspective-origin: 50%;
			  }
			  .image-cube {
				width: 300px;
				height: 300px;
				transform-style: preserve-3d;
				position: relative;
				transition: 2s;
			  }
			  .image-cube div {
				height: 300px;
				width: 300px;
				position: absolute;
			  }
			  img {
				width: 100%;
				transform: translateZ(0);
			  }
			  .front {
				transform: translateZ(150px);
			  }
			  .right {
				transform: rotateY(-270deg) translateX(150px);
				transform-origin: 100% 0;
			  }
			  .back {
				transform: translateZ(-150px) rotateY(180deg);
			  }
			  .left {
				transform: rotateY(270deg) translateX(-150px);
				transform-origin: 0 50%;
			  }
			  .btns {
				margin-top: 80px;
				display: flex;
				justify-content: space-between;
			  }
			  .btns button {
				background-color: transparent;
				color: #ffffff;
				border: 3px solid #ffffff;
				padding: 8px 40px;
				border-radius: 30px;
				font-size: 20px;
				cursor: pointer;
			  }
        `}
			</style>
		</div>
	)
}
