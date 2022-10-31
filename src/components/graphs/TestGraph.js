import React from "react";
import Plot from "react-plotly.js";
import { dummyData, convertToXYGraphFormat } from "../../utils/dummyData";


const TestGraph = () => {
   // class TestGraph extends React.Component {
   const {xArr, yArr} = convertToXYGraphFormat(dummyData);

  return (
    <Plot
      data={[
        {
          x: xArr,
          y: yArr,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
    />
  );
};

export default TestGraph;
