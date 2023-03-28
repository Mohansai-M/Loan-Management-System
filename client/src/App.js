import "./App.css";
import "./App.css";
import NavBar from "./features/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LoanDetails from "./Pages/LoanDetails";
import LoanSearch from "./Pages/LoanSearch";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProjectProvider } from "./GlobalState";
function App() {
  return (
    <>
      <ProjectProvider>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LoanSearch" element={<LoanSearch />} />
            <Route path="/LoanDetails" element={<LoanDetails />} />
          </Routes>
        </Router>
      </ProjectProvider>
    </>
  );
}

export default App;
