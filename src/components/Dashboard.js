import React from 'react';
import {  Box} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Tabs,Tab} from "@mui/material";



export const Dashboard = () => {



  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const user = jwt.decode(token);
  //     if(!user){
  //       localStorage.removeItem("token");
  //       navigate("/dashboard")
      
  //   }
  // }},[]);



  const [value, setValue] = useState();


  return (
    <div>

      <AppBar 
      position="sticky"
      sx={{
        margin: 'auto',
        marginTop: 2,
        marginBottom: 8,
        width: '80%',
        borderRadius: 5,
        background:' linear-gradient(90deg, rgba(228,228,232,1) 0%, rgba(184,209,204,1) 41%, rgba(246,249,250,1) 100%)'}}
      >
        <Toolbar>
          
            <Box display="flex" margin={'auto'} marginBottom ='auto'>

              <Tabs textColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
                <Tab LinkComponent={Link}  to="/calcenlationAndLocation" label="Cancelation Rate and Locations "
                  marginLeft={4}
                  marginRight={4} />

                <Tab LinkComponent={Link}  to="/yearsAndMedium" label="Years and Medium"
                  marginLeft={4}
                  marginRight={4}                
                
                />
                <Tab LinkComponent={Link}  to="/months" 
                label="Months Data"
                marginLeft={4}
                marginRight={4}                   
                />
              </Tabs>
            </Box> 

        </Toolbar>
    </AppBar>




  </div>
  )
}
