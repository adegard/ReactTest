import react from "react"
import Nav from "./components/nav"
import {Routes,  Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Errormsg from "./components/error404";

import "./css/styles.css"

function App(){

     return  <>
            <section class="main-container">
                <h1>Welcome to my website!</h1>
                <small>(Made with react)</small>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Errormsg />} />
                </Routes>
            </section>    
            </>
}

export default App
