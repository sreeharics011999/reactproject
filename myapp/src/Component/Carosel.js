import {NavLink} from "react-router-dom"
import carosel1 from "./images/carosel1.jpg"
import carosel2 from "./images/carosel2.jpg"
import carosel3 from "./images/carosel3.jpg"
import carosel4 from "./images/carosel4.jpg"
import carosel5 from "./images/carosel5.jpg"
import carosel6 from "./images/carosel6.jpg"
import carosel7 from "./images/carosel7.jpg"
import carosel8 from "./images/carosel8.jpg"
import carosel9 from "./images/carosel9.jpg"
import carosel10 from "./images/carosel10.jpg"
import carosel11 from "./images/carosel11.jpg"
import carosel12 from "./images/carosel12.jpg"
import carosel13 from "./images/carosel13.jpg"
import "./carosel.css"
let Carosel=()=>{
    return(
        <div className="caroselbg">
            <div className="caroselimg">
                <NavLink to=""><img src={carosel1}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink className="ps-5" to=""><img src={carosel2}/></NavLink>
            </div>
            <div className="carosel-item">
                <NavLink to=""><img src={carosel3}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel4}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel5}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel6}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel7}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel8}/></NavLink>
            </div>
            <div>
                <NavLink to=""><img src={carosel9}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel10}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel11}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel12}/></NavLink>
            </div>
            <div className="caroselimg">
                <NavLink to=""><img src={carosel13}/></NavLink>
            </div>
        </div>
    )
}
export default Carosel