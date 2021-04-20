import React from "react";
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name : "kimchi",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg",
    rating: 1
  },
  {
    id: 2,
    name: "kimbap",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2018/09/DSC_0427-e1613706244682.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "bulgogi",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2010/05/DSC_0893-e1426734907897.jpg",
    rating: 3.5
  },
  {
    id: 4,
    name: "bibimbap",
    image : "https://www.koreanbapsang.com/wp-content/uploads/2010/02/DSC_0417-e1421376856367.jpg",
    rating: 4.2
  }
];

function Food({name, picture, rating}) {
  return (
   <div>
     <h2>I like {name} </h2>
     <h4>{rating} / 5 </h4>
     <img src= {picture} width="50" height="50" alt={name}/>
   </div> 
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {
        foodILike.map(dish => (
          <Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image}
            rating={dish.rating}
          />
        ))
      }
    </div>
  );
}

export default App;
