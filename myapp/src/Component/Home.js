import Scope from "./images/Scope.png"
import Subbg from "./images/Subbg.png"
import "./home.css"
import Carosel from "./Carosel"
let Home=()=>{
    return(
        <div>
            <div clasName="bg">
                <div clasName="container">
                <img src={Scope} alt="scope" className="scopeimg"/>
                <Carosel/>
                <img src={Subbg}/>
                </div>

            </div>
            

        </div>
    )
    
}
export default Home
