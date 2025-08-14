import React from "react";

//VS Code setup, terminal setup, and preferred editor format

export default function About() {
    return(
        <section id="about">
            <div className ="flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:text-left mb-16 md:mb-0 text-center">
                    <h1 className="sm:text-4xl mb-4 font-medium text-white">Hi, I'm Hayley.<br className="hidden lg:inline-block"/> I'm passionate about building websites that clients value.</h1>
                    <p className="mb-8">This is where I talk more about myself.</p>
                    <a mailto="8hayleypeters6@gmail.com" className="inline-flex text-white bg-green-500 py-2 px-6 focus:outline-nonehover:bg-green-600 rounded text-lg">Contact Me</a>
                    <a href="#projects" className="ml-4 inline-flex bg-gray-800 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg">See My Past Work</a>
                </div>
                <div className="lg:max-w-lg w-5/6">
                    <img src="parallelreads.png" alt="An eventual image of me."className="rounded"></img>
                </div>
            </div>
        </section>
    )
}