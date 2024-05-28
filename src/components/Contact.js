import React from "react";

export default function Contact(){
    return (
        <section id="contact"  class="pt-16 pb-8">
            <h1 class="text-4xl font-bold text-center m-4">Contact Us</h1>
            <p class="text-center text-xl">The ACM welcomes you to reach out at any time via Discord, Instagram, or Email.</p>
            <div class="flex flex-row space-x-4 p-4 justify-center text-2xl text-center">
                <div class="p-4 w-1/5">
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex items-center justify-center space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        discord.gg/UuNuggpKYV
                    </a>
                </div>
                <div class="p-4 w-1/5">
                    <a href="https://www.instagram.com/sdsu_acm/" target="_blank" class="flex items-center justify-center space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"/>
                        @sdsu_acm
                    </a>
                </div>
                <div class="p-4 w-1/5">
                    <a href="mailto:aztecs.acm@gmail.com" target="_blank" class="flex items-center justify-center space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://cdn-icons-png.flaticon.com/256/281/281769.png"/>
                        aztecs.acm@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}