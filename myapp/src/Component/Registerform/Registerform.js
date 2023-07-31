import "./Registerform.css"
import { NavLink } from "react-router-dom"
import { BsGeoAltFill, BsMap, BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import contact2bg from "../images/contact2bg.png"
import Footer from "../Footer/Footer";
let Registerform = () => {
    return (
        <div>
            <div className="regbg">
                <div className="container">
                    <h1 className="reg-h1">Registration</h1>
                    <h2 className="reg-h2 text-light">It's just a matter of 60 days to an IT job!</h2>
                    <div className="row bg-light">
                        <div className="col-lg-6 regcol">
                            <form>
                                <label className="labelreg">Full Name (required)</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Date of Birth (required)</label>
                                <input type="date" class="form-control" id="exampleInputPassword1" placeholder="mm/dd/yyyy" />
                                <label className="labelreg">Gender (required)</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">Other</label>
                                </div>
                                <label className="labelreg">Educational Qualification</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Choose your course (required)</label>
                                <select>
                                    <option></option>
                                </select>
                                <label className="labelreg">Mobile Number (required)</label>
                                <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Email (required)</label>
                                <input type="email" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Training Mode (required)</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Live Online</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Classroom</label>
                                </div>
                                <label className="labelreg">SCOPE INDIA Location (required)</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Trivandrum</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Kochi</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">Nagercoil</label>
                                </div><div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">Online</label>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 regcol ">
                            <form>
                                <label className="labelreg">Guardian's Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Guardian's Occupation</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                <label className="labelreg">Prefered Training Timings(required)</label>
                                <div className="form-check form-check-inline regcheck">
                                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1">Between 7am - 10am</label>
                                </div>
                                <div className="form-check form-check-inline  regcheck">
                                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label" for="inlineRadio2">Between 9am - 1pm</label>
                                </div>
                                <div className="form-check form-check-inline  regcheck">
                                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">Between 1pm - 6pm</label>
                                </div>
                                <div className="form-check form-check-inline regcheck">
                                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                    <label className="form-check-label" for="inlineRadio3">Between 6pm - 10pm</label>
                                    <label className="labelreg">Adress</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                    <label className="labelreg">Country</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                    <label className="labelreg">State</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                    <label className="labelreg">City</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                    <label className="labelreg">PIN/Zip Code</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="" />
                                    <button type="submit" className="btn  btn-lg btn-block regbtn">Complete Registration</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="locbg">
                <div className="container">
                    <h2 className="location">Location</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 text-light">
                            <div className="card  mx-auto" style={{ width: "18rem", backgroundColor: "#041a6b", border: "1px solid white" }}>
                                <div className="card-body">
                                    <h3 className="card-title">Trivandrum, Kerala</h3>
                                    <p className="card-text text-light para2"><span className="list"><BsGeoAltFill /></span>TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001</p>
                                    <NavLink to="tel:9745936073" className="card-link"><span className="list"><BsFillTelephoneFill /></span>9745936073</NavLink>
                                    <NavLink to="mailto:info@scopeindia.org" className="card-link"><span className="list"><GrMail /></span>info@scopeindia.org</NavLink>
                                    <NavLink to="https://scopeindia.org" className="card-link"><span className="list"><BsLink45Deg /></span>wwww.scopeindia.org</NavLink>
                                    <NavLink to="https://g.page/r/CXbW6SZGeJPfEAE" className="card-link"><span className="list"><BsMap /></span>Location Route Map</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="card text-light mx-auto" style={{ width: "18rem", backgroundColor: "#041a6b", border: "1px solid white" }}>
                                <div className="card-body">
                                    <h3 className="card-title text-light">Kochi,Kerala</h3>
                                    <p className="card-text text-light para2"><span className="list"><BsGeoAltFill /></span>SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</p>
                                    <NavLink to="tel:7592939481" className="card-link text-light d-block"><span className="list"><BsFillTelephoneFill /></span>7592939481</NavLink>
                                    <NavLink to="mailto:kochi@scopeindia.org" className="card-link text-light d-block"><span className="list"><GrMail /></span>kochi@scopeindia.org</NavLink>
                                    <NavLink to="https://scopeindia.org/" className="card-link text-light d-block"><span className="list"><BsLink45Deg /></span>wwww.scopeindia.org</NavLink>
                                    <NavLink to="https://g.page/r/CWv07KhFfP7dEAE" className="card-link text-light d-block"><span className="list"><BsMap /></span>Location Route Map</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="card text-light mx-auto" style={{ width: "18rem", backgroundColor: "#041a6b", border: "1px solid white" }}>
                                <div className="card-body">
                                    <h3 className="card-title">Nagercoil, Tamil Nadu</h3>
                                    <p className="card-text text-light para2"><span className="list"><BsGeoAltFill /></span>SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</p>
                                    <NavLink to="tel:+918075536185" className="card-link"><span className="list"><BsFillTelephoneFill /></span>8075536185</NavLink>
                                    <NavLink to="mailto:ngl@scopeindia.org" className="card-link"><span className="list"><GrMail /></span>ngl@scopeindia.org</NavLink>
                                    <NavLink to="https://scopeindia.org/" className="card-link"><span className="list"><BsLink45Deg /></span>www.scopeindia.org </NavLink>
                                    <NavLink to="https://goo.gl/maps/fVjnoN7GzcU1zson7" className="card-link"><span className="list"><BsMap /></span>Location Route Map </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <img className="w-100" src={contact2bg} />
            </div>
            <Footer />
        </div>
    )
}
export default Registerform