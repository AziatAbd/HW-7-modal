import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

const MovieForm = (props) => {
  const titleInputRef = useRef();
  const urlInputRef = useRef();
  const ratingInputRef = useRef();

  const addMovieHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;

    props.onAddMovie(enteredTitle, enteredRating, enteredUrl);
    props.onConfirm();
  };

  return (
    <ModalForm onSubmit={addMovieHandler} onClick={(e) => e.stopPropagation()}>
      <ModalLabel htmlFor="title">Movie title</ModalLabel>
      <ModalInput ref={titleInputRef} type="text" id="title" />

      <ModalLabel htmlFor="img">Image Url</ModalLabel>
      <ModalInput ref={urlInputRef} type="url" id="img" />

      <ModalLabel htmlFor="rating">Your Rating</ModalLabel>
      <ModalInput
        ref={ratingInputRef}
        max={5}
        min={1}
        type="number"
        id="rating"
      />

      <ButtonCont>
        <Button color={"#00329d"} onClick={props.onConfirm}>
          Cancel
        </Button>
        <Button type="submit" bgcolor={"#00329d"} color={"#fff"}>
          Add
        </Button>
      </ButtonCont>
    </ModalForm>
  );
};

export default MovieForm;

const ModalForm = styled.form`
  display: grid;
  background-color: #ffff;
  padding: 30px;
  position: absolute;
  border-radius: 5px;
  gap: 10px;
`;

const ModalLabel = styled.label`
  font-weight: 700;
`;

const ModalInput = styled.input`
  height: 25px;
  width: 500px;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;
