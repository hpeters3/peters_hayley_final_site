import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className ="flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:text-left mb-16 md:mb-0 text-center">
                    <h1 className="sm:text-4xl mb-4 font-medium text-white">Hi, I'm Hayley.<br className="hidden lg:inline-block"/> I'm passionate about building websites that clients value.</h1>
                    <p className="mb-8">I took programming classes in high school, and quickly found my niche in web development. I then pursued a diploma in full stack web development at Red River College Polytechnic, with a graduation date of January 2026. My preferred editor font is Consolas. For my terminal I use Windows PowerShell, however for my Ruby applications I use Ubuntu.</p>
                    <a href="mailto:8hayleypeters6@gmail.com" className="inline-flex text-white py-2 px-6 focus:outline-nonehover:bg-green-600 rounded text-lg" style={{background: "#AD2831"}}>Contact Me</a>
                    <a href="#projects" className="ml-4 inline-flex py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg" style={{background: "#640D14"}}>See My Past Work</a>
                </div>
                <div className="lg:max-w-lg w-5/6">
                    <img src="profile.png" alt="An eventual image of me."className="rounded"></img>
                </div>
            </div>
        </section>
    )
}