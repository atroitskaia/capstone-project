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
    <h1>{props.website}</h1>
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
            // backgroundColor: "#00FF00",
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            borderColor: 'rgba(0, 255, 0, 1)',
            barPercentage: 33,
            pointRadius: 0,
            tension: 0.4,
            borderWidth: 2,
            barThickness: 5
          },
          {
            label: "Negative",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["negative"]),
           // backgroundColor: "#FF0000",
           backgroundColor: "rgba(255, 99, 132, 0.5)", 
          //  borderColor: "#FF0000",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
            barPercentage: 33,
            pointRadius: 0,
            tension: 0.4,
            barThickness: 5
          },
          {
            label: "Neutral",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["neutral"]),
            // backgroundColor: "#9F9F9F",
            backgroundColor: "rgba(255, 206, 86, 0.5)", 
            borderColor:  "rgba(255, 206, 86, 1)",
            barPercentage: 33,
            borderWidth: 2,
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