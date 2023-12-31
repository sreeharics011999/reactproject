import "./about.css"
import star from "../images/star.png"
import contact2bg from "../images/contact2bg.png"
import Footer from "../Footer/Footer"
import Footertop from "../Footertop/Footertop"
let About = () => {
    return (
        <div>
            <div className="bg">
                <div className="container">
                    <h1 >SCOPE INDIA, your career partner!</h1>
                    <h2 className="dis">One of the best Training Destination for Software, Networking and Cloud Computing courses in India</h2>
                    <p className="para1">Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS
                        oriented on-the-job TRAINING model. SCOPE INDIA provides courses for <strong>Software Programming</strong>
                        in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net,
                        <strong>Software Testing</strong> Manual and Automation,<strong> Cloud </strong> in AWS, Azure, <strong>
                            Server Administration</strong> in MCSE, and RHCE, <strong>CCNA</strong>,<strong> Mobile App Development</strong>
                        in Flutter, and, <strong>Digital Marketing</strong>. Training with 100% Trusted Job Based Internship Model.
                        SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you,
                        you won't regret it after training from SCOPE INDIA!
                    </p>
                    <p className="para1">This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p>
                    <img className="star" src={star} />
                    <p className="text-center text-light">Google 4.9 * Rated Institute</p>
                    <div class="d-grid gap-3  mx-auto mt-4 pt-5 btnabout">
                        <button class="btn  pb-3 h-100 " style={{ backgroundColor: " #7c62bd", color: "white", borderRadius: "6px", borderColor: "#5c1eff" }} type="button">Recent placements</button>
                        <button class="btn  pb-3 h-100" style={{ backgroundColor: " #62bdb4", color: "white", borderRadius: "6px", borderColor: "#35e9d7" }} type="button">Courses</button>
                        <button class="btn  pb-3 h-100" style={{ backgroundColor: "  #5ead5e", color: "white", borderRadius: "6px", borderColor: "#32d732" }} type="button">Register Now!</button>
                    </div>
                    <Footertop/>
                </div>
            </div>
            <div className="section2">
                <img className="w-100" src={contact2bg} />
            </div>
            <Footer/>
        </div>
    )
}
export default About