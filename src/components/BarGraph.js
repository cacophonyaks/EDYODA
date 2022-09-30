import React from 'react';
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const BarGraph = (props) => {
    const [monthsData, setmonthsData] = useState({
        total_Data: 0,
        janMonth: 0,
        febMonth: 0,
        marMonth: 0,
        aprMonth: 0,
        mayMonth: 0,
        junMonth: 0,
        julMonth: 0,
        augMonth: 0,
        sepMonth: 0,
        octMonth: 0,
        novMonth: 0,
        decMonth: 0
    });
    const sendRequest= async (props) => {
        const response = await axios.get(`http://localhost:4000/api/hotelsdata/month`)
        .catch((err) => {console.log(err)});
        const data = await response.data;
        return data;
      }
  
    useEffect(() => {
        sendRequest()
        .then((data)=>{setmonthsData(data)
            props.setmonthsData(data)
        });
        // eslint-disable-next-line
    }, []);

    const series=[monthsData.total_Data, monthsData.janMonth, monthsData.febMonth, monthsData.marMonth, monthsData.aprMonth, monthsData.mayMonth, monthsData.junMonth, monthsData.julMonth, monthsData.augMonth, monthsData.sepMonth, monthsData.octMonth, monthsData.novMonth, monthsData.decMonth];

  return (
    <React.Fragment>
        <div className="container-fuild">
            <Chart type="bar"
                    width={800}
                    height={550}
                    series={[{
                        name: 'Bookings',
                        data: [series[1], series[2], series[3], series[4], series[5], series[6], series[7], series[8], series[9], series[10], series[11], series[12]]
                    }]}
                    options={{
                        title:{text:"Month Data Bargraph",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        chart: {
                            type: 'bar',
                            height: 350
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded'
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent']
                        },
                        xaxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            title: {text:"Months"}
                        },
                        yaxis: {
                            title: {
                                text: 'Bookings'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return  val + "Bookings"
                                }
                            }
                        }
                    }}
            >

            </Chart>
        </div>
    </React.Fragment>
  )
}
   
