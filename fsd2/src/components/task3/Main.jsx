import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./Home.jsx"
import NoPage from "./NoPage.jsx"
import Product from "./Product.jsx"

function main(){
    let arr = [{pic : "./public/favicon.svg", name : "icon_product", price : 500},
                {pic : "./public/pedri.jpg", name : "pedri", price : 30303030},
                {pic : "./public/pedri2.jpg", name : "predi2", price : 505050505}]
    return(
        <Router>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/product">Product</Link></li>
            </ul>
            <Routes>
                <Route path = "/" element={<Home/>}></Route>
                <Route path = "/product" element={<Product info ={arr}/>}></Route>
                <Route path = "*" element={<NoPage/>}></Route>
            </Routes>
        </Router>
    )
}
export default main