import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";
import Pricing from "../../Pricing";

function Home() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
