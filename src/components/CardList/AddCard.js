import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import { AddCardButton } from "./CardList.style";

const AddCard = () => {
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (value) => {
    console.log(value);
    setShowInput(false);
  };

  const handleCancel = () => setShowInput(false);
  return (
    <>
      <AddCardButton onClick={() => setShowInput(true)}>
        <span>&#43; Add a card</span>
        {showInput && (
          <InputBox
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            addComponent="card"
          />
        )}
      </AddCardButton>
    </>
  );
};

export default AddCard;
