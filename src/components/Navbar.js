import React from "react";
import SDSU_Small_TR from "../images/logos/SDSU_Small_TR.png";

export default function Navbar() {
    return (
      <header className="bg-acm-dark-blue md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="overview" class="flex justify-center items-center ml-3 text-xl">
              <img src={SDSU_Small_TR} class="h-6 mt-1 mr-2" />Association for Computing Machinery
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-300">
            <a href="#about" className="mr-5 hover:text-acm-yellow">
              About
            </a>
            <a href="#officers" className="mr-5 hover:text-acm-yellow">
              Officers
            </a>
            <a href="#guestspeakers" className="mr-5 hover:text-acm-yellow">
              Guest Speakers
            </a>
            <a href="#events" className="mr-5 hover:text-acm-yellow">
              Upcoming Events
            </a>
            <a href="#contact" className="mr-5 hover:text-acm-yellow">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }