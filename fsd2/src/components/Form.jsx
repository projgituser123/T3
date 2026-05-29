function Form(){
    function handleEvent(e){
        e.preventDefault()
        alert("Form is submitted")
    }
    return(
        <form onSubmit={handleEvent}>
            Username :<input type="text" name="username"/>
            Password  <input type="password" name="paswword"/><br></br>
            <input type="submit"/>
        </form>
    )
}
export default Form