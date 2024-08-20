import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./AcmAtSdsu";

export default function About() {
	return (
		<section id="about" class="p-8 pb-10">
			<h1 class="text-4xl font-bold text-center m-4">About the ACM Chapter</h1>
			{/*<p class="m-4 mx-auto max-w-3xl text-lg" dangerouslySetInnerHTML={{ __html: info.description }}></p>*/}
			<p class="m-4 mx-auto max-w-3xl text-lg">
			Welcome to the Association for Computing Machinery (ACM) Student Chapter at San Diego State University, also known as <AcmAtSdsuLightBg />.

			<br /><br />

			The Association for Computing Machinery (ACM), founded in 1947, is an international scientific and educational organization
			dedicated to advancing the art, science, engineering, and application of information technology, serving both professional
			and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards.

			<br /><br />

			The <AcmAtSdsuLightBg /> is run by STEM undergraduates at San Diego State University. We are a group of students who are
			passionate about computing and technology. We are dedicated to providing our members with opportunities to learn about
			the latest technologies, network with professionals, and develop their skills.
			Socials and formals will also be a part of our club here at SDSU. We plan to take trips to computing-related locations
			such as the San Diego Supercomputing Center (SDSC), and plan on being active members of our community, fostering and
			encouraging young people to join high-tech careers by giving tours of SDSU to high school students, among many other activities.

			<br /><br />

			The <AcmAtSdsuLightBg /> is open to ALL students and faculty at San Diego State University.
			</p>
		</section>
	);
}
