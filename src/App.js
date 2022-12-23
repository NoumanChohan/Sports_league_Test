
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
// import { Route, Router, Switch } from "react-router";
import style from "./App.module.css";
import Error404 from "./Components/Error404/Error404";
import Footer from "./Components/Footer/Footer";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import SchedulePage from "./Components/Schedule Page/SchedulePage";
import WebBar from "./Components/WebBar/WebBar";
import LeagueService from "./services/LeagueService";

function App() {
  const checkLink=window.location.pathname;
  console.warn("checkLink",checkLink,'/leaderboard')
  console.warn('result',`${checkLink}`==='/leaderboard')
 const theme=createTheme({
  breakpoints:{
    values:{
      xs:0,
      sm:500,
      md:750,
      lg:1000,
      xl:1500
    }
  }
 })
  return (
    <div>
     <ThemeProvider theme={theme}> 
     <WebBar/>
    

     <Routes>
     
      {
  
  checkLink==='/' || checkLink==='/schedule'?
   <Route   path={checkLink ==='/'?'/':'/schedule'} element={<SchedulePage/>}></Route> :
    checkLink==='/leaderboard'? 
     <Route path='/leaderboard' element={<LeaderBoard/>}></Route>:
     <Route path={checkLink==='/error'?'/error':checkLink} element={<Error404/>}></Route>



   } 
   
   {/* <Route path='/error'><Error404/></Route>
   <Route path='/leaderboard'><LeaderBoard/></Route>
 <Route   path='/'><SchedulePage/></Route>
     </Switch>
       */}
      
      

      </Routes>
     
      <Footer/>

     </ThemeProvider>
    </div>
  );
}

export default App;
