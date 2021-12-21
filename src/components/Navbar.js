import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-green-600 md:sticky top-0 z-10 shadow-md ring-4 ring-green-700 ring-opacity-70">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-2xl bg-white p-4 text-black rounded-md font-Varela">
            Cronos Owls
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-md justify-center text-white">
          <a href="#projects" className="mr-5 hover:bg-white hover:text-black rounded-md">
            Our Vision
          </a>
          <a href="#skills" className="mr-5 hover:bg-white hover:text-black rounded-md">
            Project Specifics
          </a>
          <a href="#testimonials" className="mr-5 hover:bg-white hover:text-black rounded-md">
            Roadmap
          </a>
        </nav>
        <a
          href="#marketplace"
          className="mr-10 text-white inline-flex items-center bg-green-800 border-2 py-2 px-10 focus:outline-none hover:bg-purple-400 rounded text-base mt-4 md:mt-0">
          Marketplace
        </a>
        <a
          href="#connect"
          className="text-white inline-flex items-center bg-blue-400 border-1 rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 hover:text-black rounded text-base mt-4 md:mt-0">
          Connect Wallet
        </a>
      </div>
    </header>
  );
}