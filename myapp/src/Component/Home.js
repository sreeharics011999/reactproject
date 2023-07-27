import Scope from "./images/Scope.png"
import Subbg from "./images/Subbg.png"
import  formimg from "./images/formimg.jpg"
import {NavLink} from "react-router-dom"
import styles from "./contact.module.css"

import "./home.css"
import Carosel from "./Carosel"
let Home=()=>{
    return(
        <div>
            <div clasName="bg">
                <div clasName="container">
                <div className="imagescope"><img src={Scope} alt="scope" className="scopeimg"/></div>
                <Carosel/>
                <img src={Subbg}/>
                </div>
            </div>
            <div className="container bg-light " style={{ padding: "4%",paddingBottom:"8vh",backgroundImage: 'url("https://scopeindia.org/images/si-call-back-bg.jpg")' }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <NavLink to="tel:+919745936073"><img src={formimg} className={styles.imgfrm} /></NavLink>
                        </div>
                        <div className="col-lg-6  col-md-5 ">
                            <h3 className={styles.call}>GET A FREE CALL BACK</h3>
                            <form>
                                <div className="form1" >
                                    <input type="text" class="form-control" placeholder="Enter your name" id="exampleInputPassword1" />
                                </div>
                                <div className="form1 mt-3" >
                                    <input type="number" class="form-control" placeholder="Enter your phone no." id="exampleInputPassword1" />
                                </div>
                                <div class="d-grid   mx-auto mt-4  ">
                                    <button class="btn  pb-2" style={{ backgroundColor: "#00FF00", color: "white", fontWeight: "900" }} type="button">Call Me</button>
                                </div>
                                <div class="d-grid gap-3  mx-auto mt-4 pt-5  ">
                                    <button class="btn  mb-2 pb-2" style={{ backgroundColor: " #7c62bd", color: "white", borderRadius: "6px", borderColor: "#5c1eff" }} size={55} type="button">Recent placements</button>
                                    <button class="btn  pb-2" style={{ backgroundColor: " #62bdb4", color: "white", borderRadius: "6px", borderColor: "#35e9d7" }} type="button">Courses</button>
                                    <button class="btn  pb-2 " style={{ backgroundColor: "  #5ead5e", color: "white", borderRadius: "6px", borderColor: "#32d732" }} type="button">Register Now!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

        </div>
    )
    
}
export default Home
