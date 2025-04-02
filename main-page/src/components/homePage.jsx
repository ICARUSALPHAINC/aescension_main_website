import React, { useState } from "react";
import gameTitle from "../assets/AESCENSION.png";
import backgroundImage from "../assets/bg3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./buttonAnimation.css";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      className="flex h-screen w-screen justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col">
        <div
          className="p-10 bg-white/20 rounded-lg backdrop-blur-md"
          id="gameTitle"
        >
          <img
            src={gameTitle}
            alt="GameTitlePng"
            className="lg:h-[100px] md:h-[70px] sm:h-[50px]"
          />
        </div>
        <div className="flex justify-center mt-10" onClick={openModal}>
          <div className="button-container" id="button">
            <div className="button-border-light"></div>
            <p title="Get it now" className="button-text" role="button">
              Get it now
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="flex flex-col bg-white/90 backdrop-blur-md p-10 rounded-lg gap-7 justify-center items-center">
            <h2 className="text-2xl font-bold">
              {" "}
              Coming Soon on IOS and Android{" "}
            </h2>
            <button
              className="bg-gray-900 text-white p-2 rounded-lg w-20"
              onClick={closeModal}
            >
              {" "}
              Close{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
