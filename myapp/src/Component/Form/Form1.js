import { NavLink } from "react-router-dom"
import "./form1.css"
import formimg from "../images/formimg.jpg"
let Form1=()=>{
    return(
        <div className="top1 top pb-5">
                <div className="container container2 bg-light ">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <NavLink to="tel:+919745936073"><img src={formimg} className="imgfrm" /></NavLink>
                        </div>
                        <div className="col-lg-6  col-md-5 ">
                            <h2 className="frmh2">SCOPE INDIA is open 365 days a year</h2>
                            <p className="frmp">We are open 7 days 24 hrs to talk to you and listen to your queries. </p>
                            <h3 className="call">GET A FREE CALL BACK</h3>
                            <form>
                                <div className="form1" >
                                    <input type="text" class="form-control" placeholder="Enter your name" id="exampleInputPassword1" />
                                </div>
                                <div className="form1 mt-3" >
                                    <input type="tel" class="form-control" placeholder="Enter your phone no." id="exampleInputPassword1" />
                                </div>
                                <div class="d-grid   mx-auto mt-4  ">
                                    <button class="btn  pb-2 callme" type="button">Call Me</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Form1