function product_list(props){
    return(
        <div>
            {props.info.map((p)=>{
                return(
                    <div>
                        <img src={p.pic} height="200px" width="200px"/>
                        <h4>Product name = {p.name}</h4>
                        <h4>Product Price value ($) = {p.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default product_list