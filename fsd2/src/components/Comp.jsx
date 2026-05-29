function Comp(){
    const college_name = "LJIET"
    const myStyle = {color : "indigo", backgroundColor : "cyan", fontFamily: "Helvita"}
   return(
  //  <h1>Hello from components...</h1>
    <div>
        <h1>Hello from react js</h1>
        <br></br>
        <br></br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nihil porro nemo dolores consequatur fugiat quaerat. Quis, eum? Blanditiis repudiandae temporibus deleniti sit suscipit, eos consequuntur ut vel odit esse.</p>
        <img src= "pedri.jpg"/>
        <h1 style={{color : "green", fontFamily:"math", fontSize:"30px", backgroundColor  :"yellow"}}>Learning reactjs from {college_name}</h1>

        <h1 style={myStyle}>Pookie pedri</h1>
    </div>
   )
}
export default Comp