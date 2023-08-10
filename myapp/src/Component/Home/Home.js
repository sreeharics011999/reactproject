import Scope from "../images/Scope.png"
import { NavLink } from "react-router-dom"
import Subbg from "../images/Subbg.png"
import star from "../images/star.png"
import ul1 from "../images/ul1.png"
import ul2 from "../images/ul2.png"
import ul3 from "../images/ul3.png"
import ul4 from "../images/ul4.png"
import { TbBrandSublimeText } from "react-icons/tb";
import "./home.css"
import Carosel from "../Carosel/Carosel"
import Footer from "../Footer/Footer"
import Form1 from "../Form/Form1"
import Footertop1 from "../Footertop/Footertop1"
let Home = () => {
    return (
        <div className="backhome">
            <div clasName="container">
                <div className="imagescope"><img src={Scope} alt="scope" className="scopeimg" /></div>
            </div>
            <Carosel />
            <div className="imgpng"><img src={Subbg} /></div>
            <Form1 />
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
                <div className="container ul-container">
                    <div className="row">
                        
                            <div className="col-lg-3 bg-light pe-5 ">
                            <NavLink className="Navcard">
                                <img src={ul1} className=" ulimg" alt="..." />
                                <h4 className=" tittleh4">Training</h4>
                                <p className=" discription-para2">You are trained under Suffix E Solutions working professionals,on-the-job training model.</p>
                                </NavLink>
                            </div>
                        
                        
                            <div className="col-lg-3 bg-light pe-5 ">
                            <NavLink className="Navcard">
                                <img src={ul2} className="ulimg" alt="..." />
                                <h4 className="tittleh4">Internship</h4>
                                <p className=" discription-para2">After course completion, you will be proceeded to live projects with a 6 months experience certificate.</p>
                                </NavLink>
                            </div>
                        
                        
                            <div className="col-lg-3 bg-light pe-5 ">
                            <NavLink className="Navcard">
                                <img src={ul3} className="ulimg" alt="..." />
                                <h4 className="tittleh4">Grooming</h4>
                                <p className=" discription-para2">CV Preparation, Interview Preparation, and Personality Development.</p>
                                </NavLink>
                            </div>
                        
                        
                            <div className="col-lg-3 bg-light pe-5 ">
                            <NavLink className="Navcard">
                                <img src={ul4} className="ulimg" alt="..." />
                                <h4 className=" tittleh4">Placement</h4>
                                <p className=" discription-para2">Gives 100% FREE placement support to all our fellow techies through SCOPE INDIA's Placement Cell.</p>
                                </NavLink>
                            </div>
                        
                    </div>
                </div>
            </div>
            <Footertop1 />
            <Footer />
        </div>
    )
}
export default Home
