import ContactForm from "@/components/ContactForm";
import React from "react";

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
			<section className="py-16 flex items-center justify-center">
				<div className="w-[90%] md:w-[75%] lg:w-[50%]">
					<ContactForm />
				</div>
			</section>
		</main>
	);
}
