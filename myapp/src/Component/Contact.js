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
                     <div className="container bg-light" style={{marginLeft:"22%",width:"56vw",height:"62vh", backgroundImage:'url("https://scopeindia.org/images/si-call-back-bg.jpg")'}}>
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
                                  <button class="btn btn-primary pb-2" type="button">Call Me</button>
                               </div>
                               <div class="d-grid gap-3  mx-auto mt-5 pt-5  ">
                                <button class="btn btn-primary mb-2 pb-2" size={55} type="button">Recent placements</button>
                                <button class="btn btn-info pb-2" type="button">Courses</button>
                                <button class="btn btn-success pb-2 " type="button">Register Now!</button>                               
                               </div>
                             </form>
                            </div>
                        </div>
                     </div>
                  
                </div>
            </div>
           
        </div>
    )
}
export default Contact