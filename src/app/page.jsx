"use client";
import SoftwareIcon from "@/components/shared/icons/SoftwareIcon";
import Image from "next/image";
import React, { useEffect } from "react";

export default function page() {
	return (
		<main className="">
			<section className="h-[90vh] bg-[url(/hero.png)] bg-cover pt-[5rem] flex flex-col items-center justify-center w-full">
				<div className="flex flex-col gap-y-5 items-center justify-center w-full">
					<h1 className="font-extrabold text-white text-[8rem] shadow-lg leading-[100%] text-center w-[60%]">
						Mission-critical digital solutions
					</h1>
					<p className="mt-2 text-[2rem] w-[40%] text-white text-center font-semibold">
						High performing system solutions that is customized to your
						organization.
					</p>
					<button className="h-[60px] w-[220px] bg-[#EEBC07] hover:bg-[#f0ca3f] transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
						Get Started
					</button>
				</div>
			</section>
			<section className="px-[90px] pt-28 pb-12 flex justify-center items-center">
				<div className="w-1/2">
					<h2 className="text-[6rem] font-black text-[#010D30]">Who we are</h2>
					<p className="text-[1.8rem] mt-3 w-[90%]">
						Coregrade provides robust IT solution, system integration especially
						where performance is critical, custom software development, data
						security and infrastructure services. We make IT solutions easy to
						have and run securely, ensuring high performance at reduced
						production cost.
					</p>
					<button className="mt-5 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
						Learn more
					</button>
				</div>
				<Image src={"/who-we.png"} width={500} height={500} alt="mindchitect" />
			</section>
			<section className="flex flex-col items-center pb-16">
				<div className="flex items-center justify-center">
					<h2 className="text-[6rem] font-black text-center text-[#010D30]">
						What we do
					</h2>
				</div>
				<div className="w-[80%] flex items-center justify-between mt-24">
					<div className="w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold">Software Development</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold">System Integration</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold">Data Security</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
				</div>
			</section>
			<section className="px-[90px] bg-[#202684] py-16 flex justify-center items-center">
				<div className="w-1/2">
					<h2 className="text-[5rem] font-bold text-white">
						We love building meaningful and useful software products.
					</h2>
					<p className="text-[1.8rem] mt-10 w-[90%] text-white ">
						Disruptive and innovative products in the education, private and
						public sector.
					</p>
				</div>
				<Image
					src={"/mis-cri.png"}
					width={500}
					height={500}
					alt="mindchitect"
				/>
			</section>
			<section className="py-16 flex flex-col items-center">
				<div className="flex items-center justify-center">
					<h2 className="text-[6rem] font-black text-center text-[#010D30]">
						Our Products
					</h2>
				</div>
				<div className="w-[80%] flex items-center justify-between mt-24">
					<div className="w-[350px] h-[500px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold text-center">
								Issue Resolution & Support System
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="w-[350px] h-[500px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold text-center">
								Learning Management System
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="w-[350px] h-[500px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<SoftwareIcon />
							<h3 className="text-[2.5rem] font-bold text-center">
								School Management System
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							We provide design and software development services for startups
							and enterprise level companies from the idea stage, through UX/UI
							design, programming, dev-ops, release, consultancy, and aftercare.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
