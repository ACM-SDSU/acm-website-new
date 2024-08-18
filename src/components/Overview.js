import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import ComputerChip from "../images/logos/ComputerChip.jpg";
import { InfoChip, ChipTitle, ChipContent, ChipButton } from "./InfoChip";
import ILink from "./Link";

export default function Overview() {
	return (
		<section id="overview" class="min-h-screen bg-cover bg-center grid" style={{ backgroundImage: `url(${ComputerChip})` }}>
			<div class="bg-black bg-cover bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
				<h1 class="text-8xl text-gray-100 w-4/5 font-bold text-center mb-4">Welcome to <span class="text-acm-light-blue">ACM</span> @<span class="text-acm-red">SDSU</span>!</h1>
				<h2 class="text-4xl text-gray-300 w-4/5 font-bold text-center mb-4">2024-2025 Academic Year</h2>
				<div class="flex flex-row flex-wrap gap-4 p-4 justify-center">
					<InfoChip>
						<ChipTitle>About Us</ChipTitle>
						<ChipContent>We are the <span class="text-acm-light-blue font-bold">Association for Computing Machinery (ACM)</span> Student Chapter at <span class="text-acm-red font-bold">San Diego State University</span>.</ChipContent>
						<ChipButton>
							<ILink to="about">
								See What We Offer
							</ILink>
						</ChipButton>
					</InfoChip>

					<InfoChip>
						<ChipTitle>Meeting Times</ChipTitle>
						<ChipContent>
							<b class="text-acm-yellow">
								Wednesdays from 4:00 - 5:00pm
							</b> at <a href="https://everettrichards.com" target="_blank">
								<b class="underline hover:text-acm-yellow">
									Location TBD
								</b>
							</a>
							, plus additional workshops and seminars throughout the week.
						</ChipContent>
						<ChipButton>
							<ILink to="events">
								View Event Calendar
							</ILink>
						</ChipButton>
					</InfoChip>
					<InfoChip>
						<ChipTitle>Join the ACM Chapter</ChipTitle>
						<ChipContent>Join our Discord server to stay up to date with all the latest ACM news and upcoming events.</ChipContent>
						<ChipButton>
							<img class="w-9 h-9 mr-2" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" />
							<a href="https://discord.gg/UuNuggpKYV" target="_blank">
								discord.gg/UuNuggpKYV
							</a>
						</ChipButton>
					</InfoChip>
				</div>
			</div>
		</section>
	);
}
