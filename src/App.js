import React from "react";
import { Header } from "./components/Header";
import { useSelector } from "react-redux";
import {Route,Routes} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {CalcenlationAndLocations} from "./components/CancelationRateAndLocations";
import {YearsAndmedium} from "./components/YearsAndMedium";
import { MonthBookingData } from "./components/MonthBookingData";
import {StartingPage} from "./components/Starting";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const isLoggedin= useSelector(state => state.isLoggedin);
  console.log(isLoggedin);
  return (
    <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<StartingPage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calcenlationAndLocation" element={<CalcenlationAndLocations/>} />
        <Route path="/yearsAndMedium" element={<YearsAndmedium />} />
        <Route path="/months" element={<MonthBookingData />} />
      </Routes>
    </main>
</React.Fragment>
    
  );
}

export default App;
