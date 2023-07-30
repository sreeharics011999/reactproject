import { NavLink } from "react-router-dom"
import contactscopelogo from "../images/contactscopelogo.png"
import isologocontact from "../images/isologocontact.png"
import "./footer.css"

let Footer = () => {
    return (
        <div>
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
    )
}
export default Footer