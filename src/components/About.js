import React from "react";
import {info} from "../data/meta";

export default function About(){
    return (
        <section id="about" class="pt-16 h-screen">
            <h1 class="text-4xl font-bold text-center m-4">About the ACM Chapter</h1>
            <div class="flex flex-row space-x-4 p-4">
                <div class="p-4 w-1/6">

                </div>
                <div class="p-4 w-2/3 text-lg">
                    <p dangerouslySetInnerHTML={{__html: info.description}}></p>
                </div>
                <div class="p-4 w-1/6">

                </div>
            </div>
        </section>
    );
}