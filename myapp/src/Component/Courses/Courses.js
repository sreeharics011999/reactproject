import "./courses.css"
import { NavLink } from "react-router-dom"
import star from "../images/star.png"
import contact2bg from "../images/contact2bg.png"
import coursesimg from "../images/coursesimg.jpg"
import Form1 from "../Form/Form1"
import Footertop from "../Footertop/Footertop"
import Footer from "../Footer/Footer"
let Courses = () => {
    return (
        <div>
            <div className="coursesbg">
                <div className="container">
                    <h1>Our training Programs</h1>
                    <h6>All Trainers are working professionals, Software Engineers, Networking Engineers, and Software Test Engineers of Suffix E Solutions</h6>
                   <NavLink><img className="courseimg" src={coursesimg} /></NavLink> 
                    <img className="star" src={star} />
                    <p className="text-center text-light">Google 4.9 * Rated Institute</p>
                    <div className="fullcourse mb-5">
                        <h3>Software Programe courses</h3>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Java Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Python Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">PHP Full Stack Internship</div></NavLink> 
                        </div>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">.Net Core Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">MERN Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">MEAN Full Stack Internship</div></NavLink> 
                        </div>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Android/iOS Mobile App Course in Google Flutter</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Android/iOS Mobile App Course in IONIC</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Website Designing Course</div></NavLink> 
                        </div>
                    </div>
                    <div className="fullcourse mb-5">
                        <h3>Software Testing courses</h3>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Java Full Stack Internship</div></NavLink> 
                        </div>
                    </div>
                    <div className="fullcourse mb-5">
                        <h3>Networking , Server & Cloud</h3>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Java Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Python Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">PHP Full Stack Internship</div></NavLink> 
                        </div>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">.Net Core Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">MERN Full Stack Internship</div></NavLink> 
                        </div>
                    </div>
                    <div className="fullcourse mb-5">
                        <h3>Other courses</h3>
                        <div className="row">
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Java Full Stack Internship</div></NavLink> 
                        <NavLink className="nav-course"><div className="col-lg-2 courses-col">Python Full Stack Internship</div></NavLink> 
                        </div>
                    </div>
                 
                </div>
                <Form1/>
                  <Footertop/>
                  <div className="section2">
                <img className="w-100 " src={contact2bg} />
            </div>
            <Footer/>
            </div>
        </div>
    )
}
export default Courses