import React from "react";

function Food({name, picture}) {
  return (
   <div>
     <h2>I like {name} </h2>
     <img src= {picture} />
   </div> 
  );
}

const foodILike = [
  {
    name : "kimchi",
    image : "'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/220px-Various_kimchi.jp"
  },
  {
    name: "kimbap",
    image : "https://en.wikipedia.org/wiki/Gimbap#/media/File:Vegetable_gimbap.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(m => <Food name={m.name} picture={m.image} />)}
    </div>
  );
}

export default App;
