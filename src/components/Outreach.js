import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./AcmAtSdsu";
import { C3PO } from "../data/c3po";

export default function Outreach() {
	return (
		<section id="outreach" class="p-8 pb-10">
			<h1 class="text-4xl font-bold text-center m-4">Outreach</h1>
			{/*<p class="m-4 mx-auto max-w-3xl text-lg" dangerouslySetInnerHTML={{ __html: info.description }}></p>*/}
			<p class="m-4 mx-auto max-w-3xl text-lg">
			<AcmAtSdsuLightBg /> is a proud member of the <a href="https://as.sdsu.edu/cssc/" target="_blank" class="underline">College of Sciences Student Council (CSSC)</a>. At the CSSC, we contribute to discussions about programs that will benefit students throughout the College of Sciences (CoS) at SDSU. As a CSSC member organization, we also participate in community service activities and events that promote the CoS and its students.
            <br /> <br />
            <AcmAtSdsuLightBg /> is also a founding member of the <a class="underline">Coalition of Computing-Centered and Peripheral Organizations (C3PO)</a>. C3PO is a coalition of computing-related student organizations at SDSU, as well as other organizations drawing from majors that have been historically underrepresented on the CSSC. We work together to provide students with a wide range of opportunities to learn about computing and technology, network with professionals, and develop their skills.
            <br /> <br />
            The member organizations of C3PO include:
            <ul class="list-disc ml-7">
                {C3PO.map((organization, index) => (
                    <li key={index}>
                        <a href={organization[1]} target="_blank" class="underline">
                            {organization[0]}
                        </a>
                    </li>
                ))}
            </ul>
            </p>
		</section>
	);
}
