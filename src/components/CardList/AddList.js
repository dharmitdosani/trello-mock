import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import { AddListButton } from "./CardList.style";

const AddList = () => {
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (value) => {
    console.log(value);
    setShowInput(false);
  };

  const handleCancel = () => setShowInput(false);
  return (
    <>
      <AddListButton onClick={() => setShowInput(true)}>
        <span>&#43; Add another list</span>
        {showInput && (
          <InputBox
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            addComponent="list"
          />
        )}
      </AddListButton>
    </>
  );
};

export default AddList;
