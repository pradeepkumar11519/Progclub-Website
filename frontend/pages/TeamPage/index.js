import React from "react";
import { NextSeo } from "next-seo";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import axios from "axios";
import anime from "animejs";
import TeamCard from "@/components/TeamCard";
import LoadingBar from "react-top-loading-bar";
import * as THREE from "three";
import chroma from "chroma-js";
import { useEffect } from "react";
export default function TeamPage() {
	useEffect(() => {
		function cycle(value, total) {
			return (value % total + total) % total;
		}

		function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
			return (
				(maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) +
				minAllowed
			);
		}

		function movePointAtAngle(point, angle, distance) {
			return {
				x: point.x + Math.cos(angle) * distance,
				y: point.y + Math.sin(angle) * distance,
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Element
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Element {
			dpr = 1;
			toValue = value => value * this.dpr;
			draw = () => { };
			update = () => { };
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Wave
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Wave extends Element {
			constructor(pointAmount, p1, p2) {
				super();
				this.p1 = p1;
				this.p2 = p2;

				const dx = p2.x - p1.x;
				const dy = p2.y - p1.y;

				const vx = dx / (pointAmount - 1);
				const vy = dy / (pointAmount - 1);

				this.vertices = new Array(pointAmount).fill(null).map((p, i) => ({
					x: p1.x + vx * i,
					y: p1.y + vy * i,
				}));
			}

			draw = ({ ctx }) => {
				ctx.lineCap = 'round';
				ctx.lineWidth = this.toValue(2);
				ctx.strokeStyle = '#ccc';

				ctx.beginPath();
				ctx.moveTo(this.vertices[0].x, this.vertices[0].y);

				for (let k = 0; k < this.vertices.length - 1; k++) {
					const p1 = this.vertices[k];
					const p2 = this.vertices[k + 1];

					const cpx = (p1.x + p2.x) / 2;
					const cpy = (p1.y + p2.y) / 2;

					// ctx.fillStyle = 'white';
					// ctx.fillRect(p1.x, p1.y, 10, 10);

					if (k === this.vertices.length - 2) {
						ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
					} else {
						ctx.quadraticCurveTo(p1.x, p1.y, cpx, cpy);
					}
				}

				ctx.stroke();
			};

			update = ({ tick }) => {
				const l = this.vertices.length;
				const r = 1 / l;
				this.vertices = this.vertices.map((p, i) => ({
					x: p.x,
					y: p.y + this.toValue(Math.sin(tick / 10 + i)),
				}));
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Gate
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/
		var body = document.body,
			html = document.documentElement;

		var height = Math.max(body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight);
		class Gate extends Element {
			constructor({ radius, amount }) {
				super();
				this.amount = amount;
				this.radius = this.toValue(radius);
				this.diameter = this.radius * 2;

				this.setValues();
				this.setupWaves();
			}

			setValues() {
				this.w = this.toValue(window.innerWidth);
				this.h = this.toValue(height);
				this.hw = this.w / 2;
				this.hh = this.h / 2;
			}

			setupWaves() {
				// Gate dims
				this.px = this.hw - this.radius;
				this.py = this.hh - this.radius;
				this.pw = this.diameter;
				this.ph = this.diameter;
				this.waves = [];

				const extend = 2;

				for (let i = -extend; i < this.amount + extend; i++) {
					const dy = this.ph / this.amount * i;
					const p1 = {
						x: this.px,
						y: this.py + dy,
					};
					const p2 = {
						x: this.px + this.pw,
						y: this.py + dy,
					};
					this.waves.push(new Wave(10, p1, p2));
				}
			}

			reset = () => {
				this.setValues();
				this.setupWaves();
			};

			drawBg(canvas) {
				canvas.ctx.beginPath();

				const gradient = canvas.ctx.createLinearGradient(
					this.px,
					this.py,
					this.px,
					this.py + this.diameter
				);
				gradient.addColorStop(0, '#2a5298');
				gradient.addColorStop(1, '#4298b7');

				const wobble = this.toValue(Math.sin(canvas.tick / 20) * 10);
				const offset = this.toValue(5);

				canvas.ctx.arc(
					this.hw,
					this.hh,
					this.radius + offset + wobble,
					0,
					2 * Math.PI
				);
				canvas.ctx.fillStyle = gradient;
				canvas.ctx.fill();
			}

			draw = canvas => {
				this.drawBg(canvas);

				canvas.ctx.save();
				canvas.ctx.beginPath();
				canvas.ctx.arc(this.hw, this.hh, this.radius, 0, 2 * Math.PI);
				canvas.ctx.clip();

				this.waves.map(wave => {
					wave.draw(canvas);
					wave.update(canvas);
				});

				canvas.ctx.restore();
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Ring
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Ring extends Element {
			constructor({
				radius,
				pointAmount,
				speed,
				decay,
				acceleration,
				wobble,
				warp,
			}) {
				super();
				this.points = [];

				this.w = this.toValue(window.innerWidth);
				this.h = this.toValue(height);
				this.hw = this.w / 2;
				this.hh = this.h / 2;
				this.speed = this.toValue(speed);
				this.decay = decay;
				this.acceleration = acceleration;
				this.lineWidth = this.toValue(1);
				this.warp = this.toValue(warp);
				this.wobble = this.toValue(wobble);
				this.radOff = 2 * Math.PI / pointAmount;

				this.opacityStroke = 1;
				this.opacityFill = 0;
				this.opacityDecay = 1 / this.decay;

				this.center = {
					x: this.hw,
					y: this.hh,
				};

				for (let i = 0; i < pointAmount; i++) {
					const radian = Math.PI * 2 / pointAmount * i;
					const x = this.center.x + radius * Math.cos(radian);
					const y = this.center.y + radius * Math.sin(radian);

					this.points.push({
						x,
						y,
						radian,
					});
				}
			}

			get stroke() {
				this.opacityStroke -= this.opacityDecay;
				const r = Math.floor(170 + Math.sin(this.decay / 10) * 60);
				const g = Math.floor(130 + Math.sin(this.decay / 5) * 40);
				// const b = Math.floor(130 + (Math.sin(this.decay / 5) * 40));

				return `rgba(${r}, ${g}, 200, ${this.opacityStroke})`;
			}

			draw = ({ ctx }) => {
				const { points: p, toValue: v } = this;

				ctx.lineWidth = this.lineWidth;
				ctx.strokeStyle = this.stroke;
				ctx.beginPath();
				ctx.moveTo(
					(p[cycle(-1, p.length)].x + p[0].x) / 2,
					(p[cycle(-1, p.length)].y + p[0].y) / 2
				);

				for (var i = 0; i < p.length; i++) {
					ctx.quadraticCurveTo(
						p[i].x,
						p[i].y,
						(p[i].x + p[cycle(i + 1, p.length)].x) / 2,
						(p[i].y + p[cycle(i + 1, p.length)].y) / 2
					);
				}

				ctx.closePath();

				ctx.globalCompositeOperation = 'lighter';
				ctx.stroke();
				ctx.globalCompositeOperation = 'source-over';
			};

			update = ({ tick }) => {
				this.speed *= this.acceleration;
				// this.lineWidth *= (this.acceleration / 2);

				this.points = this.points.map((p, i) => {
					const wobbleAmount =
						Math.sin(tick / 20 + i * this.radOff) * this.wobble;
					const warpAmount = Math.cos(tick / 100) * this.warp;
					const { x, y } = movePointAtAngle(p, p.radian, this.speed);

					return {
						...p,
						x: x + wobbleAmount - warpAmount,
						y: y - wobbleAmount + warpAmount,
					};
				});

				if (!this.dead) {
					--this.decay;
					if (this.decay === 0) {
						this.dead = true;
					}
				}
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Portal
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Portal {
			constructor(time, ringConfig) {
				this.time = time;
				this.ringConfig = ringConfig;
				this.rings = [new Ring(this.ringConfig)];
			}

			reset = () => {
				this.rings = [];
			};

			addRing() {
				this.rings.push(new Ring(this.ringConfig));
			}

			draw = () => { };

			update = ({ ctx, tick }) => {
				if (tick % this.time === 0) {
					this.addRing();
				}
				// filter dead while drawing and updating
				this.rings = this.rings.filter(ring => {
					ring.draw({ ctx, tick });
					ring.update({ ctx, tick });
					return ring.dead !== true;
				});
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Background
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Background extends Element {
			draw = ({ ctx, canvas }) => {
				const w = canvas.width;
				const h = height;

				// const gradient1 = ctx.createLinearGradient(0, 0, 0, h);
				// gradient1.addColorStop(0, '#aa5eed');
				// gradient1.addColorStop(1, '#b7f7ed');
				// ctx.fillStyle = gradient1;
				// ctx.fillRect(0, 0, w, h);

				var gradient2 = ctx.createRadialGradient(
					w / 2,
					h / 2,
					0,
					w / 2,
					h / 2,
					w
				);
				gradient2.addColorStop(1, '#20008c');
				gradient2.addColorStop(0, '#86efcc');
				ctx.fillStyle = gradient2;
				ctx.fillRect(0, 0, w, h);
				// ctx.globalCompositeOperation = 'source-over';
			};
		}

		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡/
		// Canvas
		//*‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡*/

		class Canvas {
			constructor(elements = []) {
				// setup a canvas
				this.canvas = document.getElementById('canvas');
				this.dpr = 1;
				this.ctx = this.canvas.getContext('2d');
				this.ctx.scale(this.dpr, this.dpr);
				// stores
				this.elements = elements;
				this.tick = 0;
				this.mouse = { x: 0, y: 0 };
				// run
				this.setCanvasSize();
				this.setupListeners();
			}

			setupListeners() {
				window.addEventListener('resize', this.setCanvasSize);
				window.addEventListener('mousemove', this.setPointer);
			}

			setPointer = ({ clientX, clientY }) => {
				const x = clientX;
				const y = clientY;
				this.mouse = { x, y };
			};

			setCanvasSize = () => {
				this.canvas.width = window.innerWidth * this.dpr;
				this.canvas.height = height * this.dpr;
				this.canvas.style.width = window.innerWidth + 'px';
				this.canvas.style.height = height + 'px';
			};

			addElement(newElement) {
				this.elements = [...this.elements, newElement];
				return this.elements.length - 1;
			}

			removeElement(deleteIndex) {
				this.elements = this.elements.filter((el, i) => i !== deleteIndex);
				return this.elements;
			}

			update() {
				this.elements.map(({ update }) => update(this));
			}

			draw() {
				this.elements.map(({ draw }) => draw(this));
			}

			render = () => {
				this.draw();
				this.update();
				++this.tick;
				window.requestAnimationFrame(this.render);
			};
		}

		const canvas = new Canvas([
			new Background(),
			new Portal(5, {
				radius: 0,
				pointAmount: 3,
				speed: 2,
				decay: 200,
				acceleration: 1.02,
				wobble: 1,
				warp: 3,
			})
		]);

		canvas.render();
	}, [])
	const AllTeamMembers = useQuery(
		["AllTeamMembers"],
		() => {
			return fetchAllTeamMembers();
		},
		{
			refetchOnWindowFocus: false,
		}
	);
	if (AllTeamMembers.isLoading && !AllTeamMembers.isError) {
		return (
			<h1 className="py-20 text-white text-3xl text-center h-full">
				Loading...
			</h1>
		);
	}

	return (
		<div className="!py-20 md:py-32 relative">
			<NextSeo
				title="P;Club - Our Team"
				description="Teams Page - Programing Club Of IIT INDORE(IITI)"
			/>
			<canvas id="canvas" className="!z-[-100] !absolute !top-0 !h-full"></canvas>

			<div
				className={`${AllTeamMembers.isFetching ||
					AllTeamMembers.isLoading ||
					AllTeamMembers.isError ||
					AllTeamMembers?.data?.length <= 3
					? "h-screen"
					: "h-full"
					} `}
			>
				<div className="">
					<h1 className=" text-white text-4xl font-bold text-center my-20">
						Our Team
					</h1>
				</div>
				{(AllTeamMembers.isLoading && !AllTeamMembers.isError) ||
					(AllTeamMembers.isFetching && (
						<h1 className="text-white text-center text-3xl my-10">
							Loading...
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
						<div className=" z-[-10000] grid xl:grid-cols-4 lg;grid-cols-4 sm:grid-cols-2 px-4 sm:px-20  ">
							{AllTeamMembers?.data?.map((team, index) => {
								return (
									<div key={team.id}>
										<TeamCard team={team} />
										<TeamCard team={team} />
										<TeamCard team={team} />
									</div>
								);
							})}
						</div>
					)}
			</div>
			\

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
		.get("https://progclub-website.vercel.app/api/v1/team/")
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
		}
	);
	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
