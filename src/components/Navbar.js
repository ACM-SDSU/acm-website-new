import React from "react";
//import SDSU_Small_TR from "../images/logos/SDSU_Small_TR.png";
const SDSU_White_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-red.jpg";
const SDSU_Red_BG = "https://media.discordapp.net/attachments/1243989668194942996/1245081775382986794/image.png?ex=66577443&is=665622c3&hm=91d0fb90bd1abf46da3d108a223d54cc6a974acdbed7c11880ce786489957250&=&format=webp&quality=lossless&width=487&height=246";
const SDSU_Black_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-white.jpg";
const ACM_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/2048px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png";
const SDSU_SVG = "https://cdn.discordapp.com/attachments/1243989668194942996/1245088566783246487/sdsu_monogram_cmyk_solid_white.svg?ex=66577a96&is=66562916&hm=7a76e8a6f54f92fa652b0013329fce2d5d0e9c566bc80d9e43f3533aa32e24d6&";

export default function Navbar() {
    return (
      <header className="bg-acm-blue md:sticky top-0 z-10 border-b-2 border-gray-700">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#overview" class="flex justify-center items-center ml-3 text-xl">
              <img src={SDSU_SVG} class="h-7 mt-1 mr-2 bg-sdsu-bright-red" />
              {/*<img src={ACM_Logo} class="h-6 mt-1 mr-2 bg-white" />*/}
              Association for Computing Machinery
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-200">
            <a href="#about" className="mr-6 hover:text-acm-yellow">
              About
            </a>
            <a href="#officers" className="mr-6 hover:text-acm-yellow">
              Officers
            </a>
            <a href="#guestspeakers" className="mr-6 hover:text-acm-yellow">
              Guest Speakers
            </a>
            <a href="#events" className="mr-6 hover:text-acm-yellow">
              Upcoming Events
            </a>
            <a href="#contact" className="mr-6 hover:text-acm-yellow">
              Contact Us
            </a>
          </nav>
        </div>
      </header>
    );
  }