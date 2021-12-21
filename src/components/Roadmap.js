import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { milestones } from "../data";

export default function Roadmap() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Our Roadmap
        </h1>
        <div className="flex flex-wrap m-4">
          {milestones.map((milestones) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-600 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{milestones.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="milestone"
                    src={milestones.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {milestones.milestone}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {milestones.date}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}