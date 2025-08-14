import React from "react";
import {BadgeCheckIcon, ChipIcon} from "@heroicons/react/solid";

//description, languages/frameworks, tools

export default function Skills() {
    return(
        <section id="skills">
            <div className="py-10">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl fnt-medium title-font text-white mb-4">Skills</h1>
                    <p>Skills that I have, maybe.</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto">
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2">
                        <div className="bg-gray-800 rounded flex p-4">
                            <BadgeCheckIcon className="text-green-400 h-6 mr-4"/>
                            <span className="font-medium text-white">The skill (repeat six times).</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}