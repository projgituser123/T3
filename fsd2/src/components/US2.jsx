import {useState} from "react"

function us2(){
    const [sty, setSty] = useState("yellow")

    function handleClick(){
        /*setSty("cyan")*/
        setSty(prev => (prev == "yellow" ? "cyan" : "yellow"))
    }
        return(
            <div>
                <h3 style={{backgroundColor : sty}}>Observe change of color...</h3>
                <br></br>
                <button onClick={handleClick}>Click to change color</button>
                <hr></hr>
            </div>
        )
    }

export default us2