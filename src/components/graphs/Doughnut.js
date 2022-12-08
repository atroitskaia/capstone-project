import React from "react";
import { normalizeDataForGraphs } from "../../utils/utils";

import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  DoughnutController,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  DoughnutController,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChart = (props) => {
  const type = "absolute";
  const frequency = "all";

  const averageSplitSentiment = ({absolute}) => {
      let total = 0;
      let positive = 0;
      let neutral = 0;
      let negative = 0;
      
      absolute.all.positive.forEach(count => {
          positive = positive + count;
        })
        
        absolute.all.neutral.forEach(count => {
            neutral = neutral + count;
        })
        
        absolute.all.negative.forEach(count => {
            negative = negative + count;
        })
        
    total = positive + neutral + negative;

    return [positive / total, neutral / total, negative / total];
  };

  return (
    <div className="doughnut-container" style={{maxWidth: '400px', margin: 'auto'}}>
      <h1 style={{ marginTop: "12px" }}>{props.website} Doughnut Chart</h1>
      <Chart
        type="doughnut"
        options={{
            cutoutWidth: "0%",
            responsive: true,
            
        //   scales: {
        //     x: {
        //       type: "time",
        //     }
        //   }
        }}
        const  data={{
        // labels: ["Positive", "Neutral", "Negative"],
          datasets: [
            {
            //   data: averageSplitSentiment(props.apiData),
            //   options: {
            //   maintainAspectRatio: false,
            //   },
            // }
        
        //  labels: ["Positive", "Neutral", "Negative"]
        //     ,
            // {
              label: "Positive",
              data: averageSplitSentiment(props.apiData),

            //   data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["positive"]),
              backgroundColor: "#00FF00",
            //   borderColor: "#00FF00",
          //     pointRadius: 0,
          //     tension: 0.4
            // },
            // {
              label: "Negative",
              data: averageSplitSentiment(props.apiData),
          //     data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["negative"]),
              backgroundColor: "#FF0000",
          //     borderColor: "#FF0000",
          //     pointRadius: 0,
          //     tension: 0.4
            // },
            // {
              label: "Neutral",
              data: averageSplitSentiment(props.apiData),
          //     data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["neutral"]),
              backgroundColor: "#9F9F9F",
          //     borderColor: "#9F9F9F",
          //     pointRadius: 0,
          //     tension: 0.4
            }
          ]
        }}
      />
    </div>
  );
};

export default DoughnutChart;
