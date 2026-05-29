import Task1 from "./Task1.jsx"
function p(){
    const prod = [{
      pic : "pedri.jpg",
      name : "pedri_1",
      price : 5000
    },
  {
    pic : "pedri2.jpg",
    name : "pedri_2",
    price : 90000
  }]
  return(<Task1 info = {prod}/>)
  
  }

  export default p