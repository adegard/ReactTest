import react from "react"
import About from "./about"
import Errormsg from "./error404"
import { Link } from "react-router-dom";
import App from "../App";

function Nav(){

     return  <>
                <nav >
                    <Link to="/">{App}</Link> 
                    <Link to="/about">{About}</Link>
                    <Link to="*">{Errormsg}</Link>
                </nav>
            </>
}

export default Nav
