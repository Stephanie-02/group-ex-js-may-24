import React from "react";
import "./App.css";
import CardComponent from "/.CardComponent.jsx";

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
            <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
      ></CardComponent>
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
