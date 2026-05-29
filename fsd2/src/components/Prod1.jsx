import Prod2 from "./Prod2.jsx"
function prod1(){
    const student_details = {"Name" : "vitinha", "uni_name" : "psg", "position" : "cm, cam and dm"}
    return(
        <Prod2 data={student_details}/>
    )
}
export default prod1