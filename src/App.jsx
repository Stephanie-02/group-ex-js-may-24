import React from "react";
import "./App.css";

function CardComponent(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h5>{props.subtitle}</h5>
      <p>{props.content}</p>
      <br />
      <button>{props.buttonText}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
      ></CardComponent>
    </div>
  );
}

export default App;
