import { Link } from "react-router-dom"

import "../styles/NavBar.css"
import montre from "../assets/montre.png"


function NavBar () {

    return(
        <div className="container1">
            <Link to="/">
                <img 
                    className="montre"                    
                    type="button"
                    src={montre}
                    alt="montre" 
                />
            </Link>
                <div className="nav">
            <Link to="/about">
                <button className="about" type="button">About</button>
            </Link>
                <button type="button">Sign in</button>
                <button type="button">Contact</button> 
                <div className="music">              
                </div> 
            </div>
        </div>
    )
}

export default NavBar;