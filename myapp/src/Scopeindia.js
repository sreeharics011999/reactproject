import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import "./Scopeindia.css"
import Navbar from "./Component/Navbar"
let Scopeindia = () => {
  return (
    <div className="" style={{ backgroundColor: "#071e67" }}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default Scopeindia