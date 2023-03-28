import { Link } from "react-router-dom";
import "../CSS/Home.css";
function Home()
{
    return(
    <div>
        <h3>Effortlessly manage loans with our user-friendly Loan Management System.</h3>
       <Link to="/LoanSearch" className="register-link" style={{ textDecoration: "none" }} >
        <button className="SearchButton">
              Search
          </button>
        </Link>
    </div>);
}
export default Home;