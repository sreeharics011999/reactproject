import {NavLink} from "react-router-dom"
import styles from "./contact.module.css"
import { BsGeoAltFill,BsMap,BsFillTelephoneFill,BsLink45Deg} from "react-icons/bs";
import { GrMail} from "react-icons/gr";
import star from "./star.png"
import  formimg from "./formimg.jpg"
import "./contact.css"
let Contact=()=>{
    return(
        <div>
            <div className={styles.bg}>
                <h1>SCOPE INDIA is open 365 days a year</h1>
                <h2 className={styles.dis}>Let's discuss your career, 24/7 free Consultation</h2>
                <img className={styles.star} src={star}/>
                <p className={styles.para1}>Google 4.9 * Rated Institute</p>
                <div>
                     <div className="container bg-light" style={{padding:"3%",width:"55%", backgroundImage:'url("https://scopeindia.org/images/si-call-back-bg.jpg")'}}>
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                            <NavLink to="tel:+919745936073"><img src={formimg} className={styles.imgfrm}/></NavLink>
                            </div>
                            <div className="col-lg-6  col-md-5 ">
                                <h3 className={styles.call}>GET A FREE CALL BACK</h3>
                             <form>
                                <div className="form1" >
                                 <input type="text" class="form-control" placeholder="Enter your name" id="exampleInputPassword1"/>
                                </div>
                                <div className="form1 mt-3" >
                                <input type="number" class="form-control" placeholder="Enter your phone no." id="exampleInputPassword1"/>
                                </div>
                                <div class="d-grid   mx-auto mt-4  ">
                                  <button class="btn  pb-2" style={{backgroundColor:"#00FF00",color:"white",fontWeight:"900"}} type="button">Call Me</button>
                               </div>
                               <div class="d-grid gap-3  mx-auto mt-4 pt-5  ">
                                <button class="btn  mb-2 pb-2" style={{backgroundColor:" #7c62bd",color:"white",borderRadius:"6px",borderColor:"#5c1eff"}} size={55} type="button">Recent placements</button>
                                <button class="btn  pb-2" style={{backgroundColor:" #62bdb4",color:"white",borderRadius:"6px",borderColor:"#35e9d7"}}  type="button">Courses</button>
                                <button class="btn  pb-2 " style={{backgroundColor:"  #5ead5e",color:"white",borderRadius:"6px",borderColor:"#32d732"}}  type="button">Register Now!</button>                               
                               </div>
                             </form>
                            </div>
                        </div>
                     </div>
                  </div>
                <div className="container">
                <h2 className="location">Location</h2>
                <div className="row ">
                  <div className="col-lg-4 col-md-12 ps-5 text-light">
                     <div className="card" style={{width: "18rem", backgroundColor:"#041a6b",border: "1px solid white"}}>
                       <div className="card-body">
                         <h3 className="card-title">Trivandrum, Kerala</h3>
                         <p className="card-text"><span className="list"><BsGeoAltFill/></span>TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001</p>
                         <NavLink to="tel:9745936073" className="card-link"><span className="list"><BsFillTelephoneFill/></span>9745936073</NavLink>
                         <NavLink to="mailto:info@scopeindia.org" className="card-link"><span className="list"><GrMail/></span>info@scopeindia.org</NavLink>
                         <NavLink to="https://scopeindia.org" className="card-link"><span className="list"><BsLink45Deg/></span>wwww.scopeindia.org</NavLink>
                         <NavLink to="https://g.page/r/CXbW6SZGeJPfEAE" className="card-link"><span className="list"><BsMap/></span>Location Route Map</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12">
                     <div className="card text-light"  style={{width: "18rem", backgroundColor:"#041a6b",border: "1px solid white"}}>
                       <div className="card-body">
                         <h3 className="card-title text-light">Kochi,Kerala</h3>
                         <p className="card-text text-light"><span className="list"><BsGeoAltFill/></span>SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</p>
                         <NavLink to="tel:7592939481" className="card-link text-light d-block"><span className="list"><BsFillTelephoneFill/></span>7592939481</NavLink>
                         <NavLink to="mailto:kochi@scopeindia.org" className="card-link text-light d-block"><span className="list"><GrMail/></span>kochi@scopeindia.org</NavLink>
                         <NavLink to="https://scopeindia.org/" className="card-link text-light d-block"><span className="list"><BsLink45Deg/></span>wwww.scopeindia.org</NavLink>
                         <NavLink to="https://g.page/r/CWv07KhFfP7dEAE" className="card-link text-light d-block"><span className="list"><BsMap/></span>Location Route Map</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 ps-5 ">
                     <div className="card text-light" style={{width: "18rem", backgroundColor:"#041a6b",border: "1px solid white"}}>
                       <div className="card-body">
                         <h3 className="card-title">Nagercoil, Tamil Nadu</h3>
                         <p className="card-text"><span className="list"><BsGeoAltFill/></span>SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</p>
                         <NavLink to="tel:+918075536185" className="card-link"><span className="list"><BsFillTelephoneFill/></span>8075536185</NavLink>
                         <NavLink to="mailto:ngl@scopeindia.org" className="card-link"><span className="list"><GrMail/></span>ngl@scopeindia.org</NavLink>
                         <NavLink to="https://scopeindia.org/" className="card-link"><span className="list"><BsLink45Deg/></span>www.scopeindia.org </NavLink>
                         <NavLink to="https://goo.gl/maps/fVjnoN7GzcU1zson7" className="card-link"><span className="list"><BsMap/></span>Location Route Map </NavLink>
                      </div>
                    </div>
                  </div>
                    
                </div>

                </div>
            </div>
           
        </div>
    )
}
export default Contact