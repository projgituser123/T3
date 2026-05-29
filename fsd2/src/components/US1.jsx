import { useState } from "react";

function us1(){
    const[count, setCount] = useState(10)
    function handleClick(){
        setCount(count + (1))
    }
    return(<div>
        <hr></hr>
        <h2>{count}</h2>
        <br></br>
        <button onClick={handleClick}>Increase count</button>
        <hr></hr>
    </div>)
}
export default us1