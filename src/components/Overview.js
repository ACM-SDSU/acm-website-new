import React from "react";
import {info} from "../data/meta";

export default function Overview(){
    const imageUrl = 'https://scx2.b-cdn.net/gfx/news/2020/computerchips.jpg';
    return (
        <section id="overview" class="h-screen bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
            <div class="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
                <h1 class="text-8xl text-gray-100 w-3/4 font-bold text-center mb-4">Welcome to the <span class="text-acm-light-blue">ACM</span>!</h1>

                <div class="flex flex-row space-x-4 p-4 justify-center">
                    <div class="text-gray-200 bg-gray-600 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">About Us</p>
                        <p class="text-lg">We are the <b class="text-acm-light-blue">Association for Computing Machinery (ACM)</b> Student Chapter at San Diego State University.</p>
                    </div>
                    <div class="text-gray-200 bg-gray-600 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">Meeting Times</p>
                        <p class="text-lg">
                            <b class="text-acm-yellow">
                                Wednesdays from 4:00pm to 5:30pm
                            </b> (Tentative) at <a href="https://everettrichards.com" target="_blank">
                                <b class="text-acm-orange underline">
                                    Location TBD
                                </b>
                            </a>
                            , plus additional workshops and seminars throughout the week.
                        </p>
                    </div>
                    <div class="text-gray-200 bg-gray-600 p-4 rounded-xl flex flex-col items-center justify-start w-1/4">
                        <p class="text-2xl font-bold mb-1">Join the ACM Chapter</p>
                        <div class="mb-3 mt-3">
                            <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex items-center justify-center space-x-2 text-2xl">
                                <img class="w-9 h-9 mr-3" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                                discord.gg/UuNuggpKYV
                            </a>
                        </div>
                        <p>Join our Discord server to stay up to date with all the latest ACM news.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}