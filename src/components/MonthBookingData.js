import React from 'react'
import { Card, CardHeader,Typography, Box } from '@mui/material';
import { BarGraph } from './BarGraph';
import { useState } from 'react';
import { Dashboard } from './Dashboard';

export const MonthBookingData = () => {

    let date = new Date();
    date=date.toUTCString();
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


  


    return (
        <div>
        <Dashboard/>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" border='ActiveBorder'>
        <Card sx={{ width:"70%",
            height:"650px", 
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
          <BarGraph
            setmonthsData={setmonthsData}
          />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary">
                Total Bookings: {monthsData.total_Data}
            </Typography>
          </Box>
        </Box>
    
    
      </Card>
    
      </Box>
      </div>


    )








}