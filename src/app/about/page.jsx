import React from "react";
import Image from "next/image";

export default function page() {
	return (
		<main>
			<section className=" bg-[url(/about.png)] bg-cover h-[50vh] md:h-[60vh]">
				<div className="bg-[#00000070] w-full h-full flex flex-col items-center justify-center">
					<h1 className="text-[5rem] md:text-[7rem] font-extrabold text-white">
						About Us
					</h1>
					<p className="text-[1.7rem] text-white font-medium text-center">
						Robust IT solution, system integration especially where performance
						is critical.
					</p>
				</div>
			</section>
			<section className="px-8 md:px-[40px] lg:px-[90px] pt-28 pb-28 flex flex-col md:flex-row justify-center items-center">
				<div className="md:w-1/2">
					<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black text-[#010D30]">
						Who we are
					</h2>
					<p className="text-[1.8rem] mt-3 w-[90%]">
						We are creative professionals dedicated to providing innovative and
						sustainable solutions in identified market gaps. <br /> <br /> We
						are committed to creating value for all our stakeholders across
						Nigeria, Africa and the world at large. Our plan is to introduce
						products and services across multiple sectors. <br /> <br />{" "}
						Coregrade provides robust IT solution, system integration especially
						where performance is critical, custom software solution, data
						security and infrastructure services. <br /> <br /> We makes IT
						solutions easy to have and run securely, high performance and at
						reduce production cost.
					</p>
					<button className="mt-5 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
						Learn more
					</button>
				</div>
				<Image
					className="xl:max-w-full lg:max-w-[50%] md:max-w-[50%]"
					src={"/who-we.png"}
					width={500}
					height={500}
					alt="mindchitect"
				/>
			</section>
		</main>
	);
}
