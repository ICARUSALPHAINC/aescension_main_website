import eximg from '../assets/AESCENSION.png'

const GameInfo = () => {
  return (
    <div className="flex h-[60Ivh] w-screen pt-[6rem] pb-[6rem] bg-gray-300 justify-evenly items-center">
        <div className="w-1/3">
            <div>
                <p className="text-5xl text-left mb-[2rem]">BE A HERO, JOIN A FACTION, ENTER THE FIGHT!</p>
                <p className="text-left">Aescension is a free-to-play, team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl. Play as a time-jumping freedom fighter, a beat-dropping battlefield DJ, or one of over 30 other unique heroes as you battle it out around the globe.</p>
            </div>
         </div>
        <div className="w-1/3 ">
            <div>
                <img src={eximg}/>
            </div>
        </div>
    </div>
  );
};

export default GameInfo;
