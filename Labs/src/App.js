// import InputClass from "./Components/day1/input";
// import SliderClass from "./Components/day1/slider";
// import { Component } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./Components/day2/Components/header";
import Home from "./Components/day2/Components/home";
import Details from "./Components/day2/Components/details";
import Profile from "./Components/day2/Components/profile";
import Error from "./Components/day2/Components/error";
import './style.css'
// function App(){
//     return (
//         <div>
//           <InputClass/>
//           <SliderClass/>
            
//         </div>
//     )
// }

function App(){
  return(
    <div>
      <BrowserRouter>
      <div className="header">
        <Header/>
      </div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/students/:id" element={<Details/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
