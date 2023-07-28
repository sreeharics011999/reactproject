import Scope from "./images/Scope.png"
import formimg from "./images/formimg.jpg"
import { NavLink } from "react-router-dom"
import Subbg from "./images/Subbg.png"
import star from "./images/star.png"
import ul1 from "./images/ul1.png"
import ul2 from "./images/ul2.png"
import ul3 from "./images/ul3.png"
import ul4 from "./images/ul4.png"
import contactscopelogo from "./images/contactscopelogo.png"
import isologocontact from "./images/isologocontact.png"
import contact2bg from "./images/contact2bg.png"
import { TbBrandSublimeText } from "react-icons/tb";
import "./home.css"
import Carosel from "./Carosel"
import Footer from "./Footer"
let Home = () => {
    return (
        <div className="backhome">
            <div clasName="container">
                <div className="imagescope"><img src={Scope} alt="scope" className="scopeimg" /></div>
            </div>
            <Carosel />
            <div className="imgpng"><img src={Subbg} /></div>
            {/*form*/}
            <div className="bg-light pb-5">
                <div className="container container2 bg-light ">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <NavLink to="tel:+919745936073"><img src={formimg} className="imgfrm" /></NavLink>
                        </div>
                        <div className="col-lg-6  col-md-5 mt-5">
                            <h2 className="frmh2">SCOPE INDIA <br />is open 365 days a year</h2>
                            <p className="frmp">We are open 7 days 24 hrs to talk to you and listen to<br />your queries. </p>
                            <h3 className="call">GET A FREE CALL BACK</h3>
                            <form>
                                <div className="form1" >
                                    <input type="text" class="form-control" placeholder="Enter your name" id="exampleInputPassword1" />
                                </div>
                                <div className="form1 mt-3" >
                                    <input type="number" class="form-control" placeholder="Enter your phone no." id="exampleInputPassword1" />
                                </div>
                                <div class="d-grid   mx-auto mt-4  ">
                                    <button class="btn  pb-2 callme" type="button">Call Me</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="discription-container">
                <div className="container discription-container1">
                    <img className="star" src={star} />
                    <p className="text-center discription-para">Google 4.9 * Rated Institute</p>
                    <h1 className="discription-h1" >SCOPE INDIA, your career partner!</h1>
                    <h2 className="discription-h2 ">One of the best Training Destination for Software, Networking and Cloud Computing courses in India</h2>
                    <p className="discription-para">Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS
                        oriented on-the-job TRAINING model. SCOPE INDIA provides courses for <strong>Software Programming</strong>
                        in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net,
                        <strong>Software Testing</strong> Manual and Automation,<strong> Cloud </strong> in AWS, Azure, <strong>
                            Server Administration</strong> in MCSE, and RHCE, <strong>CCNA</strong>,<strong> Mobile App Development</strong>
                        in Flutter, and, <strong>Digital Marketing</strong>. Training with 100% Trusted Job Based Internship Model.
                        SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you,
                        you won't regret it after training from SCOPE INDIA!
                    </p>
                    <p className="discription-para">This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p>
                    <div class="d-grid gap-3  mx-auto mt-4 pt-5">
                        <button class="btn  pb-3 h-100 " style={{ backgroundColor: " #7c62bd", color: "white", borderRadius: "6px", borderColor: "#5c1eff" }} type="button">Recent placements</button>
                        <button class="btn  pb-3 h-100" style={{ backgroundColor: " #62bdb4", color: "white", borderRadius: "6px", borderColor: "#35e9d7" }} type="button">Courses</button>
                        <button class="btn  pb-3 h-100" style={{ backgroundColor: "  #5ead5e", color: "white", borderRadius: "6px", borderColor: "#32d732" }} type="button">Register Now!</button>
                        <button class="btn  pb-3 h-100" style={{ backgroundColor: "  #5ead5e", color: "white", borderRadius: "6px", borderColor: "#32d732" }} type="button"><TbBrandSublimeText />Chat on Whatsapp</button>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="ul-container container">
                    <div className="card-group">
                        <div className="card bg-light">
                            <img src={ul1} className="card-img-top ulimg" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Training</h4>
                                <p classn="card-text">You are trained under Suffix E Solutions working professionals, on-the-job training model.</p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <img src={ul2} className="card-img-top  ulimg" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Internship</h4>
                                <p className="card-text">After course completion, you will be proceeded to live projects with a 6 months experience certificate.</p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <img src={ul3} className="card-img-top  ulimg" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Grooming</h4>
                                <p className="card-text">CV Preparation, Interview Preparation, and Personality Development.</p>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <img src={ul4} className="card-img-top  ulimg" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Placement</h4>
                                <p className="card-text">Gives 100% FREE placement support to all our fellow techies through SCOPE INDIA's Placement Cell.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footertop-container">
                <div className=" aboutlast container">
                    <div className="adiv2 col-lg-4">
                        <h4 className="toptext1">1000+</h4>
                        <h5 className="btmtext1">STUDENTS ARE<br />TRAINED EVERY YEAR</h5>
                    </div>
                    <div className="adiv3 col-lg-4">
                        <h4 className="toptext1">30+</h4>
                        <h5 className="btmtext1">COMPUTER COURSES</h5>
                    </div>
                    <div className="adiv2 col-lg-4">
                        <h4 className="toptext1">95%</h4>
                        <h5 className="btmtext1">STUDENTS ARE GETTING<br />PLACED EVERY YEAR</h5>
                    </div>
                </div>
            </div>
            <div className="section-container">
                <div className="section3 ">
                    <img className="d-block mx-auto mt-5 pt-5 img6" src={contactscopelogo} />
                    <img className="d-block mx-auto mt-4 fotimg2" src={isologocontact} />
                    <span className="d-block text-center text-light span2 mt-2">All Rights Reserved <NavLink className="link3" to="https://www.suffixesolutions.com/"> Suffix E Solutions </NavLink>© 2007-2023</span>
                    <div className="last">
                        <NavLink className="link2 " to="tel:+919745936073">9745936073 (TVM)</NavLink>
                        <NavLink className="link2" to="tel:+917592939481">7592939481 (EKM)</NavLink>
                        <NavLink className="link2" to="tel:+918075536185">8075536185 (NGL)</NavLink>
                        <NavLink className="link2" to="mailto:info@scopeindia.org">info@scopeindia.org</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
