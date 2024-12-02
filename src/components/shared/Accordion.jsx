"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "ahooks";

export default function Accordion({ renderButton, children }) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	useClickAway(() => {
		setOpen(false);
	}, ref);

	return (
		<motion.div ref={ref} className="">
			{renderButton({ setOpen, open })}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ scaleY: 0 }}
						animate={{
							scaleY: 1,
							transformOrigin: "top",
							transition: {
								duration: 0.6,
								type: "spring",
								bounce: 0.6,
							},
						}}
						className="pt-6">
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
