import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/Register.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [user, setUser] = useState({
    FirstName: "",
    LastName:"",
    Email: "",
    Password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/register`, { ...user });

      localStorage.setItem("LoginStatus", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="RegisterPage">
      <div className="Register">
        <form className="RegisterForm">
          <div className="NameDiv">
          <div className="form-group">
          <label>First Name</label>
          <input className="NewUser" type="text"  name="FirstName"  required placeholder="FirstName" value={user.FirstName}  onChange={onChangeInput} />
          </div>
          <div className="form-group">
          <label>Last Name</label>
          <input className="NewUser" type="text"  name="LastName"  required placeholder="LastName" value={user.LastName}  onChange={onChangeInput} />
          </div>
          </div>
          <div className="EmailDiv">
          <div className="form-group">
          <label> Email </label>
          <input className="NewUser" type="email" name="Email" required placeholder="Email..." value={user.Email} onChange={onChangeInput} />
          </div></div>
          <div className="PasswordDiv">
          <div className="form-group">
          <label>Password</label>
          <input className="NewUser" type="password" name="Password" required autoComplete="on" placeholder="Password..." 
          value={user.Password} onChange={onChangeInput}/>
          </div>
          <div className="form-group">
          <label>Confirm Password</label>
          <input className="NewUser" type="password" name="Confirmpassword" required autoComplete="on" placeholder="Password..." />
          </div>
          </div>
          <div className="Button_Group">
          <button className="RegisterButton" onClick={registerSubmit}>
            Register
          </button>
            <Link to="/Login" className="register-link" style={{ textDecoration: "none" }} ><button className="LoginButton">
              Login
          </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
