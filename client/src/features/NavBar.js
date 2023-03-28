import { React, useContext } from "react";
import logo from "../logo.png";
import axios from "axios";
import "../CSS/NavBar.css";
import Logout from "../Pages/Logout";
import { Link } from "react-router-dom";
import { ProjectContext } from "../GlobalState";
function NavBar() {

    const state = useContext(ProjectContext);
    const isLogged = state.isLogged;
    const isAdmin = state.isAdmin;

    const logoutUser =  () => {
    Logout();
    }

   return (
     <div className="navContainer">
       <div className="navigationbar">
         <div>
          <Link to="/" className="NavLink">
           <img src={logo} className="logo" alt="Logo" />
           <p className="NavBrand">The Loan Company</p>
           </Link>
         </div>
         <div>
           <ul className="NavList">
             <Link to="/" className="NavLink"><li className="NavItems">Apply</li></Link>
             <Link to="/" className="NavLink"><li className="NavItems">Details</li></Link>
             {isAdmin}
                {
               !isLogged ? <Link to="/Login" className="NavLink"><li className="NavItems Account-Status">SignIn/Register</li></Link> 
               : 
               <Link to="/" className="NavLink" onClick={logoutUser}><li className="NavItems Account-Status">Logout</li>
               </Link>
                }
           </ul>
         </div>
       </div>
     </div>
   );
  
                 }

export default NavBar;
