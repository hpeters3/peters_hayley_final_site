import React from "react";
import {ClipboardListIcon} from "@heroicons/react/solid";

export default function Resources() {
    return(
        <section id="resources">
           <div className="px-5 py-10">
                <div className="text-center mb-20">
                    <ClipboardListIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl fnt-medium text-white mb-4">Resources</h1>
                    <p>Resources I've used throughout my time as a student that made coursework easier, cleaner, and more efficient.</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto">
                    <div className="p-2 sm:w-1/2">
                        <a href="https://github.com">
                            <div className="rounded flex p-4 items-center" style={{background: "#640D14"}}>
                                <img src="github.png" className="h-6 mr-4"/>
                                <p><span className="font-medium text-white">GitHub</span> - a source control software I've used for countless projects.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <a href="https://www.w3schools.com/">
                            <div className="rounded flex p-4 items-center" style={{background: "#640D14"}}>
                                <img src="w3schools.png" className="h-6 mr-4"/>
                                <p><span className="font-medium text-white">W3Schools</span> -  an educational platform for all things web development.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <a href="https://www.docker.com/">
                            <div className="rounded flex p-4 items-center" style={{background: "#640D14"}}>
                                <img src="docker.png" className="h-6 mr-4"/>
                                <p><span className="font-medium text-white">Docker</span> - a platform used for deploying code to production.</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <a href="https://www.freecodecamp.org/">
                            <div className="rounded flex p-4 items-center" style={{background: "#640D14"}}>
                                <img src="freecodecamp.png" className="h-6 mr-4"/>
                                <p><span className="font-medium text-white">Free Code Camp</span> - a educational platform with many coding courses.</p>
                            </div>
                        </a>
                    </div>
                </div>
           </div>
        </section>
    );
}