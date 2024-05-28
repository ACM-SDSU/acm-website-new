import React from "react";
import { officers } from "../data/officers";

export default function Officers(){
    return (
        <section id="officers">
            <h1 class="text-4xl font-bold text-center m-4">Executive Committee</h1>
            <div class="flex flex-row space-x-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-8 pr-8">
                    {officers.map((officer) => (
                        <div key={officer.id} className="text-acm-yellow bg-gray-600 p-4 rounded-xl flex flex-col items-center justify-center">
                            <img src={officer.photo} class="w-32 h-32 mb-1 rounded-3xl"></img>
                            <a href={"mailto:" + officer.email} class="text-2xl flex items-center justify-center space-x-2 font-bold">{officer.name} (
                                <img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon"></img>
                                )
                            </a>
                            <p class="text-xl text-acm-light-blue">{officer.position}</p>
                            <p class="text-center text-gray-200">Major: {officer.major}</p>
                            <p class="text-center text-gray-400">Committees: {officer.committees.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}