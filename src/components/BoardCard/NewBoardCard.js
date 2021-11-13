import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBoard } from "../../redux/features/boards/boards.slice";
import { getNewBoard } from "../../redux/features/boards/boards.util";
import InputBox from "../InputBox/InputBox";
import { EmptyBoardCard } from "./BoardCard.style";

const NewBoardCard = () => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (title) => {
    dispatch(createBoard(getNewBoard(title)));
    setShowInput(false);
  };

  const handleCancel = () => setShowInput(false);

  return (
    <EmptyBoardCard onClick={() => setShowInput(true)}>
      {showInput && (
        <InputBox
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          addComponent="board"
        />
      )}
      Create New Board
    </EmptyBoardCard>
  );
};

export default NewBoardCard;
