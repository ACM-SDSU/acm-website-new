import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Overview(){
    const imageUrl = 'https://scx2.b-cdn.net/gfx/news/2020/computerchips.jpg';
    return (
        <section id="overview" class="h-screen bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
            <div class="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
                <h1 class="text-8xl text-gray-100 w-4/5 font-bold text-center mb-4">Welcome to <span class="text-acm-light-blue">ACM</span> @<span class="text-acm-red">SDSU</span>!</h1>
                <h2 class="text-4xl text-gray-300 w-4/5 font-bold text-center mb-4">2024-2025 Academic Year</h2>

                <div class="flex flex-row space-x-4 p-4 justify-center">
                    <div class="text-gray-100 bg-gray-600 bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">About Us</p>
                        <p class="text-lg">We are the <span class="text-acm-light-blue font-bold">Association for Computing Machinery (ACM)</span> Student Chapter at <span class="text-acm-red font-bold">San Diego State University</span>.</p>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="flex items-center justify-center bg-acm-blue bg-opacity-70 py-1 px-3 mt-1 rounded-xl space-x-2 text-2xl hover:text-acm-light-blue"
                            >
                            See What We Offer
                        </Link>
                    </div>
                    <div class="text-gray-100 bg-gray-600 bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">Meeting Times</p>
                        <p class="text-lg">
                            <b class="text-acm-yellow">
                                Wednesdays from 4:00 - 5:00pm
                            </b> at <a href="https://everettrichards.com" target="_blank">
                                <b class="underline hover:text-acm-yellow">
                                    Location TBD
                                </b>
                            </a>
                            , plus additional workshops and seminars throughout the week.
                        </p>
                        <Link
                            activeClass="active"
                            to="events"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            className="flex items-center justify-center bg-acm-blue bg-opacity-70 py-1 px-3 mt-1 rounded-xl space-x-2 text-2xl hover:text-acm-light-blue"
                            >
                            View Event Calendar
                        </Link>
                    </div>
                    <div class="text-gray-100 bg-gray-600 bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">Join the ACM Chapter</p>
                        <p class="text-lg">Join our Discord server to stay up to date with all the latest ACM news and upcoming events.</p>
                        <div>
                            <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex items-center justify-center bg-acm-blue bg-opacity-70 py-1 px-3 mt-1 rounded-xl space-x-2 text-2xl hover:text-acm-light-blue">
                                <img class="w-9 h-9 mr-2" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"/>
                                discord.gg/UuNuggpKYV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}