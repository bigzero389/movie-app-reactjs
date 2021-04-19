import React from "react";

function Food({favorite}) {
  return <h1>I like {favorite} </h1>
}

function App() {
  return (
    <div>Hello!!! 
      <Food favorite="kimchi"></Food>
      <Food favorite="rice"></Food>
    </div>
  );
}

export default App;
