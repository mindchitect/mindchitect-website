"use client";
import React from "react";
import Link from "next/link";
import SoftwareIcon from "@/components/shared/icons/SoftwareIcon";
import Image from "next/image";
import CyberSecurityIcon from "@/components/shared/icons/CyberSecurityIcon";
import DataScienceIcon from "@/components/shared/icons/DataScienceIcon";
import QuoteIcon from "@/components/shared/icons/QuoteIcon";
import { motion } from "framer-motion";

export default function page() {
	return (
		<main>
			<section className=" bg-[url(/bootcamp.png)] bg-cover bg-center h-[80vh] md:h-[70vh] lg:h-[100vh] xl:h-[80vh]">
				<div className="bg-[#00000070] w-full h-full flex flex-col items-center justify-center">
					<motion.h1
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", bounce: 0.8, duration: 1.5 }}
						className="w-[90%] lg:w-[80%] xl:w-[70%] min-[1281px]:w-[60%] text-[4rem] md:text-[6rem] xl:text-[7rem] font-black text-white text-center leading-[120%]">
						Bootcamps Built For The New Tech Industry
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="mt-5 w-[80%] md:w-[70%] lg:w-[50%] text-[1.7rem] text-white font-medium text-center ">
						Since 2012, Flatiron School has trained over 20,000 graduates. Now,
						we’re excited to announce new ways to help learners unlock their
						full potential with flexible online courses that deliver real
						results.
					</motion.p>
					<div className="mt-8">
						<Link
							className="flex items-center justify-center h-[60px] w-[220px] bg-[#EEBC07] hover:bg-[#f0ca3f] transition-all duration-200 rounded-full text-[1.7rem] font-semibold "
							href="/contact">
							Get Started
						</Link>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center py-16 pb-36">
				<div className="flex items-center justify-center">
					<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-center text-[#010D30]">
						What we teach
					</h2>
				</div>
				<div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] min-[1281px]:w-[80%] flex flex-col lg:flex-row items-center justify-between mt-24 gap-y-10">
					<Link href={"/contact"}>
						<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
							<div className="flex flex-col gap-y-4 items-center justify-center">
								<SoftwareIcon />
								<h3 className="text-[2.5rem] font-bold">
									Software Engineering
								</h3>
							</div>
							<p className="text-[1.7rem] font-medium mt-5 text-center">
								Gain a foundation in software engineering by building full-stack
								web applications using back-end and front-end programming
								languages, frameworks, and artificial intelligence tools.
							</p>
							<button className="mt-10 h-[60px] w-[220px] border-primary hover:border-[#010D30] hover:bg-[#010d30] hover:text-white border-[1.5px] text-primary  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
								Get Started
							</button>
						</div>
					</Link>
					<Link href={"/contact"}>
						<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
							<div className="flex flex-col gap-y-4 items-center justify-center">
								<DataScienceIcon />
								<h3 className="text-[2.5rem] font-bold">Data Science</h3>
							</div>
							<p className="text-[1.7rem] font-medium mt-5 text-center">
								Discover how to gather data from various sources as well as
								apply statistical analyses, artificial intelligence, and machine
								learning techniques to answer questions and make the information
								actionable.
							</p>
							<button className="mt-10 h-[60px] w-[220px] border-primary hover:border-[#010D30] hover:bg-[#010d30] hover:text-white border-[1.5px] text-primary  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
								Get Started
							</button>
						</div>
					</Link>
					<Link href={"/contact"}>
						<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
							<div className="flex flex-col gap-y-4 items-center justify-center">
								<CyberSecurityIcon />
								<h3 className="text-[2.5rem] font-bold">Cybersecurity</h3>
							</div>
							<p className="text-[1.7rem] font-medium mt-5 text-center">
								Gain a foundation in network and systems security, Python, risk
								and compliance, logs and detection, threat intelligence, applied
								cryptography, and how to leverage artificial intelligence tools.
							</p>
							<button className="mt-10 h-[60px] w-[220px] border-primary hover:border-[#010D30] hover:bg-[#010d30] hover:text-white border-[1.5px] text-primary  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
								Get Started
							</button>
						</div>
					</Link>
				</div>
			</section>
			<section className="px-8 md:px-[40px] lg:px-[60px] xl:px-[90px] bg-[#202684] py-32 flex flex-col lg:flex-row justify-center items-center gap-y-5">
				<div className="lg:w-[50%]">
					<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-white">
						Over $8.6 Million Awarded in Scholarships
					</h2>
				</div>
				<div className="lg:w-[50%]">
					<p className="text-[1.8rem] mt-3 w-[90%] text-white">
						We believe that anybody who wants to pursue a career in tech should
						be able to do so – regardless of how they identify, their
						background, or financial circumstances. We offer three different
						scholarships – Access Scholarship, Merit Scholarship, and Women Take
						Tech – to support our students in their pursuit of a better life
						through education.
					</p>
					<Link
						href={"/contact"}
						className="flex items-center justify-center mt-12 md:mt-6 h-[60px] w-[220px] bg-[#EEBC07] hover:bg-[#f0ca3f]  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
						Learn more
					</Link>
				</div>
			</section>
			<section className="flex flex-col items-center py-16 pb-32">
				<div className="flex items-center justify-center">
					<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-center text-[#010D30]">
						Testimonials
					</h2>
				</div>
				<div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[95%] min-[1281px]:w-[90%] flex flex-col lg:flex-row items-center justify-between mt-24 gap-y-10">
					<div className="lg:w-[320px] xl:w-[400px] h-[200px] rounded-2xl hover:drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center transitiona-all duration-200">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-5">
								<Image
									src={
										"https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?t=st=1734192145~exp=1734195745~hmac=d95f0c518d343a435bf1998be06d3530caf4749507d8ae1c4826d13c5fddb382&w=1060"
									}
									alt="Mindchitect Testimonial"
									width={40}
									height={40}
									className="w-[40px] h-[40px] rounded-full object-cover"
								/>
								<div className="flex flex-col gap-y-2">
									<span className="text-[17px] font-semibold">
										Charles Adigwe
									</span>
									<span className="text-[14px] font-semibold text-gray-400">
										Software Engineering
									</span>
								</div>
							</div>
							<QuoteIcon fill="#ED5604" />
						</div>
						<p className="text-2xl mt-5 text-gray-600 font-medium">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
							ea odit deserunt, nulla quo dolorem officia tempora distinctio
							alias. Nostrum ratione necessitatibus voluptatibus velit iste!
						</p>
					</div>
					<div className="lg:w-[320px] xl:w-[400px] h-[200px] rounded-2xl hover:drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center transitiona-all duration-200">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-5">
								<Image
									src={
										"https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?t=st=1734192145~exp=1734195745~hmac=d95f0c518d343a435bf1998be06d3530caf4749507d8ae1c4826d13c5fddb382&w=1060"
									}
									alt="Mindchitect Testimonial"
									width={40}
									height={40}
									className="w-[40px] h-[40px] rounded-full object-cover"
								/>
								<div className="flex flex-col gap-y-2">
									<span className="text-[17px] font-semibold">
										Charles Adigwe
									</span>
									<span className="text-[14px] font-semibold text-gray-400">
										Software Engineering
									</span>
								</div>
							</div>
							<QuoteIcon fill="#CE04ED" />
						</div>
						<p className="text-2xl mt-5 text-gray-600 font-medium">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
							ea odit deserunt, nulla quo dolorem officia tempora distinctio
							alias. Nostrum ratione necessitatibus voluptatibus velit iste!
						</p>
					</div>
					<div className="lg:w-[320px] xl:w-[400px] h-[200px] rounded-2xl hover:drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center transitiona-all duration-200">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-5">
								<Image
									src={
										"https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?t=st=1734192145~exp=1734195745~hmac=d95f0c518d343a435bf1998be06d3530caf4749507d8ae1c4826d13c5fddb382&w=1060"
									}
									alt="Mindchitect Testimonial"
									width={40}
									height={40}
									className="w-[40px] h-[40px] rounded-full object-cover"
								/>
								<div className="flex flex-col gap-y-2">
									<span className="text-[17px] font-semibold">
										Charles Adigwe
									</span>
									<span className="text-[14px] font-semibold text-gray-400">
										Software Engineering
									</span>
								</div>
							</div>
							<QuoteIcon fill="#042FED" />
						</div>
						<p className="text-2xl mt-5 text-gray-600 font-medium">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
							ea odit deserunt, nulla quo dolorem officia tempora distinctio
							alias. Nostrum ratione necessitatibus voluptatibus velit iste!
						</p>
					</div>
				</div>
			</section>
			<section className="py-24 bg-[#F0F0F0] flex flex-col items-center justify-center gap-y-5">
				<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-center text-[#010D30]">
					Ready To Build The Future?
				</h2>
				<p className="text-gray-600 text-3xl w-[90%] md:w-[50%] text-center">
					No matter what level you’re currently at, Flatiron School’s
					accelerated bootcamps will give you the skills you need to start a
					career in tech.
				</p>
				<Link
					href={"/contact"}
					className="flex items-center justify-center mt-6 h-[60px] w-[220px] bg-primary hover:bg-[#010D30]  transition-all duration-200 rounded-full text-[1.7rem] font-semibold text-white">
					Get Started
				</Link>
			</section>
		</main>
	);
}
