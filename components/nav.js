import react from "react"
import { Link } from "react-router-dom";

function Nav(){

     return  <>
               <nav >
                    <ul>
                        <li>
                            <Link to="/">Home</Link> 
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </>
}
                    // <Link to="/">{App}</Link> 
                    // <Link to="/about">{About}</Link>
                    // <Link to="*">{Errormsg}</Link>
export default Nav
