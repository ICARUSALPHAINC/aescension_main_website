import React from "react";
import gameTitle from "../assets/AESCENSION.png";

const Homepage = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-200 justify-center items-center">
      <div className="flex flex-col">
        <div className="p-20">
          <img
            src={gameTitle}
            alt="GameTitlePng"
            className="lg:h-[100px] md:h-[70px] sm:h-[50px]"
          />
        </div>
        <div className="flex justify-center">
          <div class="relative inline-flex  group">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#"
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get it now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
