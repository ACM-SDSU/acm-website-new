import React from "react";

export default function Events(){
    return (
        <section id="events"  class="pt-16 min-h-screen">
            <h1 class="text-4xl font-bold text-center m-4">Upcoming Events</h1>
            <div class="flex flex-row justify-center">
                <div class="bg-gray-600 p-5 w-3/4 mt-6 mb-4 rounded-xl flex flex-col items-center justify-center">
                    <iframe class="bg-white border-0 w-full" height="480px" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=YXp0ZWNzLmFjbUBnbWFpbC5jb20&src=NGEwNGNlODI4ZTg3NzI5Mjc2ZGVkNWIyZDk5YWUxNmYzNDJjZjUxN2ZmOTM4OWE1OWViYzNkYjNmYmFkNDA4ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MWU3OWI1NTM0MzI5MGJlNWM3YmY5MzVmNjFmNDhmODkwNmIxZTkxZDI2MTE2ZWRjMjZiOWViYmZlMTZkNmNmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ODZkNTY1ZmQ3NDYxYmQyNzRhODE4YWQ3ODk3MGM2MGRhMDNhNjgyZTcwZTBjNzIwNjJjODEyYmE4YjE3OTBiMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NmRmNmZjZTgyYjhmYzYwNDdiNmE0NTIzNzExODk2YmY1NWMwZjI4YTQ1MzYzODI5MjdlYjY4MjQ3NGU0ZDcxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%238E24AA&color=%23AD1457&color=%23F09300" />
                </div>
            </div>
        </section>
    );
}