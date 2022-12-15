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

const floatToPercentage = (float) => {
  return (float * 100).toFixed(2);
}

const DoughnutChart = (props) => {
  const type = "absolute";
  const frequency = "all";

  const averageSplitSentiment = ({ absolute }) => {
    let total = 0;
    let positive = 0;
    let neutral = 0;
    let negative = 0;

    absolute.all.positive.forEach((count) => {
      positive = positive + count;
    });

    absolute.all.neutral.forEach((count) => {
      neutral = neutral + count;
    });

    absolute.all.negative.forEach((count) => {
      negative = negative + count;
    });

    total = positive + neutral + negative;

    return [(positive / total)*100, (neutral / total)*100, (negative / total)*100];
  };

  const [positive, neutral, negative] = averageSplitSentiment(props.apiData);
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [positive, neutral, negative],
        backgroundColor: [
          // "rgba(54, 162, 235, 0.5)",
          "rgba(0, 255, 0, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(0, 255, 0, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };  

  return (
    <div
      className="doughnut-container"
      style={{ maxWidth: "600px", margin: "auto", marginBottom: "20px"  }}
    >
      <h1 style={{ marginTop: "12px"}}>{props.website} Overall Sentiment</h1>
      <Chart type="doughnut" data={data} />
    </div>
  );
};

export default DoughnutChart;
