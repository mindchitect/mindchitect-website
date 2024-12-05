"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterX from "./icons/TwitterX";

export default function Footer() {
	return (
		<footer className="pt-16 bg-[#010D30] px-10">
			<div className="flex flex-col lg:flex-row items-start justify-between gap-20">
				<div className="lg:w-[30%] xl:w-[25%]">
					<Link className="w-max" href={"/"}>
						<Image
							src={"/M-logo.png"}
							width={150}
							height={150}
							alt="Mindchitect"
						/>
					</Link>
					<p className="text-[1.7rem] text-gray-200 font-medium mt-12">
						We are a team technology enthusiasts that enjoy online and offline
						digital world. We provide quality software solutions, especially
						where performance is critical.
					</p>
					<div className="flex flex-col gap-y-2 mt-8">
						<h6 className="text-[2rem] text-white font-semibold">
							Contact Us:
						</h6>
						<p className="text-[1.7rem] text-gray-200 font-medium">
							127 Obafemi Awolowo Ikeja, Lagos Nigeria.
						</p>
					</div>
					<div className="flex flex-col gap-y-2 mt-8">
						<h6 className="text-[2rem] text-white font-semibold">Follow Us:</h6>
						<div className="flex items-center gap-x-12 mt-3">
							<Link href={"/"}>
								<InstagramIcon />
							</Link>
							<Link href={"/"}>
								<FacebookIcon />
							</Link>
							<Link href={"/"}>
								<TwitterX />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full md:w-[60%] lg:w-[35%] xl:w-[30%] flex flex-col gap-y-10 md:flex-row justify-between">
					<div className="flex flex-col gap-y-10">
						<h6 className="text-[2rem] font-semibold text-white">
							Quick Links
						</h6>
						<ul className="flex flex-row flex-wrap md:flex-col gap-8">
							<li>
								<Link href={"/"} className="text-2xl text-white">
									Home
								</Link>
							</li>
							<li>
								<Link href={"/about"} className="text-2xl text-white">
									About
								</Link>
							</li>
							<li>
								<Link href={"/contact"} className="text-2xl text-white">
									Contact
								</Link>
							</li>
							<li>
								<Link href={"/privacy"} className="text-2xl text-white">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-y-10">
						<h6 className="text-[2rem] font-semibold text-white">Services</h6>
						<ul className="flex flex-row flex-wrap md:flex-col gap-8">
							<li>
								<Link
									href={"/services/software-dev"}
									className="text-2xl text-white">
									Software Development
								</Link>
							</li>
							<li>
								<Link
									href={"/services/software-dev"}
									className="text-2xl text-white">
									Cyber Security
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p className="mt-10 text-center text-white text-2xl font-medium py-8 border-t border-t-gray-500">
				&copy; {new Date().getFullYear()} Mindchitect. All rights reserved.
			</p>
		</footer>
	);
}
