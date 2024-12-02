import React, { useState, useRef } from "react";
import { useClickAway } from "ahooks";

export default function Dropdown({
	items,
	renderItem,
	renderButton,
	dropdownWidth = "100%",
}) {
	const [open, setOpen] = useState(false);
	const containerRef = useRef(null);

	useClickAway(() => {
		setOpen(false);
	}, containerRef);

	return (
		<div
			ref={containerRef}
			className="relative h-full flex items-center justify-center">
			{renderButton({ open, setOpen })}
			<div
				style={{ width: dropdownWidth }}
				className={`absolute top-[165%] h-max overflow-visible rounded-lg bg-white shadow-lg  transition-all duration-200 before:border-transparent before:border-[8px] before:absolute before:border-b-white before:bottom-[100%] z-[99999999999] flex items-center justify-center ${
					open
						? "scale-100 opacity-100 pointer-events-auto"
						: "scale-75 opacity-0 pointer-events-none"
				}`}>
				<div className="w-full h-full flex flex-col overflow-hidden p-3">
					{items.map((item, index) =>
						renderItem({ item, index, setOpen, open })
					)}
				</div>
			</div>
		</div>
	);
}
