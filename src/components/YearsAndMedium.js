import React from 'react'
import { Card, CardHeader, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import {MadiumChart} from './Piechart';
import {PiechartYaers} from './Piechart';

export const YearsAndmedium = () => {

    let date = new Date();
    date=date.toUTCString();
    const [mediumData, setmediumData] = useState({
        total:0,
        online: 0,
        offline: 0,
        agent: 0,
        partnership: 0
      });
  
    const [yearData, setyearData] = useState({
      total_Data: 0,
      year2020: 0,
      year2021: 0,
      year2022: 0
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
          <MadiumChart
            setmediumData={setmediumData}
          />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary">
                Total Bookings: {mediumData.total}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Online: {mediumData.online}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Ofline: {mediumData.offline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Agent: {mediumData.agent}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                partnership: {mediumData.partnership}
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
          <PiechartYaers
            setyearData={setyearData}
           />
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography variant="body2" color="text.secondary">
                Total= {yearData.total_Data}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                2020= {yearData.year2020}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                2021= {yearData.year2021}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                2022= {yearData.year2021}
            </Typography>
          </Box>
        </Box>
      </Card>
    
      </Box>
      </div>


    )








}