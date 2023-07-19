import {NavLink} from "react-router-dom"
import styles from "./contact.module.css"
import star from "./star.png"
import  formimg from "./formimg.jpg"
let Contact=()=>{
    return(
        <div>
            <div className={styles.bg}>
                <h1>SCOPE INDIA is open 365 days a year</h1>
                <h2>Let's discuss your career, 24/7 free Consultation</h2>
                <img className={styles.star} src={star}/>
                <p className={styles.para1}>Google 4.9 * Rated Institute</p>
                <div>
                     <div className="container bg-light" style={{padding:"3%",width:"55%", backgroundImage:'url("https://scopeindia.org/images/si-call-back-bg.jpg")'}}>
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                            <NavLink to="tel:+919745936073"><img src={formimg} className={styles.imgfrm}/></NavLink>
                            </div>
                            <div className="col-lg-6  col-md-5">
                                <h3>GET A FREE CALL BACK</h3>
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
                <h2 style={{textAlign:"start"}}>Location</h2>
                <div className="row">
                  <div className="col-lg-4">
                     <div className="card" style={{width: "18rem", backgroundColor:"#041a6b "}}>
                       <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card" style={{width: "18rem"}}>
                       <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card" style={{width: "18rem"}}>
                       <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
                         <NavLink to="#" className="card-link">Another link</NavLink>
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