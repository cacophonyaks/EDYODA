import React from "react";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export const PiechartCancelation = (props) => {
    const [bookingsData, setbookingData] = useState({
        total_bookings: 0,
        cancelled_hotelBookings: 0,
        total_uncancelled: 0,
    });


    const sendRequest= async () => {
        const response = await axios.get(`http://localhost:4000/api/hotelsdata/cancelation`)
        .catch((err) => {console.log(err)});
        const data = await response.data;
        return data;
      }

    useEffect(() => {
        sendRequest()
        .then((data)=>{setbookingData(data)
            props.setcancelationRate(data)
        });
        // eslint-disable-next-line
    }, []);
    console.log(bookingsData);

    const series = [bookingsData.cancelled_hotelBookings, bookingsData.total_uncancelled];
  return (
    <React.Fragment>
        <div className="container-fuild">
            <Chart type="pie"
                   width={500}
                   height={550}
                   
                   series={[series[1], series[0]]}
                   options={{
                        title:{text:"Canceltion Rate",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        labels: ['Cancelled', 'Completed'],
                        colors: ['#FF4560', '#FFB64D', '#28C76F', '#00E396', '#00CFDD']
                     }}
            >

            </Chart>
        </div>
    </React.Fragment>
  )
}

export const PiechartYaers = (props) => {
    const [yearsData, setyearsData] = useState({
        total_Data: 0,
        year2020: 0,
        year2021: 0,
        year2022: 0
    });


    const sendRequest= async (props) => {
        const response = await axios.get(`http://localhost:4000/api/hotelsdata/year`)
        .catch((err) => {console.log(err)});
        const data = await response.data;
        return data;
      }

    useEffect(() => {
        sendRequest()
        .then((data)=>{setyearsData(data)
            props.setyearData(data)
        });
    }, []);

    const series = [yearsData.year2020, yearsData.year2021, yearsData.year2022];
  return (
    <React.Fragment>
        <div className="container-fuild">
            <Chart type="pie"
                   width={500}
                   height={550}
                   
                   series={[series[0], series[1], series[2]]}
                   options={{
                        title:{text:"Years Data",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                        labels: ['2020', '2021', '2022'],
                        colors: [ '#28C76F', '#00E396', '#00CFDD']
                     }}
            >

            </Chart>
        </div>
    </React.Fragment>
  )
}


export const LocationsPiechart = (props) => {
  const [locationsData, setlocationsData] = useState({
    total: 0,
    resort:0,
    city: 0
});


  const sendRequest= async (props) => {
      const response = await axios.get(`http://localhost:4000/api/hotelsdata/location`)
      .catch((err) => {console.log(err)});
      const data = await response.data;
      return data;
    }

  useEffect(() => {
      sendRequest()
      .then((data)=>{setlocationsData(data)
          props.setlocationsData(data)
      });
  }, []);

  const series = [locationsData.city, locationsData.resort];
return (
  <React.Fragment>
      <div className="container-fuild">
          <Chart type="pie"
                 width={500}
                 height={550}
                 
                 series={[series[0], series[1]]}
                 options={{
                      title:{text:"Locations Ratio",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                      labels: ['City', 'Resort'],
                      colors: [ '#28C76F', '#00E396']
                   }}
          >

          </Chart>
      </div>
  </React.Fragment>
)
}



export const MadiumChart = (props) => {
  const [mediumData, setmediumData] = useState({
    total:0,
    online: 0,
    offline: 0,
    agent: 0,
    partnership: 0
  });

  const sendRequest= async (props) => {
      const response = await axios.get(`http://localhost:4000/api/hotelsdata/medium`)
      .catch((err) => {console.log(err)});
      const data = await response.data;
      return data;
    }

  useEffect(() => {
      sendRequest()
      .then((data)=>{setmediumData(data)
          props.setmediumData(data)
      });
  }, []);

  const series = [mediumData.online, mediumData.offline, mediumData.agent, mediumData.partnership];
return (
  <React.Fragment>
      <div className="container-fuild">
          <Chart type="pie"
                 width={500}
                 height={550}
                 
                 series={[series[0], series[1],series[2],series[3]]}
                 options={{
                      title:{text:"Booking Medium",align:"center",margin:20,style:{fontSize:"25px",fontWeight:"bold"}},
                      labels: ['Online', 'Offline', 'Agent', 'Partnership'],
                      colors: [ '#28C76F', '#00E396', '#00CFDD', '#FF4560']
                   }}
          >

          </Chart>
      </div>
  </React.Fragment>
)
}

