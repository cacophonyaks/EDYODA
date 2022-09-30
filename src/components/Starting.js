import { Typography, Box} from '@mui/material';
import React from 'react';
import { Button} from "@mui/material";
import { Link } from 'react-router-dom';



export const StartingPage = () => {





    return (
        // <div>
        //     <h1>DeV MgM</h1>
        //     <h5>DeV MgM is a web application that helps you to manage your bookings and customers.</h5>
        //     <h5>We have Provide a Business Solution for your Business Growth</h5>
        //     <h5>Let's Connect with us and Grow Your Bussiness</h5>
        // </div>
        <div>
            <Box 
                      display='flex' flexDirection="column" 
                      alignItems="center" justifyContent={"center"}
                      boxShadow="10px 10px 20px #ccc"
                      padding={3}
                      margin='auto'
                      marginTop={5}
                      borderRadius={5}
                      width="50%"
            >
                <Typography fontFamily={ 'ui-sans-serif'} marginTop={3} variant="h3" color="text.secondary">
                    Welcome to DeV MgM
                </Typography>
                <Typography fontFamily={ 'ui-sans-serif'} marginTop={3} variant="h5" color="text.secondary">
                    DeV MgM is a web application that helps you to manage your bookings and customers.
                </Typography>
                <Typography fontFamily={ 'ui-sans-serif'} marginTop={3} variant="h5" color="text.secondary">
                    We have Provide a Business Solution for your Business Growth
                </Typography>
                <Typography fontFamily={ 'ui-sans-serif'} marginTop={3} variant="h5" color="text.secondary">
                    Let's Connect with us and Grow Your Bussiness
                </Typography>
                <Box marginTop={5} display="flex" justifyContent="center" alignItems="center" flexDirection="row" border='ActiveBorder'>
                <Button sx={{margin:5}} variant="contained"color="success" component={Link} to="/login">
                    Login
                </Button>
                <Button variant="contained" color="success" component={Link} to="/signup">
                    Register
                </Button>
                </Box>
            </Box>
        </div>
    )
}