import React from "react";
import { polarArea } from "react-chartjs-2";


function PolarAreaChart({ chartData }) {
    return <polarArea data={chartData} options={{
        plugins: {
            title: {
                display: true,
                text: 'Doughnut Chart',
                color:'blue',
                font: {
                    size:34
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true
                               },
              //  datalabels: {
              //                   formatter: (value, context) => {
  
                             
              //                     function totalSum(total, datapoint){
              //                     return total + datapoint;
              //                     }
              //                     return value;
              //                   }
              //                  }
                          
            }
        }
        
        
      }} />
    }
  export default PolarAreaChart;