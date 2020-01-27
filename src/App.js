import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1> Adopt me</h1>
      <Pet name="Luna" animal="dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="bird" breed="Cockatiel"></Pet>
      <Pet name="Pepper" animal="cat" breed="Mix"></Pet>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
