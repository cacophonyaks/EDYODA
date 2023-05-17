import React from 'react'
import "./Mainpage.css";
import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import icon1 from "./Icon1.png";
import icon2 from "./Icon2.png";
import timeout from "./timeout.png";
import razorpayicon from "./razorpayicon.png";
import liveicon from "./live.png";
import watch from "./watch.png";
import deegree from "./deegree.png";
import book from "./book.png";
import addblockericon from "./addblockericon.png";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const Mainpage = () => {
    

  return (
    <div className="mainpage">
        
        <div className="mainpage__left">
            <div className="headingdiv">
                <p className="heading">Access curated courses worth</p>
                <p className="heading"><del style={{
                    marginRight:"10px",
                    color:"#FF0000"
                }}><span style={{color:"white"}}>₹ 18,500</span></del> at just <span style={{color:"#0096FF", marginLeft:"10px",marginRight:"10px"}}>₹ 99</span>per year!</p>
            </div>
            <div className="left_content">
                <div>
                    
                    <span className="content_list"> <span><img src={book} alt="" height={50} width={50} style={{marginRight:"20px"}}></img></span><p ><span style={{color:"#0096FF",marginRight:"10px"}} >100+</span> Job relevant courses </p></span>
                    <span className="content_list"> <span><img src={watch} alt="" height={50} width={50} style={{marginRight:"20px"}}></img></span><p ><span style={{color:"#0096FF",marginRight:"10px"}} >20,000+</span> Hours of content  </p></span>
                    <span className="content_list"> <span><img src={liveicon} alt="" height={50} width={50} style={{marginRight:"20px"}}></img></span><p ><span style={{color:"#0096FF",marginRight:"10px"}} >Exclusive</span>  webinar access </p></span>
                    <span className="content_list"> <span><img src={deegree} alt="" height={50} width={50} style={{marginRight:"20px"}}></img></span><p>Scholarship worth<span style={{color:"#0096FF",marginLeft:"10px"}} >₹94,500</span></p></span>
                    <span className="content_list"> <span><img src={liveicon} alt="" height={50} width={50} style={{marginRight:"20px"}}></img></span><p ><span style={{color:"#0096FF",marginRight:"10px"}} > Ad Free</span> learning experience </p></span>
                </div>
            </div>
        </div>
        <div className="mainpage__right">
        <Box 
          display='flex' flexDirection="column" 
        //   alignItems="center" justifyContent={"center"}
        //   boxShadow="10px 10px 20px #ccc"
          backgroundColor="white"
          padding={3}
          margin='auto'
          marginTop={5}
        //   borderRadius={5}
          width={500}
        //   height={700}
        height="auto"
          
          
          >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"

          >
            <Box>
                <img src={icon1} alt="icon1" style={{width:"40px",height:"40px"}}/>
                <Typography className='signupheading'  >Signup</Typography>
            </Box>
            <Box>

                <img src={icon2} alt="icon2" style={{width:"40px",height:"40px"}}/>
                <Typography className='signupheading' style={{
                    marginRight:"50px"
                }} >Subscribe</Typography>
            </Box>

          </Box>
            <Typography variant="h5" marginTop={2} marginBottom={2} textAlign={"center"} >Select your subcription plan</Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                >   
                    <Box
                        style={{
                        backgroundColor:"#E7E7E7",
                        border:"1px solid black",
                        // boderColor:"#E7E7E7",
                        color:"white",
                        marginTop:"10px",
                        padding:"10px",
                        display:"flex",
                        borderRadius:"4px",
                        flexDirection:"column",
                    }}
                    
                    >
                        <Box
                        style={{
                            backgroundColor:"#F77171",
                            border:"0px 0px 4px 4px",
                            color:"white",
                            borderRadius:"4px",
                            width:"150px",
                            height:"15px",
                            padding:"5px",
                            zindex:"2",
                            textAlign:"center",
                            position:"absolute",
                            marginTop:"-10px",
                        }} 
                        >
                            <Typography style={{
                            fontFaimly:"Roboto",
                            fontSize:"12px",
                            fontStyle:"normal",
                            fontWight:"500",
                        }} >Offer expired</Typography>
                        </Box>
                        <Box 
                        style={{
                            marginTop:"10px",
                            display:"flex",
                            flexDirection:"row",}}
                        >
                            <FormControlLabel
                            // style={{
                            //     backgroundColor:"#E7E7E7",
                            //     border:"1px solid black",
                            //     // boderColor:"#E7E7E7",
                            //     color:"white",
                            //     marginTop:"10px",
                            // }}
                            value="13" disabled control={<Radio />} label="12 Months Subscription " />
                               <Typography style={{
                                color:"#BEBEBE",
                                fontFaimly:"Roboto",
                                fontSize:"15px",
                                fontStyle:"normal",
                                fontWight:"600",
                                position:"absolute",
                                right:"21px",


                            }}  >Total ₹ 99 <br/> <span style={{
                                fontSize:"12px",
                            }}>₹8 /mo</span></Typography>
                        </Box>
                    </Box>


                    <Box
                        style={{
                        backgroundColor:"#D7EDDD",
                        border:"2px solid #47BA68",
                        borderRadius:"4px",
                        // boderColor:"#E7E7E7",
                        color:"white",
                        marginTop:"10px",
                        padding:"10px",
                        display:"flex",
                        flexDirection:"column",
                    }}
                    
                    >
                    <Box
                     style={{
                        backgroundColor:"#47BA68",
                        border:"0px 0px 4px 4px",
                        color:"white",
                        borderRadius:"4px",
                        width:"150px",
                        height:"15px",
                        padding:"5px",
                        zindex:"2",
                        textAlign:"center",
                        position:"absolute",
                        marginTop:"-10px",
                    }} 
                    >
                        <Typography 
                        style={{
                            fontFaimly:"Roboto",
                            fontSize:"12px",
                            fontStyle:"normal",
                            fontWight:"500",
                        }}>Recommended</Typography>
                    </Box>
                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                        <FormControlLabel
    
                        value="12" control={<Radio />} label="12 Months Subscription " />
                       <Typography style={{
                                color:"#BEBEBE",
                                fontFaimly:"Roboto",
                                fontSize:"15px",
                                fontStyle:"normal",
                                fontWight:"600",
                                position:"absolute",
                                right:"21px",


                            }}  >Total ₹ 99 <br/> <span style={{
                                fontSize:"12px",
                            }}>₹8 /mo</span></Typography>
                    </Box>
                    </Box>


                {/* 6 Months Subscription */}
                    <Box
                        style={{
                        backgroundColor:"#FFFFFF",
                        border:"2px solid #9f9f9f",
                        borderRadius:"4px",
                        // boderColor:"#E7E7E7",
                        color:"white",
                        marginTop:"10px",
                        padding:"10px",
                        display:"flex",
                        flexDirection:"column",
                    }}
                    
                    >
                  
                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                        <FormControlLabel
                        value="6" control={<Radio />} label="6 Months Subscription " />
                       <Typography style={{
                                color:"#BEBEBE",
                                fontFaimly:"Roboto",
                                fontSize:"15px",
                                fontStyle:"normal",
                                fontWight:"600",
                                position:"absolute",
                                right:"21px",


                            }}  >Total ₹ 99 <br/> <span style={{
                                fontSize:"12px",
                            }}>₹8 /mo</span></Typography>
                    </Box>
                    </Box>


                    {/* 3 Months Subscription */}
                    <Box
                        style={{
                        backgroundColor:"#FFFFFF",
                        border:"2px solid #9f9f9f",
                        borderRadius:"4px",
                        // boderColor:"#E7E7E7",
                        color:"white",
                        marginTop:"10px",
                        padding:"10px",
                        display:"flex",
                        flexDirection:"column",
                    }}
                    
                    >
                  
                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                        <FormControlLabel
                        value="3" control={<Radio />} label="3 Months Subscription " />
                        <Typography style={{
                                color:"#BEBEBE",
                                fontFaimly:"Roboto",
                                fontSize:"15px",
                                fontStyle:"normal",
                                fontWight:"600",
                                position:"absolute",
                                right:"21px",


                            }}  >Total ₹ 99 <br/> <span style={{
                                fontSize:"12px",
                            }}>₹8 /mo</span></Typography>
                    </Box>
                    

                    </Box>
                    <hr style={{
                            marginTop:"20px",
                     }}/>

                    {/* <Typography style={{
                            marginTop:"20px",
                            marginBottom:"20px",
                            color:"#3C4852",
                            fontFaimly:"Roboto",
                            fontSize:"16px",
                            fontStyle:"normal",
                            fontWight:"600",
                            lineHight:"120%"
                    }}>Subscriptions Fee</Typography> */}

                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                       <Typography  style={{
                            marginTop:"20px",
                            marginBottom:"20px",
                            color:"#3C4852",
                            fontFaimly:"Roboto",
                            fontSize:"16px",
                            fontStyle:"normal",
                            fontWight:"600",
                            lineHight:"120%"
                    }}>Subscriptions Fee</Typography>
                        <Typography style={{
                                color:"black",
                                fontFaimly:"Roboto",
                                position:"absolute",
                                right:"21px",


                            }} variant='h6' >₹18,500</Typography>
                    </Box>

                        

                        
                    <Box>

                    <Box
                        style={{
                        border:"2px solid #9f9f9f",
                        borderRadius:"4px",
                        // boderColor:"#E7E7E7",
                        color:"white",
                        marginTop:"10px",
                        padding:"10px",
                        display:"flex",
                        flexDirection:"column",
                    }}
                    
                    className='redbox'
                    >
                  
                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                       <Typography className='limitedtimeofferopara'>Limited  Time Offer</Typography>
                        <Typography style={{
                                color:"black",
                                fontFaimly:"Roboto",
                                position:"absolute",
                                right:"21px",


                            }} variant='h6' >- ₹18,401</Typography>
                    </Box>
                    <Box
                    display='flex'
                    flexDirection='row'
                    >
                        <img src={timeout} alt="offer" className='offerimg' height={20} width={20}/>
                        <Typography className='limitedtimeofferopara' style={{fontSize:"13px",marginLeft:"10px"}}>Offer valid till 25th March 2023 </Typography>
                    </Box>
                    </Box>
                    {/* <Typography className='taxpara'><b>Total</b> (Incl. of 18% GST)</Typography> */}
                    <Box 
                    style={{
                        marginTop:"10px",
                        display:"flex",
                        flexDirection:"row",
                        color:"black",  
                    }}
                    >
                       <Typography className='taxpara'><b>Total</b> (Incl. of 18% GST)</Typography>
                        <Typography style={{
                                color:"black",
                                fontFaimly:"Roboto",
                                position:"absolute",
                                right:"21px",


                            }} variant='h6' >₹149</Typography>
                    </Box>
                    <Box style={{
                        display:"flex",
                        justifyContent:"space-around",

                    }}>
                        <Button className='button' variant="outlined" color="warning" style={{marginTop:"20px",marginBottom:"20px",width:"40%"}}>
                            Cancel
                        </Button>
                        <Button className='button' variant="contained" color="primary" style={{marginTop:"20px",marginBottom:"20px",width:"40%",backgroundColor:"#47BA68"}}>
                            Proceed To Pay
                        </Button>
                    </Box>

                    <img src={razorpayicon} alt="secure" className='secureimg' height={30} width={90}/>

                    </Box>

                </RadioGroup>
             </FormControl>
          
        </Box>
        </div>
    </div>
  )
}
