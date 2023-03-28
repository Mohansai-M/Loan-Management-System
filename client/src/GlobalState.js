import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectContext = createContext();

const ProjectProvider = (props) => {
  const [Token, setToken] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [User, setUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setemail] = useState("");


  function LoginCheck()
  {
    setIsLogged(true)
  }
  
  const USerCheck = async () => {
    const LoginStatus = localStorage.getItem("LoginStatus");
    if (LoginStatus) {
        const res = await axios.post(
          "/api/refresh_Token",
          {
            withCredentials: true,
          }
        );
        setToken(res.data.accesstoken);
        if (Token) {
          try {
           const res = await axios.get("/api/info", {
           headers: { authorization: Token },
         });
         setUser(true);
         console.log("User")
         setemail(res.data.Email);
         res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
       } catch (err) {
         alert(err.response.data.msg);
       }
     };
        setTimeout(() => {
          //refreshToken();
        }, 10 * 60 * 1000);
      };
     // refreshToken();
    
 };

  const state = {
    User,
    isLogged,
    isAdmin,
    email,
    LoginCheck,
    USerCheck
  };
  return (
    <ProjectContext.Provider value={state}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };
