import React from "react";
import ReactDOM from "react-dom";
import { getNewList } from "../../redux/features/lists/lists.util";
import CardList from "./CardList";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const list = getNewList("title");

it("CardList Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <CardList {...list} />
    </Provider>,
    div
  );
});
