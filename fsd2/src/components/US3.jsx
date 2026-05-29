import { useState } from "react";

function us3() {
    const [pic, setPic] = useState("pedri.jpg");

    function handleClick() {
        setPic(prev => (prev === "pedri.jpg" ? "pedri2.jpg" : "pedri.jpg"));
    }

    return (
        <div>
            <img src={pic} height="200px" width="200px" alt="Pedri" />
            <br />
            <button onClick={handleClick}>Change image</button>
            <hr></hr>
        </div>
    );
}

export default us3;
