import React from "react";

export default function SystemIntegration() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 48 48"
			width={64}
			height={64}
			id="api-program">
			<defs>
				<linearGradient
					id="a"
					x1="9.5"
					x2="9.5"
					y1="13"
					y2="5"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#fe9661"></stop>
					<stop offset="1" stopColor="#ffb369"></stop>
				</linearGradient>
				<linearGradient
					xlinkHref="#a"
					id="b"
					x1="17.5"
					x2="17.5"
					y2="2"></linearGradient>
				<linearGradient
					xlinkHref="#a"
					id="c"
					y2="5"
					gradientTransform="matrix(-1 0 0 1 48 0)"></linearGradient>
				<linearGradient
					xlinkHref="#a"
					id="d"
					x1="17.5"
					x2="17.5"
					y2="2"
					gradientTransform="matrix(-1 0 0 1 48 0)"></linearGradient>
				<linearGradient
					xlinkHref="#a"
					id="e"
					x1="24"
					x2="24"
					y2="1"></linearGradient>
				<linearGradient
					id="f"
					x1="17"
					x2="31"
					y1="42"
					y2="42"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#d3e6f5"></stop>
					<stop offset="1" stopColor="#f0f7fc"></stop>
				</linearGradient>
				<linearGradient
					id="g"
					x1="24"
					x2="24"
					y1="41"
					y2="11"
					gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#54a5ff"></stop>
					<stop offset="1" stopColor="#8ad3fe"></stop>
				</linearGradient>
			</defs>
			<g>
				<path
					fill="url(#a)"
					d="M12,6H9.72a2,2,0,1,0,0,2H11v4a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Z"></path>
				<path
					fill="url(#b)"
					d="M20,7H17V5.72a2,2,0,1,0-2,0V8a1,1,0,0,0,1,1h3v3a1,1,0,0,0,2,0V8A1,1,0,0,0,20,7Z"></path>
				<path
					fill="url(#c)"
					d="M36,6h2.28a2,2,0,1,1,0,2H37v4a1,1,0,0,1-2,0V7A1,1,0,0,1,36,6Z"></path>
				<path
					fill="url(#d)"
					d="M28,7h3V5.72a2,2,0,1,1,2,0V8a1,1,0,0,1-1,1H29v3a1,1,0,0,1-2,0V8A1,1,0,0,1,28,7Z"></path>
				<path
					fill="url(#e)"
					d="M24,1a2,2,0,0,0-1,3.72V12a1,1,0,0,0,2,0V4.72A2,2,0,0,0,24,1Z"></path>
				<path
					fill="#4795ea"
					d="M3,41H45a1,1,0,0,1,1,1v2a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V42A1,1,0,0,1,3,41Z"></path>
				<path
					fill="url(#f)"
					d="M29,43H19a2,2,0,0,1-2-2H31A2,2,0,0,1,29,43Z"></path>
				<rect width="40" height="30" x="4" y="11" fill="url(#g)" rx="3"></rect>
				<rect width="34" height="24" x="7" y="14" fill="#f0f7fc" rx="1"></rect>
				<path
					fill="#b4cde1"
					d="M17 18a4 4 0 00-4 4v7a1 1 0 002 0V26h4v3a1 1 0 002 0V22A4 4 0 0017 18zm-2 6V22a2 2 0 014 0v2zM27 18H24a1 1 0 00-1 1V29a1 1 0 002 0V26h2a4 4 0 000-8zm0 6H25V20h2a2 2 0 010 4zM34 18a1 1 0 00-1 1V29a1 1 0 002 0V19A1 1 0 0034 18zM20 34H14a1 1 0 010-2h6a1 1 0 010 2zM34 34H24a1 1 0 010-2H34a1 1 0 010 2z"></path>
			</g>
		</svg>
	);
}