import { NavLink } from "react-router-dom"
import styles from "./contact.module.css"
import { BsGeoAltFill, BsMap, BsFillTelephoneFill, BsLink45Deg } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import star from "../images/star.png"
import "./contact.css"
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
let Contact = () => {
  return (
    <div>
      <div className={styles.bg}>
        <div className="container">
        <h1>SCOPE INDIA is open 365 days a year</h1>
        <h2 className={styles.dis}>Let's discuss your career, 24/7 free Consultation</h2>
        <img className={styles.star} src={star} />
        <p className={styles.para1}>Google 4.9 * Rated Institute</p>
        <Form />
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
      </div>
      <Footer />
    </div>
  )
}
export default Contact