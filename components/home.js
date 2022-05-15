import react from "react"
import reactDom from "react-dom";
import App from "../App"
import {BrowserRouter} from "react-router-dom";

let mytext=""
const app = document.getElementById("app")

function Home(){

    // function afterChange(e){
    //     console.log(e.target.value)
    // }  

   

    function changetext(){
            mytext ="hello!"
            reactDom.render( <BrowserRouter> <App /> </BrowserRouter>, app)
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
