import React from "react";
import { normalizeDataForGraphs } from "../../utils/utils";

import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
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
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  const type = "absolute";
  const frequency = "all";

  return (
    <>
    <h1 style={{marginTop: '12px'}}>{props.website} Line Chart</h1>
    <Chart
      type="line"
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
            pointRadius: 0,
            tension: 0.4
          },
          {
            label: "Negative",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["negative"]),
            backgroundColor: "#FF0000",
            borderColor: "#FF0000",
            pointRadius: 0,
            tension: 0.4
          },
          {
            label: "Neutral",
            data: normalizeDataForGraphs(props.apiData["timestamps"], props.apiData[type][frequency]["neutral"]),
            backgroundColor: "#9F9F9F",
            borderColor: "#9F9F9F",
            pointRadius: 0,
            tension: 0.4
          }
        ]
      }}
    />
    </>
  );
}

export default LineChart;