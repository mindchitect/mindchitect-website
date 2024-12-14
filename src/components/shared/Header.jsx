"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "ahooks";
import { usePathname } from "next/navigation";
import HamburgerIcon from "./icons/HamburgerIcon";
import Dropdown from "./Dropdown";
import SideMenu from "./SideMenu";

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
			<nav className="hidden md:flex items-center justify-center gap-[30px]">
				<Link
					href={"/"}
					className={`text-[1.7rem] ${
						isHome ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Home
				</Link>
				<Link
					href={"/about"}
					className={`text-[1.7rem] ${
						pathname === "/about" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					About
				</Link>
				<Dropdown
					renderButton={({ open, setOpen }) => (
						<button
							onClick={() => setOpen(!open)}
							className={`text-[1.7rem] ${
								pathname.startsWith("/services")
									? "text-[#eebc07] font-bold"
									: "text-white"
							}`}>
							Services
						</button>
					)}
					items={[
						{ title: "Software Development", href: "/services/software-dev" },
						{ title: "Cyber Security", href: "/services/cyber-security" },
						{ title: "Coding Bootcamp", href: "/coding-bootcamp" },
					]}
					renderItem={({ item, setOpen, index }) => (
						<Link
							key={index}
							href={item.href}
							onClick={() => setOpen(false)}
							className={`text-[1.7rem] py-5 px-6 border-b last:border-0 border-b-gray-200 hover:bg-[#f5f5f5] transition-all duration-200`}>
							{item.title}
						</Link>
					)}
					dropdownWidth="300px"
				/>
				<Link
					href={"/contact"}
					className={`text-[1.7rem] ${
						pathname === "/contact" ? "text-[#eebc07] font-bold" : "text-white"
					}`}>
					Contact
				</Link>
			</nav>
			<SideMenu />
		</header>
	);
}
