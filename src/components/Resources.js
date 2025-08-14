import React from "react";
import {BadgeCheckIcon, ClipboardListIcon} from "@heroicons/react/solid";

//title, image/icon, summary, link

export default function Resources() {
    return(
        <section id="resources">
           <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ClipboardListIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl fnt-medium title-font text-white mb-4">Resources</h1>
                    <p className="text-base leading-relaxed xl:2-2/4 log:w-3/4 mx-auto">Resources I've used throughout my time as a student that made coursework easier, cleaner, and more efficient.</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <a href="https://github.com">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img src="github.png" className="w-6 h-6 flex-shrink-0 mr-4"/>
                                <p><span className="title-font font-medium text-white">GitHub</span> - a source control software I've used for countless projects.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <a href="https://www.w3schools.com/">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img src="w3schools.png" className="w-6 h-6 flex-shrink-0 mr-4"/>
                                <p><span className="title-font font-medium text-white">W3Schools</span> -  an educational platform for all things web development.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <a href="https://www.docker.com/">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img src="docker.png" className="w-6 h-6 flex-shrink-0 mr-4"/>
                                <p><span className="title-font font-medium text-white">Docker</span> - a platform used for deploying code to production.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <a href="https://www.freecodecamp.org/">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <img src="freecodecamp.png" className="w-6 h-6 flex-shrink-0 mr-4"/>
                                <p><span className="title-font font-medium text-white">Free Code Camp</span> - a educational platform with many coding courses.</p>
                            </div>
                        </a>
                    </div>
                </div>
           </div>
        </section>
    );
}