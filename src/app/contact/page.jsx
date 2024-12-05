import ContactForm from "@/components/ContactForm";
import WhatsappIcon from "@/components/shared/icons/WhatsappIcon";
import React from "react";
import Link from "next/link";
import EmailIcon from "@/components/shared/icons/EmailIcon";
import CallIcon from "@/components/shared/icons/CallIcon";

export default function page() {
	return (
		<main>
			<section className=" bg-[url(/contact.png)] bg-cover h-[50vh] md:h-[60vh]">
				<div className="bg-[#00000070] w-full h-full flex flex-col items-center justify-center">
					<h1 className="text-[4rem] md:text-[7rem] font-extrabold text-white">
						Let's have a chat
					</h1>
					<p className="text-[1.7rem] text-white font-medium text-center">
						Get in touch and get started today. We're ready!
					</p>
				</div>
			</section>
			<section className="w-full py-16 flex items-center justify-center">
				{/* <div className="w-[90%] md:w-[75%] lg:w-[50%]">

				</div> */}
				<div className="grid lg:grid-cols-3 px-8 md:px-[100px] xl:px-[200px] gap-10 w-full">
					<Link href={"/"} target="_blank">
						<div className="w-full border border-gray-200 rounded-2xl p-8 flex flex-col justify-center gap-y-12 items-center h-[200px] drop-shadow-2xl bg-white">
							<div>
								<WhatsappIcon />
							</div>
							<div className="flex flex-col gap-y-[5px] items-center justify-center">
								<span className="font-bold text-3xl">Chat on whatsapp</span>
								<span className="text-2xl text-gray-400">
									Speak to our friendly team
								</span>
								<span className="font-bold text-2xl underline flex mt-[10]">
									090568834233
								</span>
							</div>
						</div>
					</Link>
					<Link href={"/"} target="_blank">
						<div className="w-full border border-gray-200 rounded-2xl p-8 flex flex-col justify-center gap-y-12 items-center h-[200px] drop-shadow-2xl bg-white">
							<div>
								<EmailIcon />
							</div>
							<div className="flex flex-col gap-y-[5px]  items-center justify-center">
								<span className="font-bold text-3xl">Send an Email</span>
								<span className="text-2xl text-gray-400">
									We're here to help
								</span>
								<span className="font-bold text-2xl underline flex mt-[10]">
									email@email.com
								</span>
							</div>
						</div>
					</Link>
					<Link href={"/"} target="_blank">
						<div className="w-full border border-gray-200 rounded-2xl p-8 flex flex-col justify-center gap-y-12 items-center h-[200px] drop-shadow-2xl bg-white">
							<div>
								<CallIcon />
							</div>
							<div className="flex flex-col gap-y-[5px]  items-center justify-center">
								<span className="font-bold text-3xl">Call us</span>
								<span className="text-2xl text-gray-400">
									Mon - Fri from 10am - 6pm
								</span>
								<span className="font-bold text-2xl underline flex mt-[10]">
									09347588679
								</span>
							</div>
						</div>
					</Link>
				</div>
			</section>
		</main>
	);
}
