import React, { useState } from "react";
import { FetchSentiment } from "../utils/FetchSentiment";
// import { UserData, sample_1 } from "../seed-data/seedData";
// import BarChart from "./graphs/BarChart";
import DoughnutChart from "./graphs/Doughnut";
import { Line } from "./graphs/Line";

// import BubbleChart from "./graphs/BubbleChart";
// import PolarAreaChart from "./graphs/PolarAreaChart";

const SentimentResults = () => {
    // useState will be used when we are making an API request  
    //   const [userData, setUserData] = useState({    
    //  });

  return (
    
      <div style={{ width: 800, margin: '0 auto', marginTop: '20px' }}>
        {/* <BarChart /> */}
        {/* <BubbleChart chartData={userData} /> */}
        {/* <PolarAreaChart chartData={userData} />*/}
        {/* <DoughnutChart chartData={userData} /> */}
        <Line />
      </div>
  );
};

export default SentimentResults;
