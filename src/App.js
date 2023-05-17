import React from "react";
import { Header } from "./components/Header";
import {Route,Routes} from "react-router-dom";
import { Mainpage } from './components/Mainpage';

function App() {
  return (
    <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </main>
</React.Fragment>
    
  );
}

export default App;
