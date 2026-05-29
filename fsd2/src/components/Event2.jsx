
function event2(){
    function change(event){
        console.log(event.target.value)
    }
    return(
        <div>
            <hr></hr>
            on change event = <input type="text" onChange={change}></input> 
            // check the console for the output...
        </div>
    )
}
export default event2