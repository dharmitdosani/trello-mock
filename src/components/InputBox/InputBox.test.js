import React from "react";
import ReactDOM from "react-dom";
import InputBox from "./InputBox";

it("InputBox Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputBox />, div);
});
