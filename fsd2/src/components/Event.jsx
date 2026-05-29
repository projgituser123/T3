function event(){
    const myStle = {color : "red", 
                    backgroundColor : "yellow",
                    fontFamily : "italic",
                    fontSize : "20px",
                    fontweight : "bold",
                    padding : "20px 25px",
                    margin : "50px"
    }
    function handleClick(){
        alert("clicked!!1")
    }
    function handle_doubleclick(){
        alert("Double click!!!")
    }
    return(
        <div>
        <button style={myStle} onClick={handleClick}>Click!!</button>
        <button style={myStle} onDoubleClick={handle_doubleclick}>Doubleclick!!</button>
        </div>
    )
}
export default event 