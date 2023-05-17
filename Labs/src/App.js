// import InputClass from "./Components/day1/input";
// import SliderClass from "./Components/day1/slider";
// import { Component } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
// import Header from "./Components/day2/Components/header";
// import Home from "./Components/day2/Components/home";
// import Details from "./Components/day2/Components/details";
// import Profile from "./Components/day2/Components/profile";
import Error from "./Components/day2/Components/error";
import Home from "./Components/day3/home";
import Singers from "./Components/day3/singers";
import SingerDetails from "./Components/day3/singerDetails";
import './style.css'
//#region day1
// function App(){
//     return (
//         <div>
//           <InputClass/>
//           <SliderClass/>
            
//         </div>
//     )
// }
//#endregion
//#region day2
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <div className="header">
//         <Header/>
//       </div>
//           <Routes>
//               <Route path="/" element={<Home/>}/>
//               <Route path="/home" element={<Home/>}/>
//               <Route path="/students/:id" element={<Details/>}/>
//               <Route path="/profile" element={<Profile/>}/>
//               <Route path="*" element={<Error/>}/>
//           </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
//#endregion
//#region day3
function App(){
  return(
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/singers/:id" element={<SingerDetails/>}/>
              <Route path="/singers" element={<Singers/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  )
}
//#endregion
export default App;
