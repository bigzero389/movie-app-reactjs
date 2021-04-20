import React from "react";


const foodILike = [
  {
    id: 1,
    name : "kimchi",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg"
  },
  {
    id: 2,
    name: "kimbap",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2018/09/DSC_0427-e1613706244682.jpg"
  },
  {
    id: 3,
    name: "bulgogi",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2010/05/DSC_0893-e1426734907897.jpg"
  },
  {
    id: 4,
    name: "bibimbap",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2010/02/DSC_0417-e1421376856367.jpg"
  }
];

function Food({name, picture}) {
  return (
   <div>
     <h2>I like {name} </h2>
     <img src= {picture} width="50" height="50" alt={name}/>
   </div> 
  );
}

function App() {
  return (
    <div>
      {
        foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))
      }
    </div>
  );
}

export default App;
