import Scope from "./images/Scope.png"
import Scopebackground from "./images/Scopebackground.jpg"
import Subbg from "./images/Subbg.png"
import styles from "./home.module.css"
import Carosal from "./images/Carosal.jpg"
let Home=()=>{
    return(
        <div>
            <div style={{backgroundColor:"#071e60",height:"1vh"}}></div>
            <img src={Scopebackground} alt="scopebackground" className={styles.homeimg1}/>
            <img src={Scope} alt="scope" className="position-absolute top-50 start-50 w-auto h-auto translate-middle"/>
            <img src={Subbg}/>
            

        </div>
    )
    
}
export default Home
