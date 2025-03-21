import React, { useState } from "react";
import gameTitle from "../assets/AESCENSION.png";
import backgroundImage from "../assets/bg3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Homepage = () => {
  const  [isModalOpen, setIsModalOpen] = useState(false)
  useGSAP(() => {
    gsap.from("#gameTitle", {
      opacity: 0,
      duration: 1.5,
      ease: "power1.in",
      onComplete: () => {
        gsap.to("#button", {
          opacity: 1,
          duration: 3,
          ease: "power1",
        });
      },
    });
  });

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
   return (
    <div
      className="flex h-screen w-screen justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col">
        <div className="p-10 bg-white/20 rounded-lg backdrop-blur-md" id="gameTitle">
          <img
            
            src={gameTitle}
            alt="GameTitlePng"
            className="lg:h-[100px] md:h-[70px] sm:h-[50px]"
          />
        </div>
        <div className="flex justify-center mt-10" onClick={openModal}>
          <div class="relative inline-flex group opacity-0" id="button">
            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <p
              title="Get quote now"
              class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Get it now
            </p>
          </div>
        </div>
      </div>
 
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}> 
        <div className="flex flex-col bg-white/90 backdrop-blur-md p-10 rounded-lg gap-7 justify-center items-center">
          <h2 className="text-2xl font-bold"> Coming Soon on IOS and Android </h2>
          <button className="bg-gray-900 text-white p-2 rounded-lg w-20" onClick={closeModal}> Close </button>
        </div>
      </div>
   )}
  </div>
  );
};

export default Homepage;
