import {BrowserRouter as Router,Routes,Route,NavLink} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import "./Scopeindia.css"
import Logo from"./Logo.png"
let Scopeindia=()=>{
    return(
     <div className=""style={{backgroundColor: "#071e67"}}>
<Router>
<nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor: "#071e67",opacity:"90%"}}>
  <div className="container-fluid ">
    <img className ="img2"  width="35" height="35"src={Logo}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active  ps-5" aria-current="page" to="/" style={({isActive})=>({color:isActive?"#FFC400":"white"})}>Home</NavLink>
        <NavLink className="nav-link   ps-5" to="/About" style={({isActive})=>({color:isActive?"#FFC400":"white"})}>About</NavLink>
        <NavLink className="nav-link   ps-5" to="/Contact" style={({isActive})=>({color:isActive?"#FFC400":"white"})}>Contact</NavLink>
      </div>
    </div>
  </div>
</nav>
<Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/About" element={<About/>}></Route>
  <Route exact path="/Contact" element={<Contact/>}></Route>
</Routes>
</Router>
 </div>
    )
}
export default Scopeindia