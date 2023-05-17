import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Button, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import EDYODA from "./EDYODA.png"
import Searchicon from './searchicon.png';
import downarrow from './dwonarrow.png';
export const Header = () => {
 

  const [value, setValue] = useState();

  return (
    <AppBar 
      position="sticky"
      sx={{background: "white",color: "black",boxShadow: "none"}}
      >
        <Toolbar>
            <img src={EDYODA} alt="EDYODA" width="180" height="30" />
          
            <Box display="flex" marginLeft={'50px'} marginTop={"auto"} marginBottom ='auto' color={"black"}>

              <Tabs variant="h4" textColor="inherit" value={value} onChange={(e,val) => setValue(val)}>
                <span> <Tab style={{marginRight:"20px"}}  label="Course" /><span><img src={downarrow} alt="" height={10} width={20}></img></span></span>
                <span> <Tab style={{marginRight:"20px"}}  label="Programs" /><span><img src={downarrow} alt="" height={10} width={20}></img></span></span>
              </Tabs>

            </Box> 
            
            <Box  display='flex' marginLeft="auto">
              <img style={{
                marginTop: 10,
                marginRight: 20,
                marginLeft: 20,

              }} src={Searchicon} alt="Searchicon" width="20" height="20" />
             
              <Typography style={{
                marginTop: 10,
                marginRight: 20,
                marginLeft: 20,
                color: "black",
                fontWeight: "normal",
                fontSize: 15,
                fontFamily: "sans-serif",

              }} >Login</Typography>
              <Button 
                LinkComponent={Link}  to="/signup" 
                variant='contained' 
                sx={{margin:1,borderRadius: 5}} 
                style={{
                  backgroundColor: "#0096FF",
                }}
                >
                Join Now
              </Button> 
              
            </Box>
        </Toolbar>
    </AppBar>
  );
}

