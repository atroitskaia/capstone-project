
import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
    return <Doughnut data={chartData} options={{
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

  export default DoughnutChart;;