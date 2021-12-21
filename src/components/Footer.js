import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Contract Address
              </h2>
              <p className="mt-1">
                0x0000000000000 <br />
                Only tradable on the Cronos Network
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Our socials:
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                twitter.com <br />
                discord.com <br />
                instagram.com <br />
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                
              </h2>
              <p className="leading-relaxed">Hoot hoot!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}