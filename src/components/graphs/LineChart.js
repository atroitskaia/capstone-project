// // // ./components/LineChart.js
// // //import React from "react";

// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import {Chart as ChartJS} from 'chart.js/auto'

// // // import Chart from "chart.js"

// // //import { sample_2 } from "../../utils/sample_2";
// // //console.log(sample_2)

// const canvas = document.getElementById("chart");

// const LineGraphChart = () => {
//     const [chartData, setChartData] = useState({});
   
  

//   const chart = () => {
//       const setChartdata=({
//       labels:  ["monday", "tuesday", "wednesday", "thursday", "friday"],
//       datasets: [
//         {
//           label: "level of thickness",
//           data: [32, 45, 12, 76, 69],
//           backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//           borderWidth: 4,
//         },
//       ]
//     }
//     )}

// //   // setChartData({
// //   //   data: sample_2.date,
// //   //   labels: [sample_2["date"], sample_2["negative"], sample_2["neutral"], sample_2["positive"],
// //   //   datasets: [
// //   //     {
// //   //       label: "date",
// //   //       data: sample_2["date"],
// //   //     },

// //   //     {
// //   //       label: "Negative",
// //   //       data: sample_2["negative"],
// //   //       backgroundColor: "#00FF00",
// //   //     },
// //   //     {
// //   //       label: "Neutral",
// //   //       data: sample_2["neutral"],
// //   //       backgroundColor: "#FF0000",
// //   //     },
// //   //     {
// //   //       label: "Positive",
// //   //       data: sample_2["positive"],
// //   //       backgroundColor: "#9F9F9F",
// //   //     },
// //   //   ],
// //   // });

//   useEffect(() => {
//     chart();
//   }, [])

//   return (
//     <div className="App"> 
//     <h2>Line Graph</h2>
//       <div>
//          <Line data={chartData} />
//         </div>
//        </div> 
//   );
// }






// export default LineGraphChart;


import React from "react";
import { Bar, Line } from "react-chartjs-2";
function LineChart({ chartData }) {
    return <Line data={chartData} options={{
      
      
    }} />
  }

  export default LineChart;