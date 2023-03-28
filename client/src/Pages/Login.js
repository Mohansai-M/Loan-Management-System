import { useState, useContext, useEffect } from "react";
import axios from "axios";
import "../CSS/Login.css";
import { Link,useNavigate } from "react-router-dom";
import { ProjectContext } from "../GlobalState";

function Login() {

      const Navigate = useNavigate();
      const state = useContext(ProjectContext);
      const isLogged = state.isLogged;

  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

    useEffect(() => {
      if (localStorage.getItem("LoginStatus")) {
        window.location.href = "/";
      }
    }, [isLogged]);

  const sendRequest = async () => {
     try {
       await axios.post("/api/login", { ...user }, { withCredentials: true });
       localStorage.setItem("LoginStatus", true);
       alert("Login Successful");
     } catch (err) {
       alert(err.response.data.msg);
     }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    // send http request
    sendRequest()
      .then(() => state.LoginCheck())
      .then(() => Navigate("/"));
  };



  return (
    <div className="LoginPage">
      <div className="Login">
        <form className="LoginForm">
          <label> Email </label>
          <input className="Loginner" type="email" name="Email" required placeholder="Email..." value={user.Email} onChange={onChangeInput} />
          <label>Password</label>
          <input className="Loginner" type="password" name="Password" required autoComplete="on" placeholder="Password..." value={user.Password} onChange={onChangeInput}
          />

          <button className="Loginbutton" onClick={loginSubmit}>
            Login
          </button>
           <Link to="/Register" className="register-link" style={{ textDecoration: "none" }} >
          <button className="Registerbutton">
              Register
          </button>
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
