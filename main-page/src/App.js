import * as React from "react";
import ResponsiveAppbar from "./components/navBar";
import Homepage from "./components/homePage";
import GameInfo from "./components/gameInfo";
import NewsSection from "./components/newsSection";
const pages = ["Game Info", "Heroes", "Community"];
const settings = ["Log In", "Profile", "Settings", "Sign Up"];
//make hype by making something like robertstudios instead of the 3 things we do the 3 factions

function App() {
  return (
    <div>
      <ResponsiveAppbar />
      <Homepage />
      <GameInfo />
      <NewsSection />
    </div>
  );
}
export default App;
