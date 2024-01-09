import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardShapes from "./CardShapes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="wrapperBody">
      <h1>Cards Stack</h1>
    </div>
    <CardShapes />
  </React.StrictMode>
);
