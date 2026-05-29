/*Create a React component that randomly displays one image from a set of predefined images and changes the image when a button is clicked*/
import { useState } from "react";

function pedri_random_img(){
    const img = ["pedri.jpg", "pedri2.jpg", "pedri3.jpg", "pedri4.jpg", "pedri5.jpg"]
    const random_index =  Math.floor(Math.random() * img.length)

    const [pic, setPic] = useState(img[random_index])
    function handleClick(){
        const random_index =  Math.floor(Math.random() * img.length)
        setPic(img[random_index])
    }

    return(
        <div>
            <img src={pic} height="200px" width="200px" alt="random display of img"></img>
            <br></br>
            <button onClick={handleClick}>Change the image</button>
            <hr></hr>
        </div>
    )
}
export default pedri_random_img