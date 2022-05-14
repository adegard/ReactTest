import react from "react"

function Header({text, cl, parag}){

     return  <>
               <h1 id="title" className={cl}>{ text }</h1>
                <small>blabla</small>
                <p> {parag} </p>
                <input type="text"/>
            </>
        }

export default Header
