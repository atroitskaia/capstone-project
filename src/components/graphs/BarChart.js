// import React from "react";
// import "chartjs-adapter-moment";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Legend,
//   Title,
//   Tooltip,
//   // SubTitle
// } from "chart.js";
// import { Chart } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Legend,
//   Title,
//   Tooltip
//   // SubTitle
// );





// const type = "absolute";
// const frequency = "all";

// function points(arr_x, arr_y) {
//   let ret = [];

//   for (let i = 0; i < arr_x.length && i < arr_y.length; i++) {
//     ret.push({ x: arr_x[i], y: arr_y[i] });
//   }

//   return ret;
// }

// export function BarChart() {
//   return (
//     <Chart
//       type="bar"
//       options={{
//         indexAxis: "x",
//         scales: {
//           y: {
//             stacked: true,
//             beginAtZero: true,
//           },
//           x: {
//             type: "time",
//             // barThickness: "display"
//           },
//         },
//       }}
//       data={{
//         datasets: [
//           {
//             label: "Positive",
//             data: points(data["timestamps"], data[type][frequency]["positive"]),
//             barPercentage: 50,
//             backgroundColor: "#00FF00",
//             fill: true,
//             borderColor: "#00FF00",
//             borderWidth: 5,
//             borderRadius: 20,

//             // pointRadius: 0,
//             // tension: 0.4
//           },
//           {
//             label: "Negative",
//             data: points(data["timestamps"], data[type][frequency]["negative"]),
//             backgroundColor: "#FF0000",
//             barPercentage: 50,
//             borderColor: "#FF0000",
//             borderWidth: 5,
//             //   pointRadius: 0,
//             //   tension: 0.4
//           },
//           {
//             label: "Neutral",
//             data: points(data["timestamps"], data[type][frequency]["neutral"]),
//             barPercentage: 50,
//             backgroundColor: "#9F9F9F",
//             borderColor: "#9F9F9F",
//             borderWidth: 5,
//             // pointRadius: 0,
//             // tension: 0.4
//           },
//         ],
//       }}
//     />
//   );
// }
// export default BarChart;
