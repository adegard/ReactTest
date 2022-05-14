import react from "react"

function App(){

        function afterClick(){
                alert("Hi")
        }


     return  <>
                <p>some text</p>
                <button onClick={afterClick}>Click me</button>
            </>
}

export default App
