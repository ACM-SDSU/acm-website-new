import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export function InfoChip({ children }) {
	return (
		<div class="text-gray-100 bg-gray-600 bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-96">
			{children}
		</div>
	);
}

export function ChipTitle({ children }) {
	return (<p class="text-2xl font-bold mb-1">{children}</p>);
}
export function ChipContent({ children }) {
	return (<p class="text-lg">{children}</p>);
}

export function ChipButton({ children }) {
	return (
		<div class="flex items-center justify-center bg-acm-blue bg-opacity-70 py-1 px-3 mt-1 rounded-xl space-x-2 text-2xl hover:text-acm-light-blue">
			{children}
		</div>
	);
}
