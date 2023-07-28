import { NavLink } from "react-router-dom"
import Logo from "./images/Logo.png"
import "./navbar.css"
let Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#071e67", opacity: "97%" }}>
        <div className="container-fluid ">
          <NavLink className="navbar-brand mx-auto img2" to="/"><img width="35" height="35" src={Logo} /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav nav1">
              <NavLink className="nav-link active  " aria-current="page" to="/" style={({ isActive }) => ({ color: isActive ? "#FFC400" : "white" })}>Home</NavLink>
              <NavLink className="nav-link   " to="/Courses" style={({ isActive }) => ({ color: isActive ? "#FFC400" : "white" })}>Courses</NavLink>
              <NavLink className="nav-link   " to="/Placement Cell" style={({ isActive }) => ({ color: isActive ? "#FFC400" : "white" })}>Placement Cell</NavLink>
            </div>
            <div className="navbar-nav nav2 ">
              <NavLink className="nav-link   " to="/About" style={({ isActive }) => ({ color: isActive ? "#FFC400" : "white" })}>Know SCOPE INDIA</NavLink>
              <NavLink className="nav-link  " to="/Contact" style={({ isActive }) => ({ color: isActive ? "#FFC400" : "white" })}>Contact us</NavLink>
              <button class="btn btn-warning ms-3 btnreg " type="submit">Register Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar