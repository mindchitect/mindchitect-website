import React from "react";

export default function QuoteIcon({ fill = "#444444" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="38"
			height="55"
			viewBox="0 0 108 85"
			fill="none">
			<path
				d="M47.25 37.125V84.375H0V36.45C0 4.05 30.375 0 30.375 0L34.425 9.45C34.425 9.45 20.925 11.475 18.225 22.275C15.525 30.375 20.925 37.125 20.925 37.125H47.25ZM108 37.125V84.375H60.75V36.45C60.75 4.05 91.125 0 91.125 0L95.175 9.45C95.175 9.45 81.675 11.475 78.975 22.275C76.275 30.375 81.675 37.125 81.675 37.125H108Z"
				fill={fill}
			/>
		</svg>
	);
}
