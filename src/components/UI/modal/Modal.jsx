import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import MovieForm from "../../movieForm/MovieForm";

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={props.onConfirm}>
          <MovieForm
            onAddMovie={props.onAddMovie}
            onConfirm={props.onConfirm}
          />
        </Backdrop>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
