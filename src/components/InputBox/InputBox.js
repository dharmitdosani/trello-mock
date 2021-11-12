import { useState } from "react";
import {
  ActionBar,
  AddButton,
  CancelButton,
  InputForm,
  StyledInputBox,
} from "./InputBox.style";

const InputBox = ({ handleSubmit, handleCancel, addComponent }) => {
  const [value, setValue] = useState("");

  return (
    <InputForm onClick={(e) => e.stopPropagation()}>
      <StyledInputBox
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <ActionBar>
        <AddButton
          disabled={!value}
          onClick={(e) => {
            setValue("");
            handleSubmit(value);
          }}
        >
          Add {addComponent}
        </AddButton>
        <CancelButton onClick={handleCancel}>Cancel</CancelButton>
      </ActionBar>
    </InputForm>
  );
};

InputBox.defaultProps = {
  handleSubmit: () => {},
  handleCancel: () => {},
  addComponent: "",
};

export default InputBox;
