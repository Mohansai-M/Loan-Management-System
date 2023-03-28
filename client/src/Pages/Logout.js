import { useState, useContext, useEffect } from "react";
import axios from "axios";
const Logout = async()=>
{

    await axios.get("api/logout");
    localStorage.removeItem("LoginStatus");
    window.location.href = "/";
}

export default Logout;