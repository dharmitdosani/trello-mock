import { useState } from "react";
import { useDispatch } from "react-redux";
import { addListToBoard } from "../../redux/features/boards/boards.slice";
import { createList } from "../../redux/features/lists/lists.slice";
import { getNewList } from "../../redux/features/lists/lists.util";
import InputBox from "../InputBox/InputBox";
import { AddListButton } from "./CardList.style";

const AddList = ({ boardId }) => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (title) => {
    const newList = getNewList(title);
    dispatch(createList(newList));
    dispatch(addListToBoard({ boardId, listId: newList.id }));
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
