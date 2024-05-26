import React from "react";
import { officers } from "../data/officers";

export default function Officers(){
    return (
        <section id="officers">
            <h1>Executive Committee</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {officers.map((officer) => (
                    <div key={officer.id} className="bg-gray-800 p-4 rounded-lg">
                        <h2>{officer.name}</h2>
                        <p>{officer.position}</p>
                        <a href={"mailto:" + officer.email}>{officer.email}</a>
                        <p>Committees: {officer.committees.join(", ")}</p>
                        <img src={officer.photo} height="64px" width="64px"></img>
                    </div>
                ))}
            </div>
        </section>
    );
}