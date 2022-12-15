import React from "react";
import {normalizeDataForGraphs} from "../../utils/utils";

import "chartjs-adapter-moment";
import {
    Chart as ChartJS,
    TimeScale,
    LinearScale,
    LineController,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import {Chart} from "react-chartjs-2";

ChartJS.register(
    TimeScale,
    LinearScale,
    LineController,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({chartData, website, type, frequency}) => {
    return (
        <>
            <h1 style={{marginTop: '12px'}}>{website}</h1>
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
                            data: normalizeDataForGraphs(chartData["timestamps"], chartData[type][frequency]["positive"]),
                            backgroundColor: 'rgba(0, 255, 0, 0.5)',
                            borderColor: 'rgba(0, 255, 0, 1)',
                            pointRadius: 0,
                            tension: 0.4,
                            borderWidth: 2,
                            lineThickness: 5
                        },
                        {
                            label: "Negative",
                            data: normalizeDataForGraphs(chartData["timestamps"], chartData[type][frequency]["negative"]),
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                            //  borderColor: "#FF0000",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 2,
                            pointRadius: 0,
                            tension: 0.4,
                        },
                        {
                            label: "Neutral",
                            data: normalizeDataForGraphs(chartData["timestamps"], chartData[type][frequency]["neutral"]),
                            backgroundColor: "rgba(255, 206, 86, 0.5)",
                            borderColor: "rgba(255, 206, 86, 1)",
                            borderWidth: 2,
                            pointRadius: 0,
                            tension: 0.4,
                        }
                    ]
                }}
            />
        </>
    );
}

export default LineChart;
