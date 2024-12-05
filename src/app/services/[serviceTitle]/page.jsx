import React from "react";
import Image from "next/image";

export default function page() {
	return (
		<main>
			<section className="px-8 md:px-[40px] lg:px-[60px] xl:px-[90px] bg-[#202684] pt-[15rem] md:pt-16  py-16 flex flex-col md:flex-row justify-center items-center">
				<div className="md:w-1/2">
					<h2 className="text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-white">
						Software Development
					</h2>
					<p className="text-[1.8rem] mt-6 w-[90%] text-white ">
						Coregrade team’s vast experience helps build products for the most
						demanding clients and industries. We cover every technological need,
						from full-fledged projects that require assembling multidisciplinary
						teams to flexible consultancy on a small scale. With top-notch
						designs that are made for the most intuitive experience, great
						project management and quality assurance, we can take your new or
						existing product to the next level.
					</p>
					<button className="mt-8 h-[60px] w-[220px] bg-[#EEBC07] hover:bg-[#f0ca3f] transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
						Get Started
					</button>
				</div>
				<Image
					src={"/mis-cri.png"}
					width={500}
					height={500}
					alt="mindchitect"
					className="xl:max-w-full lg:max-w-[50%] md:max-w-[50%]"
				/>
			</section>
			<section className="flex flex-col items-center py-16 px-8 md:px-0">
				<div className="flex flex-col gap-y-4 items-center justify-center">
					<h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-black text-center text-[#010D30]">
						Software Development Offerings
					</h2>
					<p className="text-gray-500 text-[1.7rem] font-medium text-center md:w-[60%]">
						We provide comprehensive services that cover the product lifecycle
						from the idea stage and design, through implementation and
						deployment to the live environment, analytics and future iterations.
					</p>
				</div>
				<div className="w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] min-[1281px]:w-[80%] flex flex-col lg:flex-row items-center justify-between mt-24 gap-y-10">
					<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<h3 className="text-[2.5rem] font-bold text-center">
								Web Development
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							A set of solutions to cover every aspect of web projects. We got
							you covered on Frontend, Backend and Dev Ops. Web applications we
							create combine performance and usability with the state of the art
							designs.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<h3 className="text-[2.5rem] font-bold text-center">
								Mobile Development
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							Mobile is the king when it comes to accessibility and intuitive
							experience. We create the best, in its class, native and
							cross-platform applications for iOS and Android devices that will
							delight your users.
						</p>
						<button className="mt-10 h-[60px] w-[220px] bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-full text-[1.7rem] font-semibold ">
							Read More
						</button>
					</div>
					<div className="lg:w-[300px] xl:w-[350px] h-[450px] rounded-2xl drop-shadow-2xl bg-white border-[1.5px] border-gray-100 p-8 flex flex-col items-center justify-center">
						<div className="flex flex-col gap-y-4 items-center justify-center">
							<h3 className="text-[2.5rem] font-bold text-center">
								Performance Critical Services
							</h3>
						</div>
						<p className="text-[1.7rem] font-medium mt-5 text-center">
							This is where we shine, we develop, deploy and maintain custom
							software solutions where performance is critical and large data
							processing is required.
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
