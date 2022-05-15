import react, {useState} from "react"
import reactDom from "react-dom";
import App from "../App"
import {BrowserRouter} from "react-router-dom";

function Home(){

    const [mytext, setMytext]= useState("Initial text")

    function changetext(){
          setMytext("Hello !") 
    }

     return  <>
                <h1>Home</h1>
                <section>
                    {/* <p>Please enter a value:</p> */}

                     {/* <input type="text" onChange={afterChange} /> */}
                    <button onClick={changetext}>Click on it</button>
                    <p>{mytext}</p> 
                </section>
               
            </>
}

export default Home
