import React from "react";
import ILink from "./Link";

export function AcmAtSdsu({ children }) {
	return (
        <ILink to="overview">
            <span class="acm-at-sdsu font-bold">
                <span class="text-acm-light-blue">ACM</span> @<span class="text-acm-red">SDSU</span>
            </span>
        </ILink>
	);
}

export function AcmAtSdsuLightBg({ children }) {
	return (
        <ILink to="overview">
            <span class="acm-at-sdsu font-bold hover:text-yellow-500">
                <span class="text-acm-blue">ACM</span> @<span class="text-acm-red">SDSU</span>
            </span>
        </ILink>
	);
}