function map1(){
    const arr=[1,2,3,4,5]
    return(
       <> <hr></hr>
       {
        arr.map((val)=>{
            return <h2>Array element : {val}</h2>
            })
        }
       </>
    )
}
export default map1