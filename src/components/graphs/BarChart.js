import React from "react";
import { normalizeDataForGraphs } from "../../utils/utils";

import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  const type = "absolute";
  const frequency = "all";

  return (
    <>
    <h1>{props.website} Bar Chart</h1>
    <Chart
      type="bar"
      options={{
        scales: {
          x: {
            type: "time"
          }
        }
      }}
      data={{
        datasets: [
          {
            label: "Positive",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["positive"]),
            backgroundColor: "#00FF00",
            borderColor: "#00FF00",
            barPercentage: 33,
            pointRadius: 0,
            tension: 0.4,
            borderWidth: 1,
            barThickness: 5
          },
          {
            label: "Negative",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["negative"]),
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            barPercentage: 33,
            pointRadius: 0,
            tension: 0.4,
            barThickness: 5
          },
          {
            label: "Neutral",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["neutral"]),
            backgroundColor: "#9F9F9F",
            borderColor: "#9F9F9F",
            barPercentage: 33,
            pointRadius: 0,
            tension: 0.4,
            barThickness: 5
          }
        ]
      }}
    />
    </>
  );
}

export default BarChart;