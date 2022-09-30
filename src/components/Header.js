import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Button, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { authActions } from '../store';

export const Header = () => {
 

  const dispatch = useDispatch();
  const isLoggedin = useSelector(state => state.isLoggedin);

  const [value, setValue] = useState();

  return (
    <AppBar 
      position="sticky"
      sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,120,100,1) 35%, rgba(0,212,255,1) 100%)"}}
      >
        <Toolbar>
            <Typography fontFamily={'cursive'} variant="h4">DeVMgM</Typography>
            {isLoggedin && 
            <Box display="flex" marginLeft={'auto'} marginBottom ='auto'>

              <Tabs variant="h4" textColor="inherit" value={value} onChange={(e,val) => setValue(val)}>
                <Tab LinkComponent={Link}  to="/dashboard" label="Dashboard" />
                <Tab label="Booking List" disabled />
                <Tab label="Add Booking" disabled />
                <Tab label="Payment Histry" disabled />
              </Tabs>

            </Box> 
            }
            <Box  display='flex' marginLeft="auto">
              {!isLoggedin&& <><Button 
                LinkComponent={Link}  to="/login" 
                variant='contained' 
                sx={{margin:1,borderRadius: 5}} 
                color="warning">
                Login
              </Button>
              <Button 
                LinkComponent={Link}  to="/signup" 
                variant='contained' 
                sx={{margin:1,borderRadius: 5}} 
                color="warning">
                Signup
              </Button> </>}
              {isLoggedin && <><Typography marginTop={2} fontFamily={'sans-serif'} >{localStorage.getItem('Name')}</Typography><Button 
                onClick={() => dispatch(authActions.logout())
                }
                LinkComponent={Link}  to="/" 
                variant='contained' 
                sx={{margin:1,borderRadius: 5}} 
                color="warning">
                Logout
              </Button></>}
            </Box>
        </Toolbar>
    </AppBar>
  );
}

