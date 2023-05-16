import { NavLink } from "react-router-dom";
import '../../../style.css'
const Header = () => {

  return (
    <nav className="header">
    <NavLink to="/" style={({isActive})=>({color:isActive?'#ADE4DB':'inherit',backgroundColor:isActive?'rgba(255, 0, 0, 0.1)':'inherit'})}> Home </NavLink>
    <NavLink style={({isActive})=>({color:isActive?'#ADE4DB':'inherit'})} to={"/students/5"}>Student Details</NavLink>
    <NavLink style={({isActive})=>({color:isActive?'#ADE4DB':'inherit'})} to={"/profile"}>Profile</NavLink>
    <NavLink style={({isActive})=>({color:isActive?'#ADE4DB':'inherit'})} to={"/error"}>Error</NavLink>
    </nav>
  );
};

export default Header;

