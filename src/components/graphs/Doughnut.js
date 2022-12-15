import React from "react";
import {normalizeDataForGraphs} from "../../utils/utils";

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
import {Chart} from "react-chartjs-2";

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

const DoughnutChart = ({chartData, website, frequency}) => {
    const averageSplitSentiment = () => {
        const positive = chartData["absolute"][frequency]["positive"].reduce((acc, val) => acc + val, 0);
        const neutral = chartData["absolute"][frequency]["neutral"].reduce((acc, val) => acc + val, 0);
        const negative = chartData["absolute"][frequency]["negative"].reduce((acc, val) => acc + val, 0);

        const total = positive + neutral + negative;

        return [(positive / total) * 100, (neutral / total) * 100, (negative / total) * 100];
    };

    const [positive, neutral, negative] = averageSplitSentiment();
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
            style={{maxWidth: "600px", margin: "auto", marginBottom: "20px"}}
        >
            <h1 style={{marginTop: "12px"}}>{website} Overall Sentiment</h1>
            <Chart type="doughnut" data={data}/>
        </div>
    );
};

export default DoughnutChart;
