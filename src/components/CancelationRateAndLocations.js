import React from 'react'
import { Card, CardHeader, Typography, Box} from '@mui/material';
import { PiechartCancelation } from './Piechart';
import { useState } from 'react';
import {LocationsPiechart} from './Piechart';
import { Dashboard } from './Dashboard';

export const CalcenlationAndLocations = () => {

    let date = new Date();
    date=date.toUTCString();
    const [cancelationRate, setcancelationRate] = useState({
      total_bookings: 0,
      cancelled_hotelBookings: 0,
      total_uncancelled: 0
    });

    const [locationsData, setlocationsData] = useState({
        total: 0,
        resort:0,
        city: 0
    });
  


    return (
        <div>
        <Dashboard/>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" border='ActiveBorder'>
        <Card sx={{ width:"40%",
            height:"500px", 
            margin:'auto', 
            mt:2,
            padding:2,
            boxShadow:"5px 5px 10px #ccc",
            ":hover:":{ boxShadow:"20px 20px 40px #ccc" },
        }}>
    
    
        <CardHeader
          subheader={date}
        />
      
        <Box  display="flex" justifyContent="center" alignItems="center" flexDirection="row">
          <PiechartCancelation
            setcancelationRate={setcancelationRate}
          />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary">
                Total Bookings: {cancelationRate.cancelled_hotelBookings+cancelationRate.total_uncancelled}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cancel Bookings: {cancelationRate.cancelled_hotelBookings}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Completed Bookings: {cancelationRate.total_uncancelled}
            </Typography>
          </Box>
        </Box>
    
    
      </Card>
    
    
      <Card sx={{ width:"40%", 
            margin:'auto',
            height:"500px",  
            mt:2,
            padding:2,
            boxShadow:"5px 5px 10px #ccc",
            ":hover:":{ boxShadow:"20px 20px 40px #ccc" },
        }}>
    
    
        <CardHeader
          subheader={date}
        />
    
      <Box  display="flex" justifyContent="center" alignItems="center" flexDirection="row">
          <LocationsPiechart
          setlocationsData={setlocationsData}
            
           />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary">
                Total= {locationsData.total}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Resort= {locationsData.resort}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                City Hotel= {locationsData.city}
            </Typography>
          </Box>
        </Box>
      </Card>
    
      </Box>
      </div>


    )








}