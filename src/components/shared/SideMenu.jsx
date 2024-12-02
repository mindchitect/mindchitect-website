"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import Image from "next/image";
import CloseIcon from "./icons/CloseIcon";
import Accordion from "./Accordion";

export default function SideMenu() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className={`md:hidden flex items-center justify-center w-[45px] h-[45px] bg-[#ffffff60] rounded-full`}>
				<HamburgerIcon />
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.7 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.7 }}
						className="fixed top-0 left-0 h-screen z-[3] bg-primary w-full py-10">
						<div className="flex items-center justify-between px-10">
							<Link className="w-max" href={"/"}>
								<Image
									src={"/M-logo.png"}
									width={150}
									height={150}
									alt="Mindchitect"
								/>
							</Link>
							<button
								onClick={() => setOpen(false)}
								className={`md:hidden flex items-center justify-center w-[45px] h-[45px] bg-[#ffffff60] rounded-full`}>
								<CloseIcon />
							</button>
						</div>
						<div className="flex flex-col gap-y-10 px-10 mt-20">
							<Link
								href={"/"}
								onClick={() => setOpen(false)}
								className={`text-[4rem] font-extrabold ${
									isHome ? "text-[#eebc07]" : "text-white"
								}`}>
								Home
							</Link>
							<Link
								href={"/about"}
								onClick={() => setOpen(false)}
								className={`text-[4rem] font-bold ${
									pathname === "/about" ? "text-[#eebc07]" : "text-white"
								}`}>
								About
							</Link>
							<Accordion
								renderButton={({ setOpen, open }) => (
									<button
										onClick={() => setOpen(!open)}
										className={`text-[4rem] font-bold ${
											pathname.startsWith("/services")
												? "text-[#eebc07]"
												: "text-white"
										}`}>
										Services
									</button>
								)}>
								<div className="flex flex-col gap-y-6">
									<Link
										onClick={() => setOpen(false)}
										href={"/services/software-dev"}
										className={`text-[2rem] text-white px-6`}>
										Software Development
									</Link>
									<Link
										onClick={() => setOpen(false)}
										href={"/services/software-dev"}
										className={`text-[2rem] text-white px-6`}>
										Cyber Security
									</Link>
								</div>
							</Accordion>
							<Link
								href={"/"}
								onClick={() => setOpen(false)}
								className={`text-[4rem] font-bold ${
									pathname === "/product" ? "text-[#eebc07]" : "text-white"
								}`}>
								Product
							</Link>
							<Link
								href={"/contact"}
								onClick={() => setOpen(false)}
								className={`text-[4rem] font-bold ${
									pathname === "/contact" ? "text-[#eebc07]" : "text-white"
								}`}>
								Contact
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
