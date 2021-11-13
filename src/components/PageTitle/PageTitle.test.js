import React from "react";
import ReactDOM from "react-dom";
import PageTitle from "./PageTitle";
import { TITLE_MODES } from "./PageTitle.config";

it("PageTitle Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PageTitle mode={TITLE_MODES.DARK}>title</PageTitle>, div);
});
