{/* 
    Task1:

Create react app to pass product image, name and price as properties from one component to another component. Add an array of objects with pic, name and price properties of 2 products. Display Image name and price of the products in browser using map method. (props+ map)

*/}

function task_sol(props){
    return(
        <> <hr></hr>
            {props.info.map((pr)=>{
                return(<div>
                    <img src={pr.pic} alt="no image"/>
                    <h2>{pr.name}</h2>
                    <h2>{pr.price}</h2>
                </div>)
            })}
            <hr></hr>
        </>
    )
}
export default task_sol
