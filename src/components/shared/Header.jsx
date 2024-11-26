"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "ahooks";
import { usePathname } from "next/navigation";

export default function Header() {
	const scroll = useScroll();
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<header
			className={`h-[10rem] ${
				scroll?.top > 0 ? "bg-primary" : "bg-transparent"
			} fixed w-full top-0 z-[2] flex flex-row items-center justify-between px-10 transition-all duration-200`}>
			<Link className="w-max" href={"/"}>
				<Image src={"/M-logo.png"} width={150} height={150} alt="Mindchitect" />
			</Link>
			<nav className="flex items-center justify-center gap-[30px]">
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						isHome ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Home
				</Link>
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						pathname === "/about" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					About
				</Link>
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						pathname === "/services" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Services
				</Link>
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						pathname === "/product" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Product
				</Link>
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						pathname === "/contact" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Contact
				</Link>
			</nav>
		</header>
	);
}
