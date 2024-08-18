import React from "react";
import { info } from "../data/meta";

export default function About() {
	return (
		<section id="about" class="py-8">
			<h1 class="text-4xl font-bold text-center m-4">About the ACM Chapter</h1>
			<p class="m-4 mx-auto px-4 max-w-3xl text-lg" dangerouslySetInnerHTML={{ __html: info.description }}></p>
		</section>
	);
}
