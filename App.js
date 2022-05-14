import react from "react"

function App(){

        function afterClick(e){
           console.log(e.target.value)
        }


     return  <>
                <p>some text</p>
                <select onChange={afterClick}>
                        <option>Apple</option>  
                        <option>Banana</option>
                        <option>pear</option>
                </select>
            </>
}

export default App
