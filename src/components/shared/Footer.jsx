"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="py-16 bg-[#010D30] px-10">
			<div className="w-[25%]">
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
					digital world. We provide quality software solutions, especially where
					performance is critical.
				</p>
				<div className="flex flex-col gap-y-2 mt-8">
					<h6 className="text-[2rem] text-white font-semibold">Contact Us:</h6>
					<p className="text-[1.7rem] text-gray-200 font-medium">
						127 Obafemi Awolowo Ikeja, Lagos Nigeria.
					</p>
				</div>
			</div>
		</footer>
	);
}
