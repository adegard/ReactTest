import react from "react"

function App(){

        function afterClick(e){
           console.log(e.target.value)
        }


     return  <>
                <p>some text</p>
                <input type="text" onChange={afterClick} />
            </>
}

export default App
