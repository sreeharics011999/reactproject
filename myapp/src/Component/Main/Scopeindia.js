import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./Scopeindia.css"
import Home from "../Home/Home.js"
import About  from "../About/About.js"
import Courses from "../Courses/Courses.js"
import Contact from "../Contact/Contact.js"
import Navbar from "../Navbar/Navbar.js"
let Scopeindia = () => {
  return (
    <div className="" style={{ backgroundColor: "#071e67" }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Courses" element={<Courses/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default Scopeindia