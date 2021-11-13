import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../redux/features/cards/cards.slice";
import { getNewCard } from "../../redux/features/cards/cards.util";
import { addCardToList } from "../../redux/features/lists/lists.slice";
import InputBox from "../InputBox/InputBox";
import { AddCardButton } from "./CardList.style";

const AddCard = ({ listId }) => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (text) => {
    const newCard = getNewCard(text);
    dispatch(createCard(newCard));
    dispatch(addCardToList({ listId, cardId: newCard.id }));
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
