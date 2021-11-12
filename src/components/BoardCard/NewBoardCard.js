import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import { EmptyBoardCard } from "./BoardCard.style";

const NewBoardCard = () => {
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (value) => {
    console.log(value);
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
