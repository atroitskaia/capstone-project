import React from "react";
import Sentiment from "./sentiment/Sentiment";
import URLBox from "./urlBox/URLBox";
import Features from "./features/Features";

const MainLanding = () => {
  return (
    <>
      <Sentiment />
      <Features />
      <URLBox />
    </>
  );
};

export default MainLanding;
