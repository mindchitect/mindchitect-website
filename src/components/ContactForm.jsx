"use client";
import React from "react";
import { Form, Formik, Field } from "formik";

export default function ContactForm() {
	return (
		<Formik>
			{() => (
				<Form className="w-full flex flex-col gap-y-10">
					<div className="grid md:grid-cols-2 gap-5">
						<div className="flex flex-col gap-y-3">
							<label htmlFor="fullName" className="text-2xl font-medium">
								Your Name
							</label>
							<Field
								className="w-full outline-none text-2xl p-5 h-[50px] border border-gray-200 bg-gray-100 rounded-xl focus:border-primary transition-all duration-200"
								placeholder="Your Name"
							/>
						</div>
						<div className="flex flex-col gap-y-3">
							<label htmlFor="fullName" className="text-2xl font-medium">
								Email Address
							</label>
							<Field
								className="w-full outline-none text-2xl p-5 h-[50px] border border-gray-200 bg-gray-100 rounded-xl focus:border-primary transition-all duration-200"
								placeholder="Email Address"
								type="email"
							/>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						<div className="flex flex-col gap-y-3">
							<label htmlFor="fullName" className="text-2xl font-medium">
								Subject
							</label>
							<Field
								className="w-full outline-none text-2xl p-5 h-[50px] border border-gray-200 bg-gray-100 rounded-xl focus:border-primary transition-all duration-200"
								placeholder="Subject"
							/>
						</div>
						<div className="flex flex-col gap-y-3">
							<label htmlFor="fullName" className="text-2xl font-medium">
								Phone Number
							</label>
							<Field
								className="w-full outline-none text-2xl p-5 h-[50px] border border-gray-200 bg-gray-100 rounded-xl focus:border-primary transition-all duration-200"
								placeholder="Phone Number"
								type="phone"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-3">
						<label htmlFor="fullName" className="text-2xl font-medium">
							Message
						</label>
						<Field
							className="w-full outline-none text-2xl p-5 h-[150px] border border-gray-200 bg-gray-100 rounded-xl focus:border-primary transition-all duration-200 resize-none"
							placeholder="Your message"
							as="textarea"
						/>
					</div>
					<button className="mt-10 h-[60px] w-full bg-primary hover:bg-[#010D30] text-white  transition-all duration-200 rounded-2xl text-[1.7rem] font-semibold ">
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
}
