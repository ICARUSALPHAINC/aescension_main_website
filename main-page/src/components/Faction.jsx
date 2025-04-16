import React, { useState } from "react";

const Faction = () => {
  const [faction, setFaction] = useState(0);

  const handleFactionClick = (factionNumber) => {
    if (faction === factionNumber) {
      setFaction(0);
    } else {
      setFaction(factionNumber);
    }
  };

  return (
    <section className="flex flex-col bg-gray-300 w-screen h-screen py-10 gap-10">
      <div className="flex w-full justify-center">
        <h1 className="text-6xl font-bold">Choose Your Faction</h1>
      </div>
      <div className="flex w-full h-full bg-red-500">
        <div
          className={`flex justify-center items-center ${
            faction === 1 ? "w-[90%]" : "w-1/3"
          } bg-blue-500 transition-all duration-300 cursor-pointer`}
          onClick={() => handleFactionClick(1)}
        >
          <h1 className="text-4xl font-bold">Faction 1</h1>
        </div>
        <div
          className={`flex justify-center items-center ${
            faction === 2 ? "w-[90%]" : "w-1/3"
          } bg-blue-100 transition-all duration-300 cursor-pointer`}
          onClick={() => handleFactionClick(2)}
        >
          <h1 className="text-4xl font-bold">Faction 2</h1>
        </div>
        <div
          className={`flex justify-center items-center ${
            faction === 3 ? "w-[90%]" : "w-1/3"
          } bg-yellow-500 transition-all duration-300 cursor-pointer`}
          onClick={() => handleFactionClick(3)}
        >
          <h1 className="text-4xl font-bold">Faction 3</h1>
        </div>
      </div>
    </section>
  );
};

export default Faction;
