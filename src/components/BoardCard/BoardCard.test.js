import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { getNewCard } from "../../redux/features/cards/cards.util";
import BoardCard from "./BoardCard";

const card = getNewCard("title");

it("BoardCard Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <BoardCard {...card} />
    </BrowserRouter>,
    div
  );
});
