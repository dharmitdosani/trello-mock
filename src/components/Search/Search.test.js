import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

it("Search Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search />, div);
});
