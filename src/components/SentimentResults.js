import React, { useState } from "react";
// import  DoughnutChart from "./graphs /Doughnut"
import { FetchSentiment } from "../utils/FetchSentiment";
// import TestGraph from "./graphs/TestGraph";
// import LineGraph from "./graphs/LineGraph";

import BarChart from "./graphs/BarChart";
//import DoughnutChart from "./graphs/Doughnut";
import LineChart from "./graphs/LineChart";
// import BubbleChart from "./graphs/BubbleChart";
import RadarChart from "./graphs/RadarChart"
import PolarAreaChart from "./graphs/PolarAreaChart";
import { UserData, sample_1 } from "../seed-data/seedData";
import { Chart as ChartJS} from 'chart.js/auto'

console.log(UserData)

//this function will display Bar and Line charts 

const SentimentResults = () => {
    const [userData, setUserData] = useState({
        // labels: UserData.map(data => data.year),
        labels: sample_1.date,
        datasets: [{
            label: "Positive Sentiment",
            // data: UserData.map(data => data.userGain),
            data: sample_1.positive,
            backgroundColor: '#1ae84d'
        },
    {
            label: "Negative Sentiment",
            data: sample_1.negative,
             backgroundColor:'#e81a2f'},
    {
        label: "Neutral Sentiment",
        data: sample_1.neutral,
        backgroundColor: '#1a99e8'
    }

]


    });

// this function will display Doughnut Chart

// const SentimentResults = () => {
//     const [userData, setUserData] = useState({
//         // labels: UserData.map(data => data.year),
//     //    labels: sample_1.sentiment,
//         datasets: [{
//             label: 'Sentiment Result',
//           //  borderColor: ['rgba(255,206,86,0.2)'],
//             // backgroundColor: [//'rgba(255,206,86,0.2)',
//             // 'rgba(232,99,132,1)' ,
//             // 'rgba(232,211,6,1)'],

//             // pointBackgroundColor: ['rgba(255,206,86,0.2)'],
//             // data: sample_1.sentiment,
//             // backgroundColor:['rgba(255,206,86,0.2)'],
//         },    
//         {
//             label: "Positive Sentiment",
//            // data: UserData.map(data => data.userGain),
//             data: sample_1.positive,
//              backgroundColor: '#1ae84d'

//         },
//     {
//             label: "Negative Sentiment",
//             data: sample_1.negative,
//             backgroundColor:'#e81a2f',
//     },
//     {
//         label: "Neutral Sentiment",
//         data: sample_1.neutral,
//         backgroundColor: 'blue'
//     }

// ]

// });


    


    return (
            <div>
                {/* <TestGraph />  */}
                {/* <DoughnutChart />  */}
                <div style={{width: 800}}>
                    <BarChart chartData={userData} />
                    {/* <BubbleChart chartData={userData} /> */}
                    <PolarAreaChart chartData={userData} />                  
                    <LineChart chartData={userData} />
                    <RadarChart chartData={userData}/>
                    {/* <DoughnutChart chartData={userData} /> */}
                {/* <LineGraph /> */}
                <FetchSentiment />
            </div>
        </div>
    )

}

export default SentimentResults;


